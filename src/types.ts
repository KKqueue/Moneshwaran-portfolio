export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
