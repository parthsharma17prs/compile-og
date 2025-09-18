import { Button } from "@/components/ui/button";
import { Shield, Lock, EyeOff, Key, Server, ShieldCheck, FileCheck, ShieldAlert, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import GeometricPattern from "@/components/GeometricPattern";
import { ArrowRight } from "lucide-react";


const Security = () => {
  const features = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data is encrypted both in transit and at rest using industry-standard AES-256 encryption."
    },
    {
      icon: ShieldCheck,
      title: "Zero-Knowledge Architecture",
      description: "Prove compliance without exposing sensitive data using advanced zero-knowledge proofs."
    },
    {
      icon: Server,
      title: "Secure Cloud Infrastructure",
      description: "Hosted on SOC 2 Type II and ISO 27001 certified infrastructure with regular security audits."
    },
    {
      icon: Key,
      title: "Role-Based Access Control",
      description: "Granular permissions ensure users only access what they need, when they need it."
    },
    {
      icon: FileCheck,
      title: "Immutable Audit Trails",
      description: "All compliance activities are immutably recorded on the blockchain for complete transparency."
    },
    {
      icon: EyeOff,
      title: "Privacy by Design",
      description: "Built with privacy-first principles to protect both your data and your customers' information."
    }
  ];

  const complianceFrameworks = [
    { name: "SOC 2 Type II", status: "Compliant" },
    { name: "ISO 27001", status: "Certified" },
    { name: "GDPR", status: "Compliant" },
    { name: "HIPAA", status: "Aligned" },
    { name: "CCPA", status: "Compliant" },
    { name: "NIST CSF", status: "Aligned" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Section variant="glow" className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Shield className="h-4 w-4" />
              Enterprise-Grade Security
            </div>
            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold tracking-tight glow-text">
              Security by Design. Compliance by Proof.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CompliLedger is built with a Zero Trust architecture, continuous testing, and immutable evidence trails — ensuring that your compliance data is as secure as the controls it represents.
            </p>
            <div className="mt-8">
              <Link to="/platform">
                <Button size="lg" className="group">
                  View Platform Security
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Zero Trust Foundation */}
      <Section variant="default" spacing="lg" className="flex items-center min-h-[70vh]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center">
              <div className="space-y-8 text-center w-full max-w-4xl">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Built on Zero Trust Principles
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto rounded-full"></div>
                </div>
                <p className="text-lg text-muted-foreground">
                  We apply least-privilege, role-based access, and scoped connectors across the platform. Every integration — from GitHub to AML tools — operates within isolated, encrypted environments.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {[
                    {
                      title: "Fine-grained Access",
                      description: "Granular controls per project and user with attribute-based policies"
                    },
                    {
                      title: "Secure API Tokens",
                      description: "Scoped API tokens with automatic expiry and usage monitoring"
                    },
                    {
                      title: "Continuous Monitoring",
                      description: "Real-time surveillance of identity and access events"
                    },
                    {
                      title: "Data Isolation",
                      description: "Segmented data enclaves ensuring complete workload separation"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-muted/20 p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <div className="text-left">
                          <h4 className="font-semibold text-foreground">{item.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Data Security & Privacy */}
      <Section variant="blend" spacing="lg" className="bg-gradient-to-b from-background to-background/80 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Data Security & Privacy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade protection for your most sensitive compliance data
            </p>
          </div>

          <div className="max-w-6xl mx-auto bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-border/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-6">Protecting Sensitive Data</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  CompliLedger minimizes sensitive data handling by using off-chain processing and storing only hashed, anchored metadata. For selective transparency, compliance outcomes are proven using zero-knowledge proofs (ZKPs) and verifiable credentials (VCs).
                </p>
                <div className="space-y-4">
                  {[
                    "Encryption in transit (TLS 1.3) and at rest (AES-256)",
                    "Data minimization — raw artifacts are not retained unless required",
                    "Hashing + blockchain anchoring for immutability",
                    "Privacy-preserving attestations via ZKPs and DIDs"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary mt-2 flex-shrink-0 transition-transform group-hover:scale-125"></div>
                      <p className="text-foreground/90 text-lg">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-8 border border-border/30">
                <div className="space-y-6">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-medium text-foreground/90 mb-2">End-to-End Encryption</h4>
                    <p className="text-sm text-muted-foreground">All data is encrypted in transit and at rest with industry-standard protocols</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-medium text-foreground/90 mb-2">Zero-Knowledge Proofs</h4>
                    <p className="text-sm text-muted-foreground">Prove compliance without exposing sensitive information</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-medium text-foreground/90 mb-2">Decentralized Identity</h4>
                    <p className="text-sm text-muted-foreground">Self-sovereign identity management with DIDs and VCs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Continuous Security Testing */}
      <Section variant="default" spacing="lg" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.03] [mask-image:linear-gradient(0deg,transparent,black)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-muted/50 p-6 rounded-2xl border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Security Score: 98/100</h3>
                    <div className="ml-auto bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full">
                      Excellent
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: 'Infrastructure', score: 99, status: 'pass' },
                      { name: 'Application', score: 97, status: 'pass' },
                      { name: 'Data Protection', score: 100, status: 'pass' },
                      { name: 'Compliance', score: 96, status: 'pass' },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{item.name}</span>
                          <span className="font-medium">{item.score}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              item.score > 95 ? 'bg-green-500' :
                              item.score > 85 ? 'bg-amber-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${item.score}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/50 text-sm text-muted-foreground">
                    <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                    <p className="flex items-center gap-1 mt-1">
                      <ShieldAlert className="h-3.5 w-3.5 text-amber-500" />
                      <span>2 minor findings (low severity)</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Continuous Security Testing</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our security posture is continuously monitored and tested through automated scanning, third-party audits, and internal red team exercises. We maintain a public security.txt and have a responsible disclosure program.
                </p>
                <div className="space-y-4">
                  {[
                    "Automated DAST/SAST scanning in CI/CD pipelines",
                    "Quarterly penetration testing by independent security firms",
                    "Real-time vulnerability monitoring and patching",
                    "Bug bounty program for ethical hackers"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                      <p className="text-foreground/90">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download Security Whitepaper
                  </Button>
                  <Button variant="ghost" className="gap-2">
                    <ShieldAlert className="h-4 w-4" />
                    Report a Vulnerability
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Supply Chain Integrity */}
      <Section variant="default" spacing="lg" className="py-20 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Software Supply Chain Security
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end protection for your software supply chain
            </p>
          </div>

          <div className="max-w-6xl mx-auto bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-border/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6">Secure from Code to Compliance</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Every release carries compliance risk. CompliLedger enforces supply chain integrity through SBOM analysis, license enforcement, and automated control attestations.
                </p>
                <div className="space-y-4">
                  {[
                    "SBOM ingestion & normalization (CycloneDX, SPDX)",
                    "License policy enforcement (open source & commercial)",
                    "CVE tracking & auto-remediation suggestions",
                    "Release-level attestations for PCI DSS, FedRAMP, DORA"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary mt-2 flex-shrink-0 transition-transform group-hover:scale-125"></div>
                      <p className="text-foreground/90 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 md:order-2 bg-muted/30 rounded-xl p-8 border border-border/30">
                <div className="space-y-6">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-medium text-foreground/90 mb-2">SBOM Analysis</h4>
                    <p className="text-sm text-muted-foreground">Automated Software Bill of Materials generation and analysis</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-medium text-foreground/90 mb-2">License Compliance</h4>
                    <p className="text-sm text-muted-foreground">Automated enforcement of open source and commercial licenses</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-medium text-foreground/90 mb-2">Vulnerability Management</h4>
                    <p className="text-sm text-muted-foreground">Continuous monitoring and remediation of security vulnerabilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Incident Readiness */}
      <Section variant="default" spacing="lg" className="py-20 bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <ShieldAlert className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Incident Readiness
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proactive preparation for security incidents and compliance events
            </p>
          </div>

          <div className="max-w-6xl mx-auto bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-border/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6">Prepared for the Unexpected</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  CompliLedger integrates with incident response systems and ensures that tabletop exercises, post-mortems, and corrective actions are automatically captured as compliance evidence.
                </p>
                <div className="space-y-4">
                  {[
                    "Automated capture of incident logs & runbooks",
                    "Validation of tabletop exercises & recovery plans",
                    "ZK attestations proving incident readiness without exposing sensitive details",
                    "Immutable record of remediation and lessons learned"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary mt-2 flex-shrink-0 transition-transform group-hover:scale-125"></div>
                      <p className="text-foreground/90 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 md:order-2 bg-muted/30 rounded-xl p-8 border border-border/30">
                <div className="space-y-6">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-medium text-foreground/90 mb-2">Incident Response</h4>
                    <p className="text-sm text-muted-foreground">Automated logging and tracking of security incidents</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-medium text-foreground/90 mb-2">Tabletop Exercises</h4>
                    <p className="text-sm text-muted-foreground">Document and validate your incident response procedures</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-medium text-foreground/90 mb-2">Audit Trail</h4>
                    <p className="text-sm text-muted-foreground">Immutable record of all incident-related activities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Certifications & Roadmap */}
      <Section variant="default" spacing="lg" className="bg-muted/10 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="h-4 w-4" />
              Independent Assurance
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to Security Excellence</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              We align our internal practices with industry frameworks and pursue independent certifications to demonstrate our commitment to security and compliance.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: "SOC 2",
                  status: "Planned",
                  logo: "https://internationalsecurityjournal.com/wp-content/uploads/2021/12/soc-2-1.jpg"
                },
                {
                  name: "ISO 27001",
                  status: "Planned",
                  logo: "https://www.qassurance.com/wp-content/uploads/QAssurance-logos.png"
                },
                {
                  name: "FedRAMP",
                  status: "Planned",
                  logo: "https://www.acquia.com/sites/default/files/styles/blog_hero_image_mobile/public/media/image/2022-05/FedRAMP%20logo.png?itok=tbett_v_"
                },
                {
                  name: "HIPAA",
                  status: "planned",
                  logo: "https://www.hipaajournal.com/wp-content/uploads/2021/12/HIPAA-civil-monetary-penalties-2021.jpg"
                },
                {
                  name: "HITRUST",
                  status: "planned",
                  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZrW2JT97cxFf2KGJQyQcgM01-D0ASpJoag&s"
                },
                {
                  name: "ISO 27701",
                  status: "planned",
                  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2uKB8bSgu-N-AlUMaW8R5ik2o2-i_Q1k02A&s"
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="w-24 h-24 rounded-xl bg-white/80 backdrop-blur-sm border border-border/50 shadow-sm p-4 flex items-center justify-center mb-3 transition-all duration-200 hover:shadow-md hover:border-primary/30 hover:scale-105">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        className="h-12 w-auto object-contain max-w-full max-h-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = '';
                          target.className = 'h-12 w-12 text-muted-foreground';
                          target.innerHTML = item.status === 'certified' ? '✅' : item.status === 'in-progress' ? '🔄' : '📅';
                        }}
                      />
                    ) : (
                      <span className="text-3xl">
                        {item.status === 'certified' ? '✅' : item.status === 'in-progress' ? '🔄' : '📅'}
                      </span>
                    )}
                  </div>
                  <span className="font-medium text-foreground/90 group-hover:text-primary transition-colors">{item.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full mt-1 ${
                    item.status === 'certified' ? 'bg-green-100 text-green-800' :
                    item.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {item.status === 'certified' ? 'Certified' : item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-muted-foreground mb-6">
                Interested in our security certifications or have specific compliance requirements?
              </p>
              <Link to="/Documentation">
                <Button variant="default" className="group">
                 Compliance Resources
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </Button>
            </Link>
            </div>
          </div>
        </div>
      </Section>
      {/* Call to Action */}
      <Section variant="glow" spacing="lg" className="flex items-center justify-center">
        <GeometricPattern className="opacity-50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="w-full max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border shadow-sm">SOC 2</div>
              <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border shadow-sm">FedRAMP</div>
              <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border shadow-sm">MiCA</div>
              <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border shadow-sm">HIPAA</div>
              <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border shadow-sm">PCI</div>
              <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border shadow-sm">AML/BSA</div>
            </div>
            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold leading-tight">
              Trust is Proven. Not Assumed.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              CompliLedger ensures every control, framework, and attestation is verifiable, privacy-preserving, and secure by design.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link to="/demo">
                <Button size="lg" className="btn-glow px-8">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="px-8">
Explore How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Security;
