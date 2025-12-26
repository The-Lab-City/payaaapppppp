import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Brain, AlertTriangle, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FraudProtection = () => {
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
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered
              <span className="text-gradient"> Fraud Protection</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Our advanced machine learning models analyze every transaction in real-time, keeping your business safe from fraudulent activity 24/7.
            </p>
            <Link to="/auth">
              <Button variant="hero" size="xl">
                Protect Your Business
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
              <div className="text-4xl font-bold text-gradient mb-2">99.9%</div>
              <div className="text-muted-foreground">Fraud Detection Rate</div>
            </div>
            <div className="text-center glass p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gradient mb-2">&lt;0.1%</div>
              <div className="text-muted-foreground">False Positive Rate</div>
            </div>
            <div className="text-center glass p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gradient mb-2">$2B+</div>
              <div className="text-muted-foreground">Fraud Prevented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How We Protect You</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass p-6 rounded-2xl">
              <Brain className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-muted-foreground">AI models trained on billions of transactions to spot anomalies.</p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <AlertTriangle className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-Time Alerts</h3>
              <p className="text-muted-foreground">Instant notifications when suspicious activity is detected.</p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <Lock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Adaptive Rules</h3>
              <p className="text-muted-foreground">Custom fraud rules that evolve with emerging threats.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FraudProtection;
