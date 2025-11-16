
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
    title: "A Novel Image-based Homomorphic Approach for Preserving the Privacy of Autonomous Vehicles Connected to the Cloud",
    authors: ["A. Sultan", "S. Tahir", "H. Tahir", "T. Anwer", "F. Khan", "M. Rajarajan", "O. Rana"],
    venue: "IEEE Transactions on Intelligent Transportation Systems",
    year: 2022,
    type: "journal",
    abstract: "This paper presents a novel image-based homomorphic approach for preserving the privacy of autonomous vehicles connected to the cloud.",
    keywords: ["autonomous vehicles", "homomorphic encryption", "privacy-preserving", "cloud security"],
    publisher: "IEEE",
    citations: 95
  },
  {
    id: "2",
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
    id: "3",
    title: "A Novel Searchable Encryption Scheme to Reduce the Access Pattern Leakage",
    authors: ["M. Awais", "S. Tahir", "F. Khan", "H. Tahir", "R. Tahir", "R. Latif", "M. Yasir"],
    venue: "Elsevier Future Generation Computer Systems",
    year: 2022,
    type: "journal",
    abstract: "This paper presents a novel searchable encryption scheme designed to reduce access pattern leakage in cloud environments.",
    keywords: ["searchable encryption", "access pattern", "privacy", "cloud security"],
    publisher: "Elsevier",
    citations: 75
  },
  {
    id: "4",
    title: "A Homomorphic Approach for Security and Privacy Preservation of Smart Airports",
    authors: ["H. Malik", "S. Tahir", "H. Tahir", "M. Ihtasham", "F. Khan"],
    venue: "Elsevier Future Generation Computer Systems",
    year: 2022,
    type: "journal",
    abstract: "This paper proposes a homomorphic approach for ensuring security and privacy preservation in smart airport systems.",
    keywords: ["smart airports", "homomorphic encryption", "privacy-preserving", "IoT security"],
    publisher: "Elsevier",
    citations: 75
  },
  {
    id: "5",
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
    id: "6",
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
    id: "7",
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
  },
  {
    id: "8",
    title: "A Novel Homomorphic Approach for Preserving Privacy of Patient's Data in Telemedicine",
    authors: ["Y. Iqbal", "S. Tahir", "H. Tahir", "F. Khan", "S. Saeed", "A. Almuhaideb", "A. M. Syed"],
    venue: "Sensors",
    year: 2022,
    type: "journal",
    abstract: "This paper presents a novel homomorphic approach for preserving privacy of patient's data in telemedicine applications.",
    keywords: ["telemedicine", "homomorphic encryption", "healthcare privacy", "patient data protection"],
    publisher: "MDPI",
    citations: 39
  },
  {
    id: "9",
    title: "Privacy Preserving Inference for Deep Neural Networks: Optimizing Homomorphic Encryption for Efficient and Secure Classification",
    authors: ["F. Khan", "A. Akram", "S. Tahir", "A. Iqbal", "S. A. Shah"],
    venue: "IEEE Access",
    year: 2024,
    type: "journal",
    abstract: "This paper addresses privacy preserving inference for deep neural networks by optimizing homomorphic encryption techniques for efficient and secure classification.",
    keywords: ["deep learning", "homomorphic encryption", "privacy-preserving", "neural networks"],
    publisher: "IEEE",
    citations: 39
  },
  {
    id: "10",
    title: "Blockchain-enabled Secure Communication Framework for Enhancing Trust and Access Control in the Internet of Vehicles (IoV)",
    authors: ["S. Hussain", "S. Tahir", "A. Masood", "H. Tahir"],
    venue: "IEEE Access",
    year: 2024,
    type: "journal",
    abstract: "This paper proposes a blockchain-enabled secure communication framework for the Internet of Vehicles to enhance trust and access control.",
    keywords: ["Internet of Vehicles", "blockchain", "access control", "secure communication"],
    publisher: "IEEE",
    citations: 34
  }
];
