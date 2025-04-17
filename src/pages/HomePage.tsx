
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import { CheckCircle, FileText, Globe, Lock, Shield, Users } from "lucide-react";

const research = [
  {
    icon: <Shield className="h-10 w-10 text-csp-teal" />,
    title: "Cloud Security",
    description: "Developing advanced methodologies for securing cloud infrastructure and services against sophisticated threats.",
  },
  {
    icon: <Lock className="h-10 w-10 text-csp-teal" />,
    title: "Data Privacy",
    description: "Researching innovative approaches to protect sensitive data while maintaining utility and compliance.",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-csp-teal" />,
    title: "Privacy Compliance",
    description: "Creating frameworks and tools to help organizations meet evolving regulatory requirements.",
  },
];

const latestPublications = [
  {
    title: "Enhanced Encryption for Distributed Cloud Storage",
    authors: "J. Smith, A. Johnson, M. Williams",
    conference: "International Conference on Cloud Security 2024",
    link: "/publications",
  },
  {
    title: "Privacy-Preserving Machine Learning in Multi-Cloud Environments",
    authors: "R. Chen, L. Garcia, K. Thompson",
    conference: "Journal of Cybersecurity, Vol. 15, Issue 3",
    link: "/publications",
  },
  {
    title: "Threat Modeling for Serverless Computing: A Comprehensive Approach",
    authors: "T. Anderson, P. Rodriguez",
    conference: "Cloud Privacy Workshop 2023",
    link: "/publications",
  },
];

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Innovating the Future of Cloud Security and Privacy"
        subtitle="The Cloud Security and Privacy (CSP) Lab is dedicated to advancing research in cloud security, data privacy, and compliance technologies for the next generation of computing."
      />

      {/* About Section */}
      <section className="py-16 bg-csp-gray-light">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="About CSP Lab"
            subtitle="We are a research-focused lab developing cutting-edge technologies and methodologies for cloud security and privacy."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <Globe className="h-12 w-12 text-csp-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To advance the state of the art in cloud security and privacy through innovative research and practical applications.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-csp-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Team</h3>
              <p className="text-muted-foreground">
                A diverse group of researchers, faculty, and students passionate about solving complex security challenges.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <FileText className="h-12 w-12 text-csp-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Work</h3>
              <p className="text-muted-foreground">
                Cutting-edge research projects, publications, and practical tools that address real-world security problems.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Research Focus Areas"
            subtitle="Our lab focuses on solving key challenges in cloud security and privacy through multidisciplinary research."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {research.map((item, index) => (
              <Card key={index} className="border-2 border-muted transition-all hover:border-csp-teal hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2">{item.icon}</div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/research">Explore All Research Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Publications */}
      <section className="py-16 bg-gradient-to-r from-csp-blue-dark to-csp-blue text-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Latest Publications"
            subtitle="Our research leads to influential publications in top security and privacy venues."
            align="center"
            className="text-white [&>p]:text-white/80"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {latestPublications.map((pub, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-0 text-white hover:bg-white/20 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">{pub.title}</CardTitle>
                  <CardDescription className="text-white/70">{pub.authors}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/80 mb-4">{pub.conference}</p>
                  <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white hover:text-csp-blue-dark">
                    <Link to={pub.link}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-white text-csp-blue-dark hover:bg-white/90">
              <Link to="/publications">View All Publications</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-20 bg-csp-gray-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Collaborating?</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're always looking for research partners, industry collaborators, and talented individuals to join our mission.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/collaborations">Collaboration Opportunities</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
