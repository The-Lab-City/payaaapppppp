import { ArrowRight, CreditCard, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-30 blur-3xl" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 glass rounded-2xl animate-float opacity-50 hidden lg:block" />
      <div className="absolute bottom-32 right-20 w-16 h-16 glass rounded-xl animate-float opacity-50 hidden lg:block" style={{ animationDelay: '2s' }} />
      <div className="absolute top-40 right-32 w-12 h-12 glass rounded-lg animate-float opacity-50 hidden lg:block" style={{ animationDelay: '4s' }} />

      <div className="container relative z-10 px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Trusted by 10,000+ businesses worldwide</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            The Future of
            <span className="block text-gradient">Digital Payments</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Accept payments globally with lightning-fast processing, bank-grade security, and transparent pricing. Start collecting payments in minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/auth">
              <Button variant="hero" size="xl">
                Get Started Free
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="glass" size="xl">
                View Demo
              </Button>
            </Link>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/features/lightning-fast" className="flex items-center gap-2 px-4 py-2 glass rounded-full hover:border-primary/30 transition-colors">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm">Instant Transfers</span>
            </Link>
            <Link to="/features/security" className="flex items-center gap-2 px-4 py-2 glass rounded-full hover:border-primary/30 transition-colors">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm">Bank-Grade Security</span>
            </Link>
            <Link to="/features/payment-methods" className="flex items-center gap-2 px-4 py-2 glass rounded-full hover:border-primary/30 transition-colors">
              <CreditCard className="w-4 h-4 text-primary" />
              <span className="text-sm">All Cards Accepted</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
