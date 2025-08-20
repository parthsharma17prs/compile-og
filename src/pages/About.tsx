import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import GeometricPattern from '@/components/GeometricPattern';
import { 
  Shield, 
  Eye, 
  Lock, 
  Zap, 
  Target, 
  Heart,
  Mail,
  ArrowRight,
  Lightbulb,
  Globe,
  Award
} from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: Shield,
      title: "Compliance by Design",
      description: "Every component is architected with regulatory requirements embedded from inception, ensuring continuous adherence."
    },
    {
      icon: Lock,
      title: "Security First",
      description: "Zero-trust architecture across all systems with cryptographic verification at every layer of operation."
    },
    {
      icon: Eye,
      title: "Privacy by Default",
      description: "Zero-Knowledge Proofs ensure data minimization while maintaining full compliance verification capabilities."
    },
    {
      icon: Zap,
      title: "Transparency & Trust",
      description: "Immutable, cryptographically verifiable audit trails that provide complete operational transparency."
    }
  ];

  const missionPoints = [
    {
      icon: Target,
      title: "Traditional Challenges",
      description: "Legacy compliance systems create bottlenecks, expose sensitive data, and lack real-time verification capabilities."
    },
    {
      icon: Globe,
      title: "Regulatory Evolution",
      description: "Modern regulators demand continuous oversight across finance, healthcare, AI systems, and digital infrastructure."
    },
    {
      icon: Lightbulb,
      title: "Innovation Imperative",
      description: "Digital ecosystems require compliance embedded at the protocol level, not as an afterthought."
    }
  ];

  const differentiators = [
    "Native OSCAL and SBOM integration for complete automation",
    "Zero-Knowledge architecture enabling privacy-first attestations", 
    "Multi-framework interoperability across global standards",
    "Composable platform designed for modern digital infrastructure"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Section variant="glow" spacing="xl">
        <GeometricPattern />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold glow-text">
              About <span className="text-gradient">CompliLedger</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of compliance through programmable, provable, and privacy-preserving technology
            </p>
          </div>
        </div>
      </Section>

      {/* Mission Statement */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Our Mission"
            subtitle="Purpose & Vision"
            description="To transform compliance from fragmented manual processes into programmable, cryptographically verifiable foundations for digital trust"
          />

          <div className="max-w-6xl mx-auto space-y-12">
            <Card className="card-glow border-2 border-primary/30 bg-primary/5">
              <CardContent className="p-12 text-center">
                <p className="text-2xl font-semibold leading-relaxed text-foreground">
                  "We believe compliance should accelerate innovation, not hinder it. 
                  Our platform enables organizations to prove regulatory adherence 
                  while protecting their most sensitive data."
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {missionPoints.map((point, index) => (
                <Card key={index} className="card-glow h-full">
                  <CardHeader className="pb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <point.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section variant="blend" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Our Core Values"
            subtitle="Guiding Principles"
            description="The fundamental beliefs that drive our approach to compliance technology and customer relationships"
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {coreValues.map((value, index) => (
              <Card key={index} className="card-glow h-full group hover:border-primary/50 transition-all duration-300">
                <CardHeader className="pb-8">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Leadership Team"
            subtitle="Founding Vision"
            description="Experienced leaders committed to revolutionizing compliance through innovative technology"
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-glow text-center">
              <CardContent className="p-12 space-y-8">
                <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Award className="h-16 w-16 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-space-grotesk font-bold">Maranda Harris</h3>
                  <p className="text-xl text-primary font-medium">
                    Founder & Chief Digital Compliance Officer
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Veteran cybersecurity and compliance architect with leadership experience 
                    at IBM, Deloitte, and Maximus, specializing in digital trust initiatives 
                    and blockchain-based assurance frameworks.
                  </p>
                  <div className="pt-4">
                    <a 
                      href="mailto:maranda@compliledger.com"
                      className="inline-flex items-center space-x-2 text-primary hover:glow-text transition-all text-lg font-medium"
                    >
                      <Mail className="h-5 w-5" />
                      <span>maranda@compliledger.com</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-glow">
              <CardHeader className="pb-8">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl font-space-grotesk font-bold">Our Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  CompliLedger was founded to address the accelerating gap between regulatory 
                  complexity and the need for real-time, privacy-preserving enforcement.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  With deep experience in cybersecurity architecture and compliance automation, 
                  our founder recognized that traditional approaches could not scale with the 
                  demands of modern digital infrastructure.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We built CompliLedger to enable organizations to prove compliance without 
                  compromising privacy, speed, or innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why CompliLedger */}
      <Section variant="blend" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Why CompliLedger"
            subtitle="Competitive Advantages"
            description="The unique capabilities that distinguish us in the compliance automation landscape"
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((feature, index) => (
              <Card key={index} className="card-glow h-full">
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-lg">{index + 1}</span>
                    </div>
                    <p className="font-semibold text-lg leading-relaxed">{feature}</p>
                  </div>
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
              Join Us in Transforming Compliance
            </h2>
            <p className="text-xl text-muted-foreground">
              Partner with CompliLedger to build a future where compliance 
              is continuous, intelligent, and mathematically provable.
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

export default About;