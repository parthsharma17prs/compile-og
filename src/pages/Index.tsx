import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, PlusIcon, ShieldCheck, EyeOff, Network, Sparkles, Box, Lock, Search, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'motion/react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import { GLSLHills } from '@/components/glsl-hills';
import { FeatureCard, type FeatureType } from '@/components/FeatureCard';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { CategoryList, type Category } from '@/components/ui/category-list';
import { LayoutGrid, Bot, Code, Palette, ArrowRight } from 'lucide-react';

const whatIsFeatures: FeatureType[] = [
  {
    title: 'Continuous compliance',
    icon: ShieldCheck,
    description:
      'Prove you are compliant without mirroring systems, copying logs, or centralizing raw evidence.',
  },
  {
    title: 'Proof instead of privileged access',
    icon: Network,
    description:
      'Share cryptographic proofs instead of screenshots, exports, or direct access to sensitive environments.',
  },
  {
    title: ' Automation instead of spreadsheets',
    icon: Sparkles,
    description:
      'AI agents keep controls mapped, tested, and up to date as your systems change.',
  },
  {
    title: ' Privacy instead of exposure',
    icon: EyeOff,
    description:
      'Verification events are anchored across Algorand, Aleo, and Zcash for independent verifiability.',
  },
];

type ViewAnimationProps = {
  delay?: number;
  className?: string;
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const Index = () => {
  return (
    <Layout>
      {/* HERO with GLSL Hills background and rounded corners */}
      <Section spacing="xl" className="flex items-start justify-center min-h-screen pt-4 md:pt-8">
        <div className="relative w-full max-w-[110rem]">
          <div className="relative h-[680px] md:h-[800px] overflow-hidden border bg-background/60 shadow-2xl rounded-xl md:rounded-[2rem]">
            <div className="absolute inset-0">
              <GLSLHills width="100%" height="100%" />
            </div>

            <div className="relative z-10 px-6 py-12 md:px-10 md:py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left: Heading / copy */}
                <div className="text-left max-w-4xl pt-24 md:pt-32">
                  <h1
                    className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 uppercase leading-none"
                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.95)', WebkitTextFillColor: 'transparent', color: 'transparent' }}
                  >
                    Proof Based <br />
                    <span style={{ WebkitTextFillColor: 'rgba(255,255,255,0.95)', WebkitTextStroke: '0px', color: 'rgba(255,255,255,0.95)' }}>
                      Compliance
                    </span> <br />
                    Infrastructure
                  </h1>

                  <div className="relative z-20 max-w-2xl">
                    <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                      Continuous, privacy-preserving <span className="text-red-500 font-black border-b-2 border-red-500/30">compliance proof</span> for institutions, auditors, and regulators.
                    </p>
                    <div className="flex gap-4 mt-10">
                      <Link to="/demo">
                        <Button size="lg" className="h-14 px-10 bg-red-500 hover:bg-red-600 text-white rounded-2xl shadow-xl font-bold uppercase tracking-widest text-xs">
                          Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link to="/solutions">
                        <Button size="lg" variant="outline" className="h-14 px-10 border-2 rounded-2xl font-bold uppercase tracking-widest text-xs">
                          Our Model
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2
            aria-hidden="true"
            className="absolute left-1/2 bottom-[-3rem] md:bottom-[-4rem] -translate-x-1/2 text-[6rem] md:text-[10rem] leading-none font-extrabold uppercase text-muted-foreground/10 pointer-events-none select-none z-0"
          >
            CompliLedger
          </h2>
        </div>
      </Section>

      {/* SECTION 1 — WHAT COMPLILEDGER IS */}
      <Section variant="default">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mt-4 grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-start">
            <AnimatedContainer className="space-y-4 text-left max-w-xl">
              <h2 className="text-3xl font-bold tracking-wide md:text-4xl lg:text-5xl">
                Compliance without surveillance
              </h2>
              <p className="text-muted-foreground mt-1 text-sm tracking-wide md:text-base">
                Most compliance tools collect data, centralize evidence, and increase risk. CompliLedger works differently. We verify compliance state cryptographically instead of copying sensitive systems, logs, or documents.
              </p>
            </AnimatedContainer>

            <AnimatedContainer
              delay={0.4}
              className="grid grid-cols-1 sm:grid-cols-2 divide-x divide-y divide-dashed border border-dashed"
            >
              {whatIsFeatures.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} hideDescription />
              ))}
            </AnimatedContainer>
          </div>
        </div>
      </Section>

      {/* SECTION 2 — WHO IT'S FOR */}
      <Section >
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative mb-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Built for every{' '}
              <span
                style={{
                  WebkitTextStroke: '1px rgba(255,255,255,0.95)',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                compliance
              </span>{' '}
              stakeholder
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Companies & Customers</h4>
              <p className="text-sm text-muted-foreground mb-2">Automate audits, reduce risk, and stay compliant without exposing internal systems.</p>
              <div className="flex gap-2"><a href="mailto:maranda@compliledger.com"><Button variant="outline">Book Demo</Button></a></div>
            </div>

            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Auditors & Compliance Professionals</h4>
              <p className="text-sm text-muted-foreground mb-4">Verify evidence, assess controls, and validate posture using cryptographic proof.</p>
              <div><Link to="/contact"><Button>Request Info</Button></Link></div>
            </div>

            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Regulators & Oversight Bodies</h4>
              <p className="text-sm text-muted-foreground mb-4">Receive verifiable compliance attestations without direct system access.</p>
              <div><Link to="/demo"><Button>Book Introduction Meeting</Button></Link></div>
            </div>

            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Developers & Builders</h4>
              <p className="text-sm text-muted-foreground mb-2">Embed compliance, privacy, and proof directly into applications using SDKs and agents.</p>
              <div><a href="mailto:maranda@compliledger.com"><Button>Book Demo</Button></a></div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 3 — HOW IT WORKS (Glowing card grid demo) */}
      <Section>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader title="How CompliLedger works" />
          <div className="mt-4">
            <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
              <GridItem
                area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                icon={<Box className="h-4 w-4" />}
                title="Ingest securely"
                description="Systems, policies, SBOMs, and signals — minimally and privately"
              />
              <GridItem
                area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                icon={<Settings className="h-4 w-4" />}
                title="Analyze automatically"
                description="AI agents classify, map, and test compliance requirements"
              />
              <GridItem
                area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                icon={<ShieldCheck className="h-4 w-4" />}
                title="Prove cryptographically"
                description="Zero-knowledge proofs validate controls without revealing data"
              />
              <GridItem
                area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                icon={<Network className="h-4 w-4" />}
                title="Anchor immutably"
                description="Verification events anchored across Algorand, Aleo, and Zcash"
              />
              <GridItem
                area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                icon={<EyeOff className="h-4 w-4" />}
                title="Monitor continuously"
                description="Compliance stays current as systems change"
              />
            </ul>
            <div className="mt-6 flex justify-center">
              <Link to="/how-it-works"><Button>Explore How It Works</Button></Link>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4 — PRIVACY IS THE DIFFERENTIATOR */}
      <Section variant="default">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="flex flex-col items-center text-center">
              <SectionHeader title="Privacy is not a feature. It’s architecture." />
              <div className="mt-6">
                <Link to="/security"><Button>View Privacy Architecture</Button></Link>
              </div>
            </div>
            <div>
              <p className="text-muted-foreground mb-4">CompliLedger is designed so:</p>

              <div className="grid grid-cols-1 gap-4">
                <div
                  className="relative overflow-hidden rounded-lg border border-border bg-cover bg-center md:h-40 w-full max-w-xl group"
                  style={{ backgroundImage: "url('/images/privacy-bg.jpg')" }}
                >
                  <div className="absolute inset-0 bg-black/40" aria-hidden />
                  <div className="relative z-10 p-4 md:p-4">
                    <ul className="list-disc list-inside space-y-2 text-white">
                      <li>No raw evidence is centralized</li>
                      <li>No customer data is sold or reused</li>
                      <li>No systems are mirrored</li>
                      <li>No surveillance is introduced</li>
                    </ul>
                  </div>

                  {/* Right-side button: hidden by default, appears when the card is hovered */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30 opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:pointer-events-auto">
                    <div className="flex items-center justify-start space-x-3">
                      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/tick-3d-icon-png-download-10066771.png" alt="Privacy" className="h-32 w-32 rounded-md object-cover" />
                    </div>
                  </div>
                </div>

                <div
                  className="relative overflow-hidden rounded-lg border border-border bg-cover bg-center md:h-28 w-full max-w-xl group"
                  style={{ backgroundImage: "url('/images/privacy-bg.jpg')" }}
                >
                  <div className="absolute inset-0 bg-black/40" aria-hidden />
                  <div className="relative z-10 p-4 md:p-3">
                    <ul className="list-disc list-inside space-y-1 text-white">
                      <li>Proof replaces disclosure</li>
                      <li>Identity replaces accounts</li>
                      <li>Cryptography replaces proof</li>
                    </ul>
                  </div>

                  {/* Visible image on the right side, matching hover state of the larger card */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30 opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:pointer-events-auto  ">
                    <div className="flex items-center justify-start">
                      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cross-3d-icon-png-download-5220674.png" alt="Privacy" className="h-20 w-20 rounded-md object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 5 — MULTI-CHAIN proof MODEL (cards) */}
      <Section>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader title="Built across multiple privacy-focused blockchains" />
          <p className="text-muted-foreground">CompliLedger uses three specialized networks, each for a distinct proof function:</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {[
              {
                title: 'Algorand',
                icon: Network,
                description: 'Immutable audit anchoring  fast, low-cost finality for proofs.',
              },
              {
                title: 'Aleo',
                icon: Code,
                description: 'Private zero-knowledge computation for confidential verification.',
              },
              {
                title: 'Zcash',
                icon: Lock,
                description: 'Confidential verification and attestations using shielded transactions.',
              },
            ].map((f) => (
              <FeatureCard
                key={f.title}
                feature={{ title: f.title, icon: f.icon as any, description: f.description }}
              />
            ))}
          </div>

          <div className="mt-3"><Link to="/platform"><Button>Explore Platform Architecture</Button></Link></div>
        </div>
      </Section>

      {/* SECTION 6 — PRODUCTS ENTRY POINT */}
      <Section>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader title="One platform. Multiple ways to start." />
          <div className="mt-4">
            <CategoryList
              title="Explore Our"
              subtitle="Core Features"
              headerIcon={<LayoutGrid className="w-8 h-8" />}
              categories={[
                {
                  id: 1,
                  title: 'CompliLedger Platform',
                  subtitle: 'Full Compliance OS',
                  onClick: () => undefined,
                },
                {
                  id: 2,
                  title: 'SDKs',
                  subtitle: 'CompALGO, Comp-Leo, CompZ',
                  onClick: () => undefined,
                },
                {
                  id: 3,
                  title: 'AI Agent Marketplace',
                  subtitle: 'Use Agents Individually',
                  onClick: () => undefined,
                },
                {
                  id: 4,
                  title: 'Master Agent',
                  subtitle: 'Single Compliance Interface',
                  onClick: () => undefined,
                },
              ] as Category[]}
            />
          </div>
        </div>
      </Section>

      {/* SECTION 7 — FINAL CTA */}
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

export default Index;

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        {/* Glowing effect positioned behind the inner card */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Lazy-load client component */}
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={3}
          />
        </div>
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="[_&amp;_b]:md:font-semibold [&amp;_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};