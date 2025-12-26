import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Target, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-30 blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About
              <span className="text-gradient"> PayFlow</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We're on a mission to make payments simple, secure, and accessible for businesses of all sizes around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass p-8 rounded-2xl text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">To democratize access to world-class payment infrastructure.</p>
            </div>
            <div className="glass p-8 rounded-2xl text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Our Team</h3>
              <p className="text-muted-foreground">200+ payment experts, engineers, and customer success advocates.</p>
            </div>
            <div className="glass p-8 rounded-2xl text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Our Values</h3>
              <p className="text-muted-foreground">Customer-first, transparent, secure, and innovative.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <div className="glass p-8 rounded-2xl">
              <p className="text-muted-foreground mb-4">
                Founded in 2020, PayFlow started with a simple idea: payments should be easy. We saw businesses struggling with complex integrations, hidden fees, and poor support.
              </p>
              <p className="text-muted-foreground mb-4">
                Today, we process billions of dollars annually for over 10,000 businesses worldwide. From startups to enterprises, our platform scales with your needs.
              </p>
              <p className="text-muted-foreground">
                We're proud to be trusted by innovative companies across industries—from e-commerce and SaaS to marketplaces and fintech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-muted-foreground mb-6">Start accepting payments with PayFlow today.</p>
          <Link to="/auth">
            <Button variant="hero" size="lg">
              Get Started
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
