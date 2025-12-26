import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Repeat, Calendar, RefreshCw, Bell, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const RecurringBilling = () => {
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
              <Repeat className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Automated
              <span className="text-gradient"> Recurring Billing</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Automate subscriptions and invoicing with smart retry logic. Reduce churn and maximize revenue with intelligent billing.
            </p>
            <Link to="/auth">
              <Button variant="hero" size="xl">
                Start Automating
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center glass p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gradient mb-2">30%</div>
              <div className="text-muted-foreground">Reduced Churn</div>
            </div>
            <div className="text-center glass p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gradient mb-2">95%</div>
              <div className="text-muted-foreground">Payment Recovery</div>
            </div>
            <div className="text-center glass p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-muted-foreground">Automated Processing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Billing Features</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass p-6 rounded-2xl">
              <Calendar className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Schedules</h3>
              <p className="text-muted-foreground">Weekly, monthly, annual, or custom billing cycles.</p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <RefreshCw className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Retries</h3>
              <p className="text-muted-foreground">Intelligent retry logic to recover failed payments.</p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <Bell className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dunning Management</h3>
              <p className="text-muted-foreground">Automated emails and notifications for payment issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Perfect For</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass p-4 rounded-xl flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span>SaaS subscriptions</span>
              </div>
              <div className="glass p-4 rounded-xl flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span>Membership sites</span>
              </div>
              <div className="glass p-4 rounded-xl flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span>Subscription boxes</span>
              </div>
              <div className="glass p-4 rounded-xl flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span>Digital services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RecurringBilling;
