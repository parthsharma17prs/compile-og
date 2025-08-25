import { BookOpen, FileText, FileCheck, FileCode, GitBranch, Key, Lock, Shield, Zap, ArrowRight, Download, ExternalLink, Code } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import GeometricPattern from '@/components/GeometricPattern';
import { Button } from '@/components/ui/button';

type Resource = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  category: 'docs' | 'briefs' | 'blog';
  cta?: string;
};

const Documentation = () => {
  const [activeTab, setActiveTab] = useState<'docs' | 'briefs' | 'blog'>('docs');

  const resources: Resource[] = [
    // Documentation
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
    
    // Briefs
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
    
    // Blog Posts
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

  const featuredResource = {
    title: 'CompliLedger Whitepaper',
    description: 'Programmable, Provable Compliance in a Decentralized World — Our vision for compliance automation across Web3, finance, and regulated industries.',
    cta: 'Download Whitepaper',
    image: '/images/whitepaper-cover.png',
  };

  const filteredResources = resources.filter(resource => resource.category === activeTab);

  return (
    <Layout>
      {/* Hero Section */}
      <Section variant="default" className="pt-24 pb-16 md:pt-32 md:pb-24  ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-glow">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6  glow-text">
              Compliance Knowledge, <span className="text-primary">Simplified</span>.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Guides, briefs, and insights to help you stay ahead of evolving frameworks and compliance expectations.
            </p>
          </div>
        </div>
      </Section>

      {/* Tabs Navigation */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mb-px">
            <button
              onClick={() => setActiveTab('docs')}
              className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'docs'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
              }`}
            >
              Documentation
            </button>
            <button
              onClick={() => setActiveTab('briefs')}
              className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'briefs'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
              }`}
            >
              Briefs & Reports
            </button>
            <button
              onClick={() => setActiveTab('blog')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'blog'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
              }`}
            >
              Blog & Insights
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <Section variant="default" className="py-16">
        <div className="container mx-auto px-4">
          {activeTab === 'docs' && (
            <>
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl font-bold mb-4">Technical Documentation & Product Guides</h2>
                <p className="text-muted-foreground">
                  Everything you need to get started with CompliLedger, integrate with your stack, and configure compliance workflows.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResources.map((resource, index) => (
                  <Link
                    key={index}
                    to={resource.link}
                    className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 text-primary rounded-lg">
                        {resource.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {activeTab === 'briefs' && (
            <>
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl font-bold mb-4">Solution Briefs & Industry Reports</h2>
                <p className="text-muted-foreground">
                  Short, executive-ready briefs on how CompliLedger addresses compliance challenges across industries.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource, index) => (
                  <div key={index} className="border border-border rounded-xl overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                        {resource.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    </div>
                    <div className="px-6 py-4 bg-muted/50 border-t border-border">
                      <a 
                        href={resource.link} 
                        className="text-sm font-medium text-primary inline-flex items-center hover:underline"
                      >
                        {resource.cta}
                        <Download className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'blog' && (
            <>
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl font-bold mb-4">Compliance Insights & Thought Leadership</h2>
                <p className="text-muted-foreground">
                  Stay informed on evolving regulations, frameworks, and compliance technology trends with our expert blog.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((post, index) => (
                  <article key={index} className="group">
                    <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center bg-primary/5">
                        <BookOpen className="w-10 h-10 text-primary/30" />
                      </div>
                    </div>
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {post.category === 'blog' && 'Blog Post'}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.description}</p>
                    <a 
                      href={post.link} 
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Read more
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </Section>

      {/* Featured Resource */}
      <Section variant="default" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Featured Resource</h2>
                <h3 className="text-xl font-semibold text-primary mb-4">{featuredResource.title}</h3>
                <p className="text-muted-foreground mb-6">{featuredResource.description}</p>
                <button 
                  className="group relative inline-flex items-center px-8 py-3.5 bg-white text-black font-semibold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-white/10 hover:scale-[1.02] active:scale-95 border-2 border-white/20 hover:border-white/40"
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center">
                    <Download className="mr-3 w-5 h-5 transition-transform group-hover:scale-110" />
                    <span className="font-medium">{featuredResource.cta}</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Call to Action */}
      <Section variant="glow" spacing="lg">
        <GeometricPattern className="opacity-50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold leading-tight">
              From Docs to Proof — Everything You Need.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our documentation, solution briefs, and insights to see how CompliLedger is redefining compliance for every industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link to="/demo">
                <Button size="lg" className="btn-glow px-8">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button variant="outline" size="lg" className="px-8">
Explore Platform
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Documentation;
