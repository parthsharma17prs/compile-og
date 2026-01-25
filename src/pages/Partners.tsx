import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import {TextRevealByWord} from '@/components/ui/text-reveal-by-word';
import { CheckCircle, ArrowRight, Plus, ArrowRightIcon } from 'lucide-react';


const Partners = () => {
  return (
    <Layout>
      {/* Hero */}
       <Section variant="default" spacing="xl" className="py-0 min-h-screen min-h-svh flex items-center">

          <div className="absolute right-6 bottom-24  max-w-[55vw] text-md md:text-xl lg:text-3xl xl:text-3xl font-extrabold uppercase text-foreground/90 px-2 py-1 text-right pointer-events-none">
              grounded in <span className='bg-red-500 px-2 rounded-sm'>proof</span> not data access
            </div>

          <div aria-hidden  style={{willChange: 'transform'}} className="absolute right-6 bottom-6  pointer-events-none select-none text-[2rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-extrabold uppercase leading-none opacity-10 tracking-tight">
           partners
          </div>




      </Section>
  <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord text="CompliLedger partners with organizations that believe compliance should be provable, privacy-preserving, and architected for the long term." className="" />

            <div className="flex items-center justify-center gap-2 mt-4">
              <a href="mailto:maranda@compliledger.com"><Button variant="outline">Book a Demo</Button></a>
              <a href="mailto:maranda@compliledger.com"><Button>
                Book Demo <ArrowRightIcon className="size-4 ml-1" />
              </Button></a>
            </div>
          </div>
        </div>
      </Section>
      {/* Section 1: Philosophy */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="How we think about partnerships" description="Partnership at CompliLedger is not about sharing customer data, granting privileged access, or embedding surveillance. It is about alignment." />

          <div className="max-w-3xl mx-auto mt-6 space-y-4">
            <p>We partner with organizations that share our principles:</p>
            <ul className="list-inside space-y-2">
              <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1"/> <span>Privacy by design</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1"/> <span>Proof over inspection</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1"/> <span>Cryptographic proof</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1"/> <span>Minimal data exposure</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1"/> <span>Regulator-ready architecture</span></li>
            </ul>

            <p>If a partnership requires compromising these principles, it is not the right partnership.</p>
          </div>
        </div>
      </Section>

      {/* Section 2: Ecosystems */}
      <Section  spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Who we partner with" description="Partner Ecosystems" />

          <div className="max-w-5xl mx-auto mt-6 grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="p-6 bg-background/80 rounded-lg border border-foreground/10">
              <h4 className="font-semibold mb-2">Technology & Infrastructure Partners</h4>
              <p className="text-foreground/70">Cloud providers, security platforms, developer tools, and infrastructure services that integrate with CompliLedger without centralizing sensitive data.</p>
            </div>

            <div className="p-6 bg-background/80 rounded-lg border border-foreground/10">
              <h4 className="font-semibold mb-2">Blockchain & Protocol Partners</h4>
              <p className="text-foreground/70">Privacy-focused and high-integrity networks that support verification, zero-knowledge computation, and immutable audit anchoring — including Algorand, Aleo, and Zcash ecosystems.</p>
            </div>

            <div className="p-6 bg-background/80 rounded-lg border border-foreground/10">
              <h4 className="font-semibold mb-2">Audit & Compliance Partners</h4>
              <p className="text-foreground/70">Audit firms, assessors, and compliance professionals using CompliLedger-generated proofs to streamline audits and reduce manual evidence handling.</p>
            </div>

            <div className="p-6 bg-background/80 rounded-lg border border-foreground/10">
              <h4 className="font-semibold mb-2">Regulatory & Oversight Stakeholders</h4>
              <p className="text-foreground/70">Regulators, standards bodies, and policy organizations exploring cryptographic compliance verification and privacy-preserving oversight models.</p>
            </div>

            <div className="p-6 bg-background/80 rounded-lg border border-foreground/10 md:col-span-2">
              <h4 className="font-semibold mb-2">Developer & Ecosystem Partners</h4>
              <p className="text-foreground/70">Builders and platforms embedding compliance logic, proof generation, and verification using CompliLedger SDKs and agents.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 3: Models */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="How we collaborate" description="Partnership Models" />

          <div className="max-w-5xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-background/80 rounded-lg border border-foreground/10">
              <h5 className="font-semibold">Technology Integrations</h5>
              <p className="text-foreground/70">API-level and workflow integrations that preserve tenant isolation and data minimization.</p>
            </div>
            <div className="p-4 bg-background/80 rounded-lg border border-foreground/10">
              <h5 className="font-semibold">Strategic Alignment</h5>
              <p className="text-foreground/70">Joint research, architecture collaboration, and long-term ecosystem development.</p>
            </div>
            <div className="p-4 bg-background/80 rounded-lg border border-foreground/10">
              <h5 className="font-semibold">Go-to-Market Collaboration</h5>
              <p className="text-foreground/70">Co-education, co-marketing, and shared compliance enablement — without data sharing.</p>
            </div>
            <div className="p-4 bg-background/80 rounded-lg border border-foreground/10">
              <h5 className="font-semibold">Research & Standards Participation</h5>
              <p className="text-foreground/70">Contribution to emerging compliance, privacy, and verification standards.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 4: Expectations */}
      <Section spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="What partnership with CompliLedger means"
            description="What partners can expect"
          />

          <div className="max-w-4xl mx-auto mt-6 grid gap-4 md:grid-cols-2">
            <div className="p-5 rounded-lg border border-foreground/10 bg-background/70">
              <h5 className="font-semibold mb-2">Guardrails</h5>
              <ul className="list-inside space-y-1 text-foreground/80 text-sm">
                <li>• Clear architectural boundaries</li>
                <li>• No customer data access</li>
                <li>• No telemetry monetization</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border border-foreground/10 bg-background/70">
              <h5 className="font-semibold mb-2">How we work</h5>
              <ul className="list-inside space-y-1 text-foreground/80 text-sm">
                <li>• No hidden data flows</li>
                <li>• Transparent integration models</li>
                <li>• Privacy-first design reviews</li>
              </ul>
            </div>

            <div className="md:col-span-2 mt-2 p-4 rounded-lg border border-dashed border-foreground/15 bg-background/60">
              <p className="font-semibold text-center">
                Partnership is built on proof through verification, not assumptions.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 5: What we don't do */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="What partnership is not"
            description="CompliLedger does not"
          />

          <div className="max-w-4xl mx-auto mt-6 grid gap-4 md:grid-cols-2">
            <div className="p-5 rounded-lg border border-foreground/10 bg-background/80">
              <h5 className="font-semibold mb-2">Never about data resale</h5>
              <ul className="list-inside space-y-1 text-foreground/80 text-sm">
                <li>• Sell partner access to customer data</li>
                <li>• Broker insights or telemetry</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border border-foreground/10 bg-background/80">
              <h5 className="font-semibold mb-2">Never about surveillance</h5>
              <ul className="list-inside space-y-1 text-foreground/80 text-sm">
                <li>• Embed tracking or surveillance</li>
                <li>• Trade privacy for distribution</li>
                <li>• Inflate partnerships for marketing</li>
              </ul>
            </div>

            <div className="md:col-span-2 mt-2 p-4 rounded-lg border border-dashed border-foreground/15 bg-background/60">
              <p className="text-center">Credibility matters more than logos.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 6: Announcements */}
      <Section spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Partner announcements"
            description="Current & future partners"
          />

          <div className="max-w-3xl mx-auto mt-6 p-6 rounded-lg border border-foreground/10 bg-background/70">
            <p>
              As CompliLedger continues to evolve, select partnerships will be announced publicly once integrations and alignment are verified. Until then, we prioritize building the right foundations over premature promotion.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 7: Become a Partner */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Interested in partnering with CompliLedger?"
            description="Become a partner"
          />

          <div className="max-w-4xl mx-auto mt-6 grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
            <div className="space-y-4">
              <p>We welcome conversations with organizations that are:</p>
              <ul className="list-inside space-y-2 text-foreground/80">
                <li>• Building in regulated environments</li>
                <li>• Exploring privacy-preserving compliance</li>
                <li>• Supporting developers, auditors, or regulators</li>
                <li>• Advancing cryptographic verification</li>
              </ul>

              <p>Let’s explore alignment — not access.</p>
            </div>

            <div className="p-5 rounded-lg border border-foreground/15 bg-background/80 flex flex-col gap-3">
              <p className="text-sm text-foreground/80">Ready to talk?</p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a href="mailto:partners@compliledger.com">Request Partner Discussion</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:partners@compliledger.com?subject=Partner%20Brief">Request Partner Brief</a>
                </Button>
                <Link to="/demo">
                  <Button size="lg" className="btn-glow">Book Introduction Meeting</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section  spacing="xl">
        <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-4 py-8">
          <Plus
            className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6"
            strokeWidth={1}
          />
          <Plus
            className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6"
            strokeWidth={1}
          />
          <Plus
            className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6"
            strokeWidth={1}
          />
          <Plus
            className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6"
            strokeWidth={1}
          />

          <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
          <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />

          <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed" />

          <div className="space-y-1">
            <h2 className="text-center font-bold text-2xl">Partnership should strengthen proof not weaken it</h2>

          </div>

          <div className="flex items-center justify-center gap-2">
            <Link to="/contact"><Button variant="outline">Contact Sales</Button></Link>
            <Link to="/demo"><Button>
              Get Started <ArrowRight className="size-4 ml-1" />
            </Button></Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Partners;