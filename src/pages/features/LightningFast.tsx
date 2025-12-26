import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Zap, Clock, Server, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LightningFast = () => {
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
              <Zap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Lightning Fast
              <span className="text-gradient"> Payment Processing</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Process payments in milliseconds with our optimized infrastructure. Our global network ensures the fastest transaction speeds in the industry.
            </p>
            <Link to="/auth">
              <Button variant="hero" size="xl">
                Start Processing
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
              <div className="text-4xl font-bold text-gradient mb-2">99.99%</div>
              <div className="text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="text-center glass p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gradient mb-2">&lt;50ms</div>
              <div className="text-muted-foreground">Average Response Time</div>
            </div>
            <div className="text-center glass p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gradient mb-2">10M+</div>
              <div className="text-muted-foreground">Transactions/Day</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why We're Fast</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass p-6 rounded-2xl">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-Time Processing</h3>
              <p className="text-muted-foreground">No batch processing delays. Every transaction is processed instantly.</p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <Server className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Edge Computing</h3>
              <p className="text-muted-foreground">Servers located close to your customers for minimal latency.</p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <Globe className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global CDN</h3>
              <p className="text-muted-foreground">200+ points of presence across 6 continents.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LightningFast;
