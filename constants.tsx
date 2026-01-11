import React from 'react';
import { NavItem, Artist, GalleryItem, StudioFeature } from './types';
import { ShieldCheck, UserCheck, Sparkles } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'The Studio', href: '#studio' },
  { label: 'Artists', href: '#artists' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const ARTISTS: Artist[] = [
  {
    id: 1,
    name: 'Elena "Void" Rossi',
    specialty: 'Sacred Geometry',
    image: 'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Architect of lines and precision. Elena turns mathematical concepts into permanent art.'
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    specialty: 'Dark Realism',
    image: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=894&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Capturing shadows and soul. Marcus specializes in hyper-realistic portraits and macabre themes.'
  },
  {
    id: 3,
    name: 'Kenji Sato',
    specialty: 'Neo-Traditional',
    image: 'https://images.unsplash.com/photo-1587635642978-7b3a3897e17c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Honoring the old ways with a modern edge. Bold lines and striking composition.'
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: 1, category: 'Geometric', image: '/images/geometric.jpg' },
  { id: 2, category: 'Fine Line', image: '/images/fineline.webp' },
  { id: 3, category: 'Portrait', image: '/images/portrait.jpg' },
  { id: 4, category: 'Traditional', image: '/images/traditional.webp' },
  { id: 5, category: 'Abstract', image: '/images/Abstract.webp' },
];

export const FEATURES: StudioFeature[] = [
  {
    title: 'Private',
    description: 'Exclusive appointments only. Your session is uninterrupted and confidential.',
    icon: <UserCheck className="w-8 h-8 text-gold" />
  },
  {
    title: 'Sterile',
    description: 'Hospital-grade sterilization standards exceeding NYC health department requirements.',
    icon: <ShieldCheck className="w-8 h-8 text-gold" />
  },
  {
    title: 'Professional',
    description: 'A curated experience from consultation to aftercare with world-class artists.',
    icon: <Sparkles className="w-8 h-8 text-gold" />
  }
];

export const STUDIO_ADDRESS = "238 W 14th St, New York, NY 10011";
export const STUDIO_PHONE = "(917) 555-0199";