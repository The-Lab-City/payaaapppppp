import { CreditCard, Globe, Lock, Repeat, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process payments in milliseconds with our optimized infrastructure.",
  },
  {
    icon: Shield,
    title: "Fraud Protection",
    description: "AI-powered fraud detection keeps your business safe 24/7.",
  },
  {
    icon: Globe,
    title: "Global Payments",
    description: "Accept 135+ currencies from customers in 190+ countries.",
  },
  {
    icon: CreditCard,
    title: "All Payment Methods",
    description: "Cards, wallets, bank transfers, and crypto—all in one platform.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "PCI DSS Level 1 certified with end-to-end encryption.",
  },
  {
    icon: Repeat,
    title: "Recurring Billing",
    description: "Automate subscriptions and invoicing with smart retry logic.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to
            <span className="text-gradient"> Accept Payments</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A complete payment solution designed for modern businesses of all sizes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 glass rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
