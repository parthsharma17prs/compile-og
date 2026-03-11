import React, { type ReactNode } from 'react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, PlusIcon, Globe, Cpu, ShieldCheck, CheckCircle, Search, Layers, Lock } from 'lucide-react';
import { TextRevealByWord } from '@/components/ui/text-reveal-by-word';
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

const HowItWorks = () => {
  const workflowSteps = [
    {
      title: "Secure Minimal Intake",
      icon: Layers,
      description: "CompliLedger ingests only control signals and metadata — never raw sensitivity or PII.",
      list: ["Policy procedures", "System metadata", "Control signals", "SBOM fingerprints"]
    },
    {
      title: "AI Agent Analysis",
      icon: Cpu,
      description: "Specialized agents map requirements and test controls inside isolated privacy boundaries.",
      list: ["Policy interpretation", "Control mapping", "Framework alignment", "Risk scoring"]
    },
    {
      title: "ZK Evaluation",
      icon: Lock,
      description: "Compliance logic is executed using zero-knowledge techniques on Aleo and Zcash.",
      list: ["Evaluate controls", "Test requirements", "Validate configs", "Privacy computation"]
    },
    {
      title: "Immutable Anchoring",
      icon: Globe,
      description: "Verification events are anchored across premium blockchains for absolute integrity.",
      list: ["Algorand timestamps", "Aleo privacy logic", "Zcash attestations", "Tamper-proof logs"]
    }
  ];

  return (
    <Layout>
      {/* PAGE HERO */}
      <Section spacing="xl" className="flex items-start justify-center min-h-[60vh] pt-4 md:pt-8 w-full max-w-7xl mx-auto">
        <div className="relative w-full">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden border bg-background/60 shadow-2xl rounded-xl md:rounded-[2rem] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-background to-background" />

            <div className="relative z-10 px-6 py-12 md:px-10 md:py-16 text-center text-foreground">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight leading-none text-center">
                The Verifiable <br className="hidden md:block" />
                <span className="bg-red-500 px-4 rounded-md text-white my-2 inline-block">Workflow</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto font-medium">
                How CompliLedger turns manual oversight into automated proof.
              </p>
            </div>
          </div>

          <div aria-hidden style={{ willChange: 'transform' }} className="absolute left-1/2 bottom-[-2rem] md:bottom-[-3rem] -translate-x-1/2 pointer-events-none select-none text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] font-extrabold uppercase leading-none opacity-10 tracking-tight z-0">
            Workflow
          </div>
        </div>
      </Section>

      {/* REVEAL SECTION */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord
              text="A privacy-first model that replaces manual audits, data sprawl, and blind trust with cryptographic verification."
              className="text-foreground font-space-grotesk"
            />
          </div>
        </div>
      </Section>

      {/* WORKFLOW GRID */}
      <Section spacing="xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {workflowSteps.map((step, i) => (
              <AnimatedContainer key={i} delay={i * 0.1}>
                <div className="relative overflow-hidden rounded-[2.5rem] border bg-background/40 p-10 backdrop-blur-md group hover:border-red-500/30 transition-all duration-500">
                  <div className="absolute top-8 right-8 text-foreground/5 group-hover:text-red-500/10 transition-colors">
                    <step.icon size={120} />
                  </div>
                  <div className="relative z-10 space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center">
                      <step.icon className="text-red-500" size={28} />
                    </div>
                    <h3 className="text-3xl font-black tracking-tight uppercase">{step.title}</h3>
                    <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                      {step.description}
                    </p>
                    <div className="grid grid-cols-1 gap-3 pt-4">
                      {step.list.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle size={18} className="text-red-500 shrink-0" />
                          <span className="font-bold text-foreground/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </Section>

      {/* COMPARISON SECTION */}
      <Section variant="default" className="py-24 border-y">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader title="A Paradigm Shift" className="text-center mb-16" />
          <div className="space-y-4">
            {[
              { from: "Trust Based", to: "Proof Based" },
              { from: "Manual Reviews", to: "Automated Evaluation" },
              { from: "Data Collection", to: "Verification Anchoring" },
              { from: "Invasive Access", to: "Zero-Knowledge Logic" }
            ].map((row, idx) => (
              <div key={idx} className="flex items-center justify-between p-6 rounded-2xl border bg-background/50 hover:border-red-500/20 transition-colors">
                <div className="text-muted-foreground font-bold tracking-widest uppercase text-sm">{row.from}</div>
                <div className="h-px bg-foreground/10 flex-1 mx-8" />
                <div className="text-green-500 font-black tracking-tighter uppercase text-lg">{row.to}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="text-center pb-24 pt-24">
        <div className="relative mx-auto flex w-full max-w-4xl flex-col justify-between gap-y-12 border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-6 py-16 rounded-3xl">
          <PlusIcon className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6" strokeWidth={1} />
          <PlusIcon className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6" strokeWidth={1} />
          <PlusIcon className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6" strokeWidth={1} />
          <PlusIcon className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6" strokeWidth={1} />

          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">Audit-Ready. Regulator-Verifiable.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-bold italic">
              "Compliance should be provable, not invasive."
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="px-10 border-2">Contact Sales</Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" className="px-10 bg-red-500 hover:bg-red-600 text-white shadow-xl">
                Experience the Workflow <ArrowRightIcon className="size-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default HowItWorks;