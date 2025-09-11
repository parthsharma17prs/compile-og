import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import GeometricPattern from '@/components/GeometricPattern';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';
import { useCallback, useMemo, useRef, useState } from 'react';
import {
  Calendar,
  Play,
  Zap,
  Upload,
  Brain,
  Shield,
  Download,
  CheckCircle,
  Mail,
  Clock,
  Users,
  Award,
  FileText,
  Settings,
  MapPin,
  Phone,
  Globe,
  ArrowRight,
  X
} from 'lucide-react';

const Demo = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement | null>(null);
  const [openBooking, setOpenBooking] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const calBaseUrl = import.meta.env.VITE_CALCOM_URL as string | undefined; // e.g. https://cal.com/your-org/your-event

  const bookingUrl = useMemo(() => {
    const base = calBaseUrl || 'https://cal.com';
    // If a full URL is provided via env, use it; otherwise fallback placeholder
    try {
      const url = new URL(base);
      if (firstName || lastName || email || company || jobTitle) {
        const name = [firstName, lastName].filter(Boolean).join(' ').trim();
        if (name) url.searchParams.set('name', name);
        if (email) url.searchParams.set('email', email);
        if (company) url.searchParams.set('notes', `Company: ${company}${jobTitle ? ` | Title: ${jobTitle}` : ''}${message ? `\nNotes: ${message}` : ''}`);
      }
      return url.toString();
    } catch {
      return base; // if env is not a valid URL, return as-is
    }
  }, [calBaseUrl, firstName, lastName, email, company, jobTitle, message]);

  const onHeroScheduleClick = useCallback(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const clearFieldError = (key: string) => {
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const { [key]: _omit, ...rest } = prev;
      return rest;
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!firstName.trim()) errs.firstName = 'First name is required';
    if (!lastName.trim()) errs.lastName = 'Last name is required';
    if (!email.trim()) {
      errs.email = 'Business email is required';
    } else if (!/.+@.+\..+/.test(email)) {
      errs.email = 'Enter a valid business email';
    }
    if (!company.trim()) errs.company = 'Company is required';
    if (!jobTitle.trim()) errs.jobTitle = 'Job title is required';
    return errs;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      const list = Object.values(errs).join(' · ');
      toast({ title: 'Please fix the highlighted fields', description: list, variant: 'destructive' });
      const firstKey = Object.keys(errs)[0];
      // Focus the first invalid field
      setTimeout(() => {
        const el = document.getElementById(firstKey);
        if (el) (el as HTMLElement).focus();
      }, 0);
      return;
    }
    if (!calBaseUrl) {
      toast({ title: 'Scheduling not configured', description: 'Set VITE_CALCOM_URL in your environment to enable booking.', variant: 'destructive' });
      return;
    }
    try {
      setSubmitting(true);
      setOpenBooking(true);
    } finally {
      setSubmitting(false);
    }
  };

  const demoOptions = [
    {
      icon: Calendar,
      title: "Personalized Demo",
      subtitle: "Live 1:1 Session",
      description: "Schedule a tailored demonstration with our compliance experts to explore workflows specific to your industry and requirements.",
      features: ["Custom use case scenarios", "Q&A with experts", "Implementation guidance"],
      cta: "Schedule Now",
      duration: "45 minutes",
      availability: "Available immediately"
    },
    {
      icon: Play,
      title: "Product Walkthrough",
      subtitle: "Self-Guided Tour",
      description: "Access our comprehensive product walkthrough showcasing core features, compliance workflows, and real-world applications.",
      features: ["Complete feature overview", "Interactive examples", "Downloadable resources"],
      cta: "Start Tour",
      duration: "15 minutes",
      availability: "Available 24/7"
    },
    {
      icon: Zap,
      title: "Sandbox Environment",
      subtitle: "Hands-On Experience",
      description: "Experience CompliLedger firsthand with sample data, OSCAL workflows, and interactive compliance scenarios.",
      features: ["Live environment access", "Sample datasets", "Guided tutorials"],
      cta: "Request Access",
      duration: "Self-paced",
      availability: "Coming soon"
    }
  ];

  const demoFlow = [
    {
      icon: Upload,
      title: "Data Ingestion Demo",
      description: "Watch real-time import of OSCAL documents, SBOMs, and compliance artifacts with automated validation"
    },
    {
      icon: Brain,
      title: "AI Processing Demo",
      description: "See intelligent classification, control mapping, and anomaly detection across multiple frameworks"
    },
    {
      icon: Shield,
      title: "Proof Generation Demo",
      description: "Experience Zero-Knowledge Proof creation that validates compliance without exposing sensitive data"
    },
    {
      icon: Download,
      title: "Export & Reporting Demo",
      description: "Generate audit-ready reports, signed OSCAL artifacts, and immutable compliance evidence"
    }
  ];

  const valuePropositions = [
    {
      icon: Clock,
      title: "Reduce Audit Time",
      description: "Automate compliance validation and reduce audit preparation from months to hours"
    },
    {
      icon: Shield,
      title: "Enhance Security Posture",
      description: "Continuous compliance monitoring with real-time risk assessment and mitigation"
    },
    {
      icon: Users,
      title: "Scale Compliance Operations",
      description: "Handle multiple frameworks simultaneously with automated cross-mapping and validation"
    },
    {
      icon: Award,
      title: "Prove Regulatory Adherence",
      description: "Generate cryptographically verifiable compliance proofs accepted by regulators"
    }
  ];

  const commonQuestions = [
    {
      question: "Which compliance frameworks does CompliLedger support?",
      answer: "We natively support major frameworks including FedRAMP, GDPR, HIPAA, SOC 2, ISO 27001, MiCA, Basel III, and NIST standards, with automated cross-mapping capabilities."
    },
    {
      question: "How does Zero-Knowledge technology protect our data?",
      answer: "Our ZK implementation allows you to prove compliance without exposing raw data. Only cryptographic proofs are shared, ensuring complete privacy while maintaining verification capabilities."
    },
    {
      question: "Can CompliLedger integrate with our existing systems?",
      answer: "Yes, we provide comprehensive APIs, SDKs, and pre-built integrations for popular GRC platforms, CI/CD pipelines, and enterprise systems."
    },
    {
      question: "What blockchain networks do you support?",
      answer: "We support Ethereum, Algorand, XRPL, and are continuously adding support for additional networks based on partner requirements."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Section variant="glow" spacing="xl">
        <GeometricPattern />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold glow-text">
              Experience CompliLedger{' '}
              <span className="text-gradient">in Action</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how automated compliance verification transforms regulatory
              processes while protecting your most sensitive data
            </p>
            <Button size="lg" className="btn-glow text-lg px-8 py-4" onClick={onHeroScheduleClick}>
              Schedule a Call
            </Button>
          </div>
        </div>
      </Section>

      {/* Demo Options */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Choose Your Demo Experience"
            subtitle="Multiple Options Available"
            description="Select the demonstration format that best fits your schedule and learning preferences"
          />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
            {demoOptions.map((option, index) => (
              <Card key={index} className="card-glow h-full group hover:border-primary/50 transition-all duration-300">
                <CardHeader className="pb-8">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <option.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-center space-y-2">
                    <CardTitle className="text-2xl font-semibold">{option.title}</CardTitle>
                    <p className="text-lg font-medium text-primary">{option.subtitle}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{option.description}</p>

                  <div className="space-y-3">
                    {option.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 space-y-2 text-center text-sm text-muted-foreground">
                    <p><strong>Duration:</strong> {option.duration}</p>
                    <p><strong>Availability:</strong> {option.availability}</p>
                  </div>

                  {option.cta === 'Request Access' ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="block w-full">
                          <Button size="lg" className="w-full" variant="outline" disabled>
                            {option.cta}
                          </Button>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>Sandbox access is coming soon. Join the waitlist from the form notes.</TooltipContent>
                    </Tooltip>
                  ) : (
                    <Button
                      size="lg"
                      className="w-full btn-glow"
                      onClick={onHeroScheduleClick}
                    >
                      {option.cta}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Demo Flow */}
      <Section variant="blend" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="What You'll Experience"
            subtitle="Demo Workflow"
            description="Step through the complete CompliLedger compliance automation process from data ingestion to audit-ready outputs"
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {demoFlow.map((step, index) => (
              <Card key={index} className="card-glow h-full">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">Step {index + 1} of 4</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Value Propositions */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Benefits You'll Discover"
            subtitle="Compliance Transformation"
            description="See how CompliLedger delivers measurable improvements to your compliance operations"
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {valuePropositions.map((value, index) => (
              <Card key={index} className="card-glow">
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section variant="blend" spacing="xl">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Common Questions"
            subtitle="Demo FAQ"
            description="Get answers to frequently asked questions about CompliLedger's capabilities and implementation"
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonQuestions.map((faq, index) => (
              <Card key={index} className="card-glow h-full">
                <CardHeader className="pb-6">
                  <CardTitle className="text-lg font-semibold leading-tight">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Demo Request Form */}
      <Section variant="glow" spacing="xl">
        <GeometricPattern className="opacity-50" />
        <div className="container mx-auto px-6 relative z-10" id="schedule-demo" ref={formRef}>
          <div className="max-w-3xl mx-auto">
            <Card className="card-glow">
              <CardHeader className="text-center pb-10">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-space-grotesk font-bold">
                  Schedule Your Call
                </CardTitle>
                <p className="text-xl text-muted-foreground mt-4 leading-relaxed">
                  Connect with our compliance experts to explore how CompliLedger
                  can transform your regulatory operations
                </p>
              </CardHeader>
              <CardContent className="space-y-8 p-12">
                <form onSubmit={onSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-semibold">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        className={`h-12 ${errors.firstName ? 'border-black ring-1 ring-black' : ''}`}
                        required
                        aria-invalid={!!errors.firstName}
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                        value={firstName}
                        onChange={(e) => { setFirstName(e.target.value); clearFieldError('firstName'); }}
                      />
                      {errors.firstName && (
                        <p id="firstName-error" className="text-xs text-black/70">{errors.firstName}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-semibold">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        className={`h-12 ${errors.lastName ? 'border-black ring-1 ring-black' : ''}`}
                        required
                        aria-invalid={!!errors.lastName}
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                        value={lastName}
                        onChange={(e) => { setLastName(e.target.value); clearFieldError('lastName'); }}
                      />
                      {errors.lastName && (
                        <p id="lastName-error" className="text-xs text-black/70">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 mt-2">
                    <Label htmlFor="email" className="text-sm font-semibold">Business Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="john.doe@company.com"
                      type="email"
                      className={`h-12 ${errors.email ? 'border-black ring-1 ring-black' : ''}`}
                      required
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); clearFieldError('email'); }}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-black/70">{errors.email}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-semibold">Company *</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Organization"
                        className={`h-12 ${errors.company ? 'border-black ring-1 ring-black' : ''}`}
                        required
                        aria-invalid={!!errors.company}
                        aria-describedby={errors.company ? 'company-error' : undefined}
                        value={company}
                        onChange={(e) => { setCompany(e.target.value); clearFieldError('company'); }}
                      />
                      {errors.company && (
                        <p id="company-error" className="text-xs text-black/70">{errors.company}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle" className="text-sm font-semibold">Job Title *</Label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        placeholder="Compliance Officer, CISO, etc."
                        className={`h-12 ${errors.jobTitle ? 'border-black ring-1 ring-black' : ''}`}
                        required
                        aria-invalid={!!errors.jobTitle}
                        aria-describedby={errors.jobTitle ? 'jobTitle-error' : undefined}
                        value={jobTitle}
                        onChange={(e) => { setJobTitle(e.target.value); clearFieldError('jobTitle'); }}
                      />
                      {errors.jobTitle && (
                        <p id="jobTitle-error" className="text-xs text-black/70">{errors.jobTitle}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 mt-2">
                    <Label htmlFor="message" className="text-sm font-semibold">Current Compliance Challenges</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your compliance requirements, frameworks you work with, and specific challenges you're facing..."
                      rows={5}
                      className="resize-none"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 pt-6">
                    <Button size="lg" className="flex-1 btn-glow h-14" type="submit" disabled={submitting}>
                      <Calendar className="mr-2 h-5 w-5" />
                      {submitting ? 'Opening...' : 'Schedule Call'}
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1 h-14" asChild>
                      <a href={`mailto:sales@compliledger.com?subject=${encodeURIComponent('Demo Request')}&body=${encodeURIComponent(`Name: ${firstName} ${lastName}\nCompany: ${company}\nTitle: ${jobTitle}\nEmail: ${email}\nNotes: ${message}`)}`}>
                        <Mail className="mr-2 h-5 w-5" />
                        Contact Sales
                      </a>
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground text-center mt-4">
                    * Required fields. If scheduling is unavailable, email sales@compliledger.com and we'll respond within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Contact Information Section */}
      <Section variant="default" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div className="bg-card border border-border/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold ml-3">Email Us</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { label: 'General Inquiries', email: 'info@compliledger.com' },
                  { label: 'Sales & Demos', email: 'sales@compliledger.com' },
                  { label: 'Press & Media', email: 'media@compliledger.com' },
                  { label: 'Support', email: 'support@compliledger.com' }
                ].map((item, index) => (
                  <li key={index} className="group">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <a
                      href={`mailto:${item.email}`}
                      className="font-medium text-foreground hover:text-primary transition-colors flex items-center"
                    >
                      {item.email}
                      <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location Information */}
            <div className="bg-card border border-border/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold ml-3">Our Location</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-1.5 bg-muted/50 rounded-md">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Headquarters</p>
                    <p className="text-muted-foreground text-sm">123 Compliance Way<br />Arlington, VA 22201<br />United States</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1.5 bg-muted/50 rounded-md">
                    <Globe className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Global Reach</p>
                    <p className="text-muted-foreground text-sm">Serving clients across North America, Europe, and the Middle East</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Booking Modal */}
      <Dialog open={openBooking} onOpenChange={setOpenBooking}>
        <DialogContent className="w-[96vw] sm:w-[94vw] md:w-[92vw] lg:w-[90vw] max-w-5xl h-[68vh] md:h-[70vh] p-0 overflow-hidden">
          {/* Accessibility: hidden title/description for screen readers */}
          <DialogTitle className="sr-only">Book your demo</DialogTitle>
          <DialogDescription className="sr-only">Pick a time that works best for you.</DialogDescription>
          {/* Top bar with close button */}
          <div className="absolute inset-x-0 top-0 h-12 flex items-center justify-between px-4 bg-white border-b z-10">
            <p className="text-sm text-foreground">Book your demo</p>
            <DialogClose asChild>
              <button
                aria-label="Close"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted/60 transition-colors"
              >
                <X className="h-4 w-4 text-black" />
              </button>
            </DialogClose>
          </div>
          <div className="w-full h-full pt-12">
            <iframe
              src={bookingUrl}
              title="Schedule Call"
              className="w-full h-full border-0"
              referrerPolicy="no-referrer"
              allow="camera; microphone; fullscreen; picture-in-picture"
            />
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Demo;