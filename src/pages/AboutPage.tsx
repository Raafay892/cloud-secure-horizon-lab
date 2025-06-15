import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Activity, Briefcase, DownloadCloud, FileCheck, GraduationCap, Target, MapPin } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Shahzaib Tahir",
    role: "Principal Investigator",
    image: "/lovable-uploads/a0df76a8-82c9-4076-bda9-809eacd9607a.png",
    bio: "Leads the CSP Lab with expertise in cloud security, searchable encryption, and privacy-preserving technologies.",
  },
  {
    name: "Dr. Hassan Tahir",
    role: "Co-Principal Investigator",
    image: "/lovable-uploads/3a4b7d7d-c183-4213-aace-95d1d1311827.png",
    bio: "Contributes expertise in blockchain technologies and privacy-preserving systems.",
  },
  {
    name: "Aiman Sultan",
    role: "Research Assistant",
    image: "/lovable-uploads/bbd9f9dc-3169-4a67-a043-c09a018f351e.png",
    bio: "Supports various research projects in cloud security and privacy.",
  },
  {
    name: "Tayyaba Anwar",
    role: "Research Assistant",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&fit=crop&q=80",
    bio: "Contributes to research initiatives in cloud security and privacy technologies.",
  },
  {
    name: "Syed Bilal Abbas",
    role: "Research Associate",
    image: "/lovable-uploads/676c82b5-d859-4caa-9c98-700326e3c338.png",
    bio: "Focuses on advanced cloud security research and implementation.",
  },
  {
    name: "Muhammad Raafay Nouman",
    role: "Research Associate",
    image: "/lovable-uploads/4d1da732-7f45-4334-a63a-c0c5a842de2e.png",
    bio: "Contributes to cutting-edge privacy and security research.",
  },
  {
    name: "Aimen Farooq",
    role: "Research Associate",
    image: "/lovable-uploads/16220698-31ff-45bb-a07f-a21a7f32ffe1.png",
    bio: "Supports various aspects of cloud security and privacy research.",
  },
];

// Divide team by roles
const principalInvestigators = teamMembers.filter(
  (m) => m.role === "Principal Investigator" || m.role === "Co-Principal Investigator"
);
const researchAssistants = teamMembers.filter((m) => m.role === "Research Assistant");
const researchAssociates = teamMembers.filter((m) => m.role === "Research Associate");

const AboutPage = () => {
  return (
    <div>
      <PageHeader
        title="About CSP Lab"
        subtitle="Meet our team and learn about our mission to advance cloud security and privacy research"
      />

      {/* Mission and Vision */}
      <section className="py-12 bg-feminine-background-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-feminine-primary mr-3" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="mb-4 text-feminine-primary">
                The Cloud Security and Privacy Lab is dedicated to advancing the state of the art in cloud security, data privacy, and compliance technologies through innovative research and practical applications.
              </p>
              <p className="text-feminine-primary">
                We work at the intersection of cryptography, systems security, and privacy engineering to develop solutions that address real-world challenges faced by cloud providers, enterprises, and individuals.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Activity className="h-8 w-8 text-feminine-primary mr-3" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="mb-4 text-feminine-primary">
                We envision a future where cloud technologies can be used with complete confidence, where privacy is preserved by design, and where security is seamlessly integrated into every aspect of cloud computing.
              </p>
              <p className="text-feminine-primary">
                Our goal is to bridge the gap between theoretical security models and practical implementations, creating technologies that are both highly secure and usable in real-world scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Objectives */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Research Objectives"
            subtitle="Our research is guided by several key objectives that drive our work forward"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="bg-gradient-to-br from-feminine-primary to-feminine-primary-dark text-feminine-text-light border-0">
              <CardHeader>
                <FileCheck className="h-8 w-8 mb-2" />
                <CardTitle>Advance Security Models</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-feminine-text-light/80">
                  Develop and refine theoretical security models that address the unique challenges of distributed and cloud computing environments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-feminine-primary to-feminine-primary-dark text-feminine-text-light border-0">
              <CardHeader>
                <DownloadCloud className="h-8 w-8 mb-2" />
                <CardTitle>Build Practical Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-feminine-text-light/80">
                  Create usable security and privacy tools that can be readily deployed in real-world cloud environments by both providers and users.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-feminine-primary to-feminine-primary-dark text-feminine-text-light border-0">
              <CardHeader>
                <GraduationCap className="h-8 w-8 mb-2" />
                <CardTitle>Educate & Train</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-feminine-text-light/80">
                  Train the next generation of security and privacy researchers through hands-on research experiences and educational initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Team Members */}
      <section className="py-12 bg-feminine-background-alt">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Team"
            subtitle="Meet the researchers and faculty working to advance cloud security and privacy"
            align="center"
          />
          {/* Row 1: PI and Co-PI */}
          <div className="flex flex-col items-center md:flex-row md:justify-center gap-8 mt-8">
            {principalInvestigators.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow w-full max-w-xs flex flex-col items-center"
              >
                <div className="w-40 h-40 overflow-hidden flex items-center justify-center bg-gray-100 mt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover object-center"
                  />
                </div>
                <div className="p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-1 text-center">{member.name}</h3>
                  <p className="text-feminine-primary font-medium mb-3 text-center">{member.role}</p>
                  <Separator className="my-3" />
                  <p className="text-sm text-feminine-primary text-center">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Row 2: Research Assistants */}
          <div className="flex flex-col items-center md:flex-row md:justify-center gap-8 mt-12">
            {researchAssistants.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow w-full max-w-xs flex flex-col items-center"
              >
                <div className="w-40 h-40 overflow-hidden flex items-center justify-center bg-gray-100 mt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover object-center"
                  />
                </div>
                <div className="p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-1 text-center">{member.name}</h3>
                  <p className="text-feminine-primary font-medium mb-3 text-center">{member.role}</p>
                  <Separator className="my-3" />
                  <p className="text-sm text-feminine-primary text-center">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Row 3: Research Associates */}
          <div className="flex flex-col items-center md:flex-row md:justify-center gap-8 mt-12">
            {researchAssociates.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow w-full max-w-xs flex flex-col items-center"
              >
                <div className="w-40 h-40 overflow-hidden flex items-center justify-center bg-gray-100 mt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover object-center"
                  />
                </div>
                <div className="p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-1 text-center">{member.name}</h3>
                  <p className="text-feminine-primary font-medium mb-3 text-center">{member.role}</p>
                  <Separator className="my-3" />
                  <p className="text-sm text-feminine-primary text-center">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab History */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our History"
            subtitle="The journey of CSP Lab from its founding to its current position as a leader in cloud security research"
          />

          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <div className="flex items-start mb-6">
              <div className="bg-feminine-primary rounded-full p-3 mr-4">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">January 2025: Founding</h3>
                <p className="text-feminine-primary mb-3">
                  The Cloud Security and Privacy Lab was established in January 2025 with funding from the Higher Education Commission (HEC). Located at Military College of Signals, Khadim Hussain Road, Lalkurti, the lab began its mission to advance cloud security and privacy research.
                </p>
                <div className="flex items-center text-feminine-text-secondary text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Military College of Signals, Khadim Hussain Road, Lalkurti</span>
                </div>
                <div className="mt-3 text-feminine-primary/80 text-sm">
                  <strong>Founding Team:</strong>
                  <ul className="list-disc list-inside ml-5">
                    <li>Principal Investigator: Dr. Shahzaib Tahir</li>
                    <li>Co-Principal Investigator: Dr. Hassan Tahir</li>
                    <li>Research Assistants: Aiman Sultan, Tayyaba Anwar</li>
                    <li>Research Associates: Syed Bilal Abbas, Muhammad Raafay Nouman, Aimen Farooq</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-feminine-secondary rounded-full p-3 mr-4">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2025 - Present: Building Excellence</h3>
                <p className="text-feminine-primary">
                  Starting with a focused team of dedicated researchers, CSP Lab is building its foundation in cloud security and privacy research. Led by Dr. Shahzaib Tahir as Principal Investigator and Dr. Hassan Tahir as Co-Principal Investigator, the lab is establishing itself as a center of excellence in the field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
