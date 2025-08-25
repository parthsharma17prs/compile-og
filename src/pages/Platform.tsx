import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, GitBranch, Lock, FileCheck, Server, Zap, Code, BarChart3, Users, Settings, Database, Eye, CheckCircle, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import GeometricPattern from '@/components/GeometricPattern';

const Platform = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Continuous Compliance",
      description: "Automated compliance monitoring and reporting that updates in real-time, ensuring you're always audit-ready."
    },
    {
      icon: GitBranch,
      title: "Version Control for Compliance",
      description: "Track every change to your compliance posture with full version history and audit trails."
    },
    {
      icon: Lock,
      title: "Zero-Knowledge Proofs",
      description: "Prove compliance without exposing sensitive data using advanced cryptographic techniques."
    },
    {
      icon: FileCheck,
      title: "Automated Evidence Collection",
      description: "Eliminate manual evidence gathering with automated collection from all your systems and tools."
    }
  ];

  const benefits = [
    {
      title: "For Security Teams",
      items: [
        "Real-time compliance monitoring",
        "Automated evidence collection",
        "Reduced audit preparation time",
        "Centralized policy management"
      ]
    },
    {
      title: "For Engineering Teams",
      items: [
        "Infrastructure as Code (IaC) integration",
        "Automated security controls",
        "Compliance checks in CI/CD",
        "Developer-friendly tooling"
      ]
    },
    {
      title: "For Leadership",
      items: [
        "Executive dashboards",
        "Risk scoring and insights",
        "Vendor compliance tracking",
        "Regulatory change management"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Section variant="glow" className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <ShieldCheck className="h-4 w-4" />
              Platform Overview
            </div>
            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold tracking-tight glow-text">
              One Platform. Continuous, Provable Compliance.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CompliLedger ingests SBOMs, repos, cloud configs, and smart contracts, maps them to frameworks, runs continuous compliance tests, and produces audit-ready evidence with zero-knowledge attestations.
            </p>
            {/* Animated pipeline visual (Repo → SBOM → Controls → Attestation) */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <span className="px-3 py-1 rounded-full bg-background/80 border">Repo</span>
              <ArrowRight className="w-4 h-4 opacity-70" />
              <span className="px-3 py-1 rounded-full bg-background/80 border">SBOM</span>
              <ArrowRight className="w-4 h-4 opacity-70" />
              <span className="px-3 py-1 rounded-full bg-background/80 border">Controls</span>
              <ArrowRight className="w-4 h-4 opacity-70" />
              <span className="px-3 py-1 rounded-full bg-background/80 border">Attestation</span>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/demo">
                <Button size="lg" className="group px-8 btn-glow">
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
      {/* Section 1: Platform Overview */}
      <Section variant="default" spacing="lg">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            subtitle="Platform Overview"
            title="From Evidence to Attestation — Automatically."
            description="Compliance doesn’t have to be static or manual. CompliLedger unifies evidence across your stack and automates the full compliance lifecycle — mapping artifacts to frameworks, testing continuously, and generating audit-ready outputs."
            className="text-center mb-12"
          />

          {/* 3-column features: Mapping, Continuous Testing, Attestation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <GitBranch className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Control Mapping Engine</CardTitle>
                <CardDescription className="text-xs">Repos, SBOMs, configs → frameworks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Automatically map artifacts like SBOMs, repos, cloud configs, and smart contracts to your target frameworks.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Continuous Testing</CardTitle>
                <CardDescription className="text-xs">Compliance testing & drift detection</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Run continuous controls testing with proactive drift detection across cloud, code, and runtime.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Attestation</CardTitle>
                <CardDescription className="text-xs">Zero-knowledge attestations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Generate privacy-preserving attestations and verifiable outputs for auditors, regulators, and partners.</p>
              </CardContent>
            </Card>
          </div>

          {/* Key Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Capabilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Control Mapping Engine (repos, SBOMs, configs → frameworks)</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Continuous Compliance Testing & Drift Detection</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Auto-generated OSCAL/SSP & compliance documentation</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />AuditSync™ for scoped auditor/legal access</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Zero-Knowledge Proofs (ZKPs) & Decentralized Identity (DID/VC)</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Hybrid Architecture: off-chain efficiency, on-chain trust</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Evidence Pipeline</CardTitle>
                <CardDescription>From ingestion to attestations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-3">
                  {['Repos','SBOMs','Cloud Configs','Smart Contracts','Frameworks','Tests','Evidence','Attestations'].map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full bg-background border text-xs">{item}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Section 2: AuditSync™ */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="AuditSync™ Portal"
            title="Audit, Legal, and AML Evidence Sharing — Reimagined."
            description="Stop drowning in screenshots and spreadsheets. AuditSync™ provides auditors, regulators, and legal teams with a scoped, immutable, privacy-preserving evidence portal."
            className="text-center mb-12"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="order-2 md:order-1">
              <CardHeader>
                <CardTitle>Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Scoped Data Rooms per framework/control</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Immutable chain-of-custody trails</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />ZK proofs & verifiable credentials (VCs)</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />AuditSync™ modules for BSA/AML and Legal/eDiscovery</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Export-ready bundles (OSCAL, PDF, regulator formats)</li>
                </ul>
                <div className="mt-6">
                  <Link to="/how-it-works#auditsync">
                    <Button>
                      Explore AuditSync
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </Section>

      {/* Mid-page CTA */}
      <Section variant="default" spacing="md">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">See the Portal in Action</h3>
          <p className="text-muted-foreground mb-4">Schedule a walkthrough or explore how the pipeline works end-to-end.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/demo"><Button className="btn-glow">Book a Demo</Button></Link>
            <Link to="/how-it-works"><Button variant="outline">See How It Works</Button></Link>
          </div>
        </div>
      </Section>

      {/* Section 3: BSA/AML */}
      <Section variant="default" spacing="lg">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            subtitle="BSA/AML & Financial Crime"
            title="Continuous AML & Financial Crime Compliance."
            description="CompliLedger helps financial institutions, exchanges, and fintechs meet AML/BSA obligations by continuously collecting evidence from KYC/KYB systems, sanctions screening, and transaction monitoring tools — then mapping them to regulatory frameworks."
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Capabilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Ingest KYC/KYB workflows & sanctions logs</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Integrate with AML tools (Chainalysis, TRM, Elliptic)</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Immutable SAR filing trails & regulator-ready proofs</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Zero-knowledge attestations for AML control validation</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Applicable Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['BSA','FATF','FinCEN Travel Rule','AMLD6','MiCA','NYDFS BitLicense'].map((s) => (
                    <span key={s} className="px-3 py-1 bg-background rounded-full border text-xs">{s}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Section 4: Legal & eDiscovery */}
      <Section variant="blend" spacing="lg">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            subtitle="Legal & eDiscovery"
            title="Prove Evidence Integrity in Legal Investigations."
            description="For legal teams and investigators, proving authenticity is everything. CompliLedger ensures evidence is timestamped, hashed, and anchored with chain-of-custody verification."
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Immutable evidence chain-of-custody</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Selective disclosure with ZKPs</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />AuditSync™ Legal Module for litigation & regulator requests</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Integration with eDiscovery & case management tools</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Use Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Litigation','Regulatory inquiries','Fraud','IP cases'].map((s) => (
                    <span key={s} className="px-3 py-1 bg-background rounded-full border text-xs">{s}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Section 5: SBOM-as-a-Service */}
      <Section variant="default" spacing="lg">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            subtitle="SBOM-as-a-Service"
            title="SBOMs as Living Compliance Assets."
            description="CompliLedger ingests SBOMs (CycloneDX/SPDX) and transforms them into compliance intelligence, linking vulnerabilities, licensing, and supply-chain risk directly to frameworks."
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Continuous ingestion from CI/CD, registries, and repos</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Policy enforcement for vulnerabilities & licenses</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Auto-remediation via tickets, PRs, or waivers</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Supply-chain compliance proofs (PCI, FedRAMP, DORA)</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Visual</CardTitle>
                <CardDescription>SBOM dependency tree → controls mapping</CardDescription>
              </CardHeader>
              
            </Card>
          </div>
        </div>
      </Section>

      {/* Section 6: ZKP Attestations & DID/VC */}
      <Section variant="blend" spacing="lg">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            subtitle="ZKPs & Decentralized Identity"
            title="Prove Compliance Without Revealing Secrets."
            description="Not all evidence should be public. CompliLedger uses zero-knowledge proofs (ZKPs) and decentralized identity (DID/VC) to prove compliance outcomes without exposing sensitive details."
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Issue verifiable credentials for controls (e.g., ISO, MiCA, HIPAA)</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Generate ZK proofs for evidence without exposing source or data</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Share proofs with regulators, partners, or customers</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-primary mt-1 mr-2" />Enable cross-chain & cross-organization trust</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Proof Badges</CardTitle>
                <CardDescription>Verifiable credentials view</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Encryption Verified','Access Controls Active','SBOM Compliance','Audit Trail Intact'].map((b) => (
                    <span key={b} className="px-3 py-1 rounded-full border bg-background text-xs flex items-center gap-2"><CheckCircle className="w-3 h-3 text-primary" />{b}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="glow" spacing="lg">
        <GeometricPattern className="opacity-50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Visual: Animated lock + blockchain anchor + compliance checkmark */}
            <div className="flex items-center justify-center gap-4 text-primary/80">
              <div className="p-2 rounded-full bg-primary/10 animate-pulse">
                <Lock className="h-6 w-6" />
              </div>
              <div className="p-2 rounded-full bg-primary/10 animate-pulse [animation-delay:150ms]">
                <LinkIcon className="h-6 w-6" />
              </div>
              <div className="p-2 rounded-full bg-primary/10 animate-pulse [animation-delay:300ms]">
                <ShieldCheck className="h-6 w-6" />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold leading-tight">
              Programmable. Provable. Compliance.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              CompliLedger replaces static audits with living, verifiable compliance that scales across industries and frameworks. From AML/BSA to FedRAMP, MiCA, HIPAA, and ISO — we help you prove compliance, continuously.
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

export default Platform;
