import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Zap, 
  CreditCard, 
  TrendingUp, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  Settings,
  LogOut,
  Shield,
  User,
  BarChart3,
  Wallet
} from 'lucide-react';

export default function Dashboard() {
  const { user, profile, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

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
      title: 'Total Balance',
      value: '$12,450.00',
      change: '+12.5%',
      isPositive: true,
      icon: Wallet,
    },
    {
      title: 'Monthly Revenue',
      value: '$4,320.00',
      change: '+8.2%',
      isPositive: true,
      icon: DollarSign,
    },
    {
      title: 'Transactions',
      value: '284',
      change: '+23',
      isPositive: true,
      icon: CreditCard,
    },
    {
      title: 'Growth Rate',
      value: '18.2%',
      change: '-2.1%',
      isPositive: false,
      icon: TrendingUp,
    },
  ];

  const recentTransactions = [
    { id: 1, name: 'Payment from Alex', amount: '+$250.00', date: 'Today', status: 'completed' },
    { id: 2, name: 'Subscription renewal', amount: '-$29.99', date: 'Yesterday', status: 'completed' },
    { id: 3, name: 'Payment from Sarah', amount: '+$1,200.00', date: 'Dec 19', status: 'completed' },
    { id: 4, name: 'API usage charges', amount: '-$45.00', date: 'Dec 18', status: 'pending' },
  ];

  return (
    <div className="min-h-screen bg-background">
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
            {isAdmin && (
              <Link to="/admin">
                <Button variant="outline" size="sm" className="gap-2">
                  <Shield className="w-4 h-4" />
                  Admin
                </Button>
              </Link>
            )}
            <Link to="/settings">
              <Button variant="ghost" size="sm" className="gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="gap-2" onClick={signOut}>
              <LogOut className="w-4 h-4" />
              Sign out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {profile?.name || user.email?.split('@')[0] || 'User'}!
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your account today.
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
                    <ArrowDownRight className="w-4 h-4 mr-1" />
                  )}
                  {stat.change} from last month
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Transactions */}
          <Card className="lg:col-span-2 glass border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                Recent Transactions
              </CardTitle>
              <CardDescription>Your latest payment activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-foreground">{tx.name}</p>
                      <p className="text-sm text-muted-foreground">{tx.date}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${tx.amount.startsWith('+') ? 'text-green-500' : 'text-foreground'}`}>
                        {tx.amount}
                      </p>
                      <p className={`text-xs capitalize ${tx.status === 'completed' ? 'text-muted-foreground' : 'text-yellow-500'}`}>
                        {tx.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="glass border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Quick Actions
              </CardTitle>
              <CardDescription>Common tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start gap-3" variant="secondary">
                <DollarSign className="w-4 h-4" />
                Send Payment
              </Button>
              <Button className="w-full justify-start gap-3" variant="secondary">
                <CreditCard className="w-4 h-4" />
                Request Payment
              </Button>
              <Link to="/profile">
                <Button className="w-full justify-start gap-3" variant="secondary">
                  <User className="w-4 h-4" />
                  Update Profile
                </Button>
              </Link>
              <Button className="w-full justify-start gap-3" variant="secondary">
                <TrendingUp className="w-4 h-4" />
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Profile Card */}
        <Card className="mt-8 glass border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Your Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Name</p>
                <p className="font-medium text-foreground">{profile?.name || 'Not set'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-medium text-foreground">{profile?.email || user.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="font-medium text-foreground">{profile?.phone || 'Not set'}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">ID Number</p>
                <p className="font-medium text-foreground">{profile?.id_number || 'Not set'}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
