import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import GeometricPattern from '@/components/GeometricPattern';
import { Check, Zap, BarChart3, Shield, Building2, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const frameworks = [
    { name: 'ISO 27001', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToAkSFvysyAnFxpVUkNKAz5wbGeUXtKIa-SQ&s' },
    { name: 'FedRAMP', url: 'https://www.acquia.com/sites/default/files/styles/blog_hero_image_mobile/public/media/image/2022-05/FedRAMP%20logo.png?itok=tbett_v_' },
    { name: 'HIPAA', url: 'https://www.hipaajournal.com/wp-content/uploads/2021/12/HIPAA-civil-monetary-penalties-2021.jpg' },
    
  ];

  const testimonials = [
    {
      quote:
        'CompliLedger cut our audit prep from weeks to days while keeping sensitive data private. Our auditors loved the portal.',
      author: 'Priya N.',
      role: 'VP Security',
      company: 'FinTech Co.',
    },
    {
      quote:
        'The Growth plan let us expand frameworks without chaos. Zero-knowledge attestations are a game changer.',
      author: 'Daniel R.',
      role: 'Head of Compliance',
      company: 'Healthcare AI',
    },
    {
      quote:
        'Exactly what regulators want to see—verifiable evidence without data sprawl. The team support was excellent.',
      author: 'Maya K.',
      role: 'CISO',
      company: 'Global Exchange',
    },
  ];

  const plans = [
    {
      name: 'Starter (Team)',
      price: '$500–$1,000/month',
      description: 'Best for: Startups / SaaS teams preparing for FedRAMP or ISO 27001',
      features: [
        '1 framework (FedRAMP or ISO 27001)',
        'GitHub/GitLab integration',
        'Basic SBOM ingestion & mapping',
        'Basic AuditSync™ access',
        'Standard support',
      ],
      cta: 'Get Started',
      popular: false,
      icon: <Users className="h-6 w-6 text-foreground" />,
    },
    {
      name: 'Growth (Scale)',
      price: '$2,000–$4,000/month',
      description: 'Best for: Fintechs, DeFi protocols, mid-market SaaS (multiple frameworks)',
      features: [
        'Up to 3 frameworks (ISO 27001, PCI DSS, HIPAA, DORA, MiCA)',
        'Continuous testing & drift detection',
        'OSCAL/SSP generation',
        'Full SBOM-as-a-Service',
        'ZKP attestations & DID/VC issuance',
        'Advanced AuditSync™ with scoped regulator portals',
        'Priority support',
      ],
      cta: 'Scale With Us',
      popular: true,
      icon: <Building2 className="h-6 w-6 text-foreground" />,
    },
    {
      name: 'Enterprise (Regulated)',
      price: '$8,000–$15,000/month',
      description: 'Best for: Banks, Exchanges, Healthcare orgs, Gov/Defense contractors',
      features: [
        'Unlimited frameworks (FedRAMP, AML/BSA, Basel III, MiCA, HIPAA, PCI, ISO, DoD RMF IL4–IL6)',
        'Continuous ATO automation workflows',
        'Exchange AML/BSA licensing compliance',
        'Legal & eDiscovery AuditSync™',
        'Private data residency options',
        'Advanced ZKP proofs & regulator attestations',
        'Dedicated CSM + 24/7 support',
      ],
      cta: 'Contact Us',
      popular: false,
      icon: <Shield className="h-6 w-6 text-foreground" />,
    },
  ];

  const addOns = [
    { name: 'Instant Mode', price: '$1,000–$2,500/month', description: 'Depending on usage' },
    { name: 'Custom Framework Marketplace', price: '$5,000/framework/year', description: 'Per custom framework' },
    { name: 'Continuous Pen Testing Integration', price: '$10,000–$20,000/year', description: 'Annual' },
    { name: 'Auditor/Regulator Portal Seats', price: '$1,000/seat/year', description: 'Per external seat' },
  ];

  return (
    <Layout>
      <Section className="py-16 md:py-24 glow-text">
        <SectionHeader 
          title="Compliance That Scales With You"
          description="From startups to exchanges and defense contractors, CompliLedger adapts to your frameworks, scale, and assurance needs."
          className="max-w-4xl mx-auto text-center mb-12"
        />

        {/* Compliance Framework Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {frameworks.map((framework) => (
            <div key={framework.name} className="flex flex-col items-center">
              <div className="h-12 w-28 flex items-center justify-center mb-2">
                <img
                  src={framework.url}
                  alt={framework.name}
                  className="h-12 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-sm text-muted-foreground">{framework.name}</span>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative overflow-visible h-full flex flex-col border border-border/60 transition-transform duration-200 hover:-translate-y-0.5 ${plan.popular ? 'rounded-2xl shadow-xl border-2 border-primary/60 ring-1 ring-primary/40 pt-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-4 z-20 pointer-events-none">
                  <span className="inline-flex items-center rounded-full bg-foreground text-background px-3 py-1 text-xs font-medium shadow-md ring-1 ring-black/10">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="gap-2 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
                    <p className="text-muted-foreground mt-1 text-xs leading-relaxed">{plan.description}</p>
                  </div>
                  <div className="p-2 rounded-md bg-muted">
                    {plan.icon}
                  </div>
                </div>
                <div className="mt-1">
                  <div className="inline-flex items-baseline gap-1.5 px-2.5 py-1.5 rounded-md bg-muted">
                    <span className="text-lg font-medium">{plan.price}</span>
                    {plan.price.toLowerCase().includes('month') && (
                      <span className="text-[10px] text-muted-foreground">/month</span>
                    )}
                  </div>
                  {plan.name.startsWith('Enterprise') && (
                    <p className="mt-2 text-xs text-muted-foreground">Flexible contracts, volume discounts, private cloud options</p>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-5 pt-0">
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start pb-2 border-b border-border/30 last:border-0 last:pb-0">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-6">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Button className={`w-full ${plan.popular ? 'btn-glow' : ''}`} size="sm" variant={plan.popular ? 'default' : (plan.name.startsWith('Enterprise') ? 'default' : 'outline')}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Trust Logos */}
        <div className="mt-16 max-w-6xl mx-auto text-center">
          <p className="text-xs tracking-wider text-muted-foreground mb-6">TRUSTED BY TEAMS AT</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {['Aegis', 'Nimbly', 'Verum', 'Cortex', 'Northwind', 'Helios'].map((logo) => (
              <div key={logo} className="h-10 flex items-center justify-center rounded bg-muted text-foreground/60 text-sm font-medium">
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="h-full">
                <CardContent className="p-6">
                  <p className="text-sm leading-relaxed">“{t.quote}”</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-semibold">
                      {t.author.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t.author}</p>
                      <p className="text-xs text-muted-foreground">{t.role} • {t.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Add-Ons */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Add-Ons (for Growth & Enterprise)</CardTitle>
              <CardDescription>Extend capabilities as you scale.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {addOns.map((item, i) => (
                  <li key={i} className="flex items-start justify-between gap-4">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <span className="text-sm whitespace-nowrap text-muted-foreground">{item.price}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="justify-center">
              <Button variant="outline" size="lg" className="gap-2">
                Contact Sales <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Section>
      {/* Call to Action */}
      <Section variant="blend" spacing="lg">
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold">
            One Platform. Flexible Pricing. Audit-Ready Always.
            </h2>
            <p className="text-xl text-muted-foreground">
            Choose a plan that scales with your business—transparent, flexible, and built to fit your compliance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/demo">
                <Button size="lg" className="btn-glow">
                  Schedule a call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" asChild>
                <a href="https://docs.google.com/document/d/1mPCmvQioDrfeFYTgTwlpI49EDOKIP5gJ" target="_blank" rel="noopener noreferrer">View Whitepaper</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:sales@compliledger.com?subject=Pricing%20Inquiry">Talk to Sales</a>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Pricing;
