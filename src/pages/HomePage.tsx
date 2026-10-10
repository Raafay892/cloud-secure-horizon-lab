import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import PublicationRow from "@/components/PublicationRow";
import MemberAvatar from "@/components/MemberAvatar";
import { publications } from "@/data/publications";
import { researchAreas } from "@/data/research";
import { team } from "@/data/team";
import { site } from "@/data/site";

const latestPublications = [...publications].sort((a, b) => b.year - a.year).slice(0, 4);
const totalCitations = publications.reduce((sum, pub) => sum + (pub.citations ?? 0), 0);
const journalCount = publications.filter((pub) => pub.type === "journal").length;

const stats = [
  { value: `${totalCitations}+`, label: "Citations to selected work" },
  { value: String(publications.length), label: "Selected publications" },
  { value: String(journalCount), label: "Journal articles" },
  { value: String(team.length), label: "Researchers" },
];

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-background-dark text-white">
        <div className="absolute inset-0 grid-backdrop" aria-hidden />
        <div
          className="absolute -top-32 -right-24 h-[34rem] w-[34rem] rounded-full bg-brand-primary/45 blur-[140px]"
          aria-hidden
        />
        <div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-secondary/20 blur-[120px]"
          aria-hidden
        />

        <div className="container relative mx-auto px-4 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="eyebrow !text-brand-primary-light">{site.institution}</p>
              <h1 className="mt-5 font-serif text-[2.6rem] font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                Making the cloud safe for sensitive data.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                The Cloud Security &amp; Privacy Lab designs cryptographic systems that let people store,
                search and compute on data they don't want anyone else to see, including the cloud provider.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="inverse">
                  <Link to="/research">
                    Explore our research <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline-inverse">
                  <Link to="/publications">Publications</Link>
                </Button>
              </div>
            </div>

            {/* Research snapshot */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/50">What we work on</p>
              <ul className="mt-4 divide-y divide-white/10">
                {researchAreas.slice(0, 5).map((area) => (
                  <li key={area.id}>
                    <Link
                      to={`/research#${area.id}`}
                      className="group flex items-center gap-4 py-3.5 text-white/85 hover:text-white"
                    >
                      <area.icon className="h-5 w-5 shrink-0 text-brand-primary-light" />
                      <span className="flex-1 font-medium">{area.title}</span>
                      <ArrowUpRight className="h-4 w-4 text-white/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-brand-background-dark/90 px-6 py-5">
                <dt className="text-sm text-white/55">{stat.label}</dt>
                <dd className="mt-1 font-serif text-3xl font-semibold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow">About the lab</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight md:text-4xl">
                Provable security that holds up in real deployments.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-brand-text-secondary">
              <p>
                Founded in {site.founded} with funding from the {site.funder}, CSP Lab works where
                cryptography meets systems engineering. Our schemes are built to be fast enough and simple
                enough to use outside the paper.
              </p>
              <p>
                Our work has appeared in IEEE Transactions, Elsevier FGCS, IEEE Access and ICASSP, and spans
                telemedicine, autonomous vehicles, smart airports and machine learning.
              </p>
              <div className="flex items-center gap-2 text-base text-brand-text-secondary">
                <MapPin className="h-4 w-4 text-brand-primary" />
                {site.address.slice(0, 2).join(", ")}
              </div>
              <Button asChild variant="link" className="h-auto px-0 text-base">
                <Link to="/about">
                  More about the lab <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research areas */}
      <section className="section border-y border-brand-line bg-brand-background-alt">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Research"
            title="Focus areas"
            subtitle="Six connected themes, each backed by published, peer-reviewed work."
            action={
              <Button asChild variant="outline">
                <Link to="/research">
                  All research <ArrowRight />
                </Link>
              </Button>
            }
          />

          <div className="grid gap-px overflow-hidden rounded-2xl border border-brand-line bg-brand-line sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area) => (
              <Link
                key={area.id}
                to={`/research#${area.id}`}
                className="group flex flex-col bg-white p-7 transition-colors hover:bg-brand-primary-soft/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary-soft text-brand-primary">
                  <area.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{area.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-brand-text-secondary">{area.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary">
                  {area.publicationIds.length} related{" "}
                  {area.publicationIds.length === 1 ? "paper" : "papers"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest publications */}
      <section className="section">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Publications"
            title="Recent work"
            action={
              <Button asChild variant="outline">
                <Link to="/publications">
                  All publications <ArrowRight />
                </Link>
              </Button>
            }
          />
          <div className="divide-y divide-brand-line border-y border-brand-line">
            {latestPublications.map((pub) => (
              <PublicationRow key={pub.id} pub={pub} />
            ))}
          </div>
        </div>
      </section>

      {/* Team strip */}
      <section className="section border-t border-brand-line bg-brand-background-alt">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="People"
            title="The team"
            action={
              <Button asChild variant="outline">
                <Link to="/about#team">
                  Meet everyone <ArrowRight />
                </Link>
              </Button>
            }
          />
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-7">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <MemberAvatar member={member} className="mx-auto h-24 w-24 text-2xl ring-4 ring-white" />
                <p className="mt-3 text-sm font-semibold leading-snug">{member.name}</p>
                <p className="mt-0.5 text-xs text-brand-text-secondary">{member.role.split(" & ")[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-brand-primary px-8 py-14 text-center md:px-16">
            <div className="absolute inset-0 grid-backdrop opacity-60" aria-hidden />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">Work with us</h2>
              <p className="mt-4 text-lg text-white/80">
                We welcome research partners, industry collaborators and students who want to build
                privacy-preserving systems.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" variant="inverse">
                  <Link to="/collaborations">Collaboration opportunities</Link>
                </Button>
                <Button asChild size="lg" variant="outline-inverse">
                  <Link to="/contact">Get in touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
