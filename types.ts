export interface NavItem {
  label: string;
  href: string;
}

export interface Artist {
  id: number;
  name: string;
  specialty: string;
  image: string;
  bio: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  category: string;
}

export interface StudioFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}