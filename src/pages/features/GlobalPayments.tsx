import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Globe, DollarSign, Languages, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GlobalPayments = () => {
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
              <Globe className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accept Payments
              <span className="text-gradient"> Globally</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Accept 135+ currencies from customers in 190+ countries. Expand your business worldwide with seamless international payments.
            </p>
            <Link to="/auth">
              <Button variant="hero" size="xl">
                Go Global
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
              <div className="text-4xl font-bold text-gradient mb-2">135+</div>
              <div className="text-muted-foreground">Currencies Supported</div>
            </div>
            <div className="text-center glass p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gradient mb-2">190+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div className="text-center glass p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gradient mb-2">40+</div>
              <div className="text-muted-foreground">Languages</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Global Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass p-6 rounded-2xl">
              <DollarSign className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Multi-Currency</h3>
              <p className="text-muted-foreground">Accept and settle in local currencies with competitive FX rates.</p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <Languages className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Localized Checkout</h3>
              <p className="text-muted-foreground">Dynamic checkout adapts to customer language and preferences.</p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <MapPin className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Payment Methods</h3>
              <p className="text-muted-foreground">Support region-specific payment methods like Alipay, iDEAL, and more.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GlobalPayments;
