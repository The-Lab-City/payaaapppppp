import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Lock, Shield, Key, FileCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Security = () => {
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
              <Lock className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bank-Grade
              <span className="text-gradient"> Security</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              PCI DSS Level 1 certified with end-to-end encryption. Your data and your customers' data are protected by the highest security standards.
            </p>
            <Link to="/auth">
              <Button variant="hero" size="xl">
                Secure Your Payments
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Compliance & Certifications</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="glass p-6 rounded-2xl text-center">
              <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold">PCI DSS L1</h3>
              <p className="text-xs text-muted-foreground mt-1">Highest level of payment security</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <FileCheck className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold">SOC 2 Type II</h3>
              <p className="text-xs text-muted-foreground mt-1">Enterprise security controls</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <Lock className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold">GDPR</h3>
              <p className="text-xs text-muted-foreground mt-1">EU data protection</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <Key className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold">ISO 27001</h3>
              <p className="text-xs text-muted-foreground mt-1">Information security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Security Features</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">End-to-End Encryption</h3>
              <p className="text-muted-foreground">All data is encrypted in transit and at rest using AES-256.</p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Tokenization</h3>
              <p className="text-muted-foreground">Sensitive card data is replaced with secure tokens.</p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">3D Secure 2.0</h3>
              <p className="text-muted-foreground">Extra layer of authentication for online transactions.</p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Regular Audits</h3>
              <p className="text-muted-foreground">Third-party security audits and penetration testing.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;
