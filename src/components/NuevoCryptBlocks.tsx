import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { engagementStages, nuevocrypt, partners, workflow } from "@/data/nuevocrypt";

/** The five-step "How NuevoCrypt works" pipeline, on a dark background. */
export const WorkflowSteps = ({ className }: { className?: string }) => (
  <ol className={cn("grid gap-3 sm:grid-cols-2 lg:grid-cols-5", className)}>
    {workflow.map((step, i) => (
      <li
        key={step.title}
        className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white"
      >
        <div className="flex items-center justify-between">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient">
            <step.icon className="h-5 w-5" />
          </span>
          <span className="font-mono text-xs text-white/40">0{i + 1}</span>
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold text-white">{step.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-white/65">{step.body}</p>
        {i < workflow.length - 1 && (
          <ChevronRight
            className="absolute -right-[18px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-brand-secondary lg:block"
            aria-hidden
          />
        )}
      </li>
    ))}
  </ol>
);

/** Logo strip for NUST, TDF, HEC and LYNX. */
export const PartnerStrip = ({ className }: { className?: string }) => (
  <section className={cn("border-y border-brand-line bg-white py-10", className)}>
    <div className="container mx-auto px-4">
      <p className="text-center font-mono text-xs uppercase tracking-[0.14em] text-brand-text-secondary">
        Developed with the support of
      </p>
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
        {partners.map((p) => (
          <li key={p.name} className="flex items-center gap-3" title={p.name}>
            <img
              src={p.logo}
              alt={p.label ? "" : p.name}
              loading="lazy"
              className="h-20 w-auto object-contain mix-blend-multiply md:h-24"
            />
            {p.label && (
              <span className="font-serif text-[15px] font-semibold uppercase leading-tight tracking-wide text-[#1d3a6e]">
                {p.label.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <span className="sr-only">{p.name}</span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

/** Pilot → Validate → Integrate → Commercialize band with a call to action. */
export const EngagementBand = () => (
  <section className="relative overflow-hidden bg-brand-background-dark text-white">
    <div className="absolute inset-0 grid-backdrop" aria-hidden />
    <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-brand-secondary/25 blur-[130px]" aria-hidden />
    <div className="container relative mx-auto px-4 py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="eyebrow !text-brand-primary-light">Ready for deployment</p>
          <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight text-white md:text-4xl">
            Ready for pilot deployment &amp; commercialization
          </h2>
          <p className="mt-4 leading-relaxed text-white/70">
            {nuevocrypt.name} is available for collaborative evaluation, pilot deployment, validation, technology
            transfer and commercialization with organizations seeking privacy-preserving cloud data security.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-brand-gradient hover:opacity-90">
              <Link to="/collaborations#proposal">
                Request a pilot <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline-inverse">
              <a href={`mailto:${nuevocrypt.email}`}>{nuevocrypt.email}</a>
            </Button>
          </div>
        </div>

        <ol className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {engagementStages.map((stage) => (
            <li
              key={stage.title}
              className="chevron flex flex-col items-center bg-brand-gradient px-6 py-7 text-center"
            >
              <stage.icon className="h-7 w-7" />
              <span className="mt-3 font-display text-lg font-semibold uppercase tracking-wide">{stage.title}</span>
              <span className="mt-1 text-xs leading-snug text-white/80">{stage.body}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);
