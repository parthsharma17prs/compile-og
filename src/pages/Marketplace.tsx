import { Link } from "react-router-dom";
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import {TextRevealByWord} from '@/components/ui/text-reveal-by-word';
import { ArrowRight, ArrowRightIcon, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import "./marketplace.css";

const Marketplace = () => {
  const marketRef = useRef<HTMLDivElement | null>(null);



  return (
    <Layout>
      <div className="mp-root mp-noise min-h-svh">
      {/* PAGE HERO (restored original layout) */}
      <Section variant="default" spacing="xl" className="py-0 min-h-screen min-h-svh flex items-center">
        <div className="absolute right-6 bottom-24 max-w-[55vw] text-md md:text-xl lg:text-3xl xl:text-3xl font-extrabold uppercase text-foreground/90 px-2 py-1 text-right pointer-events-none">
          Composable <span className="bg-red-500 px-2 rounded-sm">compliance</span> intelligence
        </div>
        <div
          aria-hidden
          style={{ willChange: "transform" }}
          className="absolute right-6 bottom-6 pointer-events-none select-none text-[2rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[16rem] font-extrabold uppercase leading-none opacity-10 tracking-tight"
        >
          marketplace
        </div>
      </Section>

      {/* INTRO TEXT SECTION (restored original) */}
      <Section variant="default" spacing="xl">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <TextRevealByWord
              text="CompliLedger is designed to operate in high-risk, highly regulated environments where security failures and privacy breaches are unacceptable."
              className=""
            />

            <div className="flex items-center justify-center gap-2 mt-4">
              <Button variant="outline">Request Security Brief </Button>
              <Button>
                View Privacy Architecture <ArrowRightIcon className="size-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 1 — WHAT THE MARKETPLACE IS */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="What is the AI Agent Marketplace?" className="mp-reveal" />
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start mp-reveal" style={{ animationDelay: '0.1s' }}>
            <div className="space-y-4 max-w-xl">
              <p>
                The AI Agent Marketplace is a catalog of purpose-built compliance agents that perform discrete,
                verifiable tasks within the CompliLedger ecosystem. Each agent:
              </p>
              <ul className="list-inside list-disc text-muted-foreground/90 space-y-1">
                <li>has a clearly defined function</li>
                <li>produces deterministic, auditable outputs</li>
                <li>operates inside strict privacy boundaries</li>
                <li>integrates with the CompliLedger Platform</li>
              </ul>
              <p>Agents can be used individually, bundled together, or upgraded into full platform workflows.</p>
            </div>

            <div className="mp-card p-6 flex flex-col gap-4">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Agent traits</div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="font-semibold">Deterministic</div>
                  <p className="text-muted-foreground text-xs">No black-box surprises – repeatable outcomes.</p>
                </div>
                <div>
                  <div className="font-semibold">Composable</div>
                  <p className="text-muted-foreground text-xs">Plug together into larger workflows.</p>
                </div>
                <div>
                  <div className="font-semibold">Bounded</div>
                  <p className="text-muted-foreground text-xs">Strict privacy and access boundaries.</p>
                </div>
                <div>
                  <div className="font-semibold">Verifiable</div>
                  <p className="text-muted-foreground text-xs">Every output can be traced and audited.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2 — WHY AGENTS (NOT MONOLITHS) */}
      <Section spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Why agent-based compliance works" className="mp-reveal" />
          <div className="mp-card-grid mt-8 mp-reveal" style={{ animationDelay: '0.1s' }}>
            <div className="mp-card p-6 flex flex-col gap-3">
              <h3 className="font-semibold text-lg">Modular, not monolithic</h3>
              <p className="text-muted-foreground text-sm">
                Traditional compliance platforms bundle everything into opaque systems. CompliLedger takes a modular approach.
              </p>
            </div>
            <div className="mp-card p-6 flex flex-col gap-3">
              <h3 className="font-semibold text-lg">Deploy only what you need</h3>
              <p className="text-muted-foreground text-sm">
                deploy only what you need
              </p>
            </div>
            <div className="mp-card p-6 flex flex-col gap-3">
              <h3 className="font-semibold text-lg">Transparent components</h3>
              <p className="text-muted-foreground text-sm">
                understand exactly what each component does
              </p>
            </div>
            <div className="mp-card p-6 flex flex-col gap-3">
              <h3 className="font-semibold text-lg">Safe scaling</h3>
              <p className="text-muted-foreground text-sm">
                scale intelligence incrementally and avoid unnecessary access or data exposure
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground mp-reveal" style={{ animationDelay: '0.18s' }}>Each agent performs one job, and does it verifiably.</p>
        </div>
      </Section>

      {/* SECTION 3 — AGENT CATEGORIES */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Agent categories" className="mp-reveal" />
          <div className="mp-card-grid mt-8 mp-reveal" style={{ animationDelay: '0.1s' }}>
            <div className="mp-card">
              <CardHeader>
                <CardTitle> Policy &amp; Framework Intelligence</CardTitle>
                <CardDescription>Policy Interpreter · Framework Alignment Agent · Policy Enforcement Agent · Policy Drift Detection Agent</CardDescription>
              </CardHeader>
            </div>

            <div className="mp-card">
              <CardHeader>
                <CardTitle> Risk, Drift &amp; Vulnerability</CardTitle>
                <CardDescription>AI Risk Scorer · Drift Detection Agent · Vulnerability Compliance Agent</CardDescription>
              </CardHeader>
            </div>

            <div className="mp-card">
              <CardHeader>
                <CardTitle> Evidence &amp; Audit Automation</CardTitle>
                <CardDescription>AutoDoc Agent · AuditPack Agent</CardDescription>
              </CardHeader>
            </div>

            <div className="mp-card">
              <CardHeader>
                <CardTitle> Identity, Credentials &amp; Monitoring</CardTitle>
                <CardDescription>Credential Monitor · Control Enforcement Agent</CardDescription>
              </CardHeader>
            </div>

            <div className="mp-card">
              <CardHeader>
                <CardTitle> Regulatory Intelligence</CardTitle>
                <CardDescription>Regulatory Watchdog</CardDescription>
              </CardHeader>
            </div>

            <div className="mp-card">
              <CardHeader>
                <CardTitle> Platform Intelligence</CardTitle>
                <CardDescription>Ontology Builder · GitHub Sentinel</CardDescription>
              </CardHeader>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4 — HOW AGENTS OPERATE */}
      <Section spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="How agents work — safely" className="mp-reveal" />
          <div className="mp-card-grid mt-8 mp-reveal" style={{ animationDelay: '0.1s' }}>
            <div className="mp-card p-6 flex flex-col gap-3">
              <h3 className="font-semibold text-lg">Constraints</h3>
              <p className="text-muted-foreground text-sm">All agents operate under the same constraints:</p>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 mt-1">
                <li>No raw data extraction</li>
                <li>No cross-tenant access</li>
                <li>No autonomous escalation</li>
                <li>No opaque decisions</li>
              </ul>
            </div>

            <div className="mp-card p-6 flex flex-col gap-3">
              <h3 className="font-semibold text-lg">Evidence properties</h3>
              <p className="text-muted-foreground text-sm">Agent outputs are:</p>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 mt-1">
                <li>signed</li>
                <li>timestamped</li>
                <li>traceable</li>
                <li>auditable</li>
              </ul>
            </div>

            <div className="mp-card p-6 flex flex-col justify-between gap-3 md:col-span-2">
              <p className="text-muted-foreground text-sm max-w-xl">
                Agents inform and automate — they do not override human or organizational control.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 5 — PRIVACY & SECURITY GUARANTEES */}
      <Section variant="default" spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Privacy-first by default" className="mp-reveal" />
          <div className="mp-card p-6 mt-8 max-w-4xl mx-auto mp-reveal" style={{ animationDelay: '0.1s' }}>
            <ul className="list-inside list-disc text-muted-foreground space-y-1">
              <li>No training on customer data</li>
              <li>No telemetry resale</li>
              <li>No hidden data flows</li>
              <li>No system mirroring</li>
              <li>No persistent surveillance</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">Agents inherit all CompliLedger privacy, identity, and zero-knowledge protections.</p>
          </div>
        </div>
      </Section>

      {/* SECTION 6 — HOW AGENTS FIT THE PLATFORM */}
      <Section spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Agents are extensions — not replacements" className="mp-reveal" />
          <div className="mp-card-grid mt-8 mp-reveal" style={{ animationDelay: '0.1s' }}>
            <div className="mp-card p-6 flex flex-col gap-3 md:col-span-2">
              <p className="text-muted-foreground text-sm max-w-3xl">
                Agents plug into the CompliLedger Platform, where outputs become cryptographically verifiable evidence,
                framework-aligned artifacts, audit-ready records, and regulator-verifiable proofs.
              </p>
              <p className="text-muted-foreground text-sm">Using agents does not bypass governance — it strengthens it.</p>
            </div>
          </div>
        </div>
      </Section>



      {/* SECTION 8 — WHO THIS IS FOR */}
      <Section spacing="lg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Who uses the AI Agent Marketplace" className="mp-reveal" />
          <div className="mp-card-grid mt-8 mp-reveal" style={{ animationDelay: '0.1s' }}>
            <div className="mp-card p-6 flex flex-col gap-3">
              <ul className="list-inside list-disc text-muted-foreground space-y-1">
                <li>Startups testing compliance automation</li>
                <li>Auditors validating evidence</li>
                <li>Compliance professionals reducing manual work</li>
                <li>Developers augmenting workflows</li>
                <li>Enterprises scaling intelligence safely</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">If you don’t need the full platform yet — agents let you start responsibly.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section spacing="xl" className="mp-reveal">
        <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-4 py-8" style={{ animationDelay: '0.1s' }}>
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
            <h2 className="text-center font-bold text-2xl">Deploy Compliance Intelligence without deploying risk</h2>

          </div>

          <div className="flex items-center justify-center gap-2">
            <Link to="/platform"><Button variant="outline">Explore Platform</Button></Link>
            <Link to="/pricing"><Button>
              Subscribe <ArrowRight className="size-4 ml-1" />
            </Button></Link>
          </div>
        </div>
      </Section>
      </div>
    </Layout>
  );
};

export default Marketplace;
