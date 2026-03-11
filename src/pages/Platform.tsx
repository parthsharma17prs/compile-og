import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import { type ReactNode } from 'react';
import { ArrowRightIcon, PlusIcon, CheckCircle, Cpu, Shield, Zap, Layers, GitBranch, Terminal } from 'lucide-react';
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

const Platform = () => {
  const osLayers = [
    {
      title: "Core Verification",
      icon: Cpu,
      desc: "Continuous monitoring, risk scoring, and drift detection.",
      tags: ["Policy Engine", "Evidence Indexer"]
    },
    {
      title: "Privacy Mesh",
      icon: Shield,
      desc: "Zero-knowledge proofs and isolated execution environments.",
      tags: ["ZK Circuits", "Tenant Isolation"]
    },
    {
      title: "Proof Anchoring",
      icon: Layers,
      desc: "Multi-chain integrity across Algorand, Aleo, and Zcash.",
      tags: ["Blockchain", "Immutability"]
    },
    {
      title: "Intelligence Hub",
      icon: Zap,
      desc: "AI Agent Marketplace and automated audit generation.",
      tags: ["Marketplace", "Auto-SSP"]
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
                Compliance <br className="hidden md:block" />
                <span className="bg-red-500 px-4 rounded-md text-white my-2 inline-block">Operating</span> System
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto font-medium text-center">
                The Infrastructure for Provable Institutional Trust.
              </p>
            </div>
          </div>

          <div aria-hidden style={{ willChange: 'transform' }} className="absolute left-1/2 bottom-[-2rem] md:bottom-[-3rem] -translate-x-1/2 pointer-events-none select-none text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] font-extrabold uppercase leading-none opacity-10 tracking-tight z-0">
            Platform
          </div>
        </div>
      </Section>

      {/* REVEAL SECTION */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord
              text="CompliLedger is not a tool. It is infrastructure. It replaces invasive inspection with cryptographic verification."
              className="text-foreground font-space-grotesk"
            />
          </div>
        </div>
      </Section>

      {/* OS LAYERS */}
      <Section spacing="xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {osLayers.map((layer, i) => (
              <AnimatedContainer key={i} delay={i * 0.1}>
                <div className="h-full rounded-[3rem] border bg-background/40 p-10 backdrop-blur-md group hover:border-red-500/30 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center">
                      <layer.icon className="text-red-500" size={28} />
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter">{layer.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-medium text-lg leading-relaxed mb-8">
                    {layer.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {layer.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-black uppercase tracking-widest bg-foreground/5 py-1.5 px-3 rounded-full border border-foreground/10">{tag}</span>
                    ))}
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </Section>

      {/* INFRASTRUCTURE SECTION */}
      <Section variant="default" className="py-32 border-y overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <SectionHeader title="Infrastructure Built for Scale" className="text-left" />
              <div className="space-y-6">
                {[
                  { title: "Deterministic Pipelines", icon: GitBranch },
                  { title: "Machine-Readable Policy", icon: Terminal },
                  { title: "Automated Evidence Ingrestion", icon: Zap }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                      <item.icon size={20} />
                    </div>
                    <span className="text-xl font-bold uppercase tracking-tight">{item.title}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground font-medium pt-4">
                Our platform integrates seamlessly with your existing stack via high-performance APIs and specialized Master Agent interfaces.
              </p>
            </div>

            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-red-500/5 rounded-[3rem] blur-3xl animate-pulse" />
              <div className="relative h-full w-full rounded-[3rem] border bg-background/50 backdrop-blur-md overflow-hidden p-12 flex flex-col justify-center gap-6">
                <div className="text-sm font-bold tracking-widest uppercase text-red-500">The Distinction</div>
                <h3 className="text-4xl font-black uppercase leading-tight tracking-tighter">
                  From Reporting Exercise to Verifiable State.
                </h3>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3 text-muted-foreground font-bold">
                    <CheckCircle className="text-red-500" size={18} />
                    <span>No bulk data ingestion</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground font-bold">
                    <CheckCircle className="text-red-500" size={18} />
                    <span>No system mirroring</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground font-bold">
                    <CheckCircle className="text-red-500" size={18} />
                    <span>No credential harvesting</span>
                  </div>
                </div>
              </div>
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">If Compliance Matters, Architecture Matters.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Deploy the infrastructure that turns policies into proofs.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="px-10 border-2">Contact Sales</Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" className="px-10 bg-red-500 hover:bg-red-600 text-white shadow-xl">
                Launch Platform <ArrowRightIcon className="size-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Platform;