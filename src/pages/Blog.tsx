import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import GeometricPattern from '@/components/GeometricPattern';
import { 
  Mail, 
  ArrowRight, 
  BookOpen,
  FileText,
  Users,
  Video,
  Lightbulb,
  TrendingUp
} from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = [
    "All", 
    "Thought Leadership", 
    "Product Updates", 
    "Industry Insights", 
    "Technical Deep Dives"
  ];

  const featuredArticle = {
    title: "The Evolution of Compliance: From Paperwork to Proofs",
    subtitle: "How Zero-Knowledge technology is reshaping regulatory verification",
    description: "Explore the paradigm shift from traditional compliance documentation to cryptographically verifiable proofs that protect privacy while ensuring regulatory adherence.",
    category: "Thought Leadership",
    author: "CompliLedger Team",
    date: "Latest",
    readTime: "8 min read"
  };

  const topics = [
    {
      icon: FileText,
      title: "Compliance Automation",
      description: "Insights on transforming manual compliance processes",
      articleCount: "12 articles"
    },
    {
      icon: Lightbulb,
      title: "Zero-Knowledge Technology",
      description: "Technical deep dives into privacy-preserving verification",
      articleCount: "8 articles"
    },
    {
      icon: TrendingUp,
      title: "Regulatory Trends", 
      description: "Analysis of emerging compliance requirements",
      articleCount: "15 articles"
    },
    {
      icon: Users,
      title: "Industry Case Studies",
      description: "Real-world applications and success stories",
      articleCount: "6 articles"
    }
  ];

  const recentArticles = [
    {
      title: "OSCAL Adoption in Modern GRC Platforms",
      description: "Understanding the Open Security Controls Assessment Language and its impact on compliance automation",
      category: "Technical Deep Dives",
      date: "3 days ago",
      readTime: "6 min read"
    },
    {
      title: "Financial Services and Digital Asset Compliance",
      description: "How traditional financial institutions are adapting to cryptocurrency and DeFi regulations",
      category: "Industry Insights", 
      date: "1 week ago",
      readTime: "5 min read"
    },
    {
      title: "Building Privacy-First Audit Trails",
      description: "Technical approaches to maintaining comprehensive audit logs while protecting sensitive data",
      category: "Technical Deep Dives",
      date: "2 weeks ago", 
      readTime: "7 min read"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Section variant="glow" spacing="xl">
        <GeometricPattern />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold glow-text">
              Compliance <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Expert perspectives on compliance automation, privacy technology, 
              and the future of regulatory verification
            </p>
          </div>
        </div>
      </Section>

      {/* Content Categories */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Explore by Topic"
            subtitle="Content Categories"
            description="Discover insights tailored to your interests and expertise level"
          />
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topics.map((topic, index) => (
              <Card key={index} className="card-glow text-center h-full group hover:border-primary/50 transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <topic.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{topic.description}</p>
                  <Badge variant="secondary" className="px-3 py-1">{topic.articleCount}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Article */}
      <Section variant="blend" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Featured Article"
            subtitle="Latest Insights"
            description="Our most recent analysis on compliance innovation and regulatory technology"
          />
          
          <div className="max-w-6xl mx-auto">
            <Card className="card-glow border-2 border-primary/30 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <div className="h-80 md:h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <BookOpen className="h-24 w-24 text-primary" />
                  </div>
                </div>
                <div className="md:w-3/5 p-12">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <Badge variant="secondary" className="px-3 py-1">Featured</Badge>
                      <span>•</span>
                      <span>{featuredArticle.category}</span>
                      <span>•</span>
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-space-grotesk font-bold leading-tight">
                        {featuredArticle.title}
                      </h3>
                      <p className="text-xl font-medium text-primary">
                        {featuredArticle.subtitle}
                      </p>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {featuredArticle.description}
                      </p>
                    </div>
                    <Button size="lg" className="btn-glow">
                      Read Full Article
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Recent Articles */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Recent Articles"
            subtitle="Latest Content"
            description="Stay current with the latest developments in compliance technology and regulatory trends"
          />

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {recentArticles.map((article, index) => (
              <Card key={index} className="card-glow group overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border-b">
                  <FileText className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-4">
                    <Badge variant="outline" className="px-2 py-1">{article.category}</Badge>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <CardTitle className="text-xl font-space-grotesk font-bold group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{article.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary transition-colors p-0">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Newsletter Subscription */}
      <Section variant="glow" spacing="xl">
        <GeometricPattern className="opacity-50" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="card-glow p-12">
              <div className="space-y-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Mail className="h-10 w-10 text-primary" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold">
                    Stay Informed
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Subscribe to receive insights on compliance innovation, 
                    regulatory updates, and platform developments
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-base"
                  />
                  <Button size="lg" className="btn-glow px-8">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Join industry professionals staying ahead of compliance trends
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Blog;