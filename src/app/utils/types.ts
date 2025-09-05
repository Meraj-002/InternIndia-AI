export type Internship = {
  id: number;
  title: string;
  sector: string;
  state: string;
  district: string;
  benefits: string[];
  candidatesApplied: number;
  companyLogo: string;
  companyName: string;
  noOfOpportunities: number;
  description: string;
  addressLine1: string;
  addressLine2: string;
  zip: number;
  village: string;
  minimumQualification: string;
  course: string;
  specialization: string[];
  certifications: string;
  skills: string; // comma separated in dataset
  specialRequirements: string;
  stipend: string;
  duration: string;
};
