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
            <span className="text-sm font-medium text-primary mb-4 tracking-wider uppercase block">
              The Future of Regulatory Compliance
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
              CompliLedger: Provable Compliance<br />
              With Zero Data Exposure
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
              Revolutionary compliance platform using zero-knowledge cryptography to prove regulatory adherence 
              without compromising sensitive data privacy.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/demo">
              <Button size="lg" className="px-8 py-4 text-lg">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Learn How It Works
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Data Privacy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">90%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">Instant</div>
              <div className="text-sm text-muted-foreground">Proof Generation</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Problem & Mission Section */}
      <Section variant="blend">
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

      {/* Why CompliLedger Section */}
      <Section variant="blend">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader 
            subtitle="Competitive Advantage"
            title="Why Choose CompliLedger"
            description="The only compliance platform that guarantees both regulatory adherence and complete data privacy through mathematically proven cryptographic methods."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-8 hover-scale">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
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
        </div>
      </Section>

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
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
