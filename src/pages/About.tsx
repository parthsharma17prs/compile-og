import React, { type ReactNode } from 'react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, PlusIcon, CheckCircle, Shield, Target, Lightbulb, Users } from 'lucide-react';
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

const About = () => {
  const values = [
    { title: "Verifiable", icon: CheckCircle, desc: "Proof over brand promises." },
    { title: "Privacy-First", icon: Shield, desc: "Data minimization by default." },
    { title: "Defensible", icon: Target, desc: "Audits that hold up in court." },
    { title: "Continuous", icon: Lightbulb, desc: "Real-time state, not snapshots." }
  ];

  const storyPoints = [
    "Modern compliance is a tax on innovation.",
    "Data centralization is a liability, not an asset.",
    "Traditional audits are periodic and opaque.",
    "We built CompliLedger to fix the compliance crisis."
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
                Compliance Without <br className="hidden md:block" />
                <span className="bg-red-500 px-4 rounded-md text-white my-2 inline-block">Surrendering</span> Privacy
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto font-medium">
                The story of how we're redefining institutional trust.
              </p>
            </div>
          </div>

          <div aria-hidden style={{ willChange: 'transform' }} className="absolute left-1/2 bottom-[-2rem] md:bottom-[-3rem] -translate-x-1/2 pointer-events-none select-none text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] font-extrabold uppercase leading-none opacity-10 tracking-tight z-0">
            About
          </div>
        </div>
      </Section>

      {/* REVEAL SECTION */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord
              text="CompliLedger modernize compliance for a world where data sensitivity, regulatory scrutiny, and technological complexity are increasing."
              className="text-foreground font-space-grotesk"
            />
          </div>
        </div>
      </Section>

      {/* MISSION CARDS */}
      <Section spacing="xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedContainer key={i} delay={i * 0.1}>
                <div className="h-full rounded-[2rem] border bg-background/40 p-8 backdrop-blur-md group hover:border-red-500/30 transition-all duration-500 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-6">
                    <v.icon className="text-red-500" size={24} />
                  </div>
                  <h3 className="text-xl font-black uppercase mb-3 tracking-tighter">{v.title}</h3>
                  <p className="text-muted-foreground font-medium text-sm">{v.desc}</p>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </Section>

      {/* STORY SECTION */}
      <Section variant="default" className="py-24 border-y">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <SectionHeader title="Our Story" className="text-left" />
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Born from the intersection of cryptography and regulatory law, CompliLedger was founded on a simple insight: institutions shouldn't have to choose between keeping data private and proving they are compliant.
              </p>
              <div className="space-y-4">
                {storyPoints.map((p, i) => (
                  <div key={i} className="flex items-center gap-4 text-foreground/80 font-bold">
                    <CheckCircle className="text-red-500" size={20} />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-red-500/5 rounded-[3rem] blur-3xl" />
              <div className="relative h-full w-full rounded-[3rem] border bg-background/50 backdrop-blur-md overflow-hidden p-12 flex flex-col justify-center gap-8">
                <div className="text-sm font-bold tracking-widest uppercase text-red-500">The Impact</div>
                <h3 className="text-4xl font-black uppercase leading-tight tracking-tighter">
                  Building the Verifiable institutional Operating System.
                </h3>
                <p className="text-muted-foreground italic font-medium">
                  "Compliance should create confidence, not risk."
                </p>
                <div className="flex items-center gap-4 pt-6">
                  <Users className="text-red-500" size={32} />
                  <div>
                    <div className="font-black text-xl">10M+</div>
                    <div className="text-xs uppercase text-muted-foreground font-bold">Verification Events</div>
                  </div>
                </div>
              </div>
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to Modernize your Compliance?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Join the growing list of institutions building the verifiable future.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="px-10 border-2">Contact Sales</Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" className="px-10 bg-red-500 hover:bg-red-600 text-white shadow-xl">
                Book a Demo <ArrowRightIcon className="size-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
