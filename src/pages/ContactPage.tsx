import { useState } from "react";
import { Building, Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import MemberAvatar from "@/components/MemberAvatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { buildMailto } from "@/lib/mailto";
import { team } from "@/data/team";
import { site } from "@/data/site";

const GENERAL = "General inquiry";
const emptyForm = { name: "", email: "", subject: "", message: "", contactPerson: GENERAL };

const ContactPage = () => {
  const [form, setForm] = useState(emptyForm);

  const update = (field: keyof typeof emptyForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = buildMailto(site.email, form.subject, {
      From: `${form.name} <${form.email}>`,
      "For the attention of": form.contactPerson,
      Message: form.message,
    });
  };

  const details = [
    { icon: MapPin, label: "Address", value: site.address.join("\n") },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  ];

  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Questions about our research, collaboration ideas or student opportunities: we'd like to hear from you."
      />

      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Details */}
            <div>
              <dl className="space-y-7">
                {details.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary-soft text-brand-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <dt className="font-mono text-xs uppercase tracking-[0.14em] text-brand-text-secondary">{item.label}</dt>
                      <dd className="mt-1 whitespace-pre-line text-[15px] leading-relaxed">
                        {item.href ? (
                          <a href={item.href} className="hover:text-brand-primary">
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>

              <div className="mt-10 overflow-hidden rounded-2xl border border-brand-line">
                <iframe
                  title="Lab location"
                  src={site.mapEmbed}
                  className="h-72 w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-brand-line p-6 md:p-8">
              <div>
                <h2 className="font-serif text-2xl font-semibold">Send a message</h2>
                <p className="mt-1.5 text-sm text-brand-text-secondary">
                  This opens your email app with the message ready to send.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={form.name} onChange={update("name")} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={update("email")} required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" value={form.subject} onChange={update("subject")} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPerson">Who is this for?</Label>
                <Select
                  value={form.contactPerson}
                  onValueChange={(contactPerson) => setForm((prev) => ({ ...prev, contactPerson }))}
                >
                  <SelectTrigger id="contactPerson">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={GENERAL}>{GENERAL}</SelectItem>
                    {team.map((person) => (
                      <SelectItem key={person.name} value={person.name}>
                        {person.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={6} value={form.message} onChange={update("message")} required />
              </div>
              <div className="flex justify-end pt-2">
                <Button type="submit" size="lg">
                  Send message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* People */}
      <section className="section border-t border-brand-line bg-brand-background-alt">
        <div className="container mx-auto px-4">
          <p className="eyebrow">People</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold">Who to ask about what</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <div key={person.name} className="flex items-start gap-4 rounded-2xl border border-brand-line bg-white p-5">
                <MemberAvatar member={person} className="h-14 w-14 shrink-0 text-base" />
                <div className="min-w-0">
                  <p className="font-semibold">{person.name}</p>
                  <p className="text-sm text-brand-text-secondary">{person.role}</p>
                  <p className="mt-2 text-sm text-brand-primary">{person.focus.join(" · ")}</p>
                  {person.email && (
                    <a
                      href={`mailto:${person.email}`}
                      className="mt-2 block truncate text-sm text-brand-text-secondary hover:text-brand-primary"
                    >
                      {person.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-brand-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <Building className="mt-0.5 h-6 w-6 shrink-0 text-brand-primary" />
              <div>
                <p className="font-semibold">Visiting the lab</p>
                <p className="mt-1 text-sm text-brand-text-secondary">
                  We welcome visitors from academia, industry and government. Please get in touch at least two weeks
                  ahead with names, affiliations, preferred dates and the purpose of your visit.
                </p>
              </div>
            </div>
            <Button asChild variant="outline" className="shrink-0">
              <a href={`mailto:${site.email}?subject=${encodeURIComponent("Lab visit request")}`}>Request a visit</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
