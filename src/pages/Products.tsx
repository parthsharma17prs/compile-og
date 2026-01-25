import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import GeometricPattern from '@/components/GeometricPattern';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Plus, Server, Code, Users, Cpu, ShoppingCart, ShieldCheck, Compass } from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { TextRevealByWord } from '@/components/ui/text-reveal-by-word';

const Products = () => {
  const prodRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<string>('platform');

  const productData = [
    {
      id: 'platform',
      title: 'CompliLedger Platform',
      subtitle: 'The Compliance Operating System (CompliOS)',
      icon: Server,
      content: (
        <div>
          <h4 className="font-semibold">What it is</h4>
          <p className="mt-2">The CompliLedger Platform is the system of record, verification engine, and control plane for compliance. Everything else connects to this platform.</p>

          <h4 className="font-semibold mt-4">What it includes</h4>
          <ul className="list-inside list-disc space-y-1 text-foreground/80 mt-2">
            <li>Continuous compliance monitoring</li>
            <li>Automated audit documentation (SSP, SAP, SAR, POA&amp;M, PIA)</li>
            <li>Control validation &amp; framework alignment</li>
            <li>Risk scoring &amp; drift detection</li>
            <li>Privacy-first evidence handling</li>
            <li>Zero-knowledge proof generation</li>
            <li>DID &amp; Verifiable Credential issuance</li>
            <li>Blockchain-anchored verification</li>
            <li>Audit- and regulator-ready outputs</li>
          </ul>

          <h4 className="font-semibold mt-4">Powered by</h4>
          <p className="text-foreground/80">Algorand • Aleo • Zcash</p>

          <div className="flex gap-3 mt-6">
            <a href="mailto:maranda@compliledger.com"><Button> Book Platform Demo</Button></a>
            <Link to="/pricing"><Button variant="default"> Buy Platform</Button></Link>
          </div>
        </div>
      )
    },
    {
      id: 'sdks',
      title: 'CompliLedger SDK Suite',
      subtitle: 'Embed compliance into your systems',
      icon: Code,
      content: (
        <div>
          <h4 className="font-semibold">Available SDKs</h4>
          <div className="space-y-2 mt-2 text-foreground/80">
            <div> CompALGO — Algorand Compliance SDK — Immutable audit trails and timestamped verification.</div>
            <div> CompZ — Zcash Privacy &amp; Proof SDK — Confidential compliance proofs and shielded attestations.</div>
            <div> Comp-Leo — Aleo ZK Intelligence SDK — Private compliance computation using zero-knowledge programs.</div>
          </div>
          <h4 className="font-semibold mt-4">What developers get</h4>
          <ul className="list-inside list-disc space-y-1 text-foreground/80 mt-2">
            <li>APIs &amp; SDK packages</li>
            <li>CLI tools</li>
            <li>Test environments</li>
            <li>Sample integrations</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <Link to="/documentation"><Button>Try an SDK</Button></Link>
            <a href="https://www.compliledger.com/docs"><Button variant="outline"> View Developer Docs</Button></a>
          </div>
        </div>
      )
    },
    {
      id: 'market',
      title: 'CompliMarket',
      subtitle: 'Compliance intelligence, one agent at a time',
      icon: Users,
      content: (
        <div>
          <p>A marketplace where users can subscribe to specialized AI compliance agents — without deploying the full platform.</p>
          <h4 className="font-semibold mt-4">Available agents</h4>
          <ul className="list-inside list-disc text-foreground/80 space-y-1 mt-2">
            <li>GitHub Sentinel</li>
            <li>Policy Interpreter</li>
            <li>AI Risk Scoring</li>
            <li>AutoDoc Agent</li>
            <li>Vulnerability Compliance Agent</li>
            <li>Drift Detection Agent</li>
          </ul>
          <div className="mt-4">
            <a href="https://www.complimarket.compliledger.com" target="_blank" rel="noreferrer"><Button> Browse Agents</Button></a>
            <Button variant="default" className="ml-2">Subscribe Now</Button>
          </div>
        </div>
      )
    },
    {
      id: 'master',
      title: 'Master Agent',
      subtitle: 'One interface for the entire compliance system',
      icon: Cpu,
      content: (
        <div>
          <p>The Master Agent is the command interface for CompliLedger. It allows users to query compliance posture, generate evidence, orchestrate agents, and navigate frameworks using natural language.</p>
          <h4 className="font-semibold mt-4">Features</h4>
          <ul className="list-inside list-disc text-foreground/80 mt-2">
            <li>Compliance Q&amp;A</li>
            <li>Evidence generation</li>
            <li>Risk explanations</li>
            <li>Agent orchestration</li>
          </ul>
          <div className="mt-4"><Button> Launch Master Agent</Button></div>
        </div>
      )
    },
    {
      id: 'start',
      title: 'Start where you are',
      subtitle: 'Start. Scale. Repeat.',
      icon: Compass,
      content: (
        <div>
          <p className="font-medium">Paths:</p>
          <ul className="list-inside list-disc text-foreground/80 mt-2">
            <li>Startups &amp; Teams → Try Platform → Add agents → Scale frameworks</li>
            <li>Developers → Use SDK → Generate proof → Upgrade to platform</li>
            <li>Auditors &amp; Professionals → Use agents → Bundle tools → Platform access</li>
          </ul>
        </div>
      )
    },
    {
      id: 'privacy',
      title: 'Privacy is enforced everywhere',
      subtitle: 'Regardless of how you use CompliLedger',
      icon: ShieldCheck,
      content: (
        <div>
          <ul className="list-inside list-disc text-foreground/80 mt-2">
            <li>No data resale</li>
            <li>No telemetry monetization</li>
            <li>No AI training on customer data</li>
            <li>No on-chain data exposure</li>
            <li>No cross-tenant access</li>
          </ul>
        </div>
      )
    }
  ];

  function ProductNav() {
    return (
      <div className="space-y-3">
        {productData.map((p) => {
          const Icon = p.icon as any;
          return (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              className={`w-full text-left p-3 rounded-lg hover:bg-background/70 transition flex items-center gap-3 border ${selected === p.id ? 'ring-2 ring-primary/40 border-transparent' : 'border border-foreground/10'}`}>
              <Icon className="size-6 text-foreground/80" aria-hidden />
              <div>
                <div className="font-semibold">{p.title}</div>
                <div className="text-xs text-foreground/70">{p.subtitle}</div>
              </div>
            </button>
          );
        })}
      </div>
    );
  }

  function ProductDetail() {
    const item = productData.find((x) => x.id === selected) ?? productData[0];
    return (
      <div>
        <SectionHeader title={item.title} description={item.subtitle} />
        <div className="mt-4 p-6 bg-background/60 rounded-2xl border border-foreground/10">
          {item.content}
        </div>
      </div>
    );
  }
  return (
    <Layout>
      {/* PAGE HERO */}
     <Section variant="default" spacing="xl" className="py-0 min-h-screen min-h-svh flex items-center">

          <div className="absolute right-6 bottom-24  max-w-[55vw] text-md md:text-xl lg:text-3xl xl:text-3xl font-extrabold uppercase text-foreground/90 px-2 py-1 text-right pointer-events-none">
              designed for <span className='bg-red-500 px-2 rounded-sm'>privacy-first</span> compliance
            </div>

          <div aria-hidden  style={{willChange: 'transform'}} className="absolute right-6 bottom-6  pointer-events-none select-none text-[2rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-extrabold uppercase leading-none opacity-10 tracking-tight">
           products
          </div>




      </Section>
{/* Text reveal section (scroll-animated by word) */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord text=" CompliLedger is the core compliance operating system. SDKs, AI agents, and interfaces extend it without compromising privacy." className="" />

            <div className="flex items-center justify-center gap-2 mt-4">
              <a href="mailto:maranda@compliledger.com"><Button variant="outline">Book a Demo</Button></a>
              <Button>
               coming soon <ArrowRight className="size-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </Section>
      {/* Interactive Products Explorer (sections 1–6) */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Left nav */}
              <div className="md:col-span-1">
                <h3 className="text-sm font-semibold mb-4">Explore Products</h3>
                <ProductNav />
              </div>

              {/* Right detail */}
              <div className="md:col-span-2">
                <ProductDetail />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section  spacing="xl">
        <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-4 py-8">
          <Plus
            className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6"
            strokeWidth={1}
          />
          <Plus
            className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6"
            strokeWidth={1}
          />
          <Plus
            className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6"
            strokeWidth={1}
          />
          <Plus
            className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6"
            strokeWidth={1}
          />

          <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
          <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />

          <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed" />

          <div className="space-y-1">
            <h2 className="text-center font-bold text-2xl">Compliance is Infrastructure. Choose how to Deploy it</h2>

          </div>

          <div className="flex items-center justify-center gap-2">
            <Button variant="outline">coming soon</Button>
            <Button>
              Request info <ArrowRight className="size-4 ml-1" />
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Products;
