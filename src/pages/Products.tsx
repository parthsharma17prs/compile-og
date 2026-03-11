import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { type ReactNode, useState } from 'react';
import { ArrowRight, PlusIcon, Server, Code, Users, Cpu, ShieldCheck, Compass, CheckCircle } from 'lucide-react';
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

const Products = () => {
  const [selected, setSelected] = useState<string>('platform');

  const productData = [
    {
      id: 'platform',
      title: 'CompliLedger Platform',
      subtitle: 'The Compliance Operating System (CompliOS)',
      icon: Server,
      tags: ["DORA", "SOC 2", "ISO"],
      benefits: [
        "Continuous compliance monitoring",
        "Automated audit documentation",
        "Risk scoring & drift detection",
        "Zero-knowledge proof generation",
        "Blockchain-anchored verification"
      ],
      link: "/demo",
      linkText: "Book Platform Demo"
    },
    {
      id: 'sdks',
      title: 'Developer SDKs',
      subtitle: 'Embed compliance into your core',
      icon: Code,
      tags: ["SDK", "API", "ZK"],
      benefits: [
        "CompALGO — Algorand SDK",
        "CompZ — Zcash Privacy SDK",
        "Comp-Leo — Aleo ZK SDK",
        "Developer-first CLI tools"
      ],
      link: "/documentation",
      linkText: "View Documentation"
    },
    {
      id: 'market',
      title: 'Agent Marketplace',
      subtitle: 'Modular compliance intelligence',
      icon: Users,
      tags: ["AI", "AGENTS", "MODULAR"],
      benefits: [
        "GitHub Sentinel Agent",
        "Policy Interpreter AI",
        "AutoDoc Compliance Agent",
        "Security Drift Detector"
      ],
      link: "/marketplace",
      linkText: "Browse Marketplace"
    }
  ];

  return (
    <Layout>
      {/* PAGE HERO */}
      <Section spacing="xl" className="flex items-start justify-center min-h-[60vh] pt-4 md:pt-8 w-full max-w-7xl mx-auto">
        <div className="relative w-full">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden border bg-background/60 shadow-2xl rounded-xl md:rounded-[2rem] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-background to-background" />

            <div className="relative z-10 px-6 py-12 md:px-10 md:py-16 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase text-foreground/90 tracking-tight leading-none">
                Designed for <br className="hidden md:block" />
                <span className="bg-red-500 px-4 rounded-md text-white my-2 inline-block">Privacy-First</span><br className="hidden md:block" /> Compliance
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto font-medium">
                The core compliance operating system for the verifiable era.
              </p>
            </div>
          </div>

          <div aria-hidden style={{ willChange: 'transform' }} className="absolute left-1/2 bottom-[-2rem] md:bottom-[-3rem] -translate-x-1/2 pointer-events-none select-none text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] font-extrabold uppercase leading-none opacity-10 tracking-tight z-0">
            Products
          </div>
        </div>
      </Section>

      {/* REVEAL SECTION */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord
              text="CompliLedger is the core infrastructure. SDKs, AI agents, and specialized interfaces extend it without compromising privacy."
              className="text-foreground font-space-grotesk"
            />
          </div>
        </div>
      </Section>

      {/* PRODUCT EXPLORER */}
      <Section spacing="xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* LEFT NAV */}
            <div className="md:col-span-4 space-y-4">
              <div className="text-sm font-bold tracking-widest uppercase text-red-500 mb-6">Select Product</div>
              {productData.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelected(p.id)}
                  className={`w-full text-left p-6 rounded-3xl transition-all duration-300 border ${selected === p.id
                    ? 'bg-background border-red-500/50 shadow-xl shadow-red-500/5 translate-x-2'
                    : 'border-transparent hover:bg-background/40 hover:translate-x-1'}`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${selected === p.id ? 'bg-red-500 text-white' : 'bg-red-500/10 text-red-500'}`}>
                      <p.icon size={24} />
                    </span>
                    <div>
                      <div className="font-bold text-lg">{p.title}</div>
                      <div className="text-xs text-muted-foreground font-medium uppercase tracking-tight">{p.subtitle}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* RIGHT CONTENT */}
            <div className="md:col-span-8">
              <AnimatedContainer key={selected}>
                <div className="relative overflow-hidden rounded-[3rem] border bg-background/40 p-12 backdrop-blur-md min-h-[500px] flex flex-col justify-between">
                  <div className="space-y-8">
                    <div className="flex flex-wrap gap-2">
                      {productData.find(p => p.id === selected)?.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black tracking-widest uppercase bg-foreground/5 py-1 px-3 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                      {productData.find(p => p.id === selected)?.title}
                    </h2>
                    <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
                      {productData.find(p => p.id === selected)?.subtitle}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 pt-4">
                      {productData.find(p => p.id === selected)?.benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-red-500 mt-1 shrink-0" />
                          <span className="font-bold text-foreground/80">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-12 pt-12 border-t border-dashed">
                    <Link to={productData.find(p => p.id === selected)?.link || "#"}>
                      <Button className="h-16 px-12 rounded-2xl text-lg font-bold bg-red-500 hover:bg-red-600 text-white shadow-xl shadow-red-500/20">
                        {productData.find(p => p.id === selected)?.linkText}
                        <ArrowRight className="ml-3 size-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedContainer>
            </div>
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Compliance is Infrastructure.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Choose how to deploy it — from single agents to a full compliance OS.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="px-10 border-2">Request Info</Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" className="px-10 bg-red-500 hover:bg-red-600 text-white shadow-lg">
                Book a Demo <ArrowRight className="size-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Products;
