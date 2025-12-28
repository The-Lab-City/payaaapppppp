import { useEffect, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useTransactions } from '@/hooks/useTransactions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Zap, 
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  DollarSign,
  CreditCard,
  Users,
  ArrowUpRight,
  LogOut,
  LayoutDashboard,
  Settings
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
} from 'recharts';
import NotificationsDropdown from '@/components/NotificationsDropdown';
import AccountTypeSwitcher from '@/components/AccountTypeSwitcher';
import { format, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, subDays } from 'date-fns';

export default function Analytics() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { transactions, loading: txLoading } = useTransactions();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  // Compute analytics from real transactions
  const analytics = useMemo(() => {
    if (!transactions.length) {
      return {
        revenueData: [],
        transactionData: [],
        paymentMethodsData: [],
        stats: {
          totalRevenue: 0,
          totalTransactions: 0,
          avgTransaction: 0,
          revenueChange: 0,
          transactionChange: 0,
        },
      };
    }

    // Revenue by month (last 12 months)
    const last12Months = Array.from({ length: 12 }, (_, i) => {
      const date = subMonths(new Date(), 11 - i);
      return {
        month: format(date, 'MMM'),
        start: startOfMonth(date),
        end: endOfMonth(date),
      };
    });

    const revenueData = last12Months.map(({ month, start, end }) => {
      const monthTxs = transactions.filter(tx => {
        const txDate = new Date(tx.created_at);
        return txDate >= start && txDate <= end;
      });
      
      const revenue = monthTxs
        .filter(tx => tx.type === 'received' && tx.status === 'completed')
        .reduce((sum, tx) => sum + Number(tx.amount), 0);
      
      const expenses = monthTxs
        .filter(tx => tx.type === 'sent' && tx.status === 'completed')
        .reduce((sum, tx) => sum + Number(tx.amount), 0);

      return { month, revenue, expenses };
    });

    // Transactions by day (last 7 days)
    const last7Days = eachDayOfInterval({
      start: subDays(new Date(), 6),
      end: new Date(),
    });

    const transactionData = last7Days.map(day => {
      const dayStr = format(day, 'EEE');
      const dayTxs = transactions.filter(tx => {
        const txDate = new Date(tx.created_at);
        return format(txDate, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd');
      });
      
      return {
        day: dayStr,
        transactions: dayTxs.length,
        amount: dayTxs.reduce((sum, tx) => sum + Number(tx.amount), 0),
      };
    });

    // Payment methods breakdown
    const methodCounts: Record<string, number> = {};
    transactions.forEach(tx => {
      const method = tx.payment_method || 'bank_transfer';
      methodCounts[method] = (methodCounts[method] || 0) + 1;
    });

    const methodColors: Record<string, string> = {
      credit_card: 'hsl(var(--primary))',
      debit_card: 'hsl(var(--accent))',
      bank_transfer: '#22c55e',
      digital_wallet: '#eab308',
      crypto: '#ec4899',
    };

    const methodLabels: Record<string, string> = {
      credit_card: 'Credit Card',
      debit_card: 'Debit Card',
      bank_transfer: 'Bank Transfer',
      digital_wallet: 'Digital Wallet',
      crypto: 'Crypto',
    };

    const paymentMethodsData = Object.entries(methodCounts).map(([method, count]) => ({
      name: methodLabels[method] || method,
      value: count,
      color: methodColors[method] || '#888888',
    }));

    // Calculate stats
    const totalRevenue = transactions
      .filter(tx => tx.type === 'received' && tx.status === 'completed')
      .reduce((sum, tx) => sum + Number(tx.amount), 0);
    
    const totalTransactions = transactions.length;
    const avgTransaction = totalTransactions > 0 ? totalRevenue / totalTransactions : 0;

    return {
      revenueData,
      transactionData,
      paymentMethodsData,
      stats: {
        totalRevenue,
        totalTransactions,
        avgTransaction,
        revenueChange: 24.5, // Would need historical data to calculate
        transactionChange: 18.2,
      },
    };
  }, [transactions]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-primary">Loading...</div>
      </div>
    );
  }

  if (!user) return null;

  const stats = [
    {
      title: 'Total Revenue',
      value: `$${analytics.stats.totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
      change: `+${analytics.stats.revenueChange}%`,
      isPositive: true,
      icon: DollarSign,
    },
    {
      title: 'Transactions',
      value: analytics.stats.totalTransactions.toLocaleString(),
      change: `+${analytics.stats.transactionChange}%`,
      isPositive: true,
      icon: CreditCard,
    },
    {
      title: 'Avg. Transaction',
      value: `$${analytics.stats.avgTransaction.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
      change: '+5.2%',
      isPositive: true,
      icon: TrendingUp,
    },
    {
      title: 'Active Users',
      value: '1',
      change: 'You',
      isPositive: true,
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Account Type Switcher */}
      <AccountTypeSwitcher />

      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">PayFlow</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm" className="gap-2">
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Button>
            </Link>
            <NotificationsDropdown />
            <Link to="/settings">
              <Button variant="ghost" size="sm" className="gap-2">
                <Settings className="w-4 h-4" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="gap-2" onClick={signOut}>
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics</h1>
          <p className="text-muted-foreground">
            Track your business performance and insights.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="glass border-border/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="w-4 h-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className={`flex items-center text-sm ${stat.isPositive ? 'text-green-500' : 'text-destructive'}`}>
                  {stat.isPositive ? (
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                  {stat.change}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {txLoading ? (
          <div className="text-center py-8 text-muted-foreground">Loading analytics...</div>
        ) : transactions.length === 0 ? (
          <Card className="glass border-border/50">
            <CardContent className="py-12 text-center">
              <CreditCard className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No transactions yet</h3>
              <p className="text-muted-foreground mb-4">
                Start sending or receiving payments to see your analytics here.
              </p>
              <Link to="/payments">
                <Button>Go to Payments</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Revenue Chart */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Revenue Trends
                </CardTitle>
                <CardDescription>Monthly revenue vs expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={analytics.revenueData}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                        }}
                      />
                      <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorRevenue)" />
                      <Area type="monotone" dataKey="expenses" stroke="hsl(var(--destructive))" fillOpacity={1} fill="url(#colorExpenses)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Transactions Chart */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  Daily Transactions
                </CardTitle>
                <CardDescription>Transaction volume by day</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={analytics.transactionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                        }}
                      />
                      <Bar dataKey="transactions" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods Chart */}
            {analytics.paymentMethodsData.length > 0 && (
              <Card className="glass border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    Payment Methods
                  </CardTitle>
                  <CardDescription>Distribution by payment type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={analytics.paymentMethodsData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {analytics.paymentMethodsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '8px',
                          }}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Transaction Amount by Day */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Daily Volume
                </CardTitle>
                <CardDescription>Transaction amounts over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={analytics.transactionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                        }}
                        formatter={(value: number) => [`$${value.toLocaleString()}`, 'Amount']}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="amount" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={2}
                        dot={{ fill: 'hsl(var(--primary))' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
