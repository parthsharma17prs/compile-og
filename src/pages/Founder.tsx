import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import { ArrowLeft, PlusIcon, ArrowRightIcon, Linkedin, Mail, CheckCircle } from 'lucide-react';
import { type ReactNode } from 'react';
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

const Founder = () => {
  const timeline = [
    { year: '2003-2009', role: 'Certified Pharmacy Technician', company: 'US Army' },
    { year: '2012-2014', role: 'Information Technology Auditor', company: 'KPMG US' },
    { year: '2015-2026', role: 'Senior Information Technology Auditor', company: 'Sikich' },
    { year: '2017-2022', role: 'Cyber Risk Manager', company: 'Deloitte' },
    { year: '2022-2024', role: 'Senior Manager - Security Compliance Leader', company: 'IBM' },
    { year: '2024-Present', role: 'IT Principal Solutions Architect', company: 'Maximus' },
    { year: '2024-Present', role: 'Founder', company: 'CompliLedger' }
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
                Founder's <br className="hidden md:block" />
                <span className="bg-red-500 px-4 rounded-md text-white my-2 inline-block">Perspective</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto font-medium text-center">
                The mission to bridge the gap between innovation and verification.
              </p>
            </div>
          </div>

          <div aria-hidden style={{ willChange: 'transform' }} className="absolute left-1/2 bottom-[-2rem] md:bottom-[-3rem] -translate-x-1/2 pointer-events-none select-none text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] font-extrabold uppercase leading-none opacity-10 tracking-tight z-0">
            Mission
          </div>
        </div>
      </Section>

      {/* REVEAL SECTION */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord
              text="Compliance should never be a barrier to innovation. It should be the foundation for it."
              className="text-foreground font-space-grotesk"
            />
          </div>
        </div>
      </Section>

      {/* FOUNDER STORY */}
      <Section spacing="xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-20 items-start">
            {/* LEFT: PHOTO & INFO */}
            <div className="sticky top-24 space-y-8">
              <AnimatedContainer delay={0.1}>
                <div className="relative group rounded-[3rem] overflow-hidden border bg-background/50 backdrop-blur-md p-4">
                  <img
                    src="/Founder.png"
                    alt="Maranda Harris"
                    className="w-full aspect-[4/5] object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-x-8 bottom-8 p-6 bg-background/90 backdrop-blur-md rounded-3xl border shadow-2xl">
                    <h3 className="text-2xl font-black uppercase tracking-tighter">Maranda Harris</h3>
                    <p className="text-red-500 font-bold text-xs uppercase tracking-widest mt-1">Founder & CCO</p>
                  </div>
                </div>
              </AnimatedContainer>

              <AnimatedContainer delay={0.2} className="flex gap-4">
                <Button variant="outline" className="flex-1 h-14 rounded-2xl border-2 font-bold uppercase tracking-widest text-[10px]">
                  <Linkedin className="size-4 mr-2" /> LinkedIn
                </Button>
                <Button variant="outline" className="flex-1 h-14 rounded-2xl border-2 font-bold uppercase tracking-widest text-[10px]">
                  <Mail className="size-4 mr-2" /> Message
                </Button>
              </AnimatedContainer>
            </div>

            {/* RIGHT: STORY */}
            <div className="space-y-12">
              <AnimatedContainer delay={0.3}>
                <div className="prose prose-xl prose-invert max-w-none">
                  <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-10">
                    Why I built <br /> <span className="text-red-500">CompliLedger</span>
                  </h2>
                  <p className="text-2xl font-medium leading-relaxed italic text-foreground/80 mb-12">
                    "I've spent my career in cybersecurity, compliance, and IT audit. I saw the same pattern repeat: compliance was slow, manual, and outdated."
                  </p>
                  <div className="space-y-6 text-muted-foreground font-medium">
                    <p>
                      Auditors still asked for spreadsheets and static reports, while teams were deploying cloud-native systems and AI at lightning speed. The gap between innovation and verification was widening.
                    </p>
                    <p>
                      That gap is what inspired CompliLedger. We're building a platform that transforms compliance from a point-in-time exercise into a continuous, provable, and privacy-preserving process.
                    </p>
                  </div>
                </div>
              </AnimatedContainer>

              {/* TIMELINE */}
              <AnimatedContainer delay={0.4}>
                <div className="pt-20 border-t border-foreground/10">
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-12">The Journey</h3>
                  <div className="relative space-y-0">
                    <div className="absolute left-[23px] top-6 bottom-6 w-px bg-gradient-to-b from-red-500/50 via-foreground/10 to-transparent" />
                    {timeline.reverse().map((item, idx) => (
                      <div key={idx} className="relative pl-16 pb-12 group last:pb-0">
                        <div className="absolute left-0 top-1.5 w-12 h-12 rounded-full bg-background border border-foreground/10 flex items-center justify-center group-hover:border-red-500 transition-all z-10">
                          <div className="w-2 h-2 rounded-full bg-foreground/20 group-hover:bg-red-500 group-hover:scale-150 transition-all" />
                        </div>
                        <div className="space-y-2">
                          <div className="text-[10px] font-black uppercase tracking-widest text-red-500">{item.year}</div>
                          <div className="text-xl font-black uppercase tracking-tighter group-hover:text-red-500 transition-colors">{item.role}</div>
                          <div className="text-sm text-muted-foreground font-bold">{item.company}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedContainer>
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to Modernize Your Compliance?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Join us in building the infrastructure for provable institutional trust.
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

export default Founder;
