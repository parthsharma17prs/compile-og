import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import { ArrowLeft } from 'lucide-react';

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
      <Section variant="default" spacing="lg" className="relative">
        <div className="container mx-auto px-4 py-12">
          <Link
            to="/about"
            className="inline-flex items-center text-foreground/70 hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to About
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Founder's Photo */}
              <div className="w-full md:w-1/3">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-1 rounded-2xl">
                  <img
                    src="/Founder.png"
                    alt="Maranda Harris"
                    className="w-full h-auto rounded-2xl object-cover aspect-square"
                  />
                </div>
                <div className="mt-6 text-center md:text-left">
                  <h3 className="text-xl font-bold">Maranda Harris</h3>
                  <p className="text-foreground/70">Founder & Chief Compliance Officer</p>
                </div>
              </div>

              {/* Founder's Story */}
              <div className="w-full md:w-2/3">
                <span className="inline-block text-sm font-medium text-primary mb-4">FOUNDER'S STORY</span>
                <h1 className="text-4xl md:text-5xl font-space-grotesk font-bold tracking-tight mb-8">
                  Why I Built <span className="text-primary">CompliLedger</span>
                </h1>

                <div className="prose prose-lg max-w-none text-foreground/90">
                  <p className="italic text-lg mb-6">
                    I've spent my career in cybersecurity, compliance, and IT audit — working with government agencies, Fortune 500s, and startups. Over the years, I saw the same pattern repeat: compliance was slow, manual, and outdated.
                  </p>

                  <p className="mb-6">
                    Auditors still asked for screenshots, spreadsheets, and static reports, while teams were deploying cloud-native systems, smart contracts, and AI-driven applications at lightning speed. The gap between how companies innovate and how regulators verify proof was only getting wider.
                  </p>

                  <p className="mb-6">
                    That gap is what inspired <span className="font-medium">CompliLedger</span>.
                  </p>

                  <p className="mb-6">
                    We're building a platform that transforms compliance from a painful, point-in-time exercise into a continuous, provable, and privacy-preserving process. By combining blockchain attestations, AI automation, and SBOM-first security, we give enterprises, auditors, and regulators a new way to collaborate — with proof that can be verified.
                  </p>

                  <p className="mb-8">
                    Compliance should never be a barrier to innovation. With CompliLedger, it becomes a foundation for it.
                  </p>

                  <div className="border-l-4 border-primary/30 pl-6 py-2">
                    <p className="font-medium">Maranda Harris</p>
                    <p className="text-foreground/70">Founder (CEO) & Chief Compliance Officer</p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="mt-16">
                  <h3 className="text-xl font-bold mb-6">Professional Journey</h3>
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-foreground/10" />

                    {timeline.map((item, index) => (
                      <div key={index} className="relative pl-12 pb-8 group">
                        <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg border border-foreground/10 hover:border-primary/30 transition-colors">
                          <p className="text-sm text-foreground/60 mb-1">{item.year}</p>
                          <h4 className="font-medium">{item.role}</h4>
                          <p className="text-foreground/70">{item.company}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Founder;
