import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { AccountTypeProvider } from "@/contexts/AccountTypeContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Payments from "./pages/Payments";
import Analytics from "./pages/Analytics";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Docs from "./pages/Docs";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Status from "./pages/Status";
import LightningFast from "./pages/features/LightningFast";
import FraudProtection from "./pages/features/FraudProtection";
import GlobalPayments from "./pages/features/GlobalPayments";
import PaymentMethods from "./pages/features/PaymentMethods";
import Security from "./pages/features/Security";
import RecurringBilling from "./pages/features/RecurringBilling";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AccountTypeProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/status" element={<Status />} />
              <Route path="/features/lightning-fast" element={<LightningFast />} />
              <Route path="/features/fraud-protection" element={<FraudProtection />} />
              <Route path="/features/global-payments" element={<GlobalPayments />} />
              <Route path="/features/payment-methods" element={<PaymentMethods />} />
              <Route path="/features/security" element={<Security />} />
              <Route path="/features/recurring-billing" element={<RecurringBilling />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AccountTypeProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
