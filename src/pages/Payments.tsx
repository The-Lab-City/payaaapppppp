import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Zap, 
  ArrowLeft,
  Send,
  Download,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  Search,
  Filter,
  LogOut,
  LayoutDashboard,
  Settings
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import NotificationsDropdown from '@/components/NotificationsDropdown';

interface Transaction {
  id: string;
  type: 'sent' | 'received' | 'pending';
  name: string;
  email: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

export default function Payments() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [sendDialogOpen, setSendDialogOpen] = useState(false);
  const [requestDialogOpen, setRequestDialogOpen] = useState(false);
  const [sendAmount, setSendAmount] = useState('');
  const [sendEmail, setSendEmail] = useState('');
  const [sendNote, setSendNote] = useState('');
  const [requestAmount, setRequestAmount] = useState('');
  const [requestEmail, setRequestEmail] = useState('');
  const [requestNote, setRequestNote] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: '1', type: 'received', name: 'Alex Johnson', email: 'alex@example.com', amount: 250.00, date: '2024-12-27', status: 'completed' },
    { id: '2', type: 'sent', name: 'Sarah Williams', email: 'sarah@example.com', amount: 1200.00, date: '2024-12-26', status: 'completed' },
    { id: '3', type: 'received', name: 'Michael Brown', email: 'michael@example.com', amount: 89.99, date: '2024-12-25', status: 'completed' },
    { id: '4', type: 'pending', name: 'Emily Davis', email: 'emily@example.com', amount: 500.00, date: '2024-12-24', status: 'pending' },
    { id: '5', type: 'sent', name: 'James Wilson', email: 'james@example.com', amount: 75.00, date: '2024-12-23', status: 'completed' },
    { id: '6', type: 'received', name: 'Lisa Anderson', email: 'lisa@example.com', amount: 320.00, date: '2024-12-22', status: 'completed' },
    { id: '7', type: 'sent', name: 'Robert Taylor', email: 'robert@example.com', amount: 150.00, date: '2024-12-21', status: 'failed' },
    { id: '8', type: 'received', name: 'Jennifer Martinez', email: 'jennifer@example.com', amount: 450.00, date: '2024-12-20', status: 'completed' },
  ]);

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

  const handleSendPayment = () => {
    if (!sendAmount || !sendEmail) {
      toast({
        variant: 'destructive',
        title: 'Missing fields',
        description: 'Please fill in all required fields.',
      });
      return;
    }

    const newTransaction: Transaction = {
      id: Date.now().toString(),
      type: 'sent',
      name: sendEmail.split('@')[0],
      email: sendEmail,
      amount: parseFloat(sendAmount),
      date: new Date().toISOString().split('T')[0],
      status: 'completed',
    };

    setTransactions(prev => [newTransaction, ...prev]);
    toast({
      title: 'Payment sent',
      description: `$${sendAmount} sent to ${sendEmail}`,
    });
    setSendAmount('');
    setSendEmail('');
    setSendNote('');
    setSendDialogOpen(false);
  };

  const handleRequestPayment = () => {
    if (!requestAmount || !requestEmail) {
      toast({
        variant: 'destructive',
        title: 'Missing fields',
        description: 'Please fill in all required fields.',
      });
      return;
    }

    const newTransaction: Transaction = {
      id: Date.now().toString(),
      type: 'pending',
      name: requestEmail.split('@')[0],
      email: requestEmail,
      amount: parseFloat(requestAmount),
      date: new Date().toISOString().split('T')[0],
      status: 'pending',
    };

    setTransactions(prev => [newTransaction, ...prev]);
    toast({
      title: 'Payment requested',
      description: `Requested $${requestAmount} from ${requestEmail}`,
    });
    setRequestAmount('');
    setRequestEmail('');
    setRequestNote('');
    setRequestDialogOpen(false);
  };

  const filteredTransactions = transactions.filter(tx => {
    const matchesSearch = tx.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tx.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || tx.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const totalReceived = transactions.filter(t => t.type === 'received' && t.status === 'completed').reduce((sum, t) => sum + t.amount, 0);
  const totalSent = transactions.filter(t => t.type === 'sent' && t.status === 'completed').reduce((sum, t) => sum + t.amount, 0);
  const pendingAmount = transactions.filter(t => t.status === 'pending').reduce((sum, t) => sum + t.amount, 0);

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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <Link to="/dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-foreground mb-2">Payments</h1>
            <p className="text-muted-foreground">
              Send, receive, and track all your payments.
            </p>
          </div>
          <div className="flex gap-3">
            <Dialog open={requestDialogOpen} onOpenChange={setRequestDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Request
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-card border-border">
                <DialogHeader>
                  <DialogTitle>Request Payment</DialogTitle>
                  <DialogDescription>
                    Send a payment request to someone.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="request-email">Recipient Email</Label>
                    <Input
                      id="request-email"
                      type="email"
                      placeholder="email@example.com"
                      value={requestEmail}
                      onChange={(e) => setRequestEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="request-amount">Amount ($)</Label>
                    <Input
                      id="request-amount"
                      type="number"
                      placeholder="0.00"
                      value={requestAmount}
                      onChange={(e) => setRequestAmount(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="request-note">Note (optional)</Label>
                    <Input
                      id="request-note"
                      placeholder="What's this for?"
                      value={requestNote}
                      onChange={(e) => setRequestNote(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setRequestDialogOpen(false)}>Cancel</Button>
                  <Button onClick={handleRequestPayment}>Request Payment</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog open={sendDialogOpen} onOpenChange={setSendDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Send className="w-4 h-4" />
                  Send Payment
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-card border-border">
                <DialogHeader>
                  <DialogTitle>Send Payment</DialogTitle>
                  <DialogDescription>
                    Send money to someone instantly.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="send-email">Recipient Email</Label>
                    <Input
                      id="send-email"
                      type="email"
                      placeholder="email@example.com"
                      value={sendEmail}
                      onChange={(e) => setSendEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="send-amount">Amount ($)</Label>
                    <Input
                      id="send-amount"
                      type="number"
                      placeholder="0.00"
                      value={sendAmount}
                      onChange={(e) => setSendAmount(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="send-note">Note (optional)</Label>
                    <Input
                      id="send-note"
                      placeholder="What's this for?"
                      value={sendNote}
                      onChange={(e) => setSendNote(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setSendDialogOpen(false)}>Cancel</Button>
                  <Button onClick={handleSendPayment}>Send Payment</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Received</CardTitle>
              <ArrowDownRight className="w-4 h-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">+${totalReceived.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
            </CardContent>
          </Card>
          <Card className="glass border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Sent</CardTitle>
              <ArrowUpRight className="w-4 h-4 text-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">-${totalSent.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
            </CardContent>
          </Card>
          <Card className="glass border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
              <CreditCard className="w-4 h-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-500">${pendingAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
            </CardContent>
          </Card>
        </div>

        {/* Transactions */}
        <Card className="glass border-border/50">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  Transaction History
                </CardTitle>
                <CardDescription>All your payment activity</CardDescription>
              </div>
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search transactions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-[200px]"
                  />
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[140px]">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredTransactions.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No transactions found
                </div>
              ) : (
                filteredTransactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.type === 'received' ? 'bg-green-500/20' :
                        tx.type === 'pending' ? 'bg-yellow-500/20' : 'bg-primary/20'
                      }`}>
                        {tx.type === 'received' ? (
                          <ArrowDownRight className="w-5 h-5 text-green-500" />
                        ) : tx.type === 'pending' ? (
                          <CreditCard className="w-5 h-5 text-yellow-500" />
                        ) : (
                          <ArrowUpRight className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{tx.name}</p>
                        <p className="text-sm text-muted-foreground">{tx.email}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${
                        tx.type === 'received' ? 'text-green-500' : 'text-foreground'
                      }`}>
                        {tx.type === 'received' ? '+' : '-'}${tx.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </p>
                      <div className="flex items-center gap-2 justify-end">
                        <p className="text-sm text-muted-foreground">{tx.date}</p>
                        <Badge variant={
                          tx.status === 'completed' ? 'default' :
                          tx.status === 'pending' ? 'secondary' : 'destructive'
                        } className="text-xs">
                          {tx.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}