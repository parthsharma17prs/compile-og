import { Link } from 'react-router-dom';
import { Mail, ArrowRight, MapPin, Globe, Clock, Phone, Calendar } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Section from '@/components/Section';
import Layout from '@/components/Layout';
import GeometricPattern from '@/components/GeometricPattern';

const Contact = () => {
  const calComUrl = import.meta.env.VITE_CALCOM_URL || 'https://cal.com';
  const calEmbedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalModal = () => {
    if (typeof (window as any).Cal !== 'undefined') {
      (window as any).Cal('openModal', {
        calLink: calComUrl.replace('https://cal.com/', ''),
      });
    } else {
      // Fallback: open in new tab
      window.open(calComUrl, '_blank');
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <Section variant="glow" spacing="xl">
        <GeometricPattern />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold glow-text">
              Ready to prove compliance?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Whether you're a startup preparing for SOC 2, an exchange under AML/BSA review, or a government contractor chasing FedRAMP, CompliLedger can help.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:maranda@compliledger.com">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-background font-medium px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-foreground/20 hover:border-primary/50 text-foreground font-medium px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Sales
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>


          </div>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section variant="glow" className="py-16 relative overflow-hidden bg-background">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                Ready to simplify compliance?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="bg-background/80 backdrop-blur-sm rounded-2xl border border-border/30 shadow-xl overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
                <div className="bg-background/95 p-6 md:p-8 rounded-xl">
                  {/* Cal.com Embed Container */}
                  <div className="space-y-6">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Schedule a Meeting</h3>
                      <p className="text-muted-foreground text-sm max-w-md mx-auto">
                        Book a time that works for you. Our team will discuss your compliance needs and show you how CompliLedger can help.
                      </p>
                    </div>

                    {/* Cal.com Inline Embed */}
                    <div
                      ref={calEmbedRef}
                      className="min-h-[500px] rounded-lg overflow-hidden border border-border/30"
                    >
                      <iframe
                        src={`${calComUrl}?embed=true&theme=dark`}
                        width="100%"
                        height="500"
                        frameBorder="0"
                        className="w-full"
                        title="Schedule a meeting with CompliLedger"
                      />
                    </div>

                    {/* Alternative: Modal Button */}
                    <div className="text-center pt-4 border-t border-border/30">
                      <p className="text-sm text-muted-foreground mb-3">Or open scheduler in a popup</p>
                      <Button
                        onClick={openCalModal}
                        variant="outline"
                        className="group"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Open Scheduler
                        <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Links Section */}
      <Section variant="glow" className="py-16 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center">Who Are You?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: 'Enterprise or SaaS Team',
                  description: 'See SOX & ISO solutions',
                  link: '/solutions#enterprise'
                },
                {
                  title: 'Exchange or Fintech',
                  description: 'Explore AML/BSA compliance',
                  link: '/solutions#fintech'
                },
                {
                  title: 'Government Contractor',
                  description: 'Learn about FedRAMP/RMF automation',
                  link: '/solutions#government'
                },
                {
                  title: 'Healthcare Provider',
                  description: 'HIPAA-ready workflows',
                  link: '/solutions#healthcare'
                },
                {
                  title: 'Auditor or Regulator',
                  description: 'Explore AuditSync™ portal',
                  link: '/platform'
                }
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="p-4 border border-border/40 rounded-lg hover:bg-muted/30 transition-colors group"
                >
                  <h4 className="font-medium group-hover:text-primary">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/solutions">
                <Button variant="outline">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Direct Contact Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-center mb-12">Get in Touch</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Contact Information */}
                <div className="bg-black border border-border/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center mb-6">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold ml-3">Email Us</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { label: 'General Inquiries', email: 'info@compliledger.com' },
                      { label: 'Sales & Demos', email: 'sales@compliledger.com' },
                      { label: 'Press & Media', email: 'media@compliledger.com' },
                      { label: 'Support', email: 'support@compliledger.com' }
                    ].map((item, index) => (
                      <li key={index} className="group">
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <a
                          href={`mailto:${item.email}`}
                          className="font-medium text-foreground hover:text-primary transition-colors flex items-center"
                        >
                          {item.email}
                          <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Location Information */}
                <div className="bg-black border border-border/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center mb-6">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold ml-3">Our Location</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-1.5 bg-muted/50 rounded-md">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">Headquarters</p>
                        <p className="text-muted-foreground text-sm">123 Compliance Way<br />Arlington, VA 22201<br />United States</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="p-1.5 bg-muted/50 rounded-md">
                        <Globe className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">Global Reach</p>
                        <p className="text-muted-foreground text-sm">Serving clients across North America, Europe, and the Middle East</p>
                      </div>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg mt-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-1.5 bg-muted/50 rounded-md">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">Need immediate help?</p>
                          <a href="tel:+15551234567" className="text-primary hover:underline text-sm">+1 (555) 123-4567</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </Section>
      <Section variant="glow" spacing="lg" className="relative overflow-hidden bg-background">
        <GeometricPattern className="absolute inset-0 w-full h-full opacity-10" />
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Compliance Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {['SOC 2', 'ISO', 'FedRAMP', 'HIPAA', 'PCI', 'AML/BSA'].map((framework) => (
                <div key={framework} className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-sm">
                  <span className="font-medium text-foreground">{framework}</span>
                </div>
              ))}
            </div>

            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Compliance You Can Prove.
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book a demo today and see how CompliLedger transforms audits into continuous, provable proof.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link to="/demo" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto btn-glow transition-transform motion-safe:hover:-translate-y-0.5">
                  Schedule a call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-foreground/20 hover:bg-foreground/5 transition-colors" asChild>
                <a href="https://docs.google.com/document/d/1mPCmvQioDrfeFYTgTwlpI49EDOKIP5gJ" target="_blank" rel="noopener noreferrer">
                  View Whitepaper
                </a>
              </Button>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-foreground/20 hover:bg-foreground/5 transition-colors">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
