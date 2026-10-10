import { useState } from "react";
import { Building2, Check, CheckCircle2, GraduationCap, Loader2, Microscope, Users } from "lucide-react";
import { toast } from "sonner";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { submitForm } from "@/lib/submitForm";
import { site } from "@/data/site";

const collaborationTypes = [
  {
    title: "Research partnerships",
    icon: Microscope,
    description: "Work with our team on joint research in applied cryptography and cloud privacy.",
    benefits: [
      "Access to expertise in searchable and homomorphic encryption",
      "Joint publications in peer-reviewed venues",
      "IP arrangements set out in a collaboration agreement",
    ],
  },
  {
    title: "Industry collaborations",
    icon: Building2,
    description: "Bring us a concrete security or privacy problem from your cloud environment.",
    benefits: [
      "Solutions to specific technical challenges",
      "Early access to prototype tools",
      "Workshops and knowledge transfer for your team",
    ],
  },
  {
    title: "Academic partnerships",
    icon: GraduationCap,
    description: "Partner with us on grants, exchanges and co-supervised student research.",
    benefits: [
      "Joint grant applications",
      "Student and faculty exchanges",
      "Co-supervision of MS and PhD theses",
    ],
  },
  {
    title: "Students & community",
    icon: Users,
    description: "Students interested in cryptography and security research are welcome to reach out.",
    benefits: [
      "Final-year and MS thesis projects",
      "Research assistant openings when funded",
      "Seminars and reading groups",
    ],
  },
];

const steps = [
  { title: "Reach out", body: "Send a short note describing your idea, problem or interest." },
  { title: "Scope", body: "We meet to agree on goals, timeline and how the work will be shared." },
  { title: "Collaborate", body: "We run the work together, with regular check-ins and shared results." },
];

const emptyForm = { name: "", organization: "", email: "", type: "", title: "", description: "", timeline: "" };

const CollaborationsPage = () => {
  const [form, setForm] = useState(emptyForm);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = (field: keyof typeof emptyForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitForm({
        subject: `Collaboration proposal: ${form.title}`,
        replyTo: form.email,
        honeypot,
        fields: {
          Name: form.name,
          Organization: form.organization,
          Email: form.email,
          "Collaboration type": form.type || "Not specified",
          "Project title": form.title,
          "Expected timeline": form.timeline || "Not specified",
          Description: form.description,
        },
      });
      setForm(emptyForm);
      setStatus("sent");
    } catch (err) {
      setStatus("idle");
      toast.error("Your proposal wasn't sent", {
        description: `${(err as Error).message} You can also email us at ${site.email}.`,
        duration: 10000,
      });
    }
  };

  return (
    <div>
      <PageHeader
        eyebrow="Collaborations"
        title="Partner with CSP Lab"
        subtitle="We work with academic, industry and government partners who need privacy and security to hold up in practice."
      />

      {/* Types */}
      <section className="section">
        <div className="container mx-auto px-4">
          <SectionHeader eyebrow="Opportunities" title="Ways to work with us" />
          <div className="grid gap-6 md:grid-cols-2">
            {collaborationTypes.map((type) => (
              <div key={type.title} className="rounded-2xl border border-brand-line p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary-soft text-brand-primary">
                  <type.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{type.title}</h3>
                <p className="mt-2 text-brand-text-secondary">{type.description}</p>
                <ul className="mt-5 space-y-2.5 border-t border-brand-line pt-5">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-[15px]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section border-y border-brand-line bg-brand-background-alt">
        <div className="container mx-auto px-4">
          <SectionHeader eyebrow="Process" title="How it works" />
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-brand-line bg-white p-7">
                <span className="font-mono text-sm text-brand-primary">Step {i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-brand-text-secondary">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Proposal */}
      <section id="proposal" className="section scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="eyebrow">Proposal</p>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Submit a collaboration proposal</h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-text-secondary">
                Tell us about your idea and we'll get back to you. You can also write to us directly at{" "}
                <a href={`mailto:${site.email}`} className="font-medium text-brand-primary hover:underline">
                  {site.email}
                </a>
                .
              </p>
            </div>

            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-brand-line p-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-brand-primary" />
                <h2 className="mt-4 font-display text-2xl font-semibold">Proposal received</h2>
                <p className="mt-2 max-w-sm text-brand-text-secondary">
                  Thank you. We'll review your proposal and reply to the email you provided.
                </p>
                <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
                  Submit another proposal
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-brand-line p-6 md:p-8">
                {/* Honeypot: hidden from people, tempting to bots */}
                <input
                  type="text"
                  name="_honey"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden
                />
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" value={form.name} onChange={update("name")} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input id="organization" value={form.organization} onChange={update("organization")} required />
                  </div>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={form.email} onChange={update("email")} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="collaborationType">Collaboration type</Label>
                    <Select value={form.type} onValueChange={(type) => setForm((prev) => ({ ...prev, type }))}>
                      <SelectTrigger id="collaborationType">
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent>
                        {collaborationTypes.map((t) => (
                          <SelectItem key={t.title} value={t.title}>
                            {t.title}
                          </SelectItem>
                        ))}
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectTitle">Project title</Label>
                  <Input id="projectTitle" value={form.title} onChange={update("title")} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectDescription">Description</Label>
                  <Textarea
                    id="projectDescription"
                    placeholder="Your idea, goals and expected outcomes"
                    rows={5}
                    value={form.description}
                    onChange={update("description")}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Expected timeline</Label>
                  <Input
                    id="timeline"
                    placeholder="e.g. 6 months"
                    value={form.timeline}
                    onChange={update("timeline")}
                  />
                </div>
                <div className="flex justify-end pt-2">
                  <Button type="submit" size="lg" disabled={status === "sending"}>
                    {status === "sending" && <Loader2 className="animate-spin" />}
                    {status === "sending" ? "Sending…" : "Send proposal"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollaborationsPage;
