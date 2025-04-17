
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Cloud, Database, Lock, Server, ShieldCheck, UserCheck } from "lucide-react";

// Research Areas
const researchAreas = [
  {
    id: "cloud-security",
    title: "Cloud Security",
    icon: <Cloud className="h-8 w-8 text-csp-teal" />,
    description: "Developing novel security models and mechanisms for cloud infrastructure, with focus on multi-tenant environments and virtualization security.",
    projects: [
      {
        title: "Secure Virtual Machine Isolation",
        description: "Researching advanced techniques to ensure strong isolation between virtual machines in multi-tenant cloud environments to prevent side-channel attacks.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Cloud Security Posture Management",
        description: "Developing automated tools to assess and enhance cloud security posture by identifying misconfigurations and compliance violations.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Serverless Security",
        description: "Investigating security challenges in serverless computing environments and designing protective measures against function-level attacks.",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "data-privacy",
    title: "Data Privacy",
    icon: <Lock className="h-8 w-8 text-csp-teal" />,
    description: "Researching methods to protect sensitive data in cloud environments while maintaining utility and enabling analysis on protected data.",
    projects: [
      {
        title: "Homomorphic Encryption for Cloud Data",
        description: "Advancing practical homomorphic encryption techniques that allow computation on encrypted data without decryption.",
        image: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Differential Privacy for Cloud Analytics",
        description: "Implementing differential privacy mechanisms for cloud-based analytics platforms to protect individual data points.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Secure Multi-party Computation",
        description: "Developing efficient protocols for secure multi-party computation in distributed cloud environments.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "compliance",
    title: "Privacy Compliance",
    icon: <ShieldCheck className="h-8 w-8 text-csp-teal" />,
    description: "Creating frameworks and tools to help organizations meet evolving regulatory requirements like GDPR, CCPA, and industry-specific regulations.",
    projects: [
      {
        title: "Automated Compliance Verification",
        description: "Building systems that can automatically verify cloud deployments against compliance requirements and generate audit reports.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Privacy Policy Analysis",
        description: "Developing tools to analyze privacy policies and compare them with actual data handling practices to identify discrepancies.",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Cross-Border Data Transfer Framework",
        description: "Researching legal and technical frameworks for compliant cross-border data transfers in cloud environments.",
        image: "https://images.unsplash.com/photo-1599055322432-102e26234ed4?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "identity",
    title: "Identity & Access Management",
    icon: <UserCheck className="h-8 w-8 text-csp-teal" />,
    description: "Researching advanced identity and access management solutions for cloud environments, focusing on zero trust architectures.",
    projects: [
      {
        title: "Zero Trust Identity Models",
        description: "Developing and evaluating zero trust identity frameworks for multi-cloud environments.",
        image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Continuous Authentication",
        description: "Investigating behavioral biometrics and other techniques for continuous authentication in cloud applications.",
        image: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Federated Identity for Multi-Cloud",
        description: "Designing secure federated identity solutions that work across multiple cloud providers and on-premises systems.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "secure-storage",
    title: "Secure Storage",
    icon: <Database className="h-8 w-8 text-csp-teal" />,
    description: "Developing secure storage systems and encryption techniques that protect data at rest while enabling efficient access and search.",
    projects: [
      {
        title: "Encrypted Search for Cloud Databases",
        description: "Creating searchable encryption schemes that allow querying encrypted databases without revealing sensitive information.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Secure Distributed Storage",
        description: "Designing distributed storage systems with built-in security and privacy guarantees for sensitive data.",
        image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Data Lifecycle Security",
        description: "Researching methods to maintain security throughout the entire data lifecycle in cloud storage systems.",
        image: "https://images.unsplash.com/photo-1611146960512-21b15edd4d31?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "cloud-networking",
    title: "Secure Cloud Networking",
    icon: <Server className="h-8 w-8 text-csp-teal" />,
    description: "Researching secure network architectures and protocols for cloud environments, including software-defined networking security.",
    projects: [
      {
        title: "Software-Defined Network Security",
        description: "Developing security frameworks for software-defined networks in cloud environments.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Secure Service Mesh",
        description: "Researching security models for service mesh architectures in microservices-based cloud applications.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Network Threat Detection",
        description: "Building advanced threat detection systems for cloud network traffic using machine learning techniques.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
];

const ResearchPage = () => {
  return (
    <div>
      <PageHeader
        title="Research"
        subtitle="Exploring the frontiers of cloud security and privacy through innovative research"
      />

      {/* Research Overview */}
      <section className="py-12 bg-csp-gray-light">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Research Focus Areas"
            subtitle="Our lab conducts cutting-edge research across multiple areas of cloud security and privacy"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="border-2 hover:border-csp-teal transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2">{area.icon}</div>
                  <CardTitle>{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="pl-0" asChild>
                    <a href={`#${area.id}`}>
                      View Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Research Projects"
            subtitle="Explore our active research projects across different focus areas"
          />

          <Tabs defaultValue="cloud-security" className="mt-8">
            <TabsList className="flex flex-wrap h-auto mb-8">
              {researchAreas.map((area) => (
                <TabsTrigger key={area.id} value={area.id} className="mb-2">
                  {area.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {researchAreas.map((area) => (
              <TabsContent key={area.id} value={area.id} id={area.id}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {area.projects.map((project, idx) => (
                    <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{project.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">Learn More</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Research Infrastructure */}
      <section className="py-12 bg-gradient-to-r from-csp-blue-dark to-csp-blue text-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Research Infrastructure"
            subtitle="State-of-the-art facilities and tools supporting our research activities"
            align="center"
            className="text-white [&>p]:text-white/80"
          />

          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Computing Resources</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                      <Server className="h-4 w-4" />
                    </span>
                    <span>High-performance computing cluster with specialized hardware for cryptographic operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                      <Cloud className="h-4 w-4" />
                    </span>
                    <span>Private cloud infrastructure for experimental deployments and testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                      <Database className="h-4 w-4" />
                    </span>
                    <span>Dedicated storage systems for secure data management and analysis</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Software & Tools</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                      <Lock className="h-4 w-4" />
                    </span>
                    <span>Custom-developed frameworks for privacy-preserving computation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <span>Advanced security testing and verification tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                      <UserCheck className="h-4 w-4" />
                    </span>
                    <span>Specialized environments for cloud security experimentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Sources */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Research Funding"
            subtitle="Our work is made possible through generous support from various funding agencies and industry partners"
            align="center"
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Government Funding</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="text-muted-foreground">National Science Foundation (NSF) - Secure and Trustworthy Cyberspace Program</li>
                  <li className="text-muted-foreground">Department of Energy (DOE) - Advanced Scientific Computing Research</li>
                  <li className="text-muted-foreground">Department of Defense (DoD) - Research & Engineering Enterprise</li>
                  <li className="text-muted-foreground">National Institute of Standards and Technology (NIST) - Cybersecurity Grants</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Industry Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="text-muted-foreground">Leading cloud service providers through joint research initiatives</li>
                  <li className="text-muted-foreground">Technology companies focused on security and privacy solutions</li>
                  <li className="text-muted-foreground">Financial institutions supporting secure cloud technologies</li>
                  <li className="text-muted-foreground">Healthcare organizations interested in secure health data management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;
