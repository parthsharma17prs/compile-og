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
  CheckCircle
} from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: Shield,
      title: "Integrity First",
      description: "Security and trust are non-negotiable.",
      color: "text-foreground"
    },
    {
      icon: Zap,
      title: "Innovation with Purpose",
      description: "We build to solve real compliance pain points.",
      color: "text-foreground"
    },
    {
      icon: Lock,
      title: "Privacy by Design",
      description: "Prove what's required, protect what's sensitive.",
      color: "text-foreground"
    },
    {
      icon: Globe,
      title: "Collaboration",
      description: "Built for auditors, regulators, and enterprises alike.",
      color: "text-foreground"
    },
    {
      icon: Target,
      title: "Resilience",
      color: "text-foreground",
      description: "Compliance isn't one-and-done — it's continuous."
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
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold glow-text">
              Redefining Compliance for a <span className="text-gradient">Programmable World</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Building the future of compliance through strategic partnerships,
              technology integrations, and collaborative innovation
            </p>

            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              CompliLedger is on a mission to make compliance programmable, provable, and privacy-preserving — across finance, Web3, government, healthcare, and enterprise SaaS.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {['Finance', 'Web3', 'Healthcare', 'SaaS', 'Government'].map((industry) => (
                <div key={industry} className="px-4 py-2 bg-foreground/5 backdrop-blur-sm rounded-full border border-foreground/10 text-sm font-medium text-foreground/80 hover:bg-foreground/5 transition-colors">
                  {industry}
                </div>
              ))}
            </div>


          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section variant="default" spacing="xl" className="relative bg-background">
        <div className="absolute inset-0 bg-grid-foreground/5 [mask-image:linear-gradient(0deg,white,transparent)]" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3 space-y-2 sticky top-24">
                <span className="text-sm font-medium text-foreground/80">Our Mission</span>
                <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold tracking-tight">
                  Make compliance <span className="text-foreground/90">continuous</span> and <span className="text-foreground/90">provable</span>.
                </h2>
              </div>

              <div className="md:w-2/3 space-y-6 text-lg text-foreground/70 leading-relaxed">
                <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-foreground/10 shadow-sm">
                  <div className="h-12 w-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-6 border border-foreground/10">
                    <Lightbulb className="h-6 w-6 text-foreground/80" />
                  </div>
                  <p className="mb-6">
                    We believe compliance should not be a static, point-in-time checklist. Instead, it should be continuous, verifiable, and automated — keeping pace with modern software, digital assets, and regulatory demands.
                  </p>
                  <p>
                    CompliLedger turns SBOMs, repos, configs, and smart contracts into audit-ready evidence and zero-knowledge attestations — so businesses can prove compliance without slowing innovation.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-foreground/5 p-4 rounded-xl border border-foreground/10 hover:border-foreground/20 transition-colors">
                    <h4 className="font-medium mb-2 text-foreground/90">For Enterprises</h4>
                    <p className="text-sm text-foreground/60">Streamline audits and reduce compliance overhead by up to 70%</p>
                  </div>
                  <div className="bg-foreground/5 p-4 rounded-xl border border-foreground/10 hover:border-foreground/20 transition-colors">
                    <h4 className="font-medium mb-2 text-foreground/90">For Auditors</h4>
                    <p className="text-sm text-foreground/60">Verify compliance in real-time with cryptographic proof</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Vision */}
      <Section variant="glow" spacing="xl" className="relative overflow-hidden py-24 md:py-32">
        <GeometricPattern className="opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Our Vision
              </span>
              <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold leading-tight">
                Trust, <span className="text-foreground/90">Verified</span>.
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                The future of compliance isn't about paperwork — it's about proof. We envision a world where:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: 'Real-time Auditing',
                  description: 'Evidence is machine-readable and auditable in real time.'
                },
                {
                  title: 'Privacy-Preserving',
                  description: 'Attestations are verifiable without exposing sensitive data.'
                },
                {
                  title: 'Seamless Collaboration',
                  description: 'Regulators, auditors, and enterprises share trust at digital speed.'
                }
              ].map((item, index) => (
                <div key={index} className="group p-6 bg-background/80 backdrop-blur-sm rounded-2xl border border-foreground/10 hover:border-foreground/20 transition-all hover:shadow-lg">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-medium mb-2 text-foreground/90">{item.title}</h4>
                  <p className="text-foreground/60 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section variant="blend" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="What We Stand For."
            description=""
          />

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group relative h-full bg-background rounded-xl border border-foreground/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-full p-6 group-hover:bg-foreground/2.5 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center mb-4 group-hover:bg-foreground/10 transition-colors">
                    <value.icon className="h-5 w-5 text-foreground/80" />
                  </div>
                  <h3 className="text-lg font-medium mb-2 text-foreground/90 group-hover:text-foreground transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Our Team */}
      <Section variant="default" spacing="xl" className="relative">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,white,transparent)]" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white mb-4">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold tracking-tight mb-4">
              Led by <span className="text-white">Compliance and Security</span> Experts.
            </h2>
            <p className="text-white/70">
              Our team brings deep experience across cybersecurity, compliance automation, blockchain, and AI. We've worked with Fortune 500 enterprises, government agencies, and startups alike.
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Founder Card (left) */}
            <div className="group relative h-full bg-gradient-to-br from-white/5 to-white/5 rounded-2xl p-0.5 overflow-hidden">
              <div className="h-full bg-black/80 backdrop-blur-sm rounded-[calc(1rem-1px)] p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <img src="https://media.licdn.com/dms/image/v2/D5603AQHlC1rJpeqdnQ/profile-displayphoto-shrink_400_400/B56ZcXd8zaHwAo-/0/1748445418119?e=1758758400&v=beta&t=gUx5-3218nZcuOMnqvoYkaFzvb-8TkdvZgimvOut26A" alt="Maranda Harris" className="w-32 h-32 rounded-full object-cover border border-white/20" />
                    <div className="absolute -bottom-2 -right-2 bg-white text-black text-xs font-medium px-3 py-1 rounded-full">
                      Founder
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-space-grotesk font-bold">Maranda Harris</h3>
                    <p className="text-white font-medium">Chief Digital Compliance Officer</p>
                    <p className="text-white/70 text-sm mb-4">Veteran cybersecurity and compliance architect with experience at IBM, Deloitte, and Maximus, specializing in digital trust initiatives and blockchain-based assurance frameworks.</p>
                    <Link to="/founder" className="block w-full">
                      <Button variant="outline" className="w-full group border-white/30 hover:bg-white/10 text-white">
                        About Our Founder
                        <ArrowRight className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Advisory board / Partners (right) */}
            <div className="bg-black/80 backdrop-blur-sm p-8 rounded-2xl border border-white/30 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-space-grotesk font-bold">Advisory Board & Partners</h3>
              </div>
              <p className="text-white/70 mb-6">
                We collaborate with leaders in compliance, blockchain, and cybersecurity. Logos below are placeholders and will be replaced as partnerships are confirmed.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
                {['Algorand', 'Ripple', 'Hedera', 'IBM'].map((partner, i) => (
                  <div key={i} className="h-14 rounded-lg bg-white/70 text-black/80 flex items-center justify-center text-sm font-medium border border-white/60">
                    {partner}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/30">
              <Link to="/partners">
                <Button variant="outline" className="w-full group">
                  Partner with Us
                  <ArrowRight className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Journey */}
      <Section variant="blend" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Our Journey"
            description="From Frustration to Innovation."
          />
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed border border-border/60 rounded-2xl p-6 bg-muted/20">
            <p>
              CompliLedger was founded on the insight that traditional compliance platforms (GRC, audit prep tools) weren’t built for today’s world. They rely on manual inputs, static reports, and point-in-time certifications — while businesses move at digital speed.
            </p>
            <p>
              We built CompliLedger to bridge the gap between innovation and regulation, combining blockchain proofs, AI-driven automation, and auditor-friendly workflows.
            </p>
          </div>
        </div>

      </Section>

      {/* Join Us */}
      <Section variant="glow" spacing="lg">
        <GeometricPattern className="opacity-50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold">Let’s Prove Compliance Together.</h2>
            <p className="text-xl text-muted-foreground">Whether you’re an enterprise, auditor, exchange, or regulator — CompliLedger is designed for you. Together, we can make compliance continuous, collaborative, and provable.</p>
            <Link to="/demo" className="inline-block mt-8">
              <Button size="lg" className="btn-glow transition-transform motion-safe:hover:-translate-y-0.5">
                Book a Demo
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