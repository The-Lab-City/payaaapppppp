import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Payment Processing in 2024",
      description: "Explore the trends shaping the payment industry and how businesses can stay ahead.",
      category: "Industry Insights",
      author: "Sarah Chen",
      date: "Dec 20, 2024",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    },
    {
      title: "How to Reduce Payment Fraud by 90%",
      description: "Learn the best practices for protecting your business from fraudulent transactions.",
      category: "Security",
      author: "Michael Torres",
      date: "Dec 18, 2024",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
    },
    {
      title: "Expanding Globally: A Guide to International Payments",
      description: "Everything you need to know about accepting payments from customers worldwide.",
      category: "Guides",
      author: "Emily Watson",
      date: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=400&fit=crop",
    },
    {
      title: "Subscription Billing Best Practices",
      description: "Optimize your recurring revenue with these proven strategies.",
      category: "Business",
      author: "David Kim",
      date: "Dec 12, 2024",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
    },
    {
      title: "PCI DSS Compliance Made Simple",
      description: "A step-by-step guide to achieving and maintaining PCI compliance.",
      category: "Security",
      author: "Lisa Park",
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=400&fit=crop",
    },
    {
      title: "Building a Seamless Checkout Experience",
      description: "Design tips and best practices for converting more customers at checkout.",
      category: "Design",
      author: "Alex Johnson",
      date: "Dec 8, 2024",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
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
              PayFlow
              <span className="text-gradient"> Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Insights, guides, and news from the world of payments.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <Card key={post.title} className="glass border-border/50 overflow-hidden hover:border-primary/50 transition-colors group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  <Link 
                    to="#" 
                    className="inline-flex items-center gap-1 text-primary mt-4 text-sm font-medium hover:gap-2 transition-all"
                  >
                    Read more <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;