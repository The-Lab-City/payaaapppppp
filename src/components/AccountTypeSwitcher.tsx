import { useAccountType, AccountType } from '@/contexts/AccountTypeContext';
import { Button } from '@/components/ui/button';
import { User, Briefcase, Building2 } from 'lucide-react';

const accountTypes: { type: AccountType; label: string; icon: React.ElementType }[] = [
  { type: 'personal', label: 'Personal', icon: User },
  { type: 'business', label: 'Business', icon: Briefcase },
  { type: 'commercial', label: 'Commercial', icon: Building2 },
];

const AccountTypeSwitcher = () => {
  const { accountType, setAccountType } = useAccountType();

  return (
    <div className="w-full bg-secondary/50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-1 py-2">
          {accountTypes.map(({ type, label, icon: Icon }) => (
            <Button
              key={type}
              variant={accountType === type ? 'default' : 'ghost'}
              size="sm"
              className={`gap-2 transition-all ${
                accountType === type 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setAccountType(type)}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountTypeSwitcher;
