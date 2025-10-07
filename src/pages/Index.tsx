import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import {
  Shield,
  Lock,
  Eye,
  Zap,
  CheckCircle,
  ArrowRight,
  Building2,
  Users,
  FileCheck,
  Clock,
  BarChart3,
  Globe
} from 'lucide-react';

const Index = () => {
  const capabilities = [
    {
      icon: Shield,
      title: "Zero-Knowledge Proofs",
      description: "Prove compliance without revealing sensitive data using advanced cryptographic protocols."
    },
    {
      icon: Lock,
      title: "Data Privacy First",
      description: "Your sensitive business data never leaves your infrastructure while maintaining auditability."
    },
    {
      icon: Eye,
      title: "Transparent Auditing",
      description: "Enable regulatory oversight with verifiable compliance proofs and audit trails."
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous compliance monitoring with instant alerts and automated reporting."
    }
  ];

  const differentiators = [
    {
      icon: CheckCircle,
      title: "Mathematically Provable",
      description: "Compliance backed by cryptographic proof, not just documentation"
    },
    {
      icon: Shield,
      title: "Privacy-Preserving",
      description: "Maintain confidentiality while demonstrating regulatory adherence"
    },
    {
      icon: Clock,
      title: "Automated Compliance",
      description: "Reduce manual audit preparation from months to minutes"
    },
    {
      icon: BarChart3,
      title: "Cost Efficient",
      description: "Dramatically reduce compliance costs and operational overhead"
    }
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Financial Services",
      description: "Banks, investment firms, and fintech companies requiring SOX, Basel III, and other financial regulations",
      industries: ["Banking", "Insurance", "Investment Management", "Fintech"]
    },
    {
      icon: Users,
      title: "Healthcare Organizations",
      description: "Hospitals, clinics, and health tech companies managing HIPAA and patient data privacy",
      industries: ["Hospitals", "Health Tech", "Pharmaceuticals", "Medical Devices"]
    },
    {
      icon: FileCheck,
      title: "Enterprise Compliance",
      description: "Large corporations managing GDPR, SOC 2, and industry-specific regulatory requirements",
      industries: ["Technology", "Manufacturing", "Retail", "Energy"]
    },
    {
      icon: Globe,
      title: "Government & Public Sector",
      description: "Government agencies and public organizations ensuring transparency and accountability",
      industries: ["Federal Agencies", "State Government", "Public Utilities", "Education"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Section variant="glow" spacing="xl" className="min-h-screen flex items-center justify-center text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient leading-tight glow-text">
            CompliLedger:  Compliance You Can Prove. Blockchain You Can Trust.
            </h1>
            <div className="max-w-4xl mx-auto space-y-2 md:space-y-3 mb-12">
              <p className="text-xl md:text-2xl font-semibold text-foreground/90 leading-relaxed">
                The First Blockchain-Native Compliance Automation Platform
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Built on Algorand; XRPL & XDC next. We turn SBOMs, code, configs, and smart contracts into audit-ready evidence, ZK proofs, and immutable on-chain attestations for Web3, finance, healthcare, and government.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/schedule-call">
              <Button size="lg" className="px-8 py-4 text-lg">
                Schedule a call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                See How It Works
              </Button>
            </Link>
            <Button asChild size="lg" className="px-8 py-4 text-lg">
              <a href="mailto:Maranda@compliledger.com?subject=Pilot%20Program%20Request&body=Hello%20CompliLedger%20Team,%0A%0AI%20would%20like%20to%20request%20access%20to%20the%20CompliLedger%20Pilot%20Program.%0A%0APlease%20share%20the%20next%20steps,%20timeline,%20and%20any%20prerequisites%20for%20participation.%20I%20am%20happy%20to%20provide%20additional%20details%20about%20our%20team%20and%20use%20case.%0A%0AThank%20you,">
                Join Pilot Program
              </a>
            </Button>
          </div>
          <div className="mt-16">
            <p className="text-sm text-muted-foreground mb-6">SUPPORTED COMPLIANCE FRAMEWORKS</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 mb-2 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ordgGltxJ9IOadHsMpdh-MGRJcorfG84Bg&s"
                    alt="SOC 2"
                    className="h-12 w-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ordgGltxJ9IOadHsMpdh-MGRJcorfG84Bg&s';
                    }}
                  />
                </div>
                <span className="text-sm font-medium">SOC 2</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 mb-2 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm">
                  <img
                    src="https://www.ardentprivacy.ai/assets/img/gdpr_act.png"
                    alt="GDPR"
                    className="h-12 w-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://www.ardentprivacy.ai/assets/img/gdpr_act.png';
                    }}
                  />
                </div>
                <span className="text-sm font-medium">GDPR</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 mb-2 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm">
                  <img
                    src="https://www.hipaajournal.com/wp-content/uploads/2021/12/HIPAA-civil-monetary-penalties-2021.jpg"
                    alt="HIPAA"
                    className="h-12 w-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://www.hipaajournal.com/wp-content/uploads/2021/12/HIPAA-civil-monetary-penalties-2021.jpg';
                    }}
                  />
                </div>
                <span className="text-sm font-medium">HIPAA</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 mb-2 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm">
                  <img
                    src="https://hyperproof.io/wp-content/uploads/2023/06/framework-informational-page_hero-badges-sox.png"
                    alt="SOX"
                    className="h-12 w-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://hyperproof.io/wp-content/uploads/2023/06/framework-informational-page_hero-badges-sox.png';
                    }}
                  />
                </div>
                <span className="text-sm font-medium">SOX</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 mb-2 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm">
                  <img
                    src="https://www.qassurance.com/wp-content/uploads/QAssurance-logos.png"
                    alt="ISO 27001"
                    className="h-12 w-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://www.qassurance.com/wp-content/uploads/QAssurance-logos.png';
                    }}
                  />
                </div>
                <span className="text-sm font-medium">ISO 27001</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 mb-2 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0IX-vabefXDYofRMrkzWgXMaDiLB0RQXpQ&s"
                    alt="NIST"
                    className="h-12 w-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0IX-vabefXDYofRMrkzWgXMaDiLB0RQXpQ&s';
                    }}
                  />
                </div>
                <span className="text-sm font-medium">NIST</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 mb-2 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm">
                  <img
                    src="https://www.holmsecurity.com/hs-fs/hubfs/Website%20material/Images/PCI%20DSS_logo.png?width=740&name=PCI%20DSS_logo.png"
                    alt="PCI DSS"
                    className="h-12 w-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://www.holmsecurity.com/hs-fs/hubfs/Website%20material/Images/PCI%20DSS_logo.png?width=740&name=PCI%20DSS_logo.png';
                    }}
                  />
                </div>
                <span className="text-sm font-medium">PCI DSS</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 mb-2 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm">
                  <img
                    src="https://www.ardentprivacy.ai/assets/img/CCPA_logo.jpg"
                    alt="CCPA"
                    className="h-12 w-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://www.ardentprivacy.ai/assets/img/CCPA_logo.jpg';
                    }}
                  />
                </div>
                <span className="text-sm font-medium">CCPA</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Slim Banner: Blockchain-Native by Design */}
      <Section variant="default" className="py-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="max-w-2xl">
                <h3 className="text-sm font-semibold tracking-wide">Blockchain-Native by Design</h3>
                <p className="text-sm text-muted-foreground">Evidence commitments anchored on Algorand today. XRPL and XDC integrations on our roadmap.</p>
              </div>
              <ul className="flex flex-wrap items-center gap-3" aria-label="Supported and planned networks">
                <li className="px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                  Algorand <span className="ml-2 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-300 px-2 py-0.5">Live</span>
                </li>
                <li className="px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400">
                  XRPL <span className="ml-2 text-xs font-medium rounded-full bg-amber-500/20 text-amber-300 px-2 py-0.5">Roadmap</span>
                </li>
                <li className="px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400">
                  XDC <span className="ml-2 text-xs font-medium rounded-full bg-amber-500/20 text-amber-300 px-2 py-0.5">Roadmap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Value Proposition Section */}
      <Section variant="default">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="Streamline Compliance with Privacy-Preserving Technology"
            description="CompliLedger transforms how organizations achieve and maintain compliance"
            className="text-center mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-muted/50 p-6 rounded-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Evidence → Attestation</h3>
              <p className="text-muted-foreground">Convert live technical evidence into verifiable, privacy-preserving proofs.</p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Continuous, not quarterly</h3>
              <p className="text-muted-foreground">Detect drift, auto-remediate, and stay audit-ready at all times.</p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Auditor & Legal Friendly</h3>
              <p className="text-muted-foreground">AuditSync™ portal enables scoped, immutable evidence sharing for auditors, regulators, and legal teams.</p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <path d="M16 13H8"/>
                  <path d="M16 17H8"/>
                  <path d="M10 9H8"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">SBOM-first by design</h3>
              <p className="text-muted-foreground">Integrate SBOMs, repos, and cloud configs into compliance workflows.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section variant="blend">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="How CompliLedger Works"
            description="A streamlined approach to compliance management"
            className="text-center mb-12"
          />

          <div className="relative">
            {/* Connecting line */}


            {/* Steps */}
            <div className="space-y-8 md:grid md:grid-cols-5 md:gap-8 md:space-y-0">
              {/* Step 1 */}
              <div className="relative z-10 flex items-start gap-4 md:flex-col md:items-center md:text-center">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">1</div>
                <div>
                  <h3 className="text-lg font-semibold">Connect</h3>
                  <p className="text-muted-foreground text-sm">Repos, SBOMs, cloud accounts, and smart contracts</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex items-start gap-4 md:flex-col md:items-center md:text-center">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">2</div>
                <div>
                  <h3 className="text-lg font-semibold">Map & Ingest</h3>
                  <p className="text-muted-foreground text-sm">To SOX, ISO, FedRAMP, MiCA, HIPAA, PCI, AML/BSA</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex items-start gap-4 md:flex-col md:items-center md:text-center">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">3</div>
                <div>
                  <h3 className="text-lg font-semibold">Continuous Testing</h3>
                  <p className="text-muted-foreground text-sm">For drift, vulnerabilities, and policy violations</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative z-10 flex items-start gap-4 md:flex-col md:items-center md:text-center">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">4</div>
                <div>
                  <h3 className="text-lg font-semibold">Generate Evidence</h3>
                  <p className="text-muted-foreground text-sm">OSCAL, SSP, policies, SOPs automatically</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative z-10 flex items-start gap-4 md:flex-col md:items-center md:text-center">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">5</div>
                <div>
                  <h3 className="text-lg font-semibold">Attest & Share</h3>
                  <p className="text-muted-foreground text-sm">Via ZKPs, VCs, and AuditSync™ portal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/how-it-works">
              <Button variant="default" className="group">
                Learn More About How It Works
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Problem & Mission Section */}
      <Section variant="default">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            subtitle="The Compliance Challenge"
            title="Privacy vs. Transparency"
            description="Organizations face an impossible choice: protect sensitive data or prove regulatory compliance. Traditional approaches force companies to expose confidential information to demonstrate adherence."
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Traditional Compliance Problems</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Data exposure during audits creates security vulnerabilities</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Manual compliance processes are time-consuming and error-prone</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Regulatory requirements constantly evolve, creating operational complexity</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">High costs for compliance infrastructure and specialized personnel</p>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild variant="default" className="group">
                  <Link to="/security">
                    View Security & Privacy
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">CompliLedger Solution</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Zero-knowledge proofs maintain complete data privacy</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Automated compliance monitoring and reporting</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Cryptographically verifiable compliance proofs</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Significant cost reduction through automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Key Capabilities Section */}
      <Section>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            subtitle="Core Technology"
            title="Advanced Cryptographic Compliance"
            description="Leverage cutting-edge zero-knowledge proof technology to demonstrate compliance while maintaining absolute data confidentiality."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="text-center h-full hover-scale">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {capability.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>


      {/* Target Users & Use Cases Section */}
<Section variant="glow">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            subtitle="Industry Applications"
            title="Built for Regulated Industries"
            description="CompliLedger serves organizations across highly regulated sectors that require stringent compliance while handling sensitive data."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Card key={index} className="p-8 hover-scale">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {useCase.industries.map((industry, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {industry}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Choose a solution that fits your team. Transparent, flexible, and audit‑ready from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/solutions">
              <Button size="lg" className="px-8" title="View Pricing">
                Industry Solutions
              </Button>
              </Link>

            </div>
          </div>
        </div>
      </Section>



      {/* Pricing Preview Section
      <Section variant="default" className="text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Compliance That Scales With You.</h2>
          <p className="text-muted-foreground mb-8">From startups to exchanges and defense contractors, CompliLedger adapts to your frameworks, scale, and assurance needs.</p>
          <ul className="grid sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto" role="list" aria-label="Pricing highlights">
            <li className="bg-muted/40 rounded-lg p-4">
              <span className="block font-semibold mb-1">Transparent tiers</span>
              <span className="text-sm text-muted-foreground">For startups, exchanges, and defense contractors.</span>
            </li>
            <li className="bg-muted/40 rounded-lg p-4">
              <span className="block font-semibold mb-1">Pay as you scale</span>
              <span className="text-sm text-muted-foreground">Seats, usage, and add‑ons match your growth.</span>
            </li>
            <li className="bg-muted/40 rounded-lg p-4">
              <span className="block font-semibold mb-1">Audit‑ready always</span>
              <span className="text-sm text-muted-foreground">Continuous evidence and attestations.</span>
            </li>
          </ul>
          <div className="mt-8">
            <Link to="/pricing" aria-label="View CompliLedger pricing plans">
              <Button size="lg" className="px-8" title="View Pricing">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </Section> */}


      {/* Call to Action Section */}
      <Section variant="blend" className="text-center">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader
            subtitle="Ready to Transform Compliance?"
            title="Experience Privacy-Preserving Compliance"
            description="Join forward-thinking organizations that have eliminated the trade-off between data privacy and regulatory compliance."
          />

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/demo">
              <Button size="lg" className="px-8 py-4 text-lg">
                Schedule a call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg" asChild>
              <a href="https://docs.google.com/document/d/1mPCmvQioDrfeFYTgTwlpI49EDOKIP5gJ" target="_blank" rel="noopener noreferrer">
                View Whitepaper
              </a>
            </Button>
            <Link to="/how-it-works">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Explore the Technology
              </Button>
            </Link>
          </div>
        </div>
      </Section>

    </Layout>
  );
};

export default Index;
