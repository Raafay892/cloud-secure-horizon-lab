import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import { CheckCircle, FileText, Globe, Lock, Shield, Users } from "lucide-react";
import { publications } from "@/data/publications";

const research = [
  {
    icon: <Shield className="h-10 w-10 text-feminine-primary" />,
    title: "Cloud Security",
    description: "Developing advanced methodologies for securing cloud infrastructure and services against sophisticated threats.",
  },
  {
    icon: <Lock className="h-10 w-10 text-feminine-primary" />,
    title: "Data Privacy",
    description: "Researching innovative approaches to protect sensitive data while maintaining utility and compliance.",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-feminine-primary" />,
    title: "Privacy Compliance",
    description: "Creating frameworks and tools to help organizations meet evolving regulatory requirements.",
  },
];

// Get the 3 most recent publications (sorted by year descending)
const latestPublications = [...publications]
  .sort((a, b) => b.year - a.year)
  .slice(0, 3);

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Innovating the Future of Cloud Security and Privacy"
        subtitle="The Cloud Security and Privacy (CSP) Lab is dedicated to advancing research in cloud security, data privacy, and compliance technologies for the next generation of computing."
      />

      {/* About Section */}
      <section className="py-16 bg-feminine-background-alt">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="About CSP Lab"
            subtitle="We are a research-focused lab developing cutting-edge technologies and methodologies for cloud security and privacy."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <Globe className="h-12 w-12 text-feminine-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-feminine-text-secondary">
                To advance the state of the art in cloud security and privacy through innovative research and practical applications.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-feminine-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Team</h3>
              <p className="text-feminine-text-secondary">
                A collaborative team led by Dr. Shahzaib Tahir (Principal Investigator), Dr. Hassan Tahir (Co-Principal Investigator), Research Assistants: Aiman Sultan, Tayyaba Anwar, Research Associates: Syed Bilal Abbas, Muhammad Raafay Nouman, Aimen Farooq.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <FileText className="h-12 w-12 text-feminine-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Work</h3>
              <p className="text-feminine-text-secondary">
                Cutting-edge research projects, publications, and practical tools that address real-world security problems.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-feminine-primary font-medium">
            <span>Location: Military College of Signals, Khadim Hussain Road, Lalkurti</span>
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="btn-feminine">
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
              <Card key={index} className="card-feminine hover:border-feminine-primary transition-all">
                <CardHeader className="pb-2">
                  <div className="mb-2">{item.icon}</div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-feminine-text-secondary">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="primary-btn">
              <Link to="/research">Explore All Research Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Publications */}
      <section className="py-16 bg-gradient-to-r from-feminine-primary to-feminine-primary-dark text-feminine-text-light">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Latest Publications"
            subtitle="Our research leads to influential publications in top security and privacy venues."
            align="center"
            className="text-feminine-text-light [&>p]:text-feminine-text-light/80"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {latestPublications.map((pub, index) => (
              <Card key={index} className="glass-card group transition-colors hover:bg-feminine-primary hover:border-feminine-primary">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-white transition-colors">{pub.title}</CardTitle>
                  <CardDescription className="text-feminine-primary/80 group-hover:text-white transition-colors">
                    {pub.authors.join(", ")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-feminine-primary/70 mb-4 group-hover:text-white transition-colors">
                    {pub.venue}{pub.year ? `, ${pub.year}` : ""}
                  </p>
                  {Boolean(pub.citations) && (
                    <p className="text-xs mb-2 text-feminine-text-light/60">{`Cited by ${pub.citations}`}</p>
                  )}
                  <Button asChild variant="outline" className="w-full border-feminine-primary bg-white text-feminine-primary group-hover:bg-white/20 group-hover:text-white group-hover:border-white hover:bg-feminine-primary hover:text-white hover:border-feminine-primary">
                    <Link to="/publications">Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-feminine-text-light text-feminine-primary hover:bg-feminine-text-light/90">
              <Link to="/publications">View All Publications</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-20 bg-feminine-background-alt">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-feminine-text-primary">Interested in Collaborating?</h2>
          <p className="text-lg md:text-xl text-feminine-text-secondary max-w-3xl mx-auto mb-8">
            We're always looking for research partners, industry collaborators, and talented individuals to join our mission.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="btn-feminine">
              <Link to="/collaborations">Collaboration Opportunities</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="primary-btn">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
