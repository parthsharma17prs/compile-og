import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import GeometricPattern from '@/components/GeometricPattern';
import { ArrowRightIcon, PlusIcon } from 'lucide-react';
import { TextRevealByWord } from '@/components/ui/text-reveal-by-word';
const About = () => {

  const manifesto = [
    "Compliance should be provable, not subjective",
    "Privacy should be preserved, not traded",
    "proof should be engineered, not assumed",
    "Evidence should be cryptographic, not anecdotal",
    "Audits should be continuous, not episodic",
    "Regulators should verify outcomes — not inspect systems"
  ];

  const problemPoints = [
    "centralize sensitive data",
    "grant broad system access",
    "manually collect evidence",
    "rely on point-in-time audits",
    "expose more than regulators actually require"
  ];

  const solutions = [
    "cryptographic verification",
    "zero-knowledge proofs",
    "decentralized identity",
    "immutable audit trails",
    "automated compliance workflows"
  ];

  const privacyPrinciples = [
    "Data minimization by default",
    "Proof instead of disclosure",
    "Identity without centralized accounts",
    "Zero-knowledge verification",
    "No customer data monetization"
  ];

  const technologies = [
    { name: "Algorand", purpose: "immutable audit anchoring" },
    { name: "Aleo", purpose: "private zero-knowledge computation" },
    { name: "Zcash", purpose: "confidential attestations" }
  ];

  const audiences = [
    "Companies operating in regulated environments",
    "Startups building compliance-ready products",
    "Auditors and compliance professionals",
    "Regulators and oversight bodies",
    "Developers embedding proof into systems"
  ];

  const proofAttributes = [
    "verifiable",
    "attributable",
    "auditable",
    "revocable"
  ];

  const futureDirections = [
    "automated",
    "continuous",
    "privacy-preserving",
    "cryptographically verifiable"
  ];

  return (
    <Layout>
     {/* Hero */}
       <Section variant="default" spacing="xl" className="py-0 min-h-screen min-h-svh flex items-center">

          <div className="absolute right-6 bottom-24  max-w-[55vw] text-md md:text-xl lg:text-3xl xl:text-3xl font-extrabold uppercase text-foreground/90 px-2 py-1 text-right pointer-events-none">
             Compliance should not require <span className='bg-red-500 px-2 rounded-sm'>surrendering</span> privacy </div>

          <div aria-hidden style={{willChange: 'transform'}} className="absolute right-6 bottom-6  pointer-events-none select-none text-[2rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-extrabold uppercase leading-none opacity-10 tracking-tight">
            About
          </div>

        
    
     

      </Section>
      {/* Text reveal section (scroll-animated by word) */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord text="CompliLedger was created to modernize compliance for a world where data sensitivity, regulatory scrutiny, and technological complexity are increasing not decreasing." className="" />

            <div className="flex items-center justify-center gap-2 mt-4">
              <a href="mailto:maranda@compliledger.com"><Button variant="outline">Book a Demo</Button></a>
              <Button>
                Know More <ArrowRightIcon className="size-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </Section>
      {/* Section 1: Why CompliLedger Exists */}
      <Section  spacing="xl" className="relative ">
        <div className="absolute inset-0 bg-grid-foreground/5 [mask-image:linear-gradient(0deg,white,transparent)]" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3 space-y-2 sticky top-24">
                <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold tracking-tight">
                  The problem we set out to solve
                </h2>
              </div>

              <div className="md:w-2/3 space-y-6 text-lg text-foreground/70 leading-relaxed">
                <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-foreground/10 shadow-sm">
                  <p className="font-semibold text-foreground/90 mb-6">
                    Modern compliance is broken.
                  </p>
                  <p className="mb-6">Organizations are forced to:</p>
                  <ul className="space-y-3 mb-8">
                    {problemPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-foreground/80 mb-6">
                    This approach increases risk, slows innovation, and erodes proof.
                  </p>
                  <p className="font-semibold text-foreground/90">
                    CompliLedger was built to change that.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 2: Our Belief / Manifesto */}
      <Section spacing="xl" className="relative overflow-hidden py-24 md:py-32">
        
        <div className="absolute inset-0 " />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold leading-tight">
                Our belief
              </h2>
            </div>

            <div className="max-w-2xl mx-auto text-left">
              <p className="text-lg font-semibold text-foreground/90 mb-6">We believe:</p>
              <ul className="space-y-4">
                {manifesto.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-lg text-foreground/70">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 3: What CompliLedger Is */}
      <Section  spacing="xl">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3 space-y-2 sticky top-24">
                <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold tracking-tight">
                  What we built
                </h2>
              </div>

              <div className="md:w-2/3 space-y-6 text-lg text-foreground/70 leading-relaxed">
                <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-foreground/10 shadow-sm">
                  <p className="font-semibold text-foreground/90 mb-6">
                    CompliLedger is a privacy-preserving compliance operating system.
                  </p>
                  <p className="mb-6">It replaces invasive audits and data sprawl with:</p>
                  <ul className="space-y-3 mb-6">
                    {solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-foreground/80 font-semibold">
                    Compliance becomes a verifiable state, not a reporting exercise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 4: Privacy Is The Architecture */}
      <Section  spacing="xl">
        <GeometricPattern className="opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3 space-y-2 sticky top-24">
                <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold tracking-tight">
                  Privacy is the architecture
                </h2>
              </div>

              <div className="md:w-2/3 space-y-6 text-lg text-foreground/70 leading-relaxed">
                <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-foreground/10 shadow-sm">
                  <p className="font-semibold text-foreground/90 mb-6">
                    Privacy in CompliLedger is enforced structurally:
                  </p>
                  <ul className="space-y-3 mb-6">
                    {privacyPrinciples.map((principle, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>{principle}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3 pt-4 border-t border-foreground/10">
                    <p className="text-foreground/80 font-semibold">We do not sell data.</p>
                    <p className="text-foreground/80 font-semibold">We do not train on customer inputs.</p>
                    <p className="text-foreground/80 font-semibold">We do not rely on surveillance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 5: Technology Approach */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3 space-y-2 sticky top-24">
                <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold tracking-tight">
                  Built for the real world
                </h2>
              </div>

              <div className="md:w-2/3 space-y-6 text-lg text-foreground/70 leading-relaxed">
                <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-foreground/10 shadow-sm">
                  <p className="mb-6 text-foreground/80">
                    CompliLedger uses modern cryptographic infrastructure to meet real regulatory expectations. Our architecture spans:
                  </p>
                  <ul className="space-y-3 mb-6">
                    {technologies.map((tech, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>{tech.name}</strong> for {tech.purpose}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mb-6 text-foreground/80">Combined with:</p>
                  <ul className="space-y-3 mb-6">
                    {["Decentralized Identifiers (DIDs)", "Verifiable Credentials (VCs)", "Zero-knowledge proofs", "Privacy-preserving automation"].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-foreground/80 font-semibold">
                    This allows compliance to scale without expanding risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 6: Who We Serve */}
      <Section  spacing="xl">
        <GeometricPattern className="opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold tracking-tight text-center mb-12">
              Who CompliLedger is for
            </h2>
            
            <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-foreground/10 shadow-sm">
              <ul className="space-y-3 mb-8">
                {audiences.map((audience, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg text-foreground/70">{audience}</span>
                  </li>
                ))}
              </ul>
              <p className="text-foreground/80 font-semibold text-lg text-center pt-4 border-t border-foreground/10">
                CompliLedger is designed to support all compliance stakeholders, without privileging one at the expense of another.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 7: How We Think About proof */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3 space-y-2 sticky top-24">
                <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold tracking-tight">
                  proof must be defensible
                </h2>
              </div>

              <div className="md:w-2/3 space-y-6 text-lg text-foreground/70 leading-relaxed">
                <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-foreground/10 shadow-sm">
                  <p className="font-semibold text-foreground/90 mb-6">
                    proof is not a brand promise.
                  </p>
                  <p className="mb-6">proof is:</p>
                  <ul className="space-y-3 mb-6">
                    {proofAttributes.map((attr, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>{attr}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-foreground/80 font-semibold">
                    CompliLedger enables proof that can be proven to auditors, regulators, and courts — without exposing sensitive systems or data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 8: Our Direction */}
      <Section  spacing="xl">
        <GeometricPattern className="opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3 space-y-2 sticky top-24">
                <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold tracking-tight">
                  Where we're going
                </h2>
              </div>

              <div className="md:w-2/3 space-y-6 text-lg text-foreground/70 leading-relaxed">
                <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-foreground/10 shadow-sm">
                  <p className="mb-6 text-foreground/80">
                    As regulation increases and technology evolves, compliance must become:
                  </p>
                  <ul className="space-y-3">
                    {futureDirections.map((direction, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>{direction}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-foreground/80 font-semibold mt-6 pt-6 border-t border-foreground/10">
                    CompliLedger is building the infrastructure to support this future — across industries, jurisdictions, and technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section spacing="xl">
        <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-4 py-8">
          <PlusIcon
            className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6"
            strokeWidth={1}
          />
          <PlusIcon
            className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6"
            strokeWidth={1}
          />
          <PlusIcon
            className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6"
            strokeWidth={1}
          />
          <PlusIcon
            className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6"
            strokeWidth={1}
          />

          <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
          <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />

          <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed" />

          <div className="space-y-1">
            <h2 className="text-center font-bold text-2xl">Compliance should create Confidence not Risk</h2>
   
          </div>

          <div className="flex items-center justify-center gap-2">
            <a href="mailto:maranda@compliledger.com"><Button variant="outline">Book Demo</Button></a>
            <a href="mailto:maranda@compliledger.com"><Button>
             Book a Demo <ArrowRightIcon className="size-4 ml-1" />
            </Button></a>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
