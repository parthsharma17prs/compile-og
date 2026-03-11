import React, { type ReactNode } from 'react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Building2, Globe, Blocks, ShieldCheck, Landmark, Lock, Cpu, FileText, ArrowRight, CheckCircle, ArrowRightIcon, PlusIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TextRevealByWord } from '@/components/ui/text-reveal-by-word';
import { motion, useReducedMotion } from 'motion/react';

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

const Solutions = () => {
  const solutions = [
    {
      id: "financial",
      icon: Building2,
      icon2: Globe,
      title: "Finance & Tokenization",
      tags: "DORA • PCI DSS • SOX • Basel III",
      description: "Automate evidence collection and control mapping for financial and tokenized ecosystems with ZK-proofs.",
      benefits: [
        "Continuous evidence from KYC/AML systems",
        "Automated mapping for DORA and PCI DSS",
        "Real-time proofs for RWA compliance",
        "AuditSync™ regulator portals"
      ],
      linkText: "Explore Financial Solutions"
    },
    {
      id: "web3",
      icon: Blocks,
      icon2: ShieldCheck,
      title: "Web3 & DeFi",
      tags: "MiCA • FATF • OFAC • Digital Asset",
      description: "Prove security and compliance for decentralized protocols without exposing proprietary code or PII.",
      benefits: [
        "Smart contract SBOM analysis",
        "ZKP attestations for security checks",
        "Travel Rule compliance for DeFi",
        "Verifiable Credentials for DAOs"
      ],
      linkText: "Explore Web3 Solutions"
    },
    {
      id: "government",
      icon: Landmark,
      icon2: FileText,
      title: "Gov & Defense",
      tags: "FedRAMP • NIST • DoD RMF • OSCAL",
      description: "Accelerate authorizations by automating OSCAL documentation and enabling continuous ATO workflows.",
      benefits: [
        "OSCAL-native generation of SSPs",
        "Continuous RMF drift detection",
        "Support for IL4, IL5, IL6 workloads",
        "Secure evidence-sharing portals"
      ],
      linkText: "Explore Gov Solutions"
    },
    {
      id: "enterprise",
      icon: Cpu,
      icon2: ShieldCheck,
      title: "Enterprise SaaS",
      tags: "ISO 27001 • SOC 2 • GDPR • NIST AI",
      description: "Keep engineering teams focused while maintaining continuous SOC 2 and ISO audit-readiness.",
      benefits: [
        "GitHub-native compliance checks",
        "Auto-generation of ISO policy packs",
        "AI/ML control mapping (NIST AI RMF)",
        "Automated SBOM security tracking"
      ],
      linkText: "Explore Enterprise Solutions"
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
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase text-foreground/90 tracking-tight leading-none text-center">
                Built on <br className="hidden md:block" />
                <span className="bg-red-500 px-4 rounded-md text-white my-2 inline-block">Cryptographic</span><br className="hidden md:block" /> Compliance
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto font-medium">
                Tailored proof workflows for high-stakes industries.
              </p>
            </div>
          </div>

          <div aria-hidden style={{ willChange: 'transform' }} className="absolute left-1/2 bottom-[-2rem] md:bottom-[-3rem] -translate-x-1/2 pointer-events-none select-none text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] font-extrabold uppercase leading-none opacity-10 tracking-tight z-0">
            Solutions
          </div>
        </div>
      </Section>

      {/* REVEAL SECTION */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord
              text="Industry Solutions Built on Cryptographic Compliance. Clear, auditable compliance workflows tailored to your domain."
              className="text-foreground font-space-grotesk"
            />
          </div>
        </div>
      </Section>

      {/* SOLUTIONS GRID */}
      <Section spacing="xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {solutions.map((s, i) => (
              <AnimatedContainer key={s.id} delay={i * 0.1}>
                <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-[2.5rem] border bg-background/40 p-10 backdrop-blur-md hover:border-red-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/5">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                        <s.icon className="text-red-500" size={24} />
                      </span>
                      <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground">{s.tags}</span>
                    </div>

                    <h3 className="text-3xl font-extrabold tracking-tight">{s.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                      {s.description}
                    </p>

                    <div className="space-y-3 pt-4">
                      {s.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-foreground/80">
                          <CheckCircle size={18} className="text-red-500 mt-1 shrink-0" />
                          <span className="font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-10">
                    <Link to="/contact">
                      <Button className="w-full h-14 rounded-2xl group/btn bg-foreground text-background hover:bg-red-500 hover:text-white transition-all text-lg font-bold">
                        {s.linkText}
                        <ArrowRight className="ml-2 size-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </Section>

      {/* METRICS SECTION */}
      <Section variant="default" className="py-24 border-y">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader title="The Impact of Proof" className="text-center mb-16" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Audit Preparation", val: "75%", desc: "Faster cycles" },
              { label: "Evidence Reuse", val: "90%", desc: "Across frameworks" },
              { label: "Operating Cost", val: "60%", desc: "Lower burden" },
              { label: "Engineering Time", val: "40%", desc: "Reclaimed" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-black text-red-500">{stat.val}</div>
                <div className="font-bold text-sm tracking-widest uppercase">{stat.label}</div>
                <div className="text-muted-foreground text-sm">{stat.desc}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Every Industry. One standard.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
              "CompliLedger is the only platform that allows us to prove compliance state without revealing sensitive data."
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="px-10 border-2">Contact Sales</Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" className="px-10 bg-red-500 hover:bg-red-600 text-white">
                Request Demo <ArrowRightIcon className="size-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Solutions;
