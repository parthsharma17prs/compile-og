import { Link } from 'react-router-dom';
import { Mail, ArrowRight, MapPin, Globe, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Section from '@/components/Section';
import Layout from '@/components/Layout';
import GeometricPattern from '@/components/GeometricPattern';

const Contact = () => {

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
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-background font-medium px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
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
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">Name *</label>
                        <div className="relative">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 hover:border-primary/30"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Work Email *</label>
                        <div className="relative">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 hover:border-primary/30"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="company" className="block text-sm font-medium text-muted-foreground">Company / Organization *</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 hover:border-primary/30"
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="role" className="block text-sm font-medium text-muted-foreground">Role *</label>
                      <div className="relative">
                        <select
                          id="role"
                          name="role"
                          required
                          className="w-full px-4 py-3 appearance-none bg-background/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 hover:border-primary/30 pr-10"
                        >
                          <option value="">Select your role</option>
                          <option value="Compliance Officer">Compliance Officer</option>
                          <option value="Security Leader">Security Leader</option>
                          <option value="Auditor">Auditor</option>
                          <option value="Regulator">Regulator</option>
                          <option value="Investor">Investor</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg className="h-5 w-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="block text-sm font-medium text-muted-foreground">Area of Interest *</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          'MiCA', 'ISO 27001', 'FedRAMP', 'PCI', 'NYDFS', 'SOX',
                          'CMMC', 'HITRUST', 'HIPAA', 'AML/BSA / Exchange Licensing',
                          'Web3 & DeFi', 'Other'
                        ].map((interest) => (
                          <label key={interest} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                            <div className="flex items-center justify-center w-5 h-5 border border-border rounded-md group-hover:border-primary/50 transition-colors">
                              <input
                                type="checkbox"
                                name="interests"
                                value={interest}
                                className="opacity-0 absolute h-5 w-5 peer"
                              />
                              <svg className="w-3.5 h-3.5 text-primary opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-sm text-foreground/90">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">Message (Optional)</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 hover:border-primary/30 resize-none"
                        placeholder="Tell us more about your compliance needs..."
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full py-4 text-base font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-primary/20 group"
                      >
                        <span className="relative z-10">Submit Request</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </Button>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      We'll get back to you within 24 hours
                      </p>
                    </div>
                  </form>
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
                  link: '/auditsync'
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
              Book a demo today and see how CompliLedger transforms audits into continuous, provable trust.
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
