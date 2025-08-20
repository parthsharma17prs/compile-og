import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import GeometricPattern from '@/components/GeometricPattern';
import { 
  Building2, 
  Heart, 
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  Code,
  Globe,
  Handshake,
  Network,
  Zap,
  Target
} from 'lucide-react';

const Partners = () => {
  const partnershipTypes = [
    {
      icon: Building2,
      title: "Financial Institutions",
      subtitle: "Digital Asset & Traditional Finance",
      description: "Partner with banks, credit unions, and fintech companies modernizing compliance for digital assets, DeFi protocols, and traditional financial services.",
      benefits: ["Regulatory pathway guidance", "Custom compliance frameworks", "Privacy-preserving audits"]
    },
    {
      icon: Heart,
      title: "Healthcare Organizations", 
      subtitle: "Privacy-First Health Tech",
      description: "Collaborate with healthcare providers and health tech companies implementing HIPAA-compliant systems with advanced privacy protections.",
      benefits: ["Patient data protection", "HIPAA automation", "Cross-border compliance"]
    },
    {
      icon: Shield,
      title: "Government & Defense",
      subtitle: "Federal Compliance Solutions",
      description: "Work with contractors and agencies implementing FedRAMP, CMMC, and other federal compliance requirements with zero-trust architectures.",
      benefits: ["ATO acceleration", "Continuous monitoring", "Supply chain security"]
    }
  ];

  const integrationCapabilities = [
    {
      icon: Network,
      title: "Blockchain Integration",
      description: "Native support for Ethereum, Algorand, XRPL, and emerging blockchain networks for immutable compliance anchoring"
    },
    {
      icon: Code,
      title: "API & SDK Access",
      description: "Comprehensive developer tools for integrating compliance automation into existing workflows and platforms"
    },
    {
      icon: Globe,
      title: "Cloud & Infrastructure",
      description: "Multi-cloud deployment options with integration support for AWS, Azure, GCP, and hybrid environments"
    },
    {
      icon: Zap,
      title: "CI/CD Integration", 
      description: "Seamless integration with DevSecOps pipelines for automated SBOM generation and compliance verification"
    }
  ];

  const supportedStandards = [
    {
      category: "Security Frameworks",
      standards: ["OSCAL", "NIST Cybersecurity Framework", "Zero Trust Architecture", "SBOM Standards"]
    },
    {
      category: "Privacy Technologies",
      standards: ["Zero-Knowledge Proofs", "Verifiable Credentials", "Decentralized Identity", "Privacy-Preserving AI"]
    },
    {
      category: "Regulatory Compliance",
      standards: ["GDPR", "CCPA", "HIPAA", "FedRAMP", "SOC 2", "ISO 27001"]
    },
    {
      category: "Financial Regulations",
      standards: ["MiCA", "Basel III", "NYDFS", "PCI DSS", "Anti-Money Laundering"]
    }
  ];

  const partnershipPrograms = [
    {
      icon: Handshake,
      title: "Technology Partners",
      description: "Joint development and integration partnerships with complementary technology providers",
      features: ["Co-development opportunities", "Technical integration support", "Go-to-market collaboration"]
    },
    {
      icon: Target,
      title: "Solution Partners",
      description: "Partner with consultants and system integrators to deliver comprehensive compliance solutions",
      features: ["Partner enablement programs", "Joint solution development", "Revenue sharing models"]
    },
    {
      icon: Users,
      title: "Academic & Research",
      description: "Collaborate with universities and research institutions on advancing compliance technology",
      features: ["Research collaboration", "Academic licensing", "Student internship programs"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Section variant="glow" spacing="xl">
        <GeometricPattern />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold glow-text">
              Partnership <span className="text-gradient">Ecosystem</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Building the future of compliance through strategic partnerships, 
              technology integrations, and collaborative innovation
            </p>
          </div>
        </div>
      </Section>

      {/* Partnership Types */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Strategic Partnership Areas"
            subtitle="Industry Focus"
            description="We collaborate with organizations across key industries to deliver specialized compliance solutions"
          />

          <div className="max-w-6xl mx-auto space-y-12">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="card-glow border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div className="text-center lg:text-left">
                      <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto lg:mx-0 mb-6">
                        <type.icon className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-2xl font-space-grotesk font-bold mb-2">{type.title}</h3>
                      <p className="text-lg font-medium text-primary">{type.subtitle}</p>
                    </div>
                    
                    <div className="lg:col-span-2 space-y-6">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {type.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {type.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-3 p-3 bg-secondary/20 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="font-medium text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Integration Capabilities */}
      <Section variant="blend" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Integration Ecosystem"
            subtitle="Technical Capabilities"
            description="Seamlessly integrate CompliLedger with your existing technology stack and workflows"
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrationCapabilities.map((capability, index) => (
              <Card key={index} className="card-glow h-full">
                <CardHeader className="pb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <capability.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Supported Standards */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Standards & Frameworks"
            subtitle="Compliance Coverage"
            description="Comprehensive support for global standards and emerging compliance requirements"
          />

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportedStandards.map((group, index) => (
              <Card key={index} className="card-glow">
                <CardHeader className="pb-6">
                  <CardTitle className="text-lg font-semibold text-primary text-center">{group.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {group.standards.map((standard) => (
                    <div key={standard} className="flex items-center space-x-3 p-3 bg-secondary/20 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="font-medium text-sm">{standard}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Partnership Programs */}
      <Section variant="blend" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Partnership Programs"
            subtitle="Collaboration Models"
            description="Multiple ways to partner with CompliLedger and build successful compliance solutions together"
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipPrograms.map((program, index) => (
              <Card key={index} className="card-glow text-center h-full">
                <CardHeader className="pb-8">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <program.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                  <div className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 p-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section variant="glow" spacing="xl">
        <GeometricPattern className="opacity-50" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="card-glow p-12">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold">
                  Partner With Us
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Join our ecosystem of forward-thinking organizations building 
                  the next generation of compliance infrastructure
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button size="lg" className="btn-glow px-8">
                    Explore Partnership
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Link to="/demo">
                    <Button size="lg" variant="outline" className="btn-glow px-8">
                      Schedule Discussion
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Partners;