export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface ReviewItem {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}