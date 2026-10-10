import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import MemberAvatar from "@/components/MemberAvatar";
import { team, teamGroups } from "@/data/team";
import { site } from "@/data/site";
import { FlaskConical, GraduationCap, ShieldCheck } from "lucide-react";

const objectives = [
  {
    icon: ShieldCheck,
    title: "Advance security models",
    description:
      "Develop and refine security models that capture the realities of distributed and cloud computing, including malicious and honest-but-curious servers.",
  },
  {
    icon: FlaskConical,
    title: "Build practical tools",
    description:
      "Turn schemes into implementations that cloud providers and their users can actually deploy, with measured performance.",
  },
  {
    icon: GraduationCap,
    title: "Educate and train",
    description:
      "Train the next generation of security and privacy researchers through hands-on research at MCS, NUST.",
  },
];

const timeline = [
  {
    date: site.founded,
    title: "Lab founded",
    body: `CSP Lab was established at the ${site.institution} with funding from the ${site.funder}, led by Dr. Shahzaib Tahir (PI) and Dr. Hassan Tahir (Co-PI).`,
  },
  {
    date: "2025 – present",
    title: "Building the group",
    body: "A focused team of research assistants and associates is extending the PIs' published work on searchable encryption, homomorphic encryption and blockchain-based privacy.",
  },
];

const AboutPage = () => {
  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="A research group for practical cloud privacy"
        subtitle="We work at the intersection of cryptography, systems security and privacy engineering."
      />

      {/* Mission & vision */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="eyebrow">Mission</p>
              <p className="mt-4 font-display text-2xl leading-snug text-brand-text-primary">
                To advance the state of the art in cloud security, data privacy and compliance through rigorous
                research and practical applications.
              </p>
              <p className="mt-5 leading-relaxed text-brand-text-secondary">
                We develop solutions to real problems faced by cloud providers, enterprises and individuals:
                how to outsource data and computation without giving up control of it.
              </p>
            </div>
            <div>
              <p className="eyebrow">Vision</p>
              <p className="mt-4 font-display text-2xl leading-snug text-brand-text-primary">
                Cloud technology that people can use with confidence, where privacy is preserved by design.
              </p>
              <p className="mt-5 leading-relaxed text-brand-text-secondary">
                Our goal is to close the gap between theoretical security models and working implementations,
                producing technology that is both strongly secure and usable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section border-y border-brand-line bg-brand-background-alt">
        <div className="container mx-auto px-4">
          <SectionHeader eyebrow="Objectives" title="What guides our work" />
          <div className="grid gap-6 md:grid-cols-3">
            {objectives.map((item, i) => (
              <div key={item.title} className="rounded-2xl border border-brand-line bg-white p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary-soft text-brand-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-sm text-brand-text-secondary/60">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-brand-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section scroll-mt-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="People"
            title="Our team"
            subtitle="The faculty and researchers working on cloud security and privacy at CSP Lab."
          />

          <div className="space-y-14">
            {teamGroups.map((group) => {
              const members = team.filter((m) => m.group === group);
              const lead = group === "Investigators";
              return (
                <div key={group}>
                  <h3 className="mb-6 border-b border-brand-line pb-3 font-mono text-xs uppercase tracking-[0.14em] text-brand-text-secondary">
                    {group}
                  </h3>
                  <div className={lead ? "grid gap-6 md:grid-cols-2" : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"}>
                    {members.map((member) => (
                      <div
                        key={member.name}
                        className={
                          lead
                            ? "flex flex-col gap-6 rounded-2xl border border-brand-line p-6 sm:flex-row sm:items-start"
                            : "flex items-start gap-4 rounded-2xl border border-brand-line p-5"
                        }
                      >
                        <MemberAvatar
                          member={member}
                          className={lead ? "h-28 w-28 shrink-0 text-3xl" : "h-16 w-16 shrink-0 text-lg"}
                        />
                        <div className="min-w-0">
                          <p className={lead ? "font-display text-xl font-semibold" : "font-semibold"}>{member.name}</p>
                          <p className="mt-0.5 text-sm font-medium text-brand-primary">{member.role}</p>
                          <p className="mt-3 text-sm leading-relaxed text-brand-text-secondary">{member.bio}</p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {member.focus.map((f) => (
                              <span key={f} className="tag">
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section border-t border-brand-line bg-brand-background-alt">
        <div className="container mx-auto px-4">
          <SectionHeader eyebrow="History" title="Our story so far" />
          <ol className="relative max-w-3xl border-l border-brand-line">
            {timeline.map((item) => (
              <li key={item.title} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-brand-primary bg-white" />
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand-primary">{item.date}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-brand-text-secondary">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
