import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import GeometricPattern from "@/components/GeometricPattern";

const Security = () => {
  return (
    <Layout>
     {/* Hero */}
       <Section variant="default" spacing="xl" className="py-0 min-h-screen min-h-svh flex items-center">

          <div className="absolute right-6 bottom-24  max-w-[55vw] text-md md:text-xl lg:text-3xl xl:text-3xl font-extrabold uppercase text-foreground/90 px-2 py-1 text-right pointer-events-none">
              built into the <span className='bg-red-500 px-2 rounded-sm'>architecture</span> </div>

          <div aria-hidden  style={{willChange: 'transform'}} className="absolute right-6 bottom-6  pointer-events-none select-none text-[2rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-extrabold uppercase leading-none opacity-10 tracking-tight">
            security
          </div>

        
    

      </Section>
      {/* SECTION 1 — proof MODEL */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="How CompliLedger establishes proof" />
          <div className="max-w-4xl mx-auto mt-6 space-y-4">
            <p>
              Traditional compliance platforms rely on proof-by-access: centralized systems, broad permissions, and copied
              evidence. CompliLedger uses proof-by-verification.
            </p>
            <p>We prove compliance states cryptographically instead of relying on privileged access to sensitive systems.</p>

            <h4 className="font-semibold mt-4">Core principles</h4>
            <ul className="list-inside list-disc text-foreground/80">
              <li>Verification replaces inspection</li>
              <li>Proof replaces access</li>
              <li>Identity replaces accounts</li>
              <li>Cryptography replaces proof</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* SECTION 2 — SECURITY BY DESIGN */}
      <Section variant="glow" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Designed for adversarial environments" />
          <div className="max-w-4xl mx-auto mt-6 space-y-4">
            <p>CompliLedger assumes:</p>
            <ul className="list-inside list-disc text-foreground/80">
              <li>systems will be attacked</li>
              <li>credentials will be targeted</li>
              <li>insiders may exist</li>
              <li>audit data is sensitive</li>
              <li>regulators require defensibility</li>
            </ul>
            <p>The platform is built to remain proofworthy even when components fail.</p>
          </div>
        </div>
      </Section>

      {/* SECTION 3 — DATA PROTECTION & MINIMIZATION */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Less data. Less risk." />
          <div className="max-w-4xl mx-auto mt-6 space-y-4">
            <h4 className="font-semibold">CompliLedger does not:</h4>
            <ul className="list-inside list-disc text-foreground/80">
              <li>mirror production systems</li>
              <li>scrape logs indiscriminately</li>
              <li>store raw evidence unnecessarily</li>
              <li>resell telemetry</li>
              <li>train AI on customer data</li>
            </ul>

            <h4 className="font-semibold mt-4">Instead:</h4>
            <ul className="list-inside list-disc text-foreground/80">
              <li>Evidence is fingerprinted, not copied</li>
              <li>Proofs are generated, not extracted</li>
              <li>Metadata is minimized</li>
              <li>Retention is controlled</li>
              <li>Exposure is limited by design</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* SECTION 4 — IDENTITY, AUTHENTICITY & NON-REPUDIATION */}
      <Section variant="glow" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Identity without central authority" />
          <div className="max-w-4xl mx-auto mt-6 space-y-4">
            <p>Every compliance action must answer three questions:</p>
            <ol className="list-inside list-decimal text-foreground/80 space-y-1">
              <li>Who issued the proof?</li>
              <li>What was verified?</li>
              <li>When did it occur?</li>
            </ol>

            <p>CompliLedger answers these using:</p>
            <ul className="list-inside list-disc text-foreground/80">
              <li>Decentralized Identifiers (DIDs)</li>
              <li>Verifiable Credentials (VCs)</li>
              <li>Cryptographic signatures</li>
              <li>Revocation mechanisms</li>
            </ul>
            <p>This ensures compliance artifacts are authentic, attributable, and defensible.</p>
          </div>
        </div>
      </Section>

      {/* SECTION 5 — ZERO-KNOWLEDGE VERIFICATION */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Proof without disclosure" />
          <div className="max-w-4xl mx-auto mt-6 space-y-4">
            <p>CompliLedger uses zero-knowledge techniques to verify:</p>
            <ul className="list-inside list-disc text-foreground/80">
              <li>control operation</li>
              <li>policy enforcement</li>
              <li>evidence existence</li>
              <li>audit timing</li>
            </ul>

            <p>without revealing:</p>
            <ul className="list-inside list-disc text-foreground/80">
              <li>internal system architecture</li>
              <li>source code</li>
              <li>logs</li>
              <li>sensitive data</li>
            </ul>
            <p>Zero-knowledge ensures compliance can be proven without expanding the attack surface.</p>
          </div>
        </div>
      </Section>

      {/* SECTION 6 — MULTI-CHAIN VERIFICATION & INTEGRITY */}
      <Section variant="glow" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Tamper resistance across independent networks" />
          <div className="max-w-4xl mx-auto mt-6 space-y-4">
            <p>CompliLedger anchors verification events across three privacy-focused blockchains:</p>

            <h4 className="font-semibold mt-2">Blockchain roles</h4>
            <ul className="list-inside list-disc text-foreground/80">
              <li>Algorand — Immutable timestamps, tamper-resistant anchoring</li>
              <li>Aleo — Private zero-knowledge computation</li>
              <li>Zcash — Shielded attestations and confidential verification</li>
            </ul>

            <p className="mt-2 font-medium">
              No customer data is ever written on-chain — only cryptographic proofs and references.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 7 — TENANT ISOLATION & ACCESS CONTROL */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Hard boundaries — not policy promises" />
          <div className="max-w-4xl mx-auto mt-6 space-y-4">
            <p>Each customer operates within:</p>
            <ul className="list-inside list-disc text-foreground/80">
              <li>isolated execution environments</li>
              <li>cryptographic identity boundaries</li>
              <li>role-scoped permissions</li>
              <li>signed operations</li>
            </ul>
            <p>There are no shared data paths between tenants.</p>
          </div>
        </div>
      </Section>

      {/* SECTION 8 — CONTINUOUS MONITORING & INTEGRITY */}
      <Section variant="glow" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Security is continuous" />
          <div className="max-w-4xl mx-auto mt-6 space-y-4">
            <h4 className="font-semibold">Platform controls</h4>
            <ul className="list-inside list-disc text-foreground/80">
              <li>Continuous compliance testing</li>
              <li>Drift detection</li>
              <li>Evidence integrity checks</li>
              <li>Anomaly detection</li>
              <li>Risk scoring</li>
            </ul>
            <p>Security posture is monitored as systems change — not after incidents occur.</p>
          </div>
        </div>
      </Section>

      {/* SECTION 9 — REGULATORY & FRAMEWORK ALIGNMENT */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Aligned with regulatory expectations" />
          <div className="max-w-4xl mx-auto mt-6 space-y-4">
            <h4 className="font-semibold">Supported frameworks</h4>
            <ul className="list-inside list-disc text-foreground/80 space-y-1">
              <li>NIST SP 800-53 / FedRAMP</li>
              <li>ISO 27001</li>
              <li>SOC 2</li>
              <li>Genius Act</li>
              <li>PCI DSS</li>
              <li>Reg S-ID/Reg S-P</li>
              <li>HIPAA (Coming Soon)</li>
              <li>FDA (Coming Soon)</li>
              <li>DORA (Coming Soon)</li>
              <li>MiCA (Coming Soon)</li>
              <li>AML/KYC/BSA</li>
              <li>Basel III (Coming Soon)</li>
              <li>CSI (Coming Soon)</li>
              <li>NYDFS (Coming Soon)</li>
              <li>CMMC (Coming Soon)</li>
              <li>GDPR (Coming Soon)</li>
              <li>SEC cybersecurity disclosure act &amp; privacy rules (Coming Soon)</li>
            </ul>
            <p>
              CompliLedger is designed to support audits, assessments, and regulator review without requiring invasive access.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 10 — GOVERNANCE & RESPONSIBILITY */}
      <Section variant="glow" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Built by compliance and security professionals" />
          <div className="max-w-4xl mx-auto mt-6 space-y-4">
            <p>CompliLedger is developed by practitioners with experience in:</p>
            <ul className="list-inside list-disc text-foreground/80">
              <li>cybersecurity</li>
              <li>IT audit</li>
              <li>regulatory compliance</li>
              <li>risk management</li>
              <li>privacy engineering</li>
            </ul>
            <p>Security decisions are guided by real audit and regulatory expectations — not theoretical models.</p>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section variant="glow" spacing="xl">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl font-semibold">
              proof should be provable. Security should be structural.
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <Button size="lg">🧭 Request Security Brief</Button>
              <Button size="lg" variant="outline">
                📄 View Privacy Architecture
              </Button>
              <Button size="lg" variant="outline">
                📞 Talk to Compliance Architecture
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Security;
