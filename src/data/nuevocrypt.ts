import {
  AudioLines,
  ClipboardCheck,
  Cloud,
  CloudCog,
  Feather,
  FileLock2,
  FileSearch,
  FileText,
  LockKeyhole,
  ScanSearch,
  Search,
  Settings,
  ShieldCheck,
  TextSearch,
  TrendingUp,
  UserCog,
  Users,
  Lock,
  type LucideIcon,
} from "lucide-react";

interface Item {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const nuevocrypt = {
  name: "NuevoCrypt",
  email: "nuevocrypt@gmail.com",
  tagline: ["Search the Unseen.", "Securely.", "Smartly."],
  headline: "Assuring Cloud Confidence Through Searchable Encryption",
  summary:
    "A privacy-centric platform that enables secure search and retrieval over encrypted text, images, and audio across cloud and multi-cloud environments.",
  description:
    "NuevoCrypt delivers searchable encryption for multi-cloud environments. It lets organizations keep full confidentiality and control over their sensitive data while still searching and retrieving it efficiently, without ever revealing the underlying data.",
  brochure: "/brand/nuevocrypt-brochure.png",
};

export const sellingPoints: Item[] = [
  {
    icon: ShieldCheck,
    title: "Privacy-preserving search",
    body: "Query your data without exposing it, to the cloud or to anyone else.",
  },
  {
    icon: Lock,
    title: "Hybrid encryption",
    body: "Combines traditional encryption standards with homomorphic encryption.",
  },
  {
    icon: UserCog,
    title: "Dynamic access control",
    body: "Grant and revoke who can search, as your teams and needs change.",
  },
  {
    icon: Feather,
    title: "Lightweight & efficient",
    body: "Built on lean constructions suited to resource-constrained environments.",
  },
  {
    icon: Cloud,
    title: "Multi-cloud compatibility",
    body: "Works across cloud providers, so you are not tied to a single platform.",
  },
];

export const workflow: Item[] = [
  { icon: FileText, title: "Sensitive data", body: "Text, images or audio you need to protect." },
  {
    icon: FileLock2,
    title: "Hybrid encryption",
    body: "Encrypted with conventional encryption combined with homomorphic encryption.",
  },
  { icon: CloudCog, title: "Encrypted storage", body: "Stored on a single cloud or across several." },
  { icon: Search, title: "Homomorphic search", body: "Queries run directly over the encrypted data." },
  { icon: LockKeyhole, title: "Secure results", body: "Matches come back still encrypted, readable only by you." },
];

export const variants: Item[] = [
  { icon: FileSearch, title: "Single-keyword search", body: "Efficient search over encrypted text data." },
  { icon: TextSearch, title: "Multi-keyword search", body: "Search using multiple keywords over encrypted text data." },
  { icon: ScanSearch, title: "Encrypted image search", body: "Search over encrypted images using privacy-preserving features." },
  { icon: AudioLines, title: "Encrypted audio search", body: "Search over encrypted audio using privacy-preserving features." },
];

export const engagementStages: Item[] = [
  { icon: Users, title: "Pilot", body: "Deploy NuevoCrypt on a scoped use case with your team." },
  { icon: ClipboardCheck, title: "Validate", body: "Measure security, accuracy and performance on your data." },
  { icon: Settings, title: "Integrate", body: "Connect it to your storage, identity and applications." },
  { icon: TrendingUp, title: "Commercialize", body: "Technology transfer and licensing for production use." },
];

export const partners: { name: string; logo: string; label?: string[] }[] = [
  {
    name: "National University of Sciences & Technology (NUST)",
    logo: "/brand/nust.svg",
    label: ["National University", "of Sciences &", "Technology"],
  },
  { name: "Technology Development Fund, HEC", logo: "/brand/tdf.jpg" },
  { name: "Higher Education Commission, Pakistan", logo: "/brand/hec.svg" },
  { name: "LYNX", logo: "/brand/lynx.png" },
];
