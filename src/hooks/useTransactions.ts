import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useAccountType } from '@/contexts/AccountTypeContext';
import { useToast } from '@/hooks/use-toast';

export interface Transaction {
  id: string;
  type: 'sent' | 'received' | 'requested';
  recipient_name: string | null;
  recipient_email: string | null;
  amount: number;
  description: string | null;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  payment_method: string | null;
  created_at: string;
  account_type: string;
}

export const useTransactions = () => {
  const { user } = useAuth();
  const { accountType } = useAccountType();
  const { toast } = useToast();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTransactions = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .eq('account_type', accountType)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTransactions((data as Transaction[]) || []);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [user, accountType]);

  const createTransaction = async (
    type: 'sent' | 'received' | 'requested',
    amount: number,
    recipientEmail: string,
    description?: string
  ) => {
    if (!user) return null;

    try {
      const newTransaction = {
        user_id: user.id,
        type,
        amount,
        recipient_email: recipientEmail,
        recipient_name: recipientEmail.split('@')[0],
        description,
        status: type === 'requested' ? 'pending' : 'completed',
        account_type: accountType,
      };

      const { data, error } = await supabase
        .from('transactions')
        .insert(newTransaction)
        .select()
        .single();

      if (error) throw error;

      setTransactions(prev => [data as Transaction, ...prev]);

      // Create a notification for received payments
      if (type === 'received') {
        await supabase.from('notifications').insert({
          user_id: user.id,
          title: 'Payment Received',
          message: `You received $${amount.toFixed(2)} from ${recipientEmail}`,
          type: 'payment',
          account_type: accountType,
          related_transaction_id: data.id,
        });
      }

      return data;
    } catch (error) {
      console.error('Error creating transaction:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to create transaction',
      });
      return null;
    }
  };

  const getStats = () => {
    const totalReceived = transactions
      .filter(t => t.type === 'received' && t.status === 'completed')
      .reduce((sum, t) => sum + Number(t.amount), 0);
    
    const totalSent = transactions
      .filter(t => t.type === 'sent' && t.status === 'completed')
      .reduce((sum, t) => sum + Number(t.amount), 0);
    
    const pendingAmount = transactions
      .filter(t => t.status === 'pending')
      .reduce((sum, t) => sum + Number(t.amount), 0);

    return { totalReceived, totalSent, pendingAmount };
  };

  return {
    transactions,
    loading,
    createTransaction,
    getStats,
    refetch: fetchTransactions,
  };
};
