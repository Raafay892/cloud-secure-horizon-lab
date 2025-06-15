
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: string;
  abstract?: string;
  keywords?: string[];
  doi?: string;
  pdf?: string;
  citations?: number;
  pages?: string;
  volume?: string;
  issue?: string;
  publisher?: string;
}

export const publications: Publication[] = [
  {
    id: "1",
    title: "A new secure and lightweight searchable encryption scheme over encrypted cloud data",
    authors: ["Shahzaib Tahir", "Sushmita Ruj", "Yogachandran Rahulamathavan", "Muttukrishnan Rajarajan", "Cornelius Glackin"],
    venue: "IEEE Transactions on Emerging Topics in Computing",
    year: 2017,
    type: "journal",
    abstract: "Searchable Encryption is an emerging cryptographic technique enabling search capabilities over encrypted data on the cloud. The paper presents a novel searchable encryption scheme for the client-server architecture using probabilistic trapdoors. The security analysis suggests a higher level of security compared to existing schemes.",
    keywords: ["searchable encryption", "cloud security", "probabilistic trapdoors", "cryptography"],
    volume: "7",
    issue: "4",
    pages: "530-544",
    publisher: "IEEE",
    citations: 59
  },
  {
    id: "2",
    title: "Privacy-preserving searchable encryption framework for permissioned blockchain networks",
    authors: ["Shahzaib Tahir", "Muttukrishnan Rajarajan"],
    venue: "2018 IEEE International Conference on Internet of Things (iThings), IEEE Green Computing and Communications (GreenCom), IEEE Cyber, Physical and Social Computing (CPSCom), IEEE Smart Data (SmartData)",
    year: 2018,
    type: "conference",
    abstract: "This paper proposes a privacy-preserving searchable encryption framework for keyword search over encrypted data stored on a permissioned blockchain network. The proposed framework ensures the security of the system even when the cloud server is malicious.",
    keywords: ["blockchain", "searchable encryption", "privacy-preserving", "permissioned networks"],
    pages: "1628-1633",
    publisher: "IEEE",
    citations: 41
  },
  {
    id: "3",
    title: "Privacy preserving encrypted phonetic search of speech data",
    authors: ["Cornelius Glackin", "Gerard Chollet", "Nazim Dugan", "Nigel Cannings", "Julie Wall", "Shahzaib Tahir", "Indranil Ghosh Ray", "Muttukrishnan Rajarajan"],
    venue: "2017 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
    year: 2017,
    type: "conference",
    abstract: "This paper presents a strategy for privacy-preserving speech recognition in the cloud using encrypted phonetic search. It combines client-side speech encoding with server-side searchable encryption for phonetic search of speech content.",
    keywords: ["speech recognition", "phonetic search", "privacy-preserving", "encrypted search"],
    pages: "6414-6418",
    publisher: "IEEE",
    citations: 39
  },
  {
    id: "4",
    title: "Privacy-preserving COVID-19 contact tracing using blockchain",
    authors: ["Shahzaib Tahir", "Hasan Tahir", "Ali Sajjad", "Muttukrishnan Rajarajan", "Fawad Khan"],
    venue: "Journal of Communications and Networks",
    year: 2021,
    type: "journal",
    abstract: "This paper discusses the use of blockchain for privacy-preserving COVID-19 contact tracing apps, highlighting the privacy concerns and centralization issues in existing solutions. It presents a decentralized approach to contact tracing, ensuring better privacy for users.",
    keywords: ["COVID-19", "contact tracing", "blockchain", "privacy-preserving", "decentralization"],
    volume: "23",
    issue: "5",
    pages: "360-373",
    publisher: "KICS",
    citations: 32
  }
];
