import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ArrowRight, Heart, Rocket, Users, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const perks = [
    { icon: Heart, title: "Health & Wellness", description: "Comprehensive health, dental, and vision coverage" },
    { icon: Rocket, title: "Growth", description: "Learning budget and career development programs" },
    { icon: Users, title: "Team", description: "Collaborative culture with amazing colleagues" },
    { icon: Coffee, title: "Flexibility", description: "Remote-first with flexible working hours" },
  ];

  const openings = [
    { title: "Senior Backend Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
    { title: "Product Designer", department: "Design", location: "San Francisco", type: "Full-time" },
    { title: "Account Executive", department: "Sales", location: "New York", type: "Full-time" },
    { title: "Developer Relations", department: "Marketing", location: "Remote", type: "Full-time" },
    { title: "Security Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
    { title: "Customer Success Manager", department: "Support", location: "London", type: "Full-time" },
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
              Join the
              <span className="text-gradient"> PayFlow Team</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Help us build the future of payments. We're looking for talented people who are passionate about making a difference.
            </p>
            <a href="#openings">
              <Button variant="hero" size="lg">
                View Open Positions
                <ArrowRight className="ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why PayFlow?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {perks.map((perk) => (
              <Card key={perk.title} className="glass border-border/50 text-center">
                <CardHeader>
                  <perk.icon className="w-10 h-10 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{perk.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{perk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {openings.map((job) => (
              <Card key={job.title} className="glass border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="py-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{job.department}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="gap-2">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Don't see your role?</h2>
          <p className="text-muted-foreground mb-6">We're always looking for talented people. Send us your resume.</p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Get in Touch
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;