import { BrainCircuit, Car, Cloud, KeyRound, Link2, Search, type LucideIcon } from "lucide-react";

export interface ResearchArea {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  questions: string[];
  publicationIds: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: "searchable-encryption",
    title: "Searchable Encryption",
    icon: Search,
    summary:
      "Schemes that let users search encrypted data held by an untrusted cloud server without revealing their queries or the underlying records.",
    questions: [
      "Lightweight schemes using probabilistic trapdoors",
      "Reducing access-pattern leakage",
      "Encrypted search over non-text data such as speech",
    ],
    publicationIds: ["2", "3", "6"],
  },
  {
    id: "homomorphic-encryption",
    title: "Homomorphic Encryption",
    icon: KeyRound,
    summary:
      "Computing directly on encrypted data so that sensitive images, telemetry and medical records stay protected while they are processed in the cloud.",
    questions: [
      "Image-based homomorphic processing",
      "Privacy for patient data in telemedicine",
      "Securing smart infrastructure such as airports",
    ],
    publicationIds: ["1", "8", "4"],
  },
  {
    id: "privacy-preserving-ai",
    title: "Privacy-Preserving AI",
    icon: BrainCircuit,
    summary:
      "Running machine-learning inference on encrypted inputs, so models can serve predictions without ever seeing the user's raw data.",
    questions: [
      "Homomorphic inference for deep neural networks",
      "Balancing accuracy, latency and ciphertext size",
      "Secure classification as a cloud service",
    ],
    publicationIds: ["9"],
  },
  {
    id: "blockchain-privacy",
    title: "Blockchain & Trust",
    icon: Link2,
    summary:
      "Decentralised designs that remove single points of trust, from keyword search on permissioned ledgers to privacy-first contact tracing.",
    questions: [
      "Searchable encryption on permissioned blockchains",
      "Decentralised, privacy-preserving contact tracing",
      "Ledger-based access control",
    ],
    publicationIds: ["5", "7", "10"],
  },
  {
    id: "connected-vehicles",
    title: "Connected Vehicles & IoT",
    icon: Car,
    summary:
      "Protecting the data that autonomous and connected vehicles exchange with each other and with the cloud.",
    questions: [
      "Privacy for cloud-connected autonomous vehicles",
      "Trust and access control in the Internet of Vehicles",
      "Lightweight cryptography for constrained devices",
    ],
    publicationIds: ["1", "10"],
  },
  {
    id: "cloud-security",
    title: "Cloud Security",
    icon: Cloud,
    summary:
      "The common thread across our work: practical cryptographic tools that make outsourced storage and computation safe to use.",
    questions: [
      "Security models for malicious or curious servers",
      "Bridging provable security and deployable systems",
      "Compliance-aware data handling",
    ],
    publicationIds: ["2", "3", "5"],
  },
];
