import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Code, Zap, CreditCard, Shield, Globe, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

const Docs = () => {
  const sections = [
    {
      icon: Zap,
      title: "Getting Started",
      description: "Learn the basics of integrating PayFlow into your application.",
      links: ["Quick Start Guide", "Authentication", "Your First Payment"],
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete documentation for all PayFlow API endpoints.",
      links: ["REST API", "Webhooks", "SDKs & Libraries"],
    },
    {
      icon: CreditCard,
      title: "Payments",
      description: "Accept payments, manage subscriptions, and handle refunds.",
      links: ["Accept Payments", "Subscriptions", "Invoices"],
    },
    {
      icon: Shield,
      title: "Security",
      description: "Best practices for securing your payment integration.",
      links: ["PCI Compliance", "Fraud Prevention", "3D Secure"],
    },
    {
      icon: Globe,
      title: "International",
      description: "Accept payments from customers around the world.",
      links: ["Multi-Currency", "Local Payment Methods", "Tax Handling"],
    },
    {
      icon: Book,
      title: "Guides",
      description: "Step-by-step tutorials for common use cases.",
      links: ["E-commerce Setup", "SaaS Billing", "Marketplace Payments"],
    },
  ];

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
              <span className="text-gradient">Documentation</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Everything you need to integrate PayFlow into your application.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search documentation..." 
                className="pl-10 h-12 bg-background/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sections.map((section) => (
              <Card key={section.title} className="glass border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link}>
                        <Link 
                          to="#" 
                          className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
                        >
                          <ArrowRight className="w-3 h-3" />
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <p className="text-muted-foreground mb-6">Our support team is here to assist you.</p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Contact Support
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Docs;