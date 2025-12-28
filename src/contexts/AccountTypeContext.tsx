import { createContext, useContext, useState, ReactNode } from 'react';

export type AccountType = 'personal' | 'business' | 'commercial';

interface AccountTypeContextType {
  accountType: AccountType;
  setAccountType: (type: AccountType) => void;
}

const AccountTypeContext = createContext<AccountTypeContextType | undefined>(undefined);

export const AccountTypeProvider = ({ children }: { children: ReactNode }) => {
  const [accountType, setAccountType] = useState<AccountType>('personal');

  return (
    <AccountTypeContext.Provider value={{ accountType, setAccountType }}>
      {children}
    </AccountTypeContext.Provider>
  );
};

export const useAccountType = () => {
  const context = useContext(AccountTypeContext);
  if (!context) {
    throw new Error('useAccountType must be used within an AccountTypeProvider');
  }
  return context;
};
