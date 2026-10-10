export type TeamGroup = "Investigators" | "Research Assistants" | "Research Associates";

export interface TeamMember {
  name: string;
  role: string;
  group: TeamGroup;
  image?: string;
  bio: string;
  focus: string[];
  email?: string;
  phone?: string;
}

export const team: TeamMember[] = [
  {
    name: "Dr. Shahzaib Tahir",
    role: "Principal Investigator & Head of Department",
    group: "Investigators",
    image: "/images/a0df76a8-82c9-4076-bda9-809eacd9607a.png",
    bio: "Associate Professor at MCS, NUST with expertise in cloud security, searchable encryption, and privacy-preserving technologies.",
    focus: ["Cloud security", "Searchable encryption"],
    email: "shahzaib.tahir@mcs.edu.pk",
    phone: "+92 333 5726101",
  },
  {
    name: "Dr. Hassan Tahir",
    role: "Co-Principal Investigator",
    group: "Investigators",
    image: "/images/3a4b7d7d-c183-4213-aace-95d1d1311827.png",
    bio: "Contributes expertise in blockchain technologies and privacy-preserving systems.",
    focus: ["Blockchain", "Privacy systems"],
  },
  {
    name: "Aiman Sultan",
    role: "Research Assistant",
    group: "Research Assistants",
    image: "/images/bbd9f9dc-3169-4a67-a043-c09a018f351e.png",
    bio: "Supports research projects in cloud security and privacy.",
    focus: ["Homomorphic encryption"],
  },
  {
    name: "Tayyaba Anwar",
    role: "Research Assistant",
    group: "Research Assistants",
    bio: "Contributes to research initiatives in cloud security and privacy technologies.",
    focus: ["Privacy technologies"],
  },
  {
    name: "Syed Bilal Abbas",
    role: "Research Associate",
    group: "Research Associates",
    image: "/images/676c82b5-d859-4caa-9c98-700326e3c338.png",
    bio: "Focuses on cloud security research and implementation.",
    focus: ["Security implementation"],
  },
  {
    name: "Muhammad Raafay Nouman",
    role: "Research Associate",
    group: "Research Associates",
    image: "/images/4d1da732-7f45-4334-a63a-c0c5a842de2e.png",
    bio: "Contributes to privacy and security research.",
    focus: ["Privacy technology"],
  },
  {
    name: "Aimen Farooq",
    role: "Research Associate",
    group: "Research Associates",
    image: "/images/28bda88e-4b33-4eda-819d-59ba6f065423.png",
    bio: "Supports cloud security and privacy research.",
    focus: ["Cloud security"],
  },
];

export const teamGroups: TeamGroup[] = ["Investigators", "Research Assistants", "Research Associates"];

export const initials = (name: string) =>
  name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
