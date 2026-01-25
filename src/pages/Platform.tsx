import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import GeometricPattern from '@/components/GeometricPattern';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Partners = () => {
  const coreFunctions = [
    'Continuous compliance monitoring',
    'Automated audit documentation (SSP, SAP, SAR, POA&M, PIA)',
    'Control validation & framework alignment',
    'Risk scoring & drift detection',
    'Evidence integrity verification',
    'Audit-ready exports',
    'Regulator-verifiable attestations'
  ];

  const architectureDoNot = [
    'No bulk data ingestion',
    'No system mirroring',
    'No credential harvesting',
    'No telemetry resale',
    'No AI training on customer data'
  ];

  const architectureDo = [
    'Proof replaces disclosure',
    'Cryptography replaces proof',
    'Identity replaces accounts'
  ];

  const chains = [
    {
      name: 'Algorand',
      bullets: ['Immutable audit anchoring', 'Timestamped verification events', 'Long-term integrity guarantees']
    },
    {
      name: 'Aleo',
      bullets: ['Private zero-knowledge computation', 'Confidential compliance evaluation', 'ZK circuit execution']
    },
    {
      name: 'Zcash',
      bullets: ['Shielded attestations', 'Confidential proof delivery', 'Privacy-preserving verification']
    }
  ];

  const identityItems = [
    'Decentralized Identifiers (DIDs)',
    'Verifiable Credentials (VCs)',
    'Signed compliance artifacts',
    'Revocable attestations',
    'Non-repudiation'
  ];

  const zkProofs = [
    'Controls are operating',
    'Policies are enforced',
    'Evidence exists',
    'Requirements are met'
  ];

  return (
    <Layout>
      {/* Hero */}
      <Section variant="glow" spacing="xl">
        <GeometricPattern />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold">
              The Compliance Operating System for <span className="text-gradient">High-proof Environments</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              CompliLedger is a privacy-first compliance platform that continuously verifies regulatory compliance without exposing sensitive data.
            </p>
            <p className="text-sm text-foreground/70 max-w-3xl mx-auto">Built for enterprises, startups, auditors, regulators, and developers operating under strict regulatory and privacy requirements.</p>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a href="mailto:maranda@compliledger.com">
                <Button size="lg" className="btn-glow">🧭 Book a Demo</Button>
              </a>
              <a href="mailto:maranda@compliledger.com">
                <Button size="lg">▶️ Book Demo</Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline">📞 Request Info</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 1 */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader title="Not a tool. Infrastructure." description="Most compliance software behaves like a data vacuum — pulling logs, documents, and system details into centralized platforms. CompliLedger takes a fundamentally different approach." />

          <div className="max-w-5xl mx-auto mt-8 space-y-6">
            <p className="text-foreground/70">It functions as a compliance operating system that:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /> <span>verifies compliance state instead of copying data</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /> <span>automates evidence creation instead of manual reporting</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /> <span>proves proof cryptographically instead of relying on access</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /> <span>preserves privacy by design</span></li>
            </ul>

            <p className="font-semibold">Result: Compliance becomes continuous, provable, and defensible — not reactive.</p>
          </div>
        </div>
      </Section>

      {/* Section 2: Core Capabilities */}
      <Section variant="glow" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader title="What the platform does" description="Core platform capabilities" />

          <div className="max-w-4xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreFunctions.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-background/80 rounded-lg border border-foreground/10">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span className="font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 3: Privacy-first Architecture */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader title="Compliance without surveillance" description="CompliLedger is designed so compliance can be proven without centralizing sensitive data." />

          <div className="max-w-5xl mx-auto mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-background/80 rounded-lg border border-foreground/10">
              <h4 className="font-semibold mb-3">We enforce:</h4>
              <ul className="space-y-2">
                {architectureDoNot.map((d, i) => (
                  <li key={i} className="flex items-start gap-3"><span className="text-danger">❌</span><span>{d}</span></li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-background/80 rounded-lg border border-foreground/10">
              <h4 className="font-semibold mb-3">Instead:</h4>
              <ul className="space-y-2">
                {architectureDo.map((d, i) => (
                  <li key={i} className="flex items-start gap-3"><span className="text-primary">✅</span><span>{d}</span></li>
                ))}
              </ul>
              <div className="mt-4">
                <a className="text-primary font-medium" href="/privacy">→ View Privacy Architecture</a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 4: Multi-chain */}
      <Section variant="glow" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader title="Built across three privacy-focused blockchains" description="CompliLedger uses a multi-chain proof model, assigning specific verification roles to each network." />

          <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {chains.map((c) => (
              <div key={c.name} className="p-6 bg-background/80 rounded-lg border border-foreground/10">
                <h4 className="font-semibold mb-2">{c.name}</h4>
                <ul className="space-y-2 text-foreground/70">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3"><span className="text-primary">•</span><span>{b}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="max-w-4xl mx-auto text-center text-foreground/70 mt-6">Why multi-chain? No single blockchain satisfies performance, privacy, and durability simultaneously. Multi-chain ensures resilience, independence, and future-proof verification.</p>
        </div>
      </Section>

      {/* Section 5: Decentralized Identity */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader title="Identity-bound compliance" description="CompliLedger binds compliance proof to cryptographic identity, not platform accounts." />

          <div className="max-w-4xl mx-auto mt-6">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {identityItems.map((it) => (
                <li key={it} className="flex items-start gap-3 p-3 bg-background/80 rounded-lg border border-foreground/10"><CheckCircle className="h-4 w-4 text-primary mt-1" /><span>{it}</span></li>
              ))}
            </ul>

            <p className="mt-6 font-semibold">This ensures every compliance claim is attributable, verifiable, and defensible.</p>
          </div>
        </div>
      </Section>

      {/* Section 6: Zero-knowledge */}
      <Section variant="glow" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader title="Proof without revealing data" description="Using zero-knowledge techniques, CompliLedger proves compliance without exposing sensitive inputs." />

          <div className="max-w-4xl mx-auto mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">CompliLedger proves:</h4>
                <ul className="space-y-2">
                  {zkProofs.map((p) => (
                    <li key={p} className="flex items-start gap-3"><span className="text-primary">✅</span><span>{p}</span></li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Without revealing:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3"><span className="text-danger">❌</span><span>Logs</span></li>
                  <li className="flex items-start gap-3"><span className="text-danger">❌</span><span>System architecture</span></li>
                  <li className="flex items-start gap-3"><span className="text-danger">❌</span><span>Source code</span></li>
                  <li className="flex items-start gap-3"><span className="text-danger">❌</span><span>Sensitive configurations</span></li>
                  <li className="flex items-start gap-3"><span className="text-danger">❌</span><span>Customer data</span></li>
                </ul>
              </div>
            </div>

            <p className="mt-6 text-foreground/70">Each audit cycle can generate cryptographically signed attestations, time-bound revocable artifacts, and verifiable on-chain references — regulator-readable and machine-verifiable.</p>
          </div>
        </div>
      </Section>

      {/* Section 7: Proof-of-Compliance */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader title="Compliance certificates that verify themselves" description="Proof-of-compliance attestations that function as compliance certificates, not collectibles." />

          <div className="max-w-4xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-background/80 rounded-lg border border-foreground/10">
              <h4 className="font-semibold mb-2">Artifacts</h4>
              <ul className="space-y-2 text-foreground/70">
                <li>Cryptographically signed compliance attestations</li>
                <li>Time-bound, revocable proof artifacts</li>
                <li>Verifiable on-chain references</li>
                <li>Regulator-readable verification</li>
              </ul>
            </div>

            <div className="p-4 bg-background/80 rounded-lg border border-foreground/10">
              <h4 className="font-semibold mb-2">Function</h4>
              <p className="text-foreground/70">These attestations function as compliance certificates that auditors and regulators can verify cryptographically without needing raw data.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 8: System of Record */}
      <Section variant="glow" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader title="One source of compliance truth" description="CompliLedger becomes your compliance memory, audit system of record, verification backend, and regulator-facing interface." />

          <div className="max-w-4xl mx-auto mt-6">
            <ul className="space-y-2">
              <li className="flex items-start gap-3">• your compliance memory</li>
              <li className="flex items-start gap-3">• your audit system of record</li>
              <li className="flex items-start gap-3">• your verification backend</li>
              <li className="flex items-start gap-3">• your regulator-facing interface</li>
            </ul>

            <p className="mt-6 font-semibold">Compliance history is preserved, provable, and tamper-resistant.</p>
          </div>
        </div>
      </Section>

      {/* Section 9: Extensible */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader title="One platform. Multiple ways to use it." description="The platform can be extended through SDKs, an AI Agent Marketplace, Master Agent interfaces, and API integrations." />

          <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-background/80 rounded-lg border border-foreground/10">
              <h4 className="font-semibold mb-2">SDKs</h4>
              <p className="text-foreground/70">CompALGO, Comp-Leo, CompZ — developer kits for embedding verification into applications.</p>
            </div>
            <div className="p-4 bg-background/80 rounded-lg border border-foreground/10">
              <h4 className="font-semibold mb-2">AI Agent Marketplace</h4>
              <p className="text-foreground/70">Curated agents for policy mapping, evidence classification, and framework alignment.</p>
            </div>
            <div className="p-4 bg-background/80 rounded-lg border border-foreground/10">
              <h4 className="font-semibold mb-2">Integrations</h4>
              <p className="text-foreground/70">APIs and Master Agent interfaces for seamless enterprise adoption.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="glow" spacing="xl">
        <GeometricPattern className="opacity-50" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold">If compliance matters, architecture matters.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <a href="mailto:maranda@compliledger.com">
                <Button size="lg" className="btn-glow">🧭 Book a Demo</Button>
              </a>
              <a href="mailto:maranda@compliledger.com">
                <Button size="lg">▶️ Book Demo</Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline">📞 Request Info</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Partners;