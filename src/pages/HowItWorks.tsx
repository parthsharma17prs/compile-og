import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import GeometricPattern from '@/components/GeometricPattern';
import { 
  Upload, 
  Brain, 
  Shield, 
  Download,
  ArrowRight,
  CheckCircle,
  Workflow,
  Database,
  Lock,
  FileText
} from 'lucide-react';

const HowItWorks = () => {
  const workflowSteps = [
    {
      icon: Upload,
      title: "Data Ingestion",
      subtitle: "Secure Upload & Validation",
      description: "Import compliance artifacts including SBOMs, OSCAL documents, configuration files, and audit logs. Our platform automatically validates, hashes, and maps metadata to relevant frameworks.",
      features: ["Multi-format support", "Automated validation", "Metadata mapping", "Secure processing"]
    },
    {
      icon: Brain,
      title: "AI Analysis",
      subtitle: "Intelligent Evidence Processing", 
      description: "Advanced AI algorithms classify artifacts, detect anomalies, and enforce policy requirements. Control mappings are automatically generated across multiple compliance frameworks.",
      features: ["Smart classification", "Anomaly detection", "Policy enforcement", "Framework mapping"]
    },
    {
      icon: Shield,
      title: "Zero-Knowledge Proofs",
      subtitle: "Privacy-Preserving Attestation",
      description: "Generate cryptographic proofs that demonstrate compliance without exposing sensitive data. Verifiable credentials bind organizational identity to attestations.",
      features: ["Privacy preservation", "Cryptographic proofs", "Identity binding", "Verifiable credentials"]
    },
    {
      icon: Download,
      title: "Export & Reporting",
      subtitle: "Audit-Ready Deliverables",
      description: "Export comprehensive compliance reports, signed OSCAL artifacts, and real-time dashboards. All evidence is cryptographically anchored for immutable audit trails.",
      features: ["Multiple formats", "Real-time dashboards", "Immutable records", "Audit trails"]
    }
  ];

  const architectureComponents = [
    {
      icon: Database,
      title: "Input Layer",
      description: "Unified ingestion for SBOMs, OSCAL artifacts, configuration files, and audit logs"
    },
    {
      icon: Brain,
      title: "Policy Engine", 
      description: "AI-powered compliance logic with automated control mapping and anomaly detection"
    },
    {
      icon: Lock,
      title: "Proof Engine",
      description: "Zero-Knowledge Proof generation with verifiable credential identity binding"
    },
    {
      icon: FileText,
      title: "Evidence Layer",
      description: "Immutable storage with blockchain anchoring and cryptographic verification"
    },
    {
      icon: Workflow,
      title: "Output Layer",
      description: "Auditor dashboards, API endpoints, and multiple export formats"
    }
  ];

  const supportedFrameworks = {
    "Government & Defense": ["NIST SP 800-53", "FedRAMP", "CMMC", "RMF"],
    "Financial Services": ["Basel III", "MiCA", "NYDFS", "PCI DSS"],
    "Healthcare & Privacy": ["HIPAA", "GDPR", "CCPA"],
    "Security & Quality": ["SOC 2", "ISO 27001", "ISO 27002"]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <Section variant="glow" spacing="xl">
        <GeometricPattern />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold glow-text">
              How CompliLedger Transforms{' '}
              <span className="text-gradient">Compliance</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From fragmented manual processes to automated, verifiable workflows powered by Zero-Knowledge Proofs and AI
            </p>
          </div>
        </div>
      </Section>

      {/* Workflow Steps */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Four-Step Compliance Workflow"
            subtitle="Process Overview"
            description="Transform your compliance operations through our streamlined, privacy-preserving workflow"
          />
          
          <div className="space-y-20 max-w-7xl mx-auto">
            {workflowSteps.map((step, index) => (
              <Card key={index} className="card-glow border-2 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    {/* Icon & Step Number */}
                    <div className="text-center lg:text-left">
                      <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto lg:mx-0 mb-6 glow-border">
                        <step.icon className="h-16 w-16 text-primary" />
                      </div>
                      <div className="text-4xl font-bold text-primary mb-2">
                        Step {index + 1}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-3xl font-space-grotesk font-bold">{step.title}</h3>
                        <p className="text-xl font-medium text-primary">{step.subtitle}</p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3 p-3 bg-secondary/20 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                {/* Arrow Connector */}
                {index < workflowSteps.length - 1 && (
                  <div className="flex justify-center py-8">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <ArrowRight className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Architecture Overview */}
      <Section variant="blend" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Platform Architecture"
            subtitle="Technical Foundation"
            description="Built on enterprise-grade infrastructure with compliance automation at its core"
          />
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architectureComponents.map((component, index) => (
              <Card key={index} className="card-glow text-center h-full">
                <CardHeader className="pb-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <component.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{component.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{component.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Supported Frameworks */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Multi-Framework Support"
            subtitle="Universal Compliance"
            description="Native support for major regulatory frameworks with automated cross-mapping capabilities"
          />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(supportedFrameworks).map(([category, frameworks], index) => (
              <Card key={index} className="card-glow">
                <CardHeader className="pb-6">
                  <CardTitle className="text-lg font-semibold text-primary text-center">{category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {frameworks.map((framework) => (
                    <div key={framework} className="flex items-center space-x-3 p-3 bg-secondary/20 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="font-medium text-sm">{framework}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section variant="glow" spacing="lg">
        <GeometricPattern className="opacity-50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold">
              Experience the Future of Compliance
            </h2>
            <p className="text-xl text-muted-foreground">
              See how CompliLedger transforms manual compliance processes into automated, 
              verifiable workflows that protect your data while proving regulatory adherence.
            </p>
            <Link to="/demo">
              <Button size="lg" className="btn-glow">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default HowItWorks;