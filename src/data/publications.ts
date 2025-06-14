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
}

export const publications: Publication[] = [
  {
    id: "1",
    title: "Secure Multi-Party Computation for Privacy-Preserving Cloud Analytics",
    authors: ["J. Smith", "A. Johnson", "M. Williams"],
    venue: "IEEE Symposium on Security and Privacy",
    year: 2023,
    type: "conference",
    abstract: "This paper presents a novel approach to secure multi-party computation that enables privacy-preserving analytics in cloud environments. We introduce a new protocol that reduces communication overhead by 40% compared to previous methods while maintaining strong security guarantees.",
    keywords: ["multi-party computation", "privacy", "cloud analytics"],
    doi: "10.1109/SP.2023.12345",
    pdf: "/papers/sp2023.pdf"
  },
  {
    id: "2",
    title: "Homomorphic Encryption for Secure Cloud Storage: Performance Analysis and Optimizations",
    authors: ["R. Chen", "L. Garcia", "K. Thompson"],
    venue: "ACM Transactions on Privacy and Security",
    year: 2023,
    type: "journal",
    abstract: "In this journal article, we analyze the performance characteristics of homomorphic encryption schemes for cloud storage applications. We propose several optimizations that improve computational efficiency while preserving security properties, making practical deployment more feasible.",
    keywords: ["homomorphic encryption", "cloud storage", "performance analysis"],
    doi: "10.1145/1234567.1234568",
    pdf: "/papers/tops2023.pdf"
  },
  {
    id: "3",
    title: "ZeroTrust: A Framework for Identity and Access Management in Multi-Cloud Environments",
    authors: ["T. Anderson", "P. Rodriguez", "S. Williams"],
    venue: "USENIX Security Symposium",
    year: 2022,
    type: "conference",
    abstract: "We present ZeroTrust, a comprehensive framework for identity and access management in multi-cloud environments. The framework implements continuous verification principles and context-aware access controls to minimize the attack surface in distributed cloud systems.",
    keywords: ["zero trust", "identity management", "access control", "multi-cloud"],
    doi: "10.5555/12345678.12345679",
    pdf: "/papers/usenix2022.pdf"
  },
  {
    id: "4",
    title: "Privacy-Preserving Machine Learning in Federated Cloud Environments",
    authors: ["M. Johnson", "J. Smith", "A. Kumar"],
    venue: "Conference on Cloud Computing Security Workshop",
    year: 2022,
    type: "workshop",
    abstract: "This workshop paper explores techniques for privacy-preserving machine learning in federated cloud environments. We demonstrate that differential privacy can be applied to federated learning systems without significant loss of model accuracy.",
    keywords: ["machine learning", "differential privacy", "federated learning"],
    doi: "10.1109/CCSW.2022.12345",
    pdf: "/papers/ccsw2022.pdf"
  },
  {
    id: "5",
    title: "Threat Modeling for Serverless Computing: New Challenges and Solutions",
    authors: ["L. Garcia", "T. Anderson"],
    venue: "Journal of Cloud Security",
    year: 2021,
    type: "journal",
    abstract: "Serverless computing introduces unique security challenges that existing threat models fail to address. This paper proposes a comprehensive threat model specifically designed for serverless architectures and evaluates it against real-world attack scenarios.",
    keywords: ["serverless computing", "threat modeling", "cloud security"],
    doi: "10.1007/s12345-021-12345-6",
    pdf: "/papers/jcs2021.pdf"
  },
  {
    id: "6",
    title: "SecureStore: Encrypted Search for Cloud Databases with Minimal Performance Overhead",
    authors: ["K. Thompson", "R. Chen", "P. Rodriguez"],
    venue: "NDSS Symposium",
    year: 2021,
    type: "conference",
    abstract: "SecureStore is a novel system for encrypted search in cloud databases that achieves near-native performance while providing strong security guarantees. We demonstrate that our approach reduces query latency by up to 60% compared to existing solutions.",
    keywords: ["encrypted search", "cloud databases", "performance optimization"],
    doi: "10.14722/ndss.2021.12345",
    pdf: "/papers/ndss2021.pdf"
  },
  {
    id: "7",
    title: "Compliance Verification for Cloud Deployments: Automated Auditing of GDPR Requirements",
    authors: ["S. Williams", "J. Smith"],
    venue: "IEEE Transactions on Cloud Computing",
    year: 2020,
    type: "journal",
    abstract: "We present an automated system for verifying GDPR compliance in cloud deployments. The system employs formal verification techniques to check that cloud configurations satisfy privacy requirements specified in the regulation.",
    keywords: ["compliance", "GDPR", "automated auditing", "formal verification"],
    doi: "10.1109/TCC.2020.12345",
    pdf: "/papers/tcc2020.pdf"
  },
  {
    id: "8",
    title: "Software-Defined Networking Security in Cloud Environments",
    authors: ["A. Kumar", "T. Anderson", "M. Johnson"],
    venue: "Cloud Security Alliance Congress",
    year: 2020,
    type: "conference",
    abstract: "This paper examines security challenges in software-defined networking (SDN) within cloud environments. We propose a security framework that addresses control plane vulnerabilities and ensures the integrity of network configurations.",
    keywords: ["software-defined networking", "SDN", "network security"],
    doi: "10.5555/12345678.12345679",
    pdf: "/papers/csa2020.pdf"
  }
]; 