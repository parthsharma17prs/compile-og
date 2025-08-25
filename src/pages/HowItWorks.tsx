import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import GeometricPattern from '@/components/GeometricPattern';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  ArrowRight,
  CheckCircle,
  Briefcase,
  GitBranch,
  Landmark,
  HeartPulse,
  Cpu,
  Building2
} from 'lucide-react';

const HowItWorks = () => {
  const verticals = [
    {
      icon: Briefcase,
      title: 'Financial Services & Tokenization (TradFi/RWA)',
      problem:
        'Multiple frameworks (DORA, PCI DSS, Basel III, SOX, AML/BSA) require constant evidence collection.',
      workflow: [
        'Connect banking systems, payment platforms, KYC/KYB tools.',
        'Ingest & Normalize AML transaction logs, PCI evidence, and RWA tokenization workflows.',
        'Map to Frameworks like DORA, PCI, Basel III, BSA.',
        'Continuously Test policies for data residency, encryption, and fraud monitoring.',
        'Generate Evidence for audits and regulators.',
        'Attest & Share proofs with auditors via AuditSync™, reducing exam time.'
      ],
      outcome: 'Faster regulatory exams, lower compliance cost, defensible evidence.'
    },
    {
      icon: GitBranch,
      title: 'Web3 & DeFi',
      problem:
        'Regulators demand transparency, but protocols must protect proprietary code and governance processes.',
      workflow: [
        'Connect smart contracts, DAOs, oracles, and wallets.',
        'Ingest & Normalize smart contract SBOMs, governance changes, and node configs.',
        'Map to Frameworks such as MiCA, FATF Travel Rule, SEC/CFTC guidance, OFAC sanctions, GDPR.',
        'Continuously Test for code drift, dependency vulnerabilities, and governance control compliance.',
        'Generate Evidence (without exposing code) via ZKPs.',
        'Attest & Share ZK proofs with regulators, partners, and investors.'
      ],
      outcome: 'Institutional trust, exchange listings, and regulator confidence.'
    },
    {
      icon: Building2,
      title: 'Exchanges (AML/BSA Compliance & Licensing)',
      problem:
        'Exchanges face the highest AML/BSA oversight (Travel Rule, FATF, BitLicense).',
      workflow: [
        'Connect exchange KYC/KYB systems, sanction screening, and transaction monitoring tools.',
        'Ingest & Normalize user onboarding logs, case management data, and SAR reports.',
        'Map to Frameworks (BSA, FATF, AMLD6, NYDFS BitLicense, MiCA).',
        'Continuously Test AML transaction monitoring and Travel Rule compliance.',
        'Generate Evidence for regulatory exams and licensing renewals.',
        'Attest & Share immutable SAR trails and AML proofs via AuditSync™.'
      ],
      outcome: 'Faster licensing approvals, reduced enforcement risk, exam-ready at all times.'
    },
    {
      icon: Landmark,
      title: 'Government & Defense (FedRAMP/RMF/OSCAL)',
      problem: 'RMF/FedRAMP cycles are slow, static, and paper-heavy.',
      workflow: [
        'Connect cloud environments, CI/CD pipelines, and security tools.',
        'Ingest & Normalize configs, SBOMs, vulnerability reports, and incident logs.',
        'Map to Frameworks (NIST SP 800-53, FedRAMP, DoD RMF IL4–IL6).',
        'Continuously Test controls for drift, patch compliance, and red-team results.',
        'Generate Evidence in OSCAL-native formats (SSPs, POA&Ms).',
        'Attest & Share continuous ATO evidence via AuditSync™.'
      ],
      outcome: 'Accelerated ATOs, living SSPs, compliance-as-code.'
    },
    {
      icon: HeartPulse,
      title: 'Healthcare (HIPAA)',
      problem:
        'PHI protection requires constant proof of safeguards without exposing sensitive data.',
      workflow: [
        'Connect EHRs, identity systems, encryption tools, and incident response logs.',
        'Ingest & Normalize access logs, encryption configs, and audit trails.',
        'Map to Frameworks (HIPAA Security Rule, HITECH, GDPR Health Data, HITRUST).',
        'Continuously Test for access control violations and encryption enforcement.',
        'Generate Evidence automatically for HIPAA auditors.',
        'Attest & Share proofs of encryption and access controls with partners via ZKPs.'
      ],
      outcome: 'Stronger patient trust, faster due diligence, reduced audit overhead.'
    },
    {
      icon: Cpu,
      title: 'AI & Enterprise SaaS (FedRAMP, ISO 27001 / PCI / DORA)',
      problem:
        'SaaS and AI companies scale fast — but FedRAMP, ISO, and PCI compliance are resource-heavy.',
      workflow: [
        'Connect repos, CI/CD, SBOMs, identity providers, and incident tools.',
        'Ingest & Normalize SBOMs, configs, vulnerability scans, and policies.',
        'Map to Frameworks (ISO 27001, PCI DSS, DORA, NIST AI RMF).',
        'Continuously Test configs, dependencies, AI/ML risk controls.',
        'Generate Evidence for FedRAMP audits, ISO certs, PCI DSS reports.',
        'Attest & Share compliance outcomes with customers and auditors.'
      ],
      outcome: 'Faster audits, continuous readiness, trust signals for enterprise buyers.'
    }
  ];

  const flowSteps = ['Connect', 'Ingest', 'Map', 'Test', 'Generate', 'Attest'];

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

      {/* Industry Workflows (Tabs) */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Industry Workflows"
            subtitle="Purpose-Built for Your Domain"
            description="End-to-end compliance automation tailored to your industry — with privacy-preserving attestations and immutable audit trails"
          />
          <div className="max-w-7xl mx-auto">
            <Tabs 
              defaultValue={`v0`}
              className="w-full space-y-4"
            >
              <div className="w-full overflow-x-auto pb-2">
                <TabsList className="w-full flex flex-nowrap gap-1 p-1 bg-secondary/10 rounded-lg border border-border">
                  {verticals.map((v, idx) => (
                    <TabsTrigger 
                      key={`t${idx}`} 
                      value={`v${idx}`} 
                      className="px-4 py-2 text-sm font-medium whitespace-nowrap data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                    >
                      <v.icon className="h-4 w-4 mr-2 inline-block" />
                      {v.title.split(' (')[0]}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {verticals.map((v, idx) => (
                <TabsContent key={`c${idx}`} value={`v${idx}`} className="pt-2">
                  <Card className="card-glow">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <v.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl font-semibold">{v.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <p className="text-sm uppercase tracking-wide text-primary font-medium mb-2">Problem</p>
                        <p className="text-muted-foreground leading-relaxed">{v.problem}</p>
                      </div>

                      {/* Workflow Graphic */}
                      <div>
                        <p className="text-sm uppercase tracking-wide text-primary font-medium mb-3">Workflow Overview</p>
                        <div className="flex flex-wrap items-center gap-2">
                          {flowSteps.map((s, i) => (
                            <span key={s} className="inline-flex items-center gap-2">
                              <span className="px-3 py-1 rounded-full bg-secondary/30 text-sm font-medium">{s}</span>
                              {i < flowSteps.length - 1 && (
                                <ArrowRight className="h-4 w-4 text-primary" />
                              )}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Detailed Steps (6-step rhythm) */}
                      <div>
                        <p className="text-sm uppercase tracking-wide text-primary font-medium mb-2">Detailed Steps</p>
                        <ol className="space-y-2 list-decimal list-inside">
                          {v.workflow.map((item, i) => (
                            <li key={i} className="leading-relaxed">
                              <span className="inline-flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div>
                        <p className="text-sm uppercase tracking-wide text-primary font-medium mb-2">Outcome</p>
                        <p className="font-medium">{v.outcome}</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section variant="glow" spacing="lg">
        <GeometricPattern className="opacity-50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold leading-tight">
              Every Industry. Every Framework. One Proven Workflow.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you're a bank, a DeFi protocol, an exchange, or a government contractor, 
              CompliLedger replaces static audits with continuous, provable compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link to="/demo">
                <Button size="lg" className="btn-glow px-8">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button variant="outline" size="lg" className="px-8">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default HowItWorks;