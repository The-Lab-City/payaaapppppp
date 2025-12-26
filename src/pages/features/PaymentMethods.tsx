import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CreditCard, Wallet, Building2, Bitcoin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentMethods = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-30 blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              All Payment Methods,
              <span className="text-gradient"> One Platform</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Cards, wallets, bank transfers, and crypto—all in one unified platform. Give your customers the flexibility they deserve.
            </p>
            <Link to="/auth">
              <Button variant="hero" size="xl">
                Accept All Payments
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Payment Types */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Supported Payment Methods</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="glass p-6 rounded-2xl text-center">
              <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cards</h3>
              <p className="text-muted-foreground text-sm">Visa, Mastercard, Amex, Discover, and more</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <Wallet className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital Wallets</h3>
              <p className="text-muted-foreground text-sm">Apple Pay, Google Pay, PayPal, Venmo</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bank Transfers</h3>
              <p className="text-muted-foreground text-sm">ACH, SEPA, Wire transfers</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <Bitcoin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Crypto</h3>
              <p className="text-muted-foreground text-sm">Bitcoin, Ethereum, USDC, and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">One Integration, All Methods</h2>
            <p className="text-muted-foreground mb-8">
              With a single API integration, you can accept any payment method. No need to integrate multiple providers—we handle everything.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="glass p-4 rounded-xl">
                <div className="text-2xl font-bold text-gradient">50+</div>
                <div className="text-sm text-muted-foreground">Payment Methods</div>
              </div>
              <div className="glass p-4 rounded-xl">
                <div className="text-2xl font-bold text-gradient">1</div>
                <div className="text-sm text-muted-foreground">Integration</div>
              </div>
              <div className="glass p-4 rounded-xl">
                <div className="text-2xl font-bold text-gradient">0</div>
                <div className="text-sm text-muted-foreground">Hassle</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaymentMethods;
