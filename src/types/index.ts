export type ServiceCategory = 'massage' | 'facials' | 'waxing' | 'scrubs' | 'combos';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  duration: string;
  priceKes: number;
  description: string;
  benefits?: string[];
  popular?: boolean;
}

export interface CategoryInfo {
  id: ServiceCategory;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'treatments' | 'atmosphere' | 'botanicals';
  image: string;
  aspect: 'tall' | 'wide' | 'square';
  caption: string;
}

export interface TravelZone {
  id: string;
  name: string;
  feeKes: number;
  description: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  treatmentId: string;
  preferredDate: string;
  preferredTime: string;
  travelZone: string;
  locationArea: string;
  medicalConditions: string;
  additionalNotes: string;
}
