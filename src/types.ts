export interface ProductCard {
  id: string;
  title: string;
  description: string;
  badge?: string;
  image?: string;
}

export interface CarouselItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  details: string;
}

export interface ProcessStep {
  id: string;
  step: string;
  title: string;
  description: string;
}
