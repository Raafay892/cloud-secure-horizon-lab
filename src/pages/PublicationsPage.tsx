import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronDown, Copy, Download, ExternalLink, Search } from "lucide-react";
import { toast } from "sonner";
import PageHeader from "@/components/PageHeader";
import PublicationRow from "@/components/PublicationRow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { publications, type Publication } from "@/data/publications";

const formatCitation = (pub: Publication) => {
  const details = [pub.volume && `vol. ${pub.volume}`, pub.issue && `no. ${pub.issue}`, pub.pages && `pp. ${pub.pages}`]
    .filter(Boolean)
    .join(", ");
  return `${pub.authors.join(", ")}, "${pub.title}," ${pub.venue}${details ? `, ${details}` : ""}, ${pub.year}.`;
};

const PublicationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState<"year" | "citations">("year");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const years = useMemo(() => Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a), []);
  const types = useMemo(() => Array.from(new Set(publications.map((p) => p.type))), []);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return publications
      .filter((pub) => {
        const matchesSearch =
          !q ||
          pub.title.toLowerCase().includes(q) ||
          pub.authors.some((a) => a.toLowerCase().includes(q)) ||
          pub.keywords?.some((k) => k.toLowerCase().includes(q));
        const matchesYear = selectedYear === "all" || pub.year.toString() === selectedYear;
        const matchesType = selectedType === "all" || pub.type === selectedType;
        return matchesSearch && matchesYear && matchesType;
      })
      .sort((a, b) => (sortBy === "year" ? b.year - a.year : (b.citations ?? 0) - (a.citations ?? 0)));
  }, [searchQuery, selectedYear, selectedType, sortBy]);

  const copyCitation = async (pub: Publication) => {
    try {
      await navigator.clipboard.writeText(formatCitation(pub));
      setCopiedId(pub.id);
      toast.success("Citation copied");
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      toast.error("Couldn't copy the citation");
    }
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedYear("all");
    setSelectedType("all");
  };

  return (
    <div>
      <PageHeader
        eyebrow="Publications"
        title="Selected publications"
        subtitle="Peer-reviewed work by the lab's investigators and collaborators in journals and conferences."
      />

      <section className="container mx-auto px-4 py-12 md:py-16">
        {/* Filters */}
        <div className="sticky top-20 z-10 -mx-4 border-b border-brand-line bg-white/90 px-4 py-4 backdrop-blur-lg">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-text-secondary" />
              <Input
                type="search"
                placeholder="Search by title, author or keyword"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-11 pl-9"
                aria-label="Search publications"
              />
            </div>
            <div className="grid grid-cols-3 gap-3 md:flex">
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="h-11 md:w-36" aria-label="Filter by year">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All years</SelectItem>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="h-11 capitalize md:w-40" aria-label="Filter by type">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All types</SelectItem>
                  {types.map((type) => (
                    <SelectItem key={type} value={type} className="capitalize">
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as "year" | "citations")}>
                <SelectTrigger className="h-11 md:w-44" aria-label="Sort publications">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="year">Newest first</SelectItem>
                  <SelectItem value="citations">Most cited</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-brand-text-secondary">
          Showing {filtered.length} of {publications.length} publications
        </p>

        {/* List */}
        {filtered.length > 0 ? (
          <div className="mt-2 divide-y divide-brand-line">
            {filtered.map((pub) => (
              <div key={pub.id}>
                <PublicationRow pub={pub}>
                  {pub.doi && (
                    <Button asChild variant="outline" size="sm" className="h-7 px-2.5 text-xs">
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer">
                        <ExternalLink /> DOI
                      </a>
                    </Button>
                  )}
                  {pub.pdf && (
                    <Button asChild variant="outline" size="sm" className="h-7 px-2.5 text-xs">
                      <a href={pub.pdf} target="_blank" rel="noreferrer">
                        <Download /> PDF
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 px-2.5 text-xs"
                    onClick={() => copyCitation(pub)}
                  >
                    {copiedId === pub.id ? <Check /> : <Copy />}
                    {copiedId === pub.id ? "Copied" : "Cite"}
                  </Button>
                </PublicationRow>

                {pub.abstract && (
                  <details className="group -mt-2 mb-5 ml-[4.5rem] sm:ml-[6rem]">
                    <summary className="inline-flex cursor-pointer list-none items-center gap-1 text-sm font-medium text-brand-primary [&::-webkit-details-marker]:hidden">
                      Abstract
                      <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-brand-text-secondary">{pub.abstract}</p>
                    {pub.keywords && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {pub.keywords.map((keyword) => (
                          <button
                            key={keyword}
                            type="button"
                            onClick={() => setSearchQuery(keyword)}
                            className={cn("tag hover:border-brand-primary/40 hover:text-brand-primary")}
                          >
                            {keyword}
                          </button>
                        ))}
                      </div>
                    )}
                  </details>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-brand-line px-6 py-16 text-center">
            <p className="font-medium">No publications match your filters.</p>
            <Button variant="link" onClick={resetFilters}>
              Clear filters
            </Button>
          </div>
        )}

        <p className="mt-12 text-sm text-brand-text-secondary">
          Looking for a paper that isn't listed, or need a preprint?{" "}
          <Link to="/contact" className="font-medium text-brand-primary hover:underline">
            Contact us
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default PublicationsPage;
