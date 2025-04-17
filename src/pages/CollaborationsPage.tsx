
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, FileSymlink, Handshake, Landmark, Laptop, School, Users } from "lucide-react";

// Sample partner organizations
const partners = [
  {
    name: "National Science Foundation",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&h=100&q=80",
    category: "government",
  },
  {
    name: "Tech Security Institute",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&h=100&q=80",
    category: "academic",
  },
  {
    name: "CloudTech Solutions",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=200&h=100&q=80",
    category: "industry",
  },
  {
    name: "University Research Alliance",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=200&h=100&q=80",
    category: "academic",
  },
  {
    name: "SecureCloud Inc.",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&h=100&q=80",
    category: "industry",
  },
  {
    name: "Department of Energy",
    logo: "https://images.unsplash.com/photo-1535191042502-e6a9a3d407e7?auto=format&fit=crop&w=200&h=100&q=80",
    category: "government",
  },
];

// Sample collaboration types
const collaborationTypes = [
  {
    title: "Research Partnerships",
    icon: <Laptop className="h-10 w-10 text-csp-teal" />,
    description: "Collaborate with our team on cutting-edge research projects in cloud security and privacy.",
    benefits: [
      "Access to specialized expertise in cloud security and privacy",
      "Joint publications in top-tier conferences and journals",
      "Shared intellectual property based on collaboration agreements",
      "Regular meetings and progress updates",
    ],
  },
  {
    title: "Industry Collaborations",
    icon: <Landmark className="h-10 w-10 text-csp-teal" />,
    description: "Partner with us to solve real-world security and privacy challenges in cloud environments.",
    benefits: [
      "Solutions to specific technical challenges in your organization",
      "Access to prototype tools and technologies",
      "Knowledge transfer through workshops and training sessions",
      "Opportunity to influence research directions",
    ],
  },
  {
    title: "Academic Partnerships",
    icon: <School className="h-10 w-10 text-csp-teal" />,
    description: "Join forces with other academic institutions for collaborative research initiatives.",
    benefits: [
      "Joint grant applications and research funding opportunities",
      "Student and faculty exchanges",
      "Shared access to specialized equipment and resources",
      "Collaborative teaching and curriculum development",
    ],
  },
  {
    title: "Community Projects",
    icon: <Users className="h-10 w-10 text-csp-teal" />,
    description: "Participate in open-source and community-driven initiatives advancing cloud security.",
    benefits: [
      "Contribute to open-source security tools and frameworks",
      "Participate in community events and workshops",
      "Network with other security professionals and researchers",
      "Gain visibility in the security community",
    ],
  },
];

const CollaborationsPage = () => {
  return (
    <div>
      <PageHeader
        title="Collaborations"
        subtitle="Explore opportunities to partner with CSP Lab on research and innovation"
      />

      {/* Collaboration Overview */}
      <section className="py-12 bg-csp-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Handshake className="h-16 w-16 mx-auto mb-6 text-csp-teal" />
            <h2 className="text-3xl font-bold mb-4">Why Collaborate With Us?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              The Cloud Security and Privacy Lab is committed to advancing the state of the art through collaborative research with academic, industry, and government partners. We bring specialized expertise in cloud security, privacy engineering, and compliance technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="h-8 w-8 text-csp-teal mb-3" />
                <h3 className="text-xl font-bold mb-2">Expertise</h3>
                <p className="text-muted-foreground">
                  Access specialized knowledge and expertise in cloud security and privacy technologies.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="h-8 w-8 text-csp-teal mb-3" />
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Develop new approaches and solutions to challenging security problems.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="h-8 w-8 text-csp-teal mb-3" />
                <h3 className="text-xl font-bold mb-2">Impact</h3>
                <p className="text-muted-foreground">
                  Create meaningful change in how cloud systems handle security and privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Collaboration Opportunities"
            subtitle="Explore different ways to collaborate with our research lab"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {collaborationTypes.map((type, index) => (
              <Card key={index} className="border-2 hover:border-csp-teal transition-all hover:shadow-md h-full">
                <CardHeader>
                  <div className="mb-4">{type.icon}</div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-csp-teal mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-12 bg-gradient-to-r from-csp-blue-dark to-csp-blue text-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Partners"
            subtitle="Organizations we currently collaborate with on research projects"
            align="center"
            className="text-white [&>p]:text-white/80"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center justify-center text-center hover:bg-white/20 transition-colors"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 object-contain mb-4"
                />
                <h3 className="text-lg font-medium">{partner.name}</h3>
                <span className="text-sm text-white/70 capitalize">{partner.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Collaboration Success Stories"
            subtitle="Learn about the impact of our research collaborations"
          />

          <div className="space-y-8 mt-8">
            <Card className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                    alt="Cloud Security Architecture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-2xl font-bold mb-2">Cloud Security Architecture with CloudTech Solutions</h3>
                  <p className="text-muted-foreground mb-4">
                    Our collaboration with CloudTech Solutions resulted in a novel security architecture for multi-tenant cloud environments that reduced security incidents by 40% while improving performance.
                  </p>
                  <Button asChild>
                    <a href="#">Read Case Study <FileSymlink className="ml-2 h-4 w-4" /></a>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1535191042502-e6a9a3d407e7?auto=format&fit=crop&w=900&q=80"
                    alt="Privacy Framework"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-2xl font-bold mb-2">Privacy Framework with Department of Energy</h3>
                  <p className="text-muted-foreground mb-4">
                    Our collaborative project with the Department of Energy created a comprehensive privacy framework for handling sensitive data in distributed computing environments.
                  </p>
                  <Button asChild>
                    <a href="#">Read Case Study <FileSymlink className="ml-2 h-4 w-4" /></a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaboration Proposal Form */}
      <section className="py-12 bg-csp-gray-light">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Submit a Collaboration Proposal"
            subtitle="Interested in partnering with us? Submit your proposal using the form below"
            align="center"
          />

          <Card className="max-w-3xl mx-auto mt-8">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your Name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input id="organization" placeholder="Your Organization" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input id="phone" placeholder="Your Phone Number" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="collaborationType">Collaboration Type</Label>
                    <select
                      id="collaborationType"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="" disabled selected>Select Collaboration Type</option>
                      <option value="research">Research Partnership</option>
                      <option value="industry">Industry Collaboration</option>
                      <option value="academic">Academic Partnership</option>
                      <option value="community">Community Project</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectTitle">Project Title</Label>
                    <Input id="projectTitle" placeholder="Title of Your Proposed Project" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectDescription">Project Description</Label>
                    <Textarea
                      id="projectDescription"
                      placeholder="Describe your collaboration idea, goals, and expected outcomes..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Expected Timeline</Label>
                    <Input id="timeline" placeholder="e.g., 6 months, 1 year, etc." required />
                  </div>
                </div>

                <Separator />

                <div className="flex justify-end">
                  <Button type="submit" size="lg">Submit Proposal</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CollaborationsPage;
