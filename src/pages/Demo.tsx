import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import GeometricPattern from '@/components/GeometricPattern';
import { Link } from 'react-router-dom';

const Demo = () => {
  return (
    <Layout>
      {/* PAGE HERO */}
      <Section variant="glow" spacing="xl">
        <GeometricPattern />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold">Get started with CompliLedger</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Whether you want to explore on your own, evaluate the platform, or have an architectural discussion — CompliLedger gives you multiple safe ways to begin.</p>
            <p className="text-sm text-muted-foreground">No hard sell. No surveillance. No obligation.</p>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a href="mailto:maranda@compliledger.com"><Button size="lg">▶️ Book Demo</Button></a>
              <Link to="/pricing"><Button size="lg" variant="default">💳 coming soon</Button></Link>
              <a href="mailto:maranda@compliledger.com"><Button size="lg" variant="outline">📄 Request Info</Button></a>
              <a href="mailto:maranda@compliledger.com"><Button size="lg" variant="outline">🧭 Book a Demo</Button></a>
              <a href="mailto:partners@compliledger.com"><Button size="lg" variant="outline">🤝 Book Introduction Meeting</Button></a>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 1 — WHAT HAPPENS NEXT */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="What to expect after you choose a path" />

          <div className="max-w-4xl mx-auto mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold">BOOK DEMO</h4>
              <ul className="list-inside list-disc text-foreground/80 mt-2">
                <li>Immediate access</li>
                <li>No production data required</li>
                <li>Safe, isolated environment</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">coming soon</h4>
              <ul className="list-inside list-disc text-foreground/80 mt-2">
                <li>Platform access enabled</li>
                <li>Onboarding materials provided</li>
                <li>Upgrade anytime</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">REQUEST INFO</h4>
              <ul className="list-inside list-disc text-foreground/80 mt-2">
                <li>Curated materials sent securely</li>
                <li>No follow-up pressure</li>
                <li>Optional next steps</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">BOOK A DEMO</h4>
              <ul className="list-inside list-disc text-foreground/80 mt-2">
                <li>Live walkthrough</li>
                <li>Q&A with platform expert</li>
                <li>No sales scripts</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">INTRO MEETING</h4>
              <ul className="list-inside list-disc text-foreground/80 mt-2">
                <li>Architecture-focused discussion</li>
                <li>Privacy & proof model overview</li>
                <li>No product pressure</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2 — PRIVACY & SAFETY PROMISE */}
      <Section variant="glow" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Getting started does not compromise privacy" />
          <div className="max-w-4xl mx-auto mt-6">
            <ul className="list-inside list-disc text-foreground/80">
              <li>No production credentials required</li>
              <li>No data scraped or reused</li>
              <li>No tracking beyond session integrity</li>
              <li>No demo recordings without consent</li>
              <li>No AI training on your inputs</li>
            </ul>
            <p className="mt-4 text-foreground/80">CompliLedger applies the same privacy standards during onboarding as it does in production.</p>
          </div>
        </div>
      </Section>

      {/* SECTION 3 — WHO THIS PAGE IS FOR */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Built for every compliance stakeholder" />
          <div className="max-w-4xl mx-auto mt-6">
            <ul className="list-inside list-disc text-foreground/80">
              <li>Companies & customers — start fast, scale safely</li>
              <li>Auditors & assessors — evaluate proof, not raw data</li>
              <li>Compliance professionals — understand the system deeply</li>
              <li>Regulators — validate proof without system access</li>
              <li>Developers — embed compliance immediately</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* SECTION 4 — NOT SURE WHERE TO START? */}
      <Section variant="glow" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="If you’re unsure, start here" />
          <div className="max-w-4xl mx-auto mt-6">
            <ul className="list-inside list-disc text-foreground/80">
              <li>Want hands-on? → <a href="mailto:maranda@compliledger.com">Book Demo</a></li>
              <li>Want to deploy quickly? → <Link to="/pricing">coming soon</Link></li>
              <li>Want documentation? → <Link to="/contact">Request Info</Link></li>
              <li>Want a walkthrough? → <a href="mailto:maranda@compliledger.com">Book a Demo</a></li>
              <li>Want a conversation? → <a href="mailto:partners@compliledger.com">Book Introduction Meeting</a></li>
            </ul>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section variant="glow" spacing="xl">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl font-semibold">Compliance should feel safe — even at the first step</h2>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <a href="mailto:maranda@compliledger.com"><Button size="lg">▶️ Book Demo</Button></a>
              <Link to="/pricing"><Button size="lg" variant="default">💳 coming soon</Button></Link>
              <a href="mailto:maranda@compliledger.com"><Button size="lg" variant="outline">📄 Request Info</Button></a>
              <a href="mailto:maranda@compliledger.com"><Button size="lg" variant="outline">🧭 Book a Demo</Button></a>
              <a href="mailto:partners@compliledger.com"><Button size="lg" variant="outline">🤝 Book Introduction Meeting</Button></a>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Demo;