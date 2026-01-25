import React from 'react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import {TextRevealByWord} from '@/components/ui/text-reveal-by-word';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Problem = () => {
  return (
    <Layout>
        {/* PAGE HERO (restored original layout) */}
      <Section variant="default" spacing="xl" className="py-0 min-h-screen min-h-svh flex items-center">
        <div className="absolute right-6 bottom-24 max-w-[55vw] text-md md:text-xl lg:text-3xl xl:text-3xl font-extrabold uppercase text-foreground/90 px-2 py-1 text-right pointer-events-none">
          Compliance Is<span className="bg-red-500 px-2 rounded-sm">Broken</span>for Everyone  

        </div>
        <div
          aria-hidden
          style={{ willChange: "transform" }}
          className="absolute right-6 bottom-6 pointer-events-none select-none text-[2rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[16rem] font-extrabold uppercase leading-none opacity-10 tracking-tight"
        >
          Problems
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
      <Section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
         

          <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-8">Pain Points</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-3">Companies</h4>
              <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
                <li>6–12 months of audit preparation per cycle</li>
                <li>$100k–$500k+ annual compliance & audit costs</li>
                <li>30–50% of engineering/security time diverted</li>
                <li>3–6× duplicated evidence across SOC 2, ISO, NIST, SEC</li>
                <li>20–40% enterprise deal delays due to audit readiness gaps</li>
              </ul>
            </div>

            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-3">Auditors</h4>
              <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
                <li>Static PDFs, screenshots, spreadsheets</li>
                <li>Low-integrity evidence with weak lineage</li>
                <li>50–70% of audit time spent validating credibility</li>
                <li>30–40% audit scope expansion due to low confidence</li>
              </ul>
            </div>

            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-3">Regulators</h4>
              <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
                <li>Late disclosures and after-the-fact reporting</li>
                <li>Document floods instead of actionable signal</li>
                <li>No independent verification of compliance claims</li>
                <li>Forced tradeoffs between transparency and privacy</li>
              </ul>
            </div>

            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-3">Public</h4>
              <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
                <li>$4.5M–$9.5M average breach cost</li>
                <li>20–40% customer churn after major incidents</li>
                <li>Reputation and trust collapse</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            The root cause: compliance is built on trust and snapshots — not proof.
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Problem;
