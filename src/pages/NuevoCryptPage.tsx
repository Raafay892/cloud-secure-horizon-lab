import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import { EngagementBand, PartnerStrip, WorkflowSteps } from "@/components/NuevoCryptBlocks";
import { nuevocrypt, sellingPoints, variants } from "@/data/nuevocrypt";

const NuevoCryptPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-background-dark text-white">
        <div className="absolute inset-0 grid-backdrop" aria-hidden />
        <div className="container relative mx-auto px-4 pt-16 pb-16 md:pt-24 md:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <img src="/brand/nuevocrypt-logo-light.png" alt="NuevoCrypt" className="h-14 w-auto md:h-16" />
              <h1 className="mt-8 font-display text-4xl font-bold uppercase leading-[1.05] text-white md:text-6xl">
                {nuevocrypt.tagline[0]}
                <br />
                <span className="text-gradient">{nuevocrypt.tagline[1]}</span> {nuevocrypt.tagline[2]}
              </h1>
              <span className="rule mt-6" />
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{nuevocrypt.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-brand-gradient hover:opacity-90">
                  <Link to="/collaborations#proposal">
                    Request a pilot <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline-inverse">
                  <a href={nuevocrypt.brochure} download="NuevoCrypt-brochure.png">
                    <Download /> Download brochure
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-6 rounded-full bg-brand-secondary/30 blur-[90px]" aria-hidden />
              <img
                src="/brand/hero-cloud.jpg"
                alt="A cloud secured with a padlock, linked to encrypted documents, images and audio"
                className="relative w-full fade-edges"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section pb-8 md:pb-12">
        <div className="container mx-auto px-4">
          <blockquote className="mx-auto max-w-4xl text-center">
            <p className="font-display text-3xl font-semibold leading-tight md:text-5xl">
              &ldquo;Assuring Cloud Confidence <span className="text-brand-primary">Through Searchable Encryption</span>&rdquo;
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-brand-text-secondary">
              {nuevocrypt.description}
            </p>
          </blockquote>
        </div>
      </section>

      {/* USPs */}
      <section className="section pt-8 md:pt-12">
        <div className="container mx-auto px-4">
          <SectionHeader eyebrow="Why NuevoCrypt" title="Unique selling points" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {sellingPoints.map((usp) => (
              <div
                key={usp.title}
                className="rounded-2xl border border-brand-line bg-gradient-to-b from-brand-primary-soft/70 to-white p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-primary shadow-sm ring-1 ring-brand-line">
                  <usp.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-brand-primary">{usp.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-brand-text-secondary">{usp.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="relative scroll-mt-20 overflow-hidden bg-brand-background-dark text-white">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-primary/40 blur-[130px]" aria-hidden />
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <p className="eyebrow !text-brand-primary-light">Process</p>
          <h2 className="mt-3 font-display text-3xl font-semibold uppercase text-white md:text-4xl">How NuevoCrypt works</h2>
          <p className="mt-3 text-lg text-white/70">Data remains encrypted throughout the search process.</p>
          <WorkflowSteps className="mt-10" />
        </div>
      </section>

      {/* Variants */}
      <section className="section bg-brand-background-alt">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Capabilities"
            title="Searchable encryption variants"
            subtitle="One platform, four ways to search what you can't see."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {variants.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl border border-brand-line bg-white p-7 text-center transition-colors hover:border-brand-primary/40"
              >
                <span
                  className={
                    "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl " +
                    (i % 2 ? "bg-brand-accent-light text-brand-accent" : "bg-brand-primary-soft text-brand-primary")
                  }
                >
                  <v.icon className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-brand-text-secondary">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EngagementBand />
      <PartnerStrip className="border-t-0" />
    </div>
  );
};

export default NuevoCryptPage;
