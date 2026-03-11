import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { type ReactNode } from 'react';
import { ArrowRightIcon, PlusIcon, CheckCircle, Zap } from 'lucide-react';
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

const Pricing = () => {
  const plans = [
    {
      name: "Startup",
      price: "$19",
      color: "bg-blue-500",
      features: [
        "Base Platform Access",
        "1 Compliance Framework",
        "Auto-generated Audit Docs",
        "Base Risk Scoring",
        "Email Support"
      ]
    },
    {
      name: "Midsize",
      price: "$39",
      color: "bg-green-500",
      featured: true,
      features: [
        "Everything in Startup",
        "Up to 3 Frameworks",
        "GitHub Sentinel (Basic)",
        "Drift Detection Engine",
        "Marketplace Access"
      ]
    },
    {
      name: "Enterprise",
      price: "$59",
      color: "bg-red-500",
      features: [
        "Everything in Midsize",
        "Unlimited Frameworks",
        "Blockchain Anchoring",
        "Dedicated Success Manager",
        "Custom Agent Bundles"
      ]
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
                Launch <br className="hidden md:block" />
                <span className="bg-red-500 px-4 rounded-md text-white my-2 inline-block">Pricing</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto font-medium">
                Startup-friendly rates for the next generation of compliance.
              </p>
            </div>
          </div>

          <div aria-hidden style={{ willChange: 'transform' }} className="absolute left-1/2 bottom-[-2rem] md:bottom-[-3rem] -translate-x-1/2 pointer-events-none select-none text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] font-extrabold uppercase leading-none opacity-10 tracking-tight z-0">
            Pricing
          </div>
        </div>
      </Section>

      {/* REVEAL SECTION */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord
              text="Compliance software is traditionally priced by seats or data volume. CompliLedger is priced by capability and scope, not surveillance."
              className="text-foreground font-space-grotesk"
            />
          </div>
        </div>
      </Section>

      {/* PRICING GRID */}
      <Section spacing="xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <AnimatedContainer key={i} delay={i * 0.1}>
                <div className={`h-full rounded-[3rem] border p-10 backdrop-blur-md flex flex-col justify-between transition-all duration-500 ${plan.featured ? 'bg-background/80 border-red-500/50 shadow-2xl shadow-red-500/10 scale-105 z-10' : 'bg-background/40 border-foreground/10 hover:border-foreground/30'}`}>
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className={`text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full text-white ${plan.color}`}>{plan.name}</span>
                      {plan.featured && <Zap size={20} className="text-red-500 fill-red-500" />}
                    </div>
                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                      <span className="text-muted-foreground font-bold">/mo</span>
                    </div>
                    <div className="space-y-4">
                      {plan.features.map((f, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-red-500 mt-1 shrink-0" />
                          <span className="font-bold text-foreground/80 text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-12">
                    <Link to="/contact">
                      <Button className={`w-full h-14 rounded-2xl font-bold text-lg transition-all ${plan.featured ? 'bg-red-500 hover:bg-red-600 text-white shadow-xl shadow-red-500/20' : 'bg-foreground text-background hover:bg-red-500 hover:text-white'}`}>
                        Get Started
                      </Button>
                    </Link>
                    <p className="text-center text-[10px] uppercase font-black tracking-widest mt-4 opacity-30">Lock in early rates</p>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </Section>

      {/* PHILOSOPHY SECTION */}
      <Section variant="default" className="py-24 border-y">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-black uppercase tracking-tighter">You Pay For</h3>
              <div className="grid grid-cols-1 gap-4">
                {["Compliance Automation", "Verification Depth", "Framework Coverage", "Proof Generation"].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border bg-background/50 font-bold flex items-center gap-3">
                    <CheckCircle className="text-green-500" size={20} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-black uppercase tracking-tighter">You Never Pay For</h3>
              <div className="grid grid-cols-1 gap-4">
                {["User Seats", "Data Ingestion Volume", "System Access", "Telemetry Collection"].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border bg-background/50 font-bold flex items-center gap-3">
                    <PlusIcon className="text-red-500 rotate-45" size={20} />
                    {item}
                  </div>
                ))}
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Need a Custom Framework?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              We build specialized verification agents for proprietary internal standards.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="px-10 border-2">Contact Sales</Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" className="px-10 bg-red-500 hover:bg-red-600 text-white shadow-xl">
                Request Enterprise Quote <ArrowRightIcon className="size-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Pricing;
