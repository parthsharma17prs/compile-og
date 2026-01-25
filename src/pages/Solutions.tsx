import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import GeometricPattern from '@/components/GeometricPattern';
import { Building2, Globe, Blocks, ShieldCheck, Landmark, Lock, Cpu, FileText, ArrowRight, CheckCircle, ArrowRightIcon, PlusIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import {TextRevealByWord} from '@/components/ui/text-reveal-by-word';

const Solutions = () => {
  return (
    <Layout>
      {/* PAGE HERO (restored original layout) */}
      <Section variant="default" spacing="xl" className="py-0 min-h-screen min-h-svh flex items-center">
        <div className="absolute right-6 bottom-24 max-w-[55vw] text-md md:text-xl lg:text-3xl xl:text-3xl font-extrabold uppercase text-foreground/90 px-2 py-1 text-right pointer-events-none">
           Built on <span className="bg-red-500 px-2 rounded-sm">Cryptographic</span>Compliance
        </div>
        <div
          aria-hidden
          style={{ willChange: "transform" }}
          className="absolute right-6 bottom-6 pointer-events-none select-none text-[2rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[16rem] font-extrabold uppercase leading-none opacity-10 tracking-tight"
        >
        solution
        </div>
      </Section>


      {/* INTRO TEXT SECTION (restored original) */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord
              text="Industry Solutions Built on Cryptographic Compliance
Clear, auditable compliance workflows tailored to your domain with privacy-preserving proofs."
              className=""
            />

            <div className="flex items-center justify-center gap-2 mt-4">
              <Button variant="outline">Request Security Brief </Button>
              <Button>
                View Privacy Architecture <ArrowRightIcon className="size-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Solutions Overview */}
      <Section variant="default" spacing="xl">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader

            title="Industry Solutions Built on Cryptographic Compliance"
            description="Clear, auditable compliance workflows tailored to your domain — with privacy-preserving proofs."
            className="text-center mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Financial Services & Tokenization */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-primary/30 via-primary/10 to-transparent hover:from-primary/60 transition-colors">
            <Card id="financial" className="h-full rounded-2xl border-border/60 bg-background/60 backdrop-blur shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5">
              <CardHeader className="px-6 pt-6">
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
              <CardContent className="space-y-6 px-6 pb-6">
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
              <CardHeader className="px-6 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/20 shadow-sm group-hover:shadow-primary/20">
                    <Blocks className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 hidden sm:flex items-center justify-center ring-1 ring-primary/20 shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="mt-4">proof and Compliance for Decentralized Protocols.</CardTitle>
                <CardDescription className="mt-1">
                  <span className="text-xs text-muted-foreground">MiCA • FATF Travel Rule • OFAC • SEC/CFTC Digital Asset • GDPR</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 px-6 pb-6">
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
              <CardHeader className="px-6 pt-6">
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
              <CardContent className="space-y-6 px-6 pb-6">
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
              <CardHeader className="px-6 pt-6">
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
              <CardContent className="space-y-6 px-6 pb-6">
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
              <CardHeader className="px-6 pt-6">
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
                  <span className="text-xs text-muted-foreground">HIPAA • HITECH • GDPR Health Data • HIproof</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 px-6 pb-6">
                <p className="text-muted-foreground">
                  Healthcare organizations must balance security with compliance for PHI. CompliLedger integrates access control evidence, encryption checks, and SBOM analysis into HIPAA compliance workflows — reducing audit burden and strengthening patient proof.
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
            <div className="group relative rounded-2xl p-[1px]  hover:from-primary/60 transition-colors">
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
       {/* NEW SECTION — Replace Trust with Continuous Proof */}
      <Section spacing="xl" className="pt-8">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader title="Replace Trust with Continuous Proof" />

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mt-4">
            CompliLedger turns compliance into a shared, continuously verifiable proof system. Controls are enforced in real time, evidence is generated automatically, and auditors and regulators can verify compliance without exposing sensitive data.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-6 border rounded-lg text-center">
              <div className="text-2xl md:text-3xl font-extrabold">60–80%</div>
              <div className="text-sm text-muted-foreground mt-2">reduction in audit preparation</div>
            </div>

            <div className="p-6 border rounded-lg text-center">
              <div className="text-2xl md:text-3xl font-extrabold">80–90%</div>
              <div className="text-sm text-muted-foreground mt-2">evidence reuse across frameworks</div>
            </div>

            <div className="p-6 border rounded-lg text-center">
              <div className="text-2xl md:text-3xl font-extrabold">40–60%</div>
              <div className="text-sm text-muted-foreground mt-2">lower compliance operating cost</div>
            </div>

            <div className="p-6 border rounded-lg text-center">
              <div className="text-2xl md:text-3xl font-extrabold">30–50%</div>
              <div className="text-sm text-muted-foreground mt-2">engineering time reclaimed</div>
            </div>

            <div className="p-6 border rounded-lg text-center md:col-span-2 lg:col-auto">
              <div className="text-2xl md:text-3xl font-extrabold">50–70%</div>
              <div className="text-sm text-muted-foreground mt-2">fewer audit findings</div>
            </div>
          </div>
        </div>
      </Section>
      {/* SECTION — FINAL CTA (match other pages) */}
      <Section className="text-center">
        <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-4 py-8">
          <PlusIcon
            className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6"
            strokeWidth={1}
          />
          <PlusIcon
            className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6"
            strokeWidth={1}
          />
          <PlusIcon
            className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6"
            strokeWidth={1}
          />
          <PlusIcon
            className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6"
            strokeWidth={1}
          />

          <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
          <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />

          <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed" />

          <div className="space-y-1">
            <h2 className="text-center font-bold text-2xl">Start private. Scale compliant.</h2>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Link to="/contact"><Button variant="outline">Contact Sales</Button></Link>
            <Link to="/demo"><Button>
              Get Started <ArrowRightIcon className="size-4 ml-1" />
            </Button></Link>
          </div>
        </div>
      </Section>

    </Layout>
  );
};

export default Solutions;
