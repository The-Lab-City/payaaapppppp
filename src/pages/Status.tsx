import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertTriangle } from "lucide-react";

const Status = () => {
  const services = [
    { name: "Payment API", status: "operational", uptime: "99.99%" },
    { name: "Dashboard", status: "operational", uptime: "99.98%" },
    { name: "Webhooks", status: "operational", uptime: "99.97%" },
    { name: "Authentication", status: "operational", uptime: "99.99%" },
    { name: "Fraud Detection", status: "operational", uptime: "99.95%" },
    { name: "Reporting", status: "operational", uptime: "99.94%" },
  ];

  const recentIncidents = [
    {
      date: "Dec 15, 2024",
      title: "Scheduled Maintenance",
      status: "resolved",
      description: "Routine maintenance completed successfully with no service disruption.",
    },
    {
      date: "Dec 10, 2024",
      title: "Minor Latency Increase",
      status: "resolved",
      description: "Brief latency increase in EU region. Issue identified and resolved within 5 minutes.",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "degraded":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case "maintenance":
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return <Badge className="bg-green-500/20 text-green-500 border-green-500/30">Operational</Badge>;
      case "degraded":
        return <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">Degraded</Badge>;
      case "maintenance":
        return <Badge className="bg-blue-500/20 text-blue-500 border-blue-500/30">Maintenance</Badge>;
      case "resolved":
        return <Badge className="bg-green-500/20 text-green-500 border-green-500/30">Resolved</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-30 blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
              <h1 className="text-4xl md:text-5xl font-bold">
                All Systems
                <span className="text-gradient"> Operational</span>
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Current status of PayFlow services and infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Service Status</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {services.map((service) => (
              <Card key={service.name} className="glass border-border/50">
                <CardContent className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(service.status)}
                      <span className="font-medium">{service.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">{service.uptime} uptime</span>
                      {getStatusBadge(service.status)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Recent Incidents</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {recentIncidents.map((incident) => (
              <Card key={incident.title} className="glass border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{incident.title}</CardTitle>
                    {getStatusBadge(incident.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">{incident.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{incident.description}</p>
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

export default Status;