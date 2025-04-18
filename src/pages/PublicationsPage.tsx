
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileDown, Filter, Search, Share2 } from "lucide-react";

// Sample publications data
const publications = [
  {
    id: 1,
    title: "Secure Multi-Party Computation for Privacy-Preserving Cloud Analytics",
    authors: "J. Smith, A. Johnson, M. Williams",
    conference: "IEEE Symposium on Security and Privacy",
    year: 2023,
    type: "conference",
    abstract: "This paper presents a novel approach to secure multi-party computation that enables privacy-preserving analytics in cloud environments. We introduce a new protocol that reduces communication overhead by 40% compared to previous methods while maintaining strong security guarantees.",
    pdfUrl: "#",
    tags: ["multi-party computation", "privacy", "cloud analytics"]
  },
  {
    id: 2,
    title: "Homomorphic Encryption for Secure Cloud Storage: Performance Analysis and Optimizations",
    authors: "R. Chen, L. Garcia, K. Thompson",
    journal: "ACM Transactions on Privacy and Security",
    year: 2023,
    type: "journal",
    abstract: "In this journal article, we analyze the performance characteristics of homomorphic encryption schemes for cloud storage applications. We propose several optimizations that improve computational efficiency while preserving security properties, making practical deployment more feasible.",
    pdfUrl: "#",
    tags: ["homomorphic encryption", "cloud storage", "performance analysis"]
  },
  {
    id: 3,
    title: "ZeroTrust: A Framework for Identity and Access Management in Multi-Cloud Environments",
    authors: "T. Anderson, P. Rodriguez, S. Williams",
    conference: "USENIX Security Symposium",
    year: 2022,
    type: "conference",
    abstract: "We present ZeroTrust, a comprehensive framework for identity and access management in multi-cloud environments. The framework implements continuous verification principles and context-aware access controls to minimize the attack surface in distributed cloud systems.",
    pdfUrl: "#",
    tags: ["zero trust", "identity management", "access control", "multi-cloud"]
  },
  {
    id: 4,
    title: "Privacy-Preserving Machine Learning in Federated Cloud Environments",
    authors: "M. Johnson, J. Smith, A. Kumar",
    conference: "Conference on Cloud Computing Security Workshop",
    year: 2022,
    type: "workshop",
    abstract: "This workshop paper explores techniques for privacy-preserving machine learning in federated cloud environments. We demonstrate that differential privacy can be applied to federated learning systems without significant loss of model accuracy.",
    pdfUrl: "#",
    tags: ["machine learning", "differential privacy", "federated learning"]
  },
  {
    id: 5,
    title: "Threat Modeling for Serverless Computing: New Challenges and Solutions",
    authors: "L. Garcia, T. Anderson",
    journal: "Journal of Cloud Security",
    year: 2021,
    type: "journal",
    abstract: "Serverless computing introduces unique security challenges that existing threat models fail to address. This paper proposes a comprehensive threat model specifically designed for serverless architectures and evaluates it against real-world attack scenarios.",
    pdfUrl: "#",
    tags: ["serverless computing", "threat modeling", "cloud security"]
  },
  {
    id: 6,
    title: "SecureStore: Encrypted Search for Cloud Databases with Minimal Performance Overhead",
    authors: "K. Thompson, R. Chen, P. Rodriguez",
    conference: "NDSS Symposium",
    year: 2021,
    type: "conference",
    abstract: "SecureStore is a novel system for encrypted search in cloud databases that achieves near-native performance while providing strong security guarantees. We demonstrate that our approach reduces query latency by up to 60% compared to existing solutions.",
    pdfUrl: "#",
    tags: ["encrypted search", "cloud databases", "performance optimization"]
  },
  {
    id: 7,
    title: "Compliance Verification for Cloud Deployments: Automated Auditing of GDPR Requirements",
    authors: "S. Williams, J. Smith",
    journal: "IEEE Transactions on Cloud Computing",
    year: 2020,
    type: "journal",
    abstract: "We present an automated system for verifying GDPR compliance in cloud deployments. The system employs formal verification techniques to check that cloud configurations satisfy privacy requirements specified in the regulation.",
    pdfUrl: "#",
    tags: ["compliance", "GDPR", "automated auditing", "formal verification"]
  },
  {
    id: 8,
    title: "Software-Defined Networking Security in Cloud Environments",
    authors: "A. Kumar, T. Anderson, M. Johnson",
    conference: "Cloud Security Alliance Congress",
    year: 2020,
    type: "conference",
    abstract: "This paper examines security challenges in software-defined networking (SDN) within cloud environments. We propose a security framework that addresses control plane vulnerabilities and ensures the integrity of network configurations.",
    pdfUrl: "#",
    tags: ["software-defined networking", "SDN", "network security"]
  },
];

const PublicationsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterYear, setFilterYear] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");

  // Get unique years for the filter
  const years = [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a);
  
  // Get unique publication types for the filter
  const types = [...new Set(publications.map(pub => pub.type))];

  // Filter publications based on search term and filters
  const filteredPublications = publications.filter(pub => {
    const matchesSearch = searchTerm === "" || 
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesYear = filterYear === "all" || pub.year.toString() === filterYear;
    const matchesType = filterType === "all" || pub.type === filterType;
    
    return matchesSearch && matchesYear && matchesType;
  });

  return (
    <div>
      <PageHeader
        title="Publications"
        subtitle="Our research contributions to cloud security and privacy"
      />

      {/* Search and Filters */}
      <section className="py-8 glass-card my-8 mx-4 md:mx-8 lg:mx-auto max-w-7xl border border-white/10 shadow-[0_5px_20px_rgba(0,0,0,0.2)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-csp-accent" />
              <Input
                placeholder="Search publications by title, author, or keywords..."
                className="pl-9 bg-black/30 border-csp-accent/30 text-white placeholder:text-white/50 focus:border-csp-accent focus:ring-csp-accent/30"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-csp-cyan" />
              <span className="text-sm text-white/80">Filters:</span>
            </div>
            
            <div className="w-full md:w-48">
              <Select value={filterYear} onValueChange={setFilterYear}>
                <SelectTrigger className="bg-black/30 border-csp-accent/30 text-white">
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent className="bg-csp-secondary border-csp-accent/30 text-white">
                  <SelectItem value="all" className="focus:bg-csp-accent/20">All Years</SelectItem>
                  {years.map(year => (
                    <SelectItem key={year} value={year.toString()} className="focus:bg-csp-accent/20">
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full md:w-48">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="bg-black/30 border-csp-accent/30 text-white">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent className="bg-csp-secondary border-csp-accent/30 text-white">
                  <SelectItem value="all" className="focus:bg-csp-accent/20">All Types</SelectItem>
                  {types.map(type => (
                    <SelectItem key={type} value={type} className="focus:bg-csp-accent/20">
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={`${filteredPublications.length} Publications Found`}
            subtitle="Browse our research papers, articles, and conference proceedings"
          />

          <div className="mt-8 space-y-6">
            {filteredPublications.map((pub) => (
              <Card key={pub.id} className="bg-black/30 backdrop-blur-sm border border-white/10 hover:border-csp-accent/30 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(255,0,127,0.2)]">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold text-white">
                      {pub.title}
                    </CardTitle>
                    <span className="bg-csp-accent/20 text-csp-accent px-3 py-1 rounded-pill text-sm font-medium border border-csp-accent/30">
                      {pub.year}
                    </span>
                  </div>
                  <div className="text-sm text-white/70">
                    {pub.authors}
                  </div>
                  <div className="text-csp-cyan font-medium">
                    {pub.conference || pub.journal}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">{pub.abstract}</p>
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-csp-cyan/10 text-csp-cyan px-2 py-1 rounded-pill text-xs border border-csp-cyan/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm" className="text-white/70 border-white/20 hover:bg-white/5 hover:text-csp-cyan">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm" className="bg-csp-accent hover:bg-csp-accent-subtle text-white rounded-pill shadow-[0_0_10px_rgba(255,0,127,0.3)] hover:shadow-[0_0_15px_rgba(255,0,127,0.5)]">
                    <FileDown className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardFooter>
              </Card>
            ))}

            {filteredPublications.length === 0 && (
              <div className="text-center py-12 glass-card p-8 border border-white/10">
                <p className="text-lg text-white/80 mb-4">
                  No publications found matching your search criteria.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setFilterYear("all");
                    setFilterType("all");
                  }}
                  className="border-csp-cyan text-csp-cyan hover:bg-csp-cyan/10 rounded-pill shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Citation Information */}
      <section className="py-12 glass-card mx-4 md:mx-8 lg:mx-auto max-w-7xl my-8 border border-white/10 shadow-[0_5px_20px_rgba(0,0,0,0.2)]">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Citing Our Work"
            subtitle="Information for properly citing CSP Lab research in your own publications"
            align="center"
          />

          <Card className="mt-8 bg-black/40 border border-white/10">
            <CardContent className="pt-6">
              <p className="mb-4 text-white/80">
                If you use our research in your work, please cite the appropriate papers. For general references to the lab, you may use the following format:
              </p>
              
              <div className="bg-black/30 p-4 rounded-md mb-4 font-mono text-sm text-csp-cyan border border-csp-cyan/20">
                Cloud Security and Privacy Lab. (Year). Title of work. University Name. URL.
              </div>
              
              <p className="text-white/80">
                For specific questions about citations or to request additional information, please <a href="/contact" className="text-csp-accent hover:underline">contact us</a>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PublicationsPage;
