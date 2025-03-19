export interface Project {
    name: string;
    company: string;
    description: string;
  }
  
  export const projects: Project[] = [
    {
      name: "GPH Carbon (Walmart Pharmacy Updates)",
      company: "Confiz Ltd.",
      description: "Contributed to upgrading the HQ master pharmacy software to a cloud-based solution, managing workorder approvals and update packages for stores nationwide."
    },
    {
      name: "I3 Integrations (DTAC Thailand ERP)",
      company: "Funavry Technologies",
      description: "Collaborated on integrating DTAC Thailand's ERP with platforms like Coupa for operational efficiency."
    },
    {
      name: "The Influencer Group",
      company: "Funavry Technologies",
      description: "Led backend team for a social media job portal connecting influencers and brands."
    },
    {
      name: "Custom ERP Solution",
      company: "Care Pvt. Ltd.",
      description: "Contributed key functionality to a tailored ERP with custom plugins for improved operations."
    },
    {
      name: "Biometric Module",
      company: "Care Pvt. Ltd.",
      description: "Created a device-agnostic biometric authentication system for secure employee verification."
    }
  ];