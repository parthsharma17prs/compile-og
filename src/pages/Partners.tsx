import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { TextRevealByWord } from '@/components/ui/text-reveal-by-word';
import { CheckCircle, ArrowRightIcon, PlusIcon, Globe, Cpu, Users, ShieldCheck, Zap } from 'lucide-react';

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

const Partners = () => {
  const ecosystems = [
    {
      title: "Blockchain & Protocol",
      icon: Globe,
      desc: "Privacy-focused networks supporting verification and ZK computation.",
      partners: ["Algorand", "Aleo", "Zcash"]
    },
    {
      title: "Audit & Compliance",
      icon: ShieldCheck,
      desc: "Audit firms and assessors using proof-based verification models.",
      partners: ["SOC 2 Assessors", "MiCA Auditors"]
    },
    {
      title: "Tech & Infrastructure",
      icon: Cpu,
      desc: "Cloud providers and security platforms with verified integrations.",
      partners: ["Cloud Native", "SecOps Platforms"]
    },
    {
      title: "Developer Tools",
      icon: Zap,
      desc: "Builders embedding compliance logic using our SDKs and Agents.",
      partners: ["SDK Builders", "Tooling Providers"]
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
                Strategic <br className="hidden md:block" />
                <span className="bg-red-500 px-4 rounded-md text-white my-2 inline-block">Partnerships</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto font-medium text-center">
                Alignment based on proof, privacy, and long-term institutional trust.
              </p>
            </div>
          </div>

          <div aria-hidden style={{ willChange: 'transform' }} className="absolute left-1/2 bottom-[-2rem] md:bottom-[-3rem] -translate-x-1/2 pointer-events-none select-none text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] font-extrabold uppercase leading-none opacity-10 tracking-tight z-0">
            Partners
          </div>
        </div>
      </Section>

      {/* REVEAL SECTION */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord
              text="Partnership is not about sharing data. It is about architectural alignment. We partner with those who put proof first."
              className="text-foreground font-space-grotesk"
            />
          </div>
        </div>
      </Section>

      {/* ECOSYSTEM GRID */}
      <Section spacing="xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecosystems.map((eco, i) => (
              <AnimatedContainer key={i} delay={i * 0.1}>
                <div className="h-full rounded-[3rem] border bg-background/40 p-10 backdrop-blur-md group hover:border-red-500/30 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center">
                      <eco.icon className="text-red-500" size={28} />
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter">{eco.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-medium text-lg mb-8 leading-relaxed">
                    {eco.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {eco.partners.map((p, idx) => (
                      <span key={idx} className="text-[10px] font-black uppercase tracking-widest bg-foreground/5 py-1.5 px-3 rounded-full border border-foreground/10">{p}</span>
                    ))}
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </Section>

      {/* PHILOSOPHY SECTION */}
      <Section variant="default" className="py-24 border-y">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeader title="Our Collaboration Model" className="mb-16" />
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4">
              <h4 className="text-xl font-black uppercase tracking-tighter">Alignment over access</h4>
              <p className="text-muted-foreground font-medium">
                We never trade customer data for distribution. Partnerships are built on clear architectural boundaries and zero-knowledge verification paths.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-black uppercase tracking-tighter">Credibility over logos</h4>
              <p className="text-muted-foreground font-medium">
                We prioritize building the right foundations. Select integrations are only announced once the compliance integrity of the connection is verified.
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Interested in Partnering?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Join the ecosystem of institutions redefining compliance for the privacy-first era.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="px-10 border-2">Contact Sales</Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" className="px-10 bg-red-500 hover:bg-red-600 text-white shadow-xl">
                Request Partner Brief <ArrowRightIcon className="size-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Partners;