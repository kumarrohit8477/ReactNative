// src/data/carpenter.ts

export interface Category {
  id: string;
  title: string;
  icon: any;
}

export interface ServiceItem {
  id: string;
  name: string;
  rating: string;
  reviews: string;
  price: string;
  features: string[];
  image: any;
}

export interface ServiceSection {
  id: string;
  title: string;
  items: ServiceItem[];
}

/* ---------- CATEGORIES ---------- */

export const CATEGORIES: Category[] = [
  {
    id: 'hour',
    title: 'Book by hour',
    icon: require('@/assets/images/bed.png'),
  },
  {
    id: 'doors',
    title: 'Doors &\nWindows',
    icon: require('@/assets/images/bed.png'),
  },
  {
    id: 'furniture',
    title: 'Furniture &\nStorage',
    icon: require('@/assets/images/bed.png'),
  },
  {
    id: 'consult',
    title: 'Book a\nconsultation',
    icon: require('@/assets/images/bed.png'),
  },
];

/* ---------- SERVICE SECTIONS ---------- */

export const SECTIONS: ServiceSection[] = [
  {
    id: 'hour',
    title: 'Book by hour',
    items: [
      {
        id: 'h1',
        name: 'Book By Hour',
        rating: '4.3',
        reviews: '26',
        price: '499',
        features: [
          'Hire expert carpenters',
          'Fittings, and installations with reliable workmanship.',
        ],
        image: require('@/assets/images/bed.png'),
      },
    ],
  },
  {
    id: 'doors',
    title: 'Doors & Windows',
    items: [
      {
        id: 'd1',
        name: 'Door Repair & Installation',
        rating: '4.4',
        reviews: '14',
        price: '249',
        features: [
          'Quick, reliable door repair/installation for all types',
        ],
        image: require('@/assets/images/bed.png'),
      },
      {
        id: 'd2',
        name: 'Door Lock Repair & Installation',
        rating: '4.3',
        reviews: '28',
        price: '249',
        features: [
          'Fast, safe door lock repair or installation',
        ],
        image: require('@/assets/images/bed.png'),
      },
    ],
  },
];
