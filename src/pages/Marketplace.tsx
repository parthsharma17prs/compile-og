import React, { type ReactNode } from 'react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, PlusIcon, Bot, Zap, Shield, Search, CheckCircle, Code } from 'lucide-react';
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

const Marketplace = () => {
  const categories = [
    {
      title: "Policy & Framework",
      icon: Search,
      agents: ["Policy Interpreter", "Framework Alignment", "Drift Detection"]
    },
    {
      title: "Risk & Vulnerability",
      icon: Shield,
      agents: ["AI Risk Scorer", "Vulnerability Compliance", "Threat Monitor"]
    },
    {
      title: "Evidence & Audit",
      icon: Zap,
      agents: ["AutoDoc Agent", "AuditPack Generator", "Evidence Classifier"]
    },
    {
      title: "Platform & Integration",
      icon: Code,
      agents: ["GitHub Sentinel", "Ontology Builder", "API Connector"]
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
                Composable <br className="hidden md:block" />
                <span className="bg-red-500 px-4 rounded-md text-white my-2 inline-block">Compliance</span> Intelligence
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto font-medium">
                The AI Agent Marketplace for verifiable institutional tasks.
              </p>
            </div>
          </div>

          <div aria-hidden style={{ willChange: 'transform' }} className="absolute left-1/2 bottom-[-2rem] md:bottom-[-3rem] -translate-x-1/2 pointer-events-none select-none text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] font-extrabold uppercase leading-none opacity-10 tracking-tight z-0">
            Market
          </div>
        </div>
      </Section>

      {/* REVEAL SECTION */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord
              text="The AI Agent Marketplace is a catalog of purpose-built compliance agents that perform discrete, verifiable tasks within the ecosystem."
              className="text-foreground font-space-grotesk"
            />
          </div>
        </div>
      </Section>

      {/* MARKETPLACE GRID */}
      <Section spacing="xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
              <AnimatedContainer key={i} delay={i * 0.1}>
                <div className="h-full rounded-[3rem] border bg-background/40 p-10 backdrop-blur-md group hover:border-red-500/30 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center">
                      <cat.icon className="text-red-500" size={28} />
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter">{cat.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {cat.agents.map((agent, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-background/50 border border-transparent group-hover:border-red-500/10 transition-colors">
                        <div className="flex items-center gap-3">
                          <Bot size={18} className="text-red-500" />
                          <span className="font-bold text-lg">{agent}</span>
                        </div>
                        <CheckCircle size={16} className="text-muted-foreground/30" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <Button variant="outline" className="w-full rounded-2xl h-14 font-bold uppercase tracking-widest text-xs border-2">Explore {cat.title} Agents</Button>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </Section>

      {/* TRAITS SECTION */}
      <Section variant="default" className="py-24 border-y">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeader title="Agent Traits" className="mb-16" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Deterministic", desc: "No black-box surprises" },
              { label: "Composable", desc: "Pluggable workflows" },
              { label: "Bounded", desc: "Strict privacy limits" },
              { label: "Verifiable", desc: "Auditable outputs" }
            ].map((trait, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-lg font-black uppercase tracking-tighter">{trait.label}</div>
                <div className="text-xs text-muted-foreground font-bold">{trait.desc}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Deploy Intelligence. Not Risk.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Start with modular agents and scale to the full compliance operating system.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="px-10 border-2">Request Info</Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" className="px-10 bg-red-500 hover:bg-red-600 text-white shadow-xl">
                Subscribe Now <ArrowRightIcon className="size-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Marketplace;
