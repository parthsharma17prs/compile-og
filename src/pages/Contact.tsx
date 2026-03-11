import { Link } from 'react-router-dom';
import { Mail, ArrowRight, MapPin, Globe, Phone, Calendar, PlusIcon, ArrowRightIcon } from 'lucide-react';
import { useEffect, useRef, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import Section from '@/components/Section';
import Layout from '@/components/Layout';
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

const Contact = () => {
  const calComUrl = import.meta.env.VITE_CALCOM_URL || 'https://cal.com';

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalModal = () => {
    if (typeof (window as any).Cal !== 'undefined') {
      (window as any).Cal('openModal', {
        calLink: calComUrl.replace('https://cal.com/', ''),
      });
    } else {
      window.open(calComUrl, '_blank');
    }
  };

  return (
    <Layout>
      {/* PAGE HERO */}
      <Section spacing="xl" className="flex items-start justify-center min-h-[60vh] pt-4 md:pt-8 w-full max-w-7xl mx-auto">
        <div className="relative w-full">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden border bg-background/60 shadow-2xl rounded-xl md:rounded-[2rem] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-background to-background" />

            <div className="relative z-10 px-6 py-12 md:px-10 md:py-16 text-center text-foreground">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight leading-none text-center">
                Architectural <br className="hidden md:block" />
                <span className="bg-red-500 px-4 rounded-md text-white my-2 inline-block">Consultation</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto font-medium text-center">
                Connect with our compliance and privacy engineering team.
              </p>
            </div>
          </div>

          <div aria-hidden style={{ willChange: 'transform' }} className="absolute left-1/2 bottom-[-2rem] md:bottom-[-3rem] -translate-x-1/2 pointer-events-none select-none text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] font-extrabold uppercase leading-none opacity-10 tracking-tight z-0">
            Contact
          </div>
        </div>
      </Section>

      {/* REVEAL SECTION */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord
              text="Whether you're preparing for SOC 2, chasing FedRAMP, or navigating MiCA — we turn policies into proof."
              className="text-foreground font-space-grotesk"
            />
          </div>
        </div>
      </Section>

      {/* CONTACT OPTIONS */}
      <Section spacing="xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* SCHEDULER CARD */}
            <AnimatedContainer delay={0.1}>
              <div className="h-full rounded-[3rem] border bg-background/40 p-10 backdrop-blur-md">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center">
                    <Calendar className="text-red-500" size={28} />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter">Schedule a Demo</h3>
                </div>
                <div className="min-h-[500px] rounded-3xl overflow-hidden border bg-background/50">
                  <iframe
                    src={`${calComUrl}?embed=true&theme=dark`}
                    width="100%"
                    height="500"
                    frameBorder="0"
                    className="w-full"
                    title="Schedule a meeting"
                  />
                </div>
                <div className="mt-8 text-center text-muted-foreground text-xs font-bold uppercase tracking-widest">
                  Book a dedicated architecture review
                </div>
              </div>
            </AnimatedContainer>

            {/* DIRECT CONTACT INFO */}
            <div className="space-y-8">
              <AnimatedContainer delay={0.2}>
                <div className="rounded-[3rem] border bg-background/40 p-10 backdrop-blur-md">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center">
                      <Mail className="text-red-500" size={28} />
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter">Direct Channels</h3>
                  </div>
                  <div className="grid gap-6">
                    {[
                      { label: "Sales & Inquiries", email: "maranda@compliledger.com" },
                      { label: "Partner Program", email: "partners@compliledger.com" },
                      { label: "Media & Press", email: "media@compliledger.com" }
                    ].map((channel, idx) => (
                      <a key={idx} href={`mailto:${channel.email}`} className="group flex items-center justify-between p-6 rounded-[2rem] bg-background/50 border border-transparent hover:border-red-500/10 hover:bg-background/80 transition-all">
                        <div>
                          <div className="text-[10px] uppercase font-black tracking-widest opacity-50 mb-1">{channel.label}</div>
                          <div className="text-lg font-bold">{channel.email}</div>
                        </div>
                        <ArrowRightIcon className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-red-500" size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedContainer>

              <AnimatedContainer delay={0.3}>
                <div className="rounded-[3rem] border border-dashed border-foreground/10 p-10 flex flex-col items-center justify-center text-center">
                  <Globe className="text-muted-foreground mb-6" size={48} />
                  <h4 className="text-xl font-black uppercase tracking-tighter mb-2">Global Operations</h4>
                  <p className="text-muted-foreground font-medium text-sm">
                    Headquarters: Arlington, VA<br />
                    Serving clients across North America, Europe, and Asia.
                  </p>
                </div>
              </AnimatedContainer>
            </div>
          </div>
        </div>
      </Section>

      {/* FINAL CALLOUT */}
      <Section className="text-center pb-24 pt-24 text-foreground">
        <div className="relative mx-auto flex w-full max-w-4xl flex-col justify-between gap-y-12 border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-6 py-16 rounded-3xl">
          <PlusIcon className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6" strokeWidth={1} />
          <PlusIcon className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6" strokeWidth={1} />
          <PlusIcon className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6" strokeWidth={1} />
          <PlusIcon className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6" strokeWidth={1} />

          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Need Immediate Assistance?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Our security responders are available for urgent compliance drift investigations.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-10 bg-red-500 hover:bg-red-600 text-white shadow-xl" asChild>
              <a href="tel:+15550000000">Call Support <Phone className="size-4 ml-2" /></a>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
