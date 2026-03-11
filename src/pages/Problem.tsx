import React, { type ReactNode } from 'react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import { TextRevealByWord } from '@/components/ui/text-reveal-by-word';
import { ArrowRightIcon, PlusIcon, ShieldAlert, Users, Landmark, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';

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

const Problem = () => {
  return (
    <Layout>
      {/* PAGE HERO */}
      <Section spacing="xl" className="flex items-start justify-center min-h-[60vh] pt-4 md:pt-8 w-full max-w-7xl mx-auto">
        <div className="relative w-full">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden border bg-background/60 shadow-2xl rounded-xl md:rounded-[2rem] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-background to-background" />

            <div className="relative z-10 px-6 py-12 md:px-10 md:py-16 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase text-foreground/90 tracking-tight leading-none">
                Compliance Is <br className="hidden md:block" />
                <span className="bg-red-500 px-4 rounded-md text-white my-2 inline-block">Broken</span><br className="hidden md:block" /> for Everyone
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto font-medium">
                The hidden tax on innovation, privacy, and trust.
              </p>
            </div>
          </div>

          <div aria-hidden style={{ willChange: 'transform' }} className="absolute left-1/2 bottom-[-2rem] md:bottom-[-3rem] -translate-x-1/2 pointer-events-none select-none text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] font-extrabold uppercase leading-none opacity-10 tracking-tight z-0">
            Problems
          </div>
        </div>
      </Section>

      {/* REVEAL SECTION */}
      <Section variant="default" spacing="xl" className="relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord
              text="CompliLedger is designed to operate in high-risk, highly regulated environments where security failures and privacy breaches are unacceptable."
              className="text-foreground font-space-grotesk"
            />
          </div>
        </div>
      </Section>

      {/* PAIN POINTS GRID */}
      <Section spacing="lg">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="The Root of the Crisis"
            subtitle="Industry Pain Points"
            description="Compliance is currently built on trust and manual snapshots — not independent, verifiable proof."
            className="text-center mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedContainer delay={0.1}>
              <div className="relative h-full overflow-hidden rounded-[2rem] border bg-background/40 p-8 backdrop-blur-md group hover:border-red-500/30 transition-all duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Users size={80} />
                </div>
                <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <Users className="text-red-500" size={20} />
                  </span>
                  Companies
                </h4>
                <ul className="space-y-4 text-muted-foreground text-lg">
                  <li className="flex gap-2"><span>•</span> 6–12 months of manual audit preparation per cycle</li>
                  <li className="flex gap-2"><span>•</span> $500k+ annual operating burden for compliance</li>
                  <li className="flex gap-2"><span>•</span> 40% of security engineering time diverted to evidence</li>
                  <li className="flex gap-2"><span>•</span> Massive deal delays due to audit readiness gaps</li>
                </ul>
              </div>
            </AnimatedContainer>

            <AnimatedContainer delay={0.2}>
              <div className="relative h-full overflow-hidden rounded-[2rem] border bg-background/40 p-8 backdrop-blur-md group hover:border-red-500/30 transition-all duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Search size={80} />
                </div>
                <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <Search className="text-red-500" size={20} />
                  </span>
                  Auditors
                </h4>
                <ul className="space-y-4 text-muted-foreground text-lg">
                  <li className="flex gap-2"><span>•</span> Reliant on static PDFs and low-integrity screenshots</li>
                  <li className="flex gap-2"><span>•</span> 60% of audit time spent validating credibility</li>
                  <li className="flex gap-2"><span>•</span> Point-in-time snapshots that age instantly</li>
                  <li className="flex gap-2"><span>•</span> Low confidence leading to scope expansion</li>
                </ul>
              </div>
            </AnimatedContainer>

            <AnimatedContainer delay={0.3}>
              <div className="relative h-full overflow-hidden rounded-[2rem] border bg-background/40 p-8 backdrop-blur-md group hover:border-red-500/30 transition-all duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Landmark size={80} />
                </div>
                <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <Landmark className="text-red-500" size={20} />
                  </span>
                  Regulators
                </h4>
                <ul className="space-y-4 text-muted-foreground text-lg">
                  <li className="flex gap-2"><span>•</span> Disclosures that arrive months after incidents</li>
                  <li className="flex gap-2"><span>•</span> Document floods instead of actionable signal</li>
                  <li className="flex gap-2"><span>•</span> No independent way to verify corporate claims</li>
                  <li className="flex gap-2"><span>•</span> Forced tradeoffs between transparency and privacy</li>
                </ul>
              </div>
            </AnimatedContainer>

            <AnimatedContainer delay={0.4}>
              <div className="relative h-full overflow-hidden rounded-[2rem] border bg-background/40 p-8 backdrop-blur-md group hover:border-red-500/30 transition-all duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <ShieldAlert size={80} />
                </div>
                <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <ShieldAlert className="text-red-500" size={20} />
                  </span>
                  The Public
                </h4>
                <ul className="space-y-4 text-muted-foreground text-lg">
                  <li className="flex gap-2"><span>•</span> Systemic privacy erosion due to surveillance audits</li>
                  <li className="flex gap-2"><span>•</span> Collapse of trust after preventable breaches</li>
                  <li className="flex gap-2"><span>•</span> Hidden costs passed down to customers</li>
                  <li className="flex gap-2"><span>•</span> No assurance that data is truly protected</li>
                </ul>
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="text-center pb-24">
        <div className="relative mx-auto flex w-full max-w-4xl flex-col justify-between gap-y-12 border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-6 py-16 rounded-3xl">
          <PlusIcon className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6" strokeWidth={1} />
          <PlusIcon className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6" strokeWidth={1} />
          <PlusIcon className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6" strokeWidth={1} />
          <PlusIcon className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6" strokeWidth={1} />

          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Stop Trusting. Start Proving.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to see how CompliLedger transforms broken audits into continuous proof?
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="px-10 border-2">Contact Sales</Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" className="px-10 bg-red-500 hover:bg-red-600 text-white">
                Get Started <ArrowRightIcon className="size-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Problem;
