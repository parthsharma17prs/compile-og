import { BookOpen, FileText, FileCheck, FileCode, GitBranch, Key, Lock, Shield, Zap, ArrowRight, Download, ExternalLink, Code, PlusIcon, ArrowRightIcon } from 'lucide-react';
import { type ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import { motion, useReducedMotion } from 'motion/react';
import { TextRevealByWord } from '@/components/ui/text-reveal-by-word';

type Resource = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  category: 'docs' | 'briefs' | 'blog';
  cta?: string;
};

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

const Documentation = () => {
  const [activeTab, setActiveTab] = useState<'docs' | 'briefs' | 'blog'>('docs');

  const resources: Resource[] = [
    {
      title: 'Getting Started Guide',
      description: 'How to connect repos, SBOMs, and compliance tools',
      icon: <Zap className="w-5 h-5" />,
      link: '/docs/getting-started',
      category: 'docs',
    },
    {
      title: 'Integration Docs',
      description: 'GitHub, cloud, SBOM, AML/KYC, and smart contract connectors',
      icon: <GitBranch className="w-5 h-5" />,
      link: '/docs/integrations',
      category: 'docs',
    },
    {
      title: 'API Reference',
      description: 'Automate evidence ingestion and retrieval with our APIs',
      icon: <Code className="w-5 h-5" />,
      link: '/docs/api',
      category: 'docs',
    },
    {
      title: 'OSCAL Support',
      description: 'Generate OSCAL-native SSPs, POA&Ms, and audit-ready documentation',
      icon: <FileCode className="w-5 h-5" />,
      link: '/docs/oscalsupport',
      category: 'docs',
    },
    {
      title: 'Financial Services & Tokenization',
      description: 'DORA, PCI DSS, AML/BSA, Basel III compliance automation',
      icon: <FileText className="w-5 h-5" />,
      link: '/briefs/financial-services',
      category: 'briefs',
      cta: 'Download Brief',
    },
    {
      title: 'Web3 & DeFi',
      description: 'Proving MiCA, FATF Travel Rule, and DeFi security compliance',
      icon: <Shield className="w-5 h-5" />,
      link: '/briefs/web3-defi',
      category: 'briefs',
      cta: 'Download Brief',
    },
    {
      title: 'Government & Defense',
      description: 'FedRAMP, RMF, OSCAL, and Continuous ATO automation',
      icon: <Shield className="w-5 h-5" />,
      link: '/briefs/government',
      category: 'briefs',
      cta: 'Download Brief',
    },
    {
      title: 'Why Continuous Compliance is the New Normal',
      description: 'How automated compliance is transforming enterprise security',
      icon: <BookOpen className="w-5 h-5" />,
      link: '/blog/continuous-compliance',
      category: 'blog',
      cta: 'Read More',
    },
    {
      title: 'MiCA & DeFi: What Regulators Expect in 2025',
      description: 'Navigating the new regulatory landscape for decentralized finance',
      icon: <BookOpen className="w-5 h-5" />,
      link: '/blog/mica-defi-2025',
      category: 'blog',
      cta: 'Read More',
    },
  ];

  const filteredResources = resources.filter(resource => resource.category === activeTab);

  return (
    <Layout>
      {/* PAGE HERO */}
      <Section spacing="xl" className="flex items-start justify-center min-h-[60vh] pt-4 md:pt-8 w-full max-w-7xl mx-auto">
        <div className="relative w-full">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden border bg-background/60 shadow-2xl rounded-xl md:rounded-[2rem] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-background to-background" />

            <div className="relative z-10 px-6 py-12 md:px-10 md:py-16 text-center text-foreground">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight leading-none text-center">
                Knowledge <br className="hidden md:block" />
                <span className="bg-red-500 px-4 rounded-md text-white my-2 inline-block">Infrastructure</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto font-medium text-center">
                Guides, briefs, and insights to help you build verifiable trust.
              </p>
            </div>
          </div>

          <div aria-hidden style={{ willChange: 'transform' }} className="absolute left-1/2 bottom-[-2rem] md:bottom-[-3rem] -translate-x-1/2 pointer-events-none select-none text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] font-extrabold uppercase leading-none opacity-10 tracking-tight z-0">
            Docs
          </div>
        </div>
      </Section>

      {/* REVEAL SECTION */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord
              text="Explore documentation, industry briefs, and technical insights. Everything you need to turn policies into proof."
              className="text-foreground font-space-grotesk"
            />
          </div>
        </div>
      </Section>

      {/* RESOURCE TABS */}
      <Section spacing="xl">
        <div className="max-w-6xl mx-auto px-4">
          {/* TAB NAV */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-20 bg-background/40 backdrop-blur-md p-2 rounded-[2rem] border w-fit mx-auto">
            {(['docs', 'briefs', 'blog'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all duration-300 ${activeTab === tab ? 'bg-red-500 text-white shadow-xl shadow-red-500/20' : 'hover:bg-foreground/5'}`}
              >
                {tab === 'docs' ? 'Documentation' : tab === 'briefs' ? 'Briefs' : 'Insights'}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
            {filteredResources.map((res, i) => (
              <AnimatedContainer key={i} delay={i * 0.05}>
                <Link to={res.link} className="block group h-full">
                  <div className="h-full rounded-[2.5rem] border bg-background/40 p-10 backdrop-blur-md hover:border-red-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/5 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                        {res.icon}
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tighter leading-none group-hover:text-red-500 transition-colors">{res.title}</h3>
                      <p className="text-muted-foreground font-medium text-sm leading-relaxed">
                        {res.description}
                      </p>
                    </div>
                    <div className="pt-10 flex items-center justify-between text-xs font-black uppercase tracking-widest text-muted-foreground group-hover:text-red-500 transition-colors">
                      <span>{res.cta || "View Guide"}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimatedContainer>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">From Docs to Proof.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Build the foundation of your verifiable compliance program today.
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

export default Documentation;
