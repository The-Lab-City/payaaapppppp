import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
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
              Terms of
              <span className="text-gradient"> Service</span>
            </h1>
            <p className="text-muted-foreground">Last updated: December 27, 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-invert">
            <div className="glass p-8 rounded-2xl space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using PayFlow's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
                <p className="text-muted-foreground">
                  PayFlow provides payment processing services that enable businesses to accept and manage payments from customers. Our services include payment gateway, fraud protection, recurring billing, and related features.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Account Requirements</h2>
                <p className="text-muted-foreground mb-4">To use our services, you must:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Be at least 18 years old</li>
                  <li>Provide accurate and complete registration information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Fees and Payments</h2>
                <p className="text-muted-foreground">
                  You agree to pay all applicable fees as described on our pricing page. Fees are non-refundable except as expressly stated. We reserve the right to modify our fees with 30 days' notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Prohibited Activities</h2>
                <p className="text-muted-foreground mb-4">You may not use our services for:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Illegal activities or transactions</li>
                  <li>Fraudulent or deceptive practices</li>
                  <li>Money laundering or terrorist financing</li>
                  <li>Violation of intellectual property rights</li>
                  <li>Any activity that violates these terms</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, PayFlow shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
                <p className="text-muted-foreground">
                  Either party may terminate this agreement at any time. Upon termination, you must cease using our services and pay any outstanding fees. We may suspend or terminate your account for violations of these terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We may modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact us at legal@payflow.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;