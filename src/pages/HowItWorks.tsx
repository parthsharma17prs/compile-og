import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import { ArrowRightIcon, PlusIcon, Globe, Cpu, ShieldCheck } from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { TextRevealByWord } from '@/components/ui/text-reveal-by-word';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const HowItWorks = () => {
  const howRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = howRef.current;
    if (!el) return;
    let ticking = false;
    const speed = 0.12; // parallax strength

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const centerY = rect.top + rect.height / 2;
      const delta = (centerY - viewportHeight / 2) * speed;
      el.style.transform = `translateY(${delta}px)`;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // set initial position
    update();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const shiftRows = [
    ['Copy evidence', 'Fingerprint evidence'],
    ['Manual reviews', 'Automated verification'],
    ['Broad access', 'Least privilege'],
    ['proof auditors', 'Prove cryptographically'],
    ['Periodic audits', 'Continuous compliance']
  ];

  const intakeWhat = [
    'policies & procedures',
    'system metadata',
    'control signals',
    'SBOMs',
    'configuration fingerprints',
    'audit inputs'
  ];

  const intakeNot = ['raw logs', 'production databases', 'credentials', 'full system mirrors'];

  const agents = [
    'Policy interpretation',
    'Control mapping',
    'Framework alignment',
    'Risk scoring',
    'Drift detection',
    'Vulnerability compliance checks',
    'Evidence classification'
  ];

  const zkBenefits = [
    'evaluate controls',
    'test requirements',
    'validate configurations'
  ];

  const identityBindings = [
    'Decentralized Identifiers (DIDs)',
    'Verifiable Credentials (VCs)',
    'Cryptographic signatures'
  ];

  const blockchains = [
    { name: 'Algorand', role: 'Immutable timestamps and audit integrity anchors' },
    { name: 'Aleo', role: 'Zero-knowledge computation & proof logic' },
    { name: 'Zcash', role: 'Confidential attestations and shielded verification' }
  ];

  const blockchainIcons = [Globe, Cpu, ShieldCheck];

  const users = [
    { title: 'Enterprise Teams', detail: 'Monitor posture, manage risk, and automate audits.' },
    { title: 'Auditors', detail: 'Verify integrity, timing, and completeness of compliance proof.' },
    { title: 'Regulators', detail: 'Validate compliance without direct system access.' },
    { title: 'Developers', detail: 'Embed compliance logic via SDKs and agents.' }
  ];

  const principles = [
    'Privacy reduces risk',
    'Proof scales better than proof',
    'Automation beats manual reviews',
    'Cryptography prevents disputes',
    'Continuous monitoring prevents surprises'
  ];

  return (
    <Layout>
      {/* Hero */}
      <Section variant="default" spacing="xl" className="py-0 min-h-screen min-h-svh flex items-center">

          <div className="absolute right-6 bottom-24  max-w-[55vw] text-md md:text-xl lg:text-3xl xl:text-3xl font-extrabold uppercase text-foreground/90 px-2 py-1 text-right pointer-events-none">
            CompliLedger proves <span className='bg-red-500 px-2 rounded-sm'>compliance</span> without exposing data
          </div>

          <div aria-hidden ref={howRef} style={{willChange: 'transform'}} className="absolute right-6 bottom-6  pointer-events-none select-none text-[4rem] sm:text-[12rem] md:text-[18rem] lg:text-[24rem] xl:text-[40rem] font-extrabold uppercase leading-none opacity-10 tracking-tight">
            HOW
          </div>

        
    

       </Section>             
      {/* Text reveal section (scroll-animated by word) */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">

 
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord text="A privacy-first workflow that replaces manual audits, data sprawl, and blind proof with cryptographic verification and continuous assurance." className="" />

              <div className="flex items-center justify-center gap-2 mt-4">
              <a href="mailto:maranda@compliledger.com"><Button variant="outline">Book a Demo</Button></a>
              <a href="mailto:maranda@compliledger.com"><Button>
                Book Demo <ArrowRightIcon className="size-4 ml-1" />
              </Button></a>
            </div>
          </div>
        </div>
      </Section>
     

      {/* Section 1: Core Idea */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl  font-bold mb-6">From data collection to proof-based verification</h2>
            <p className="text-lg text-foreground/70 mb-4">Traditional compliance works by collecting data: logs, screenshots, documents, access credentials. This increases risk. CompliLedger works by verifying state. We prove that controls are operating and requirements are met — without pulling sensitive data into centralized systems.</p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-0">
                <FeatureCard
                  feature={{
                    title: 'Shift in model',
                    icon: Globe,
                    description: (
                      <div className="overflow-auto">
                        <table className="w-full text-sm">
                          <tbody>
                            {shiftRows.map((row, i) => (
                              <tr key={i} className="border-b last:border-b-0">
                                <td className="py-2 pr-4 text-foreground/60">{row[0]}</td>
                                <td className="py-2 font-medium">{row[1]}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )
                  }}
                  className="rounded-2xl bg-background/80"
                  hideDescription={false}
                />
              </div>

              <div className="p-0">
                <FeatureCard
                  feature={{
                    title: 'Why this matters',
                    icon: ShieldCheck,
                    description: 'Proving state, not collecting it, reduces attack surface, preserves privacy, and makes compliance defensible and scalable.'
                  }}
                  className="rounded-2xl bg-background/80"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Sections 2–10 wrapped in an accordion */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>Secure, minimal intake</AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                      <p className="text-foreground/70 mb-4">CompliLedger ingests only what is necessary.</p>
                      <ul className="space-y-2 mb-4">
                        {intakeWhat.map((it, i) => (
                          <li key={i} className="flex gap-3 items-start"><span className="text-primary">•</span><span>{it}</span></li>
                        ))}
                      </ul>
                      <h4 className="font-semibold mb-2">What does not enter</h4>
                      <ul className="space-y-2 mb-4">
                        {intakeNot.map((it, i) => (
                          <li key={i} className="flex gap-3 items-start"><span className="text-danger">❌</span><span>{it}</span></li>
                        ))}
                      </ul>
                      <p className="font-semibold">Less data = smaller attack surface = lower risk.</p>
                    </div>

                    
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>AI agents analyze compliance continuously</AccordionTrigger>
                <AccordionContent>
                  <p className="text-foreground/70 mb-3">Once ingested, CompliLedger activates specialized AI agents that operate inside strict privacy and isolation boundaries.</p>
                  <ul className="space-y-2">
                    {agents.map((a, i) => (
                      <li key={i} className="flex gap-3 items-start"><span className="text-primary">•</span><span>{a}</span></li>
                    ))}
                  </ul>
                  <p className="text-foreground/70 mt-4">Each agent performs a single function, producing verifiable outputs — not opaque decisions.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Compliance evaluated without visibility</AccordionTrigger>
                <AccordionContent>
                  <p className="text-foreground/70 mb-4">Compliance logic is executed using zero-knowledge techniques, primarily through private computation on Aleo. This allows CompliLedger to:</p>
                  <ul className="space-y-2 mb-4">
                    {zkBenefits.map((b, i) => (
                      <li key={i} className="flex gap-3 items-start"><span className="text-primary">•</span><span>{b}</span></li>
                    ))}
                  </ul>
                  <p className="font-semibold">Result: Compliance is assessed — but sensitive systems remain private.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Proof bound to cryptographic identity</AccordionTrigger>
                <AccordionContent>
                  <p className="text-foreground/70 mb-4">Every compliance action is tied to identity using:</p>
                  <ul className="space-y-2 mb-4">
                    {identityBindings.map((i, idx) => (
                      <li key={idx} className="flex gap-3 items-start"><span className="text-primary">•</span><span>{i}</span></li>
                    ))}
                  </ul>
                  <p className="font-semibold">This ensures: authenticity, non-repudiation, traceability, revocation. Proof is attributable — without central authority.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Verification anchored across blockchains</AccordionTrigger>
                <AccordionContent>
                  <p className="text-foreground/70 mb-4">Compliance verification events are anchored across three networks:</p>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    {blockchains.map((b, i) => (
                      <FeatureCard
                        key={b.name}
                        feature={{ title: b.name, icon: blockchainIcons[i] ?? Globe, description: b.role }}
                      />
                    ))}
                  </div>
                  <p className="font-semibold">Important: Only cryptographic proofs and references are anchored — never customer data.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Compliance stays current</AccordionTrigger>
                <AccordionContent>
                  <p className="text-foreground/70 mb-4">As systems change, CompliLedger continuously detects drift, reassesses controls, updates risk posture, and refreshes proofs. Compliance is no longer a snapshot — it becomes a living state.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>Audit- and regulator-ready outputs</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 mb-4">
                    <li>SSPs, SAPs, SARs, POA&Ms, PIAs</li>
                    <li>Cryptographic proof bundles</li>
                    <li>Regulator-verifiable attestations</li>
                    <li>Time-bound compliance certificates</li>
                  </ul>
                  <p className="text-foreground/70">Auditors verify proofs — not screenshots. Regulators validate attestations — not raw data.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>One system. Multiple perspectives.</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {users.map((u, i) => (
                      <div key={i} className="p-4 bg-background/80 rounded-lg border border-foreground/10">
                        <h4 className="font-semibold">{u.title}</h4>
                        <p className="text-foreground/70">{u.detail}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger>Why CompliLedger’s approach works</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 mb-6">
                    {principles.map((p, i) => (
                      <li key={i} className="flex gap-3 items-start"><span className="text-primary">✅</span><span>{p}</span></li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="default" spacing="xl">
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
            <h2 className="text-center font-bold text-2xl">Compliance should be Provable not invasive</h2>
           
          </div>

            <div className="flex items-center justify-center gap-2">
            <a href="mailto:maranda@compliledger.com"><Button variant="outline">Book a Demo</Button></a>
            <a href="mailto:maranda@compliledger.com"><Button>
              Book Demo <ArrowRightIcon className="size-4 ml-1" />
            </Button></a>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default HowItWorks;