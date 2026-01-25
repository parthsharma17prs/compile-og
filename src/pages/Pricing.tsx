import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import GeometricPattern from '@/components/GeometricPattern';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <Layout>
      {/* HERO */}
      <Section variant="glow" spacing="xl">
        <GeometricPattern />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl font-space-grotesk font-bold">Launch pricing for privacy-preserving compliance infrastructure</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">CompliLedger is launching with startup-friendly pricing to accelerate adoption across regulated teams, auditors, and builders. Early customers lock in early access rates.</p>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a href="mailto:maranda@compliledger.com"><Button size="lg">▶️ Book Demo</Button></a>
              <Button size="lg" variant="default">💳 coming soon</Button>
              <a href="mailto:maranda@compliledger.com"><Button size="lg" variant="outline">🧭 Book a Demo</Button></a>
              <Link to="/contact"><Button size="lg" variant="outline">📞 Request Info</Button></Link>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 1 — PRICING PHILOSOPHY */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="How we price CompliLedger" description="Pricing philosophy" />

          <div className="max-w-4xl mx-auto mt-6 space-y-4">
            <p>Compliance software is often priced by seats, storage, or data volume. CompliLedger is priced by capability and scope, not surveillance.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">You pay for</h4>
                <ul className="list-inside list-disc text-foreground/80">
                  <li>compliance automation</li>
                  <li>verification depth</li>
                  <li>framework coverage</li>
                  <li>proof generation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">You never pay for</h4>
                <ul className="list-inside list-disc text-foreground/80">
                  <li>user seats</li>
                  <li>data ingestion volume</li>
                  <li>system access</li>
                  <li>telemetry collection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2 — PLATFORM PLANS */}
      <Section variant="glow" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="CompliLedger Platform — Launch Pricing" description="Platform plans" />

          <div className="max-w-6xl mx-auto mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold">🟦 STARTUP / SMALL BUSINESS</h3>
              <p className="text-2xl font-bold mt-2">$19 / month</p>
              <p className="mt-3">Includes: CompliLedger Platform access, Auto-generated audit documents, 1 compliance framework, Base risk scoring, Evidence export, Master Agent access, Email support.</p>
              <p className="mt-3 font-medium">Best for: Startups, founders, small business teams</p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold">🟩 MIDSIZE</h3>
              <p className="text-2xl font-bold mt-2">$39 / month</p>
              <p className="mt-3">Includes Startup features plus up to 3 frameworks, GitHub Sentinel (basic), Drift detection, AI Risk Scorer, Access to AI Agent Marketplace, Priority support.</p>
              <p className="mt-3 font-medium">Best for: Scaling startups, fintechs, Web3 platforms</p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold">🟥 ENTERPRISE</h3>
              <p className="text-2xl font-bold mt-2">$59 / month</p>
              <p className="mt-3">Includes Midsize features plus unlimited frameworks, all core agents, blockchain-anchored attestations, enterprise access controls, dedicated onboarding, advisory.</p>
              <p className="mt-3 font-medium">Best for: Enterprises, auditors, regulated institutions</p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 3 — AI AGENT MARKETPLACE PRICING */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Use only the intelligence you need" description="AI Agent Marketplace pricing" />

          <div className="max-w-4xl mx-auto mt-6 space-y-3">
            <p>Agents can be added independently or bundled.</p>
            <ul className="list-inside list-disc text-foreground/80">
              <li>Individual agent: $15 / month</li>
              <li>Any 5 agents: $49 / month</li>
              <li>All agents: $99 / month</li>
            </ul>
            <p className="mt-2">👉 Browse agents: <a href="https://www.complimarket.compliledger.com" className="underline">www.complimarket.compliledger.com</a></p>
          </div>
        </div>
      </Section>

      {/* SECTION 4 — SDK (FREE) */}
      <Section variant="glow" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Developer-friendly access" description="SDK (Free)" />
          <div className="max-w-4xl mx-auto mt-6">
            <p>Developer (Non-commercial): Free</p>
            <p className="mt-2">SDKs include: CompALGO (Algorand), Comp-Leo (Aleo), CompZ (Zcash)</p>
            <p className="mt-2">Try: www.compalgo.compliledger.com • www.compleo.compliledger.com • www.compz.compliledger.com</p>
          </div>
        </div>
      </Section>

      {/* SECTION 5 — MASTER AGENT ACCESS */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="One interface. One price." description="Master Agent access" />
          <div className="max-w-4xl mx-auto mt-6">
            <ul className="list-inside list-disc text-foreground/80">
              <li>Included with all Platform plans</li>
              <li>No per-seat pricing</li>
              <li>No usage tracking</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* SECTION 6 — EARLY ACCESS GUARANTEE */}
      <Section variant="glow" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Founder pricing protection" description="Early access guarantee" />
          <div className="max-w-4xl mx-auto mt-6">
            <ul className="list-inside list-disc text-foreground/80">
              <li>Discounted launch pricing</li>
              <li>Priority roadmap feedback</li>
              <li>Future upgrade incentives</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* SECTION 7 — PRIVACY COMMITMENT */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Pricing without surveillance" description="Privacy commitment" />
          <div className="max-w-4xl mx-auto mt-6">
            <ul className="list-inside list-disc text-foreground/80">
              <li>No data resale</li>
              <li>No AI training on customer data</li>
              <li>No telemetry monetization</li>
              <li>No on-chain customer data</li>
              <li>No hidden usage tracking</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section variant="glow" spacing="xl">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl font-semibold">Start private. Scale compliant.</h2>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <a href="mailto:maranda@compliledger.com"><Button size="lg">▶️ Book Demo</Button></a>
              <Button size="lg" variant="default">💳 coming soon</Button>
              <a href="mailto:maranda@compliledger.com"><Button size="lg" variant="outline">🧭 Book a Demo</Button></a>
              <Link to="/contact"><Button size="lg" variant="outline">📞 Request Info</Button></Link>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Pricing;
