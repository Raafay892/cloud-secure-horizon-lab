import { Link } from "react-router-dom";
import { ArrowRight, Check, Cloud, Cpu, Lock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import PublicationRow from "@/components/PublicationRow";
import { Button } from "@/components/ui/button";
import { researchAreas } from "@/data/research";
import { publications } from "@/data/publications";
import { site } from "@/data/site";

const publicationsById = new Map(publications.map((pub) => [pub.id, pub]));

const infrastructure = [
  {
    icon: Cpu,
    title: "Compute",
    body: "Workstations for benchmarking cryptographic schemes, including homomorphic encryption and encrypted inference.",
  },
  {
    icon: Cloud,
    title: "Private cloud testbed",
    body: "An isolated environment for deploying and attacking prototype systems under realistic cloud conditions.",
  },
  {
    icon: Lock,
    title: "Frameworks & tooling",
    body: "In-house libraries for searchable encryption and privacy-preserving computation, reused across projects.",
  },
];

const ResearchPage = () => {
  return (
    <div>
      <PageHeader
        eyebrow="Research"
        title="Cryptography for data you can't afford to expose"
        subtitle="Our research spans six connected areas. Each one builds on peer-reviewed results from the lab's investigators."
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {researchAreas.map((area) => (
            <a
              key={area.id}
              href={`#${area.id}`}
              className="rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              {area.title}
            </a>
          ))}
        </div>
      </PageHeader>

      {/* Areas */}
      <div className="container mx-auto px-4">
        {researchAreas.map((area, i) => {
          const related = area.publicationIds
            .map((id) => publicationsById.get(id))
            .filter((pub): pub is NonNullable<typeof pub> => Boolean(pub));

          return (
            <section
              key={area.id}
              id={area.id}
              className="grid scroll-mt-20 gap-10 border-b border-brand-line py-16 last:border-b-0 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 md:py-20"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary-soft text-brand-primary">
                    <area.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-sm text-brand-text-secondary/70">
                    {String(i + 1).padStart(2, "0")} / {String(researchAreas.length).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-5 font-serif text-3xl font-semibold">{area.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-brand-text-secondary">{area.summary}</p>
                <ul className="mt-6 space-y-2.5">
                  {area.questions.map((q) => (
                    <li key={q} className="flex items-start gap-2.5 text-[15px]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand-text-secondary">
                  Related publications
                </p>
                <div className="mt-2 divide-y divide-brand-line">
                  {related.map((pub) => (
                    <PublicationRow key={pub.id} pub={pub} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Infrastructure */}
      <section className="section border-y border-brand-line bg-brand-background-alt">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Infrastructure"
            title="Where the work happens"
            subtitle={`The lab is based at the ${site.institution} and funded by the ${site.funder}.`}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {infrastructure.map((item) => (
              <div key={item.title} className="rounded-2xl border border-brand-line bg-white p-7">
                <item.icon className="h-6 w-6 text-brand-primary" />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-brand-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-semibold">Interested in one of these areas?</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-brand-text-secondary">
            We're open to joint projects, visiting researchers and student theses.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/collaborations">
                Collaborate with us <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/publications">Browse publications</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;
