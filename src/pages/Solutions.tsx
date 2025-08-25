import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import GeometricPattern from '@/components/GeometricPattern';
import { Building2, Globe, Blocks, ShieldCheck, Landmark, Lock, Cpu, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Section variant="glow" className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold tracking-tight">
              Industry Solutions, Proven by Cryptography
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building continuous, verifiable compliance for Financial Services, Web3, Exchanges, Government, Healthcare, and Enterprise SaaS.
            </p>
          </div>
        </div>
        <GeometricPattern className="opacity-40" />
      </Section>
      {/* Solutions Overview */}
      <Section variant="default" spacing="xl">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            subtitle="Solutions"
            title="Industry Solutions Built on Cryptographic Compliance"
            description="Clear, auditable compliance workflows tailored to your domain — with privacy-preserving proofs."
            className="text-center mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Financial Services & Tokenization */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-primary/30 via-primary/10 to-transparent hover:from-primary/60 transition-colors">
            <Card id="financial" className="h-full rounded-2xl border-border/60 bg-background/60 backdrop-blur shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/20 shadow-sm group-hover:shadow-primary/20">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 hidden sm:flex items-center justify-center ring-1 ring-primary/20 shadow-sm">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="mt-4">Compliance for Banks, Fintechs, and Tokenization.</CardTitle>
                <CardDescription className="mt-1">
                  <span className="text-xs text-muted-foreground">DORA • PCI DSS • SOX • Basel III • AML/BSA</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Traditional financial institutions and tokenization platforms face heavy oversight and fragmented compliance requirements. CompliLedger automates evidence collection, maps controls to frameworks, and provides auditor-ready attestations for financial and tokenized ecosystems.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>Continuous evidence from KYC, AML, and payment systems</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>Automated policy → control mapping for DORA, PCI DSS, Basel III</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>Real-time proofs for RWA/tokenization compliance</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>AuditSync™ portals for regulators and auditors</span></div>
                </div>
                <Link to="/solutions#financial">
                  <Button size="sm" className="mt-2 transition-transform group-hover:translate-x-0.5">
                    Explore Financial Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            </div>

            {/* Web3 & DeFi */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-primary/30 via-primary/10 to-transparent hover:from-primary/60 transition-colors">
            <Card id="web3" className="h-full rounded-2xl border-border/60 bg-background/60 backdrop-blur shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/20 shadow-sm group-hover:shadow-primary/20">
                    <Blocks className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 hidden sm:flex items-center justify-center ring-1 ring-primary/20 shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="mt-4">Trust and Compliance for Decentralized Protocols.</CardTitle>
                <CardDescription className="mt-1">
                  <span className="text-xs text-muted-foreground">MiCA • FATF Travel Rule • OFAC • SEC/CFTC Digital Asset • GDPR</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  DeFi protocols and Web3 platforms need to prove they are safe and compliant — without exposing proprietary code or sensitive data. CompliLedger provides continuous compliance proofs, ZKP attestations, and smart contract SBOM analysis to meet regulatory expectations while preserving decentralization.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>Smart contract ingestion &amp; SBOM mapping</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>Continuous compliance testing for upgrades &amp; governance</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>ZKPs to prove security &amp; AML checks without revealing raw data</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>DID/VC credentialing for DAOs and liquidity providers</span></div>
                </div>
                <Link to="/solutions#web3">
                  <Button size="sm" className="mt-2 transition-transform group-hover:translate-x-0.5">
                    Explore Web3 & DeFi Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            </div>

            {/* Exchanges */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-primary/30 via-primary/10 to-transparent hover:from-primary/60 transition-colors">
            <Card id="exchanges" className="h-full rounded-2xl border-border/60 bg-background/60 backdrop-blur shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/20 shadow-sm group-hover:shadow-primary/20">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 hidden sm:flex items-center justify-center ring-1 ring-primary/20 shadow-sm">
                    <Blocks className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="mt-4">Exchange-Grade AML & Licensing Compliance.</CardTitle>
                <CardDescription className="mt-1">
                  <span className="text-xs text-muted-foreground">BSA/"Genius" • FinCEN Travel Rule • FATF • AMLD6 • MiCA • NYDFS BitLicense</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Crypto and digital asset exchanges are under the strictest AML/BSA oversight globally. CompliLedger enables exchanges to demonstrate compliance continuously — from KYC/KYB onboarding to FATF Travel Rule reporting — with immutable evidence trails and regulator-facing attestations.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>Continuous monitoring of KYC/KYB, transaction logs, and sanctions checks</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>Integration with AML partners (Chainalysis, Elliptic, TRM Labs)</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>Proof-ready SAR filing trails</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>ZK proofs for regulator reports without disclosing customer PII</span></div>
                </div>
                <Link to="/solutions#exchanges">
                  <Button size="sm" className="mt-2 transition-transform group-hover:translate-x-0.5">
                    Explore Exchange Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            </div>

            {/* Government & Defense */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-primary/30 via-primary/10 to-transparent hover:from-primary/60 transition-colors">
            <Card id="government" className="h-full rounded-2xl border-border/60 bg-background/60 backdrop-blur shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/20 shadow-sm group-hover:shadow-primary/20">
                    <Landmark className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 hidden sm:flex items-center justify-center ring-1 ring-primary/20 shadow-sm">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="mt-4">Modernizing Government Compliance.</CardTitle>
                <CardDescription className="mt-1">
                  <span className="text-xs text-muted-foreground">FedRAMP • NIST SP 800-53 • DoD RMF IL4–IL6 • OSCAL</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Government contractors and defense programs face slow, paper-heavy compliance cycles. CompliLedger accelerates authorizations by automating OSCAL documentation, enabling continuous ATO workflows, and providing auditor-ready evidence portals.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>OSCAL-native generation of SSPs and controls</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>Continuous RMF compliance with drift detection</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>Support for IL4, IL5, IL6 impact levels</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>Evidence-sharing portals for auditors and government regulators</span></div>
                </div>
                <Link to="/solutions#government">
                  <Button size="sm" className="mt-2 transition-transform group-hover:translate-x-0.5">
                    Explore Gov & Defense Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            </div>

            {/* Healthcare */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-primary/30 via-primary/10 to-transparent hover:from-primary/60 transition-colors">
            <Card id="healthcare" className="h-full rounded-2xl border-border/60 bg-background/60 backdrop-blur shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/20 shadow-sm group-hover:shadow-primary/20">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 hidden sm:flex items-center justify-center ring-1 ring-primary/20 shadow-sm">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="mt-4">Continuous HIPAA & Health Data Compliance.</CardTitle>
                <CardDescription className="mt-1">
                  <span className="text-xs text-muted-foreground">HIPAA • HITECH • GDPR Health Data • HITRUST</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Healthcare organizations must balance security with compliance for PHI. CompliLedger integrates access control evidence, encryption checks, and SBOM analysis into HIPAA compliance workflows — reducing audit burden and strengthening patient trust.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>Automated mapping to HIPAA safeguards &amp; HITECH rules</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>Continuous monitoring of PHI-related systems</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>ZKP attestations to prove encryption &amp; access controls without exposing PHI</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>AuditSync™ evidence rooms for healthcare auditors &amp; regulators</span></div>
                </div>
                <Link to="/solutions#healthcare">
                  <Button size="sm" className="mt-2 transition-transform group-hover:translate-x-0.5">
                    Explore Healthcare Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            </div>

            {/* AI & Enterprise SaaS */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-primary/30 via-primary/10 to-transparent hover:from-primary/60 transition-colors">
            <Card id="enterprise" className="h-full rounded-2xl border-border/60 bg-background/60 backdrop-blur shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/20 shadow-sm group-hover:shadow-primary/20">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 hidden sm:flex items-center justify-center ring-1 ring-primary/20 shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="mt-4">Enterprise-Ready Compliance Automation.</CardTitle>
                <CardDescription className="mt-1">
                  <span className="text-xs text-muted-foreground">SOX • ISO 27001/27701 • PCI DSS • DORA • NIST AI RMF</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  SaaS and AI companies scale fast — but compliance can’t lag behind. CompliLedger helps enterprise teams stay audit-ready year-round, generating SOC 2 evidence, ISO documentation, and PCI attestations automatically.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>GitHub-native compliance checks and integrations</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>Continuous drift detection for configs and SBOMs</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>Auto-generation of FedRAMP evidence &amp; ISO policy packs</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5" /><span>AI/ML control mapping aligned to NIST AI RMF</span></div>
                </div>
                <Link to="/solutions#enterprise">
                  <Button size="sm" className="mt-2 transition-transform group-hover:translate-x-0.5">
                    Explore Enterprise Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            </div>
          </div>
        </div>
      </Section>
      {/* Call to Action */}
      <Section variant="blend" spacing="lg">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Compliance badges */}
            <div className="flex flex-wrap justify-center gap-2">
              {['ISO 27001','FedRAMP','MiCA','HIPAA','PCI DSS'].map((badge) => (
                <span key={badge} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs border border-primary/20">
                  {badge}
                </span>
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold">
              One Platform. Every Framework. Continuous Proof.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              From banks to Web3 protocols, from exchanges to government systems — CompliLedger helps teams move from static audits to programmable, provable compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/demo">
                <Button size="lg" className="btn-glow">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/platform">
                <Button variant="outline" size="lg">
                  Explore Platform
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Solutions;
