import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { type ReactNode } from 'react';
import { ShieldCheck, Lock, Binary, Cpu, Server, CheckCircle, PlusIcon, ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { TextRevealByWord } from '@/components/ui/text-reveal-by-word';

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

const Security = () => {
  const securityColumns = [
    {
      title: "Zero-Knowledge",
      icon: Lock,
      description: "Verify control operation without revealing raw system logs or customer PII.",
      list: ["Shielded attestations", "Confidential evaluation", "ZK-proof generation"]
    },
    {
      title: "Hard Boundaries",
      icon: Server,
      description: "isolated execution environments ensure absolute tenant separation at the hardware level.",
      list: ["No shared data paths", "Cryptographic identity", "Role-scoped signatures"]
    },
    {
      title: "Immutable Anchoring",
      icon: Binary,
      description: "Every verification event is anchored across Algorand, Aleo, and Zcash.",
      list: ["Tamper-proof anchoring", "Institutional audit trails", "Blockchain integrity"]
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
                Security <br className="hidden md:block" />
                <span className="bg-red-500 px-4 rounded-md text-white my-2 inline-block">Architecture</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto font-medium text-center">
                Structural privacy for highly regulated institutional environments.
              </p>
            </div>
          </div>

          <div aria-hidden style={{ willChange: 'transform' }} className="absolute left-1/2 bottom-[-2rem] md:bottom-[-3rem] -translate-x-1/2 pointer-events-none select-none text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] font-extrabold uppercase leading-none opacity-10 tracking-tight z-0">
            Security
          </div>
        </div>
      </Section>

      {/* REVEAL SECTION */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord
              text="Our multi-chain zero-knowledge approach ensures compliance can be proven cryptographically instead of relying on privileged access."
              className="text-foreground font-space-grotesk"
            />
          </div>
        </div>
      </Section>

      {/* ARCHITECTURE GRID */}
      <Section spacing="xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {securityColumns.map((col, i) => (
              <AnimatedContainer key={i} delay={i * 0.1}>
                <div className="h-full rounded-[3rem] border bg-background/40 p-10 backdrop-blur-md group hover:border-red-500/30 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-8">
                    <col.icon className="text-red-500" size={28} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{col.title}</h3>
                  <p className="text-muted-foreground font-medium text-sm leading-relaxed mb-8">
                    {col.description}
                  </p>
                  <div className="space-y-3">
                    {col.list.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-red-500 shrink-0" />
                        <span className="font-bold text-xs uppercase tracking-widest">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </Section>

      {/* DETAILED FEATURES */}
      <Section variant="default" className="py-24 border-y">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeader title="Adversarial Resilience" className="text-center mb-16" />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-xl font-black uppercase flex items-center gap-3">
                <ShieldCheck className="text-red-500" />
                Less Data, Less Risk
              </h4>
              <p className="text-muted-foreground font-medium">
                CompliLedger does not mirror production systems or scrape logs indiscriminately. Evidence is fingerprinted, not copied. Metadata is minimized by default.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-xl font-black uppercase flex items-center gap-3">
                <Cpu className="text-red-500" />
                Continuous Integrity
              </h4>
              <p className="text-muted-foreground font-medium">
                Security is continuous. We monitor posture as systems change — not after incidents occur. Drift detection and drift correction are automated.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="text-center pb-24 pt-24 text-foreground">
        <div className="relative mx-auto flex w-full max-w-4xl flex-col justify-between gap-y-12 border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-6 py-16 rounded-3xl">
          <PlusIcon className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6" strokeWidth={1} />
          <PlusIcon className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6" strokeWidth={1} />
          <PlusIcon className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6" strokeWidth={1} />
          <PlusIcon className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6" strokeWidth={1} />

          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Proof Based. Not Trust Based.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Structural privacy designed for institutional-grade compliance programs.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="px-10 border-2">Contact Sales</Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" className="px-10 bg-red-500 hover:bg-red-600 text-white shadow-xl">
                Request Security Brief <ArrowRightIcon className="size-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Security;
