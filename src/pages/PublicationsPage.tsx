import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, ExternalLink, Download, Copy, CheckCircle } from "lucide-react";
import { publications } from "@/data/publications";
import { toast } from "sonner";

const PublicationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Get unique years and types
  const years = Array.from(new Set(publications.map(pub => pub.year))).sort((a, b) => b - a);
  const types = Array.from(new Set(publications.map(pub => pub.type)));

  // Filter publications
  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesYear = selectedYear === "all" || pub.year.toString() === selectedYear;
    const matchesType = selectedType === "all" || pub.type === selectedType;
    return matchesSearch && matchesYear && matchesType;
  });

  const copyCitation = (id: string) => {
    const pub = publications.find(p => p.id === id);
    if (pub) {
      const citation = `${pub.authors.join(", ")}. "${pub.title}." ${pub.venue}, ${pub.year}.`;
      navigator.clipboard.writeText(citation);
      setCopiedId(id);
      toast.success("Citation copied to clipboard!");
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <>
      <PageHeader
        title="Publications"
        subtitle="Explore our research contributions in cloud security and privacy"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-feminine-primary" />
            <Input
              type="text"
              placeholder="Search publications by title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-white/10 border-feminine-primary/30 text-feminine-text-primary placeholder:text-feminine-text-secondary/50 focus:border-feminine-primary focus:ring-feminine-primary/30"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <Filter className="h-4 w-4 text-feminine-primary" />
                <label className="text-sm font-medium text-feminine-text-primary">Year</label>
              </div>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="bg-white/10 border-feminine-primary/30 text-feminine-text-primary">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent className="bg-white border-feminine-primary/30 text-feminine-text-primary">
                  <SelectItem value="all" className="focus:bg-feminine-primary/20">All Years</SelectItem>
                  {years.map(year => (
                    <SelectItem key={year} value={year.toString()} className="focus:bg-feminine-primary/20">
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1 min-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <Filter className="h-4 w-4 text-feminine-primary" />
                <label className="text-sm font-medium text-feminine-text-primary">Type</label>
              </div>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="bg-white/10 border-feminine-primary/30 text-feminine-text-primary">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-white border-feminine-primary/30 text-feminine-text-primary">
                  <SelectItem value="all" className="focus:bg-feminine-primary/20">All Types</SelectItem>
                  {types.map(type => (
                    <SelectItem key={type} value={type} className="focus:bg-feminine-primary/20">
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map(pub => (
            <Card key={pub.id} className="bg-white/10 backdrop-blur-sm border border-feminine-primary/30 hover:border-feminine-primary/50 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(155,77,202,0.2)]">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold mb-2 text-feminine-text-primary">{pub.title}</CardTitle>
                    <span className="bg-feminine-primary/20 text-feminine-primary px-3 py-1 rounded-pill text-sm font-medium border border-feminine-primary/30">
                      {pub.type}
                    </span>
                  </div>
                  <div className="text-feminine-primary font-medium">
                    {pub.year}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-feminine-text-primary">Authors</h4>
                    <p className="text-feminine-text-secondary">{pub.authors.join(", ")}</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 text-feminine-text-primary">Venue</h4>
                    <p className="text-feminine-text-secondary">{pub.venue}</p>
                  </div>

                  {pub.abstract && (
                    <div>
                      <h4 className="font-medium mb-2 text-feminine-text-primary">Abstract</h4>
                      <p className="text-feminine-text-secondary">{pub.abstract}</p>
                    </div>
                  )}

                  {pub.keywords && (
                    <div>
                      <h4 className="font-medium mb-2 text-feminine-text-primary">Keywords</h4>
                      <div className="flex flex-wrap gap-2">
                        {pub.keywords.map((keyword, index) => (
                          <span
                            key={index}
                            className="bg-feminine-primary/20 text-feminine-primary px-2 py-1 rounded-pill text-xs border border-feminine-primary/30"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 pt-4">
                    {pub.doi && (
                      <Button variant="outline" size="sm" className="text-feminine-text-primary border-feminine-primary/30 hover:bg-feminine-primary/10 hover:text-feminine-primary">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        DOI
                      </Button>
                    )}
                    {pub.pdf && (
                      <Button size="sm" className="bg-feminine-primary hover:bg-feminine-primary-dark text-feminine-text-light rounded-pill shadow-[0_0_10px_rgba(155,77,202,0.3)] hover:shadow-[0_0_15px_rgba(155,77,202,0.5)]">
                        <Download className="h-4 w-4 mr-2" />
                        PDF
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-feminine-primary text-feminine-primary hover:bg-feminine-primary/10 rounded-pill shadow-[0_0_10px_rgba(155,77,202,0.2)] hover:shadow-[0_0_15px_rgba(155,77,202,0.4)]"
                      onClick={() => copyCitation(pub.id)}
                    >
                      {copiedId === pub.id ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy Citation
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Citation Information */}
        <div className="mt-12">
          <SectionHeader
            title="How to Cite"
            subtitle="Guidelines for citing our publications"
            align="center"
          />
          <div className="bg-white p-4 rounded-md mb-4 font-mono text-sm text-[#D16BA5] font-semibold border border-feminine-secondary/20 shadow-sm">
            {publications[0].authors.join(", ")}. "{publications[0].title}." {publications[0].venue}, {publications[0].year}.
          </div>
          <p className="text-center text-muted-foreground">
            For specific questions about citations or to request additional information, please{" "}
            <a href="/contact" className="text-feminine-primary hover:underline">contact us</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default PublicationsPage;
