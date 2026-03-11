import { useState, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import {
  ArrowRightIcon,
  PlusIcon,
  BookOpen,
  FileText,
  TrendingUp,
  Lightbulb,
  Users,
  Search,
  CheckCircle,
  Clock
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
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

const Blog = () => {
  const topics = [
    { title: "Compliance Automation", icon: Zap, count: 12 },
    { title: "Zero-Knowledge Tech", icon: Shield, count: 8 },
    { title: "Regulatory Trends", icon: TrendingUp, count: 15 },
    { title: "Case Studies", icon: Users, count: 6 }
  ];

  const recentPosts = [
    {
      title: "The Evolution of Compliance: From Paperwork to Proofs",
      category: "Thought Leadership",
      date: "Mar 11, 2026",
      readTime: "8 min read",
      desc: "How Zero-Knowledge technology is reshaping regulatory verification for the digital era."
    },
    {
      title: "OSCAL Adoption in Modern GRC Platforms",
      category: "Technical",
      date: "Mar 08, 2026",
      readTime: "6 min read",
      desc: "Understanding machine-readable security controls and automated GRC workflows."
    },
    {
      title: "MiCA & DeFi: Navigation Guide 2025",
      category: "Insights",
      date: "Mar 04, 2026",
      readTime: "10 min read",
      desc: "Strategic implications of Europe's new digital asset framework."
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
                Insights & <br className="hidden md:block" />
                <span className="bg-red-500 px-4 rounded-md text-white my-2 inline-block">Perspectives</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto font-medium text-center">
                The latest on zero-knowledge compliance and institutional trust.
              </p>
            </div>
          </div>

          <div aria-hidden style={{ willChange: 'transform' }} className="absolute left-1/2 bottom-[-2rem] md:bottom-[-3rem] -translate-x-1/2 pointer-events-none select-none text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] font-extrabold uppercase leading-none opacity-10 tracking-tight z-0">
            Blog
          </div>
        </div>
      </Section>

      {/* REVEAL SECTION */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord
              text="Navigating the complex intersection of cryptography, regulatory law, and institutional risk management."
              className="text-foreground font-space-grotesk"
            />
          </div>
        </div>
      </Section>

      {/* FEATURED / RECENT POSTS */}
      <Section spacing="xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, i) => (
              <AnimatedContainer key={i} delay={i * 0.1}>
                <div className="h-full rounded-[3rem] border bg-background/40 p-10 backdrop-blur-md group hover:border-red-500/30 transition-all duration-500 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest opacity-50">
                      <span>{post.category}</span>
                      <div className="flex items-center gap-2">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight group-hover:text-red-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground font-medium text-sm leading-relaxed">
                      {post.desc}
                    </p>
                  </div>
                  <div className="pt-10 flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest opacity-30">{post.date}</span>
                    <Button variant="outline" size="sm" className="rounded-full px-4 font-bold border-2">Read Post</Button>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </Section>

      {/* TOPICS / CATEGORIES */}
      <Section variant="default" className="py-24 border-y">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader title="Explore Topics" className="mb-16 text-center" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {topics.map((topic, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="w-full aspect-square rounded-[2rem] border bg-background/50 backdrop-blur-md flex flex-col items-center justify-center p-8 transition-all group-hover:border-red-500/30 group-hover:bg-red-500/5">
                  <topic.icon className="text-red-500 mb-4" size={32} />
                  <div className="text-sm font-black uppercase tracking-tighter text-center">{topic.title}</div>
                  <div className="text-[10px] font-bold text-muted-foreground mt-2">{topic.count} Articles</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* NEWSLETTER */}
      <Section className="text-center pb-24 pt-24 text-foreground">
        <div className="relative mx-auto flex w-full max-w-4xl flex-col justify-between gap-y-12 border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-6 py-16 rounded-3xl">
          <PlusIcon className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6" strokeWidth={1} />
          <PlusIcon className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6" strokeWidth={1} />
          <PlusIcon className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6" strokeWidth={1} />
          <PlusIcon className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6" strokeWidth={1} />

          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Stay Ahead of the Drift.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Get our monthly insights on regulatory technology and privacy engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your institutional email"
              className="h-14 px-8 rounded-2xl bg-background border-2 border-foreground/10 focus:border-red-500 outline-none font-bold w-full max-w-sm"
            />
            <Button size="lg" className="h-14 px-10 bg-red-500 hover:bg-red-600 text-white shadow-xl">
              Subscribe <ArrowRightIcon className="size-4 ml-1" />
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

// Simple placeholder icons
const Zap = (props: any) => <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
const Shield = (props: any) => <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>

export default Blog;