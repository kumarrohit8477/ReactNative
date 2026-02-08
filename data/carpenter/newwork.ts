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
    id: 'bed',
    title: 'Custom Bed Making',
    icon: require('@/assets/images/bed.png'),
  },
  {
    id: 'kitchen',
    title: 'Modular/Semi Modular Kitchen',
    icon: require('@/assets/images/bed.png'),
  },
  {
    id: 'furniture',
    title: 'Furniture &\nStorage',
    icon: require('@/assets/images/bed.png'),
  },
  {
    id: 'tvstand',
    title: 'TV Stand',
    icon: require('@/assets/images/bed.png'),
  },
  {
    id: 'consult',
    title: 'Book Consultation',
    icon: require('@/assets/images/bed.png'),
  },
];

/* ---------- SERVICE SECTIONS ---------- */

export const SECTIONS: ServiceSection[] = [
  {
    id: 'bed',
    title: 'Custom Bed Making',
    items: [
      {
        id: 'n1',
        name: 'Single Bed (6X3)',
        rating: '4.3',
        reviews: '26',
        price: '3999',
        features: [
          'Hire expert carpenters',
          'Fittings, and installations with reliable workmanship.',
        ],
        image: require('@/assets/images/bed.png'),
      },
      {
        id: 'n2',
        name: 'Double Bed (6X6)',
        rating: '4.3',
        reviews: '26',
        price: '7499',
        features: [
          'Hire expert carpenters',
          'Fittings, and installations with reliable workmanship.',
        ],
        image: require('@/assets/images/bed.png'),
      },
      {
        id: 'n3',
        name: 'Double Bed (with side tables)',
        rating: '4.3',
        reviews: '26',
        price: '9999',
        features: [
          'Hire expert carpenters',
          'Fittings, and installations with reliable workmanship.',
        ],
        image: require('@/assets/images/bed.png'),
      },
      {
        id: 'n4',
        name: 'Divan Bed (6X4)',
        rating: '4.3',
        reviews: '26',
        price: '4999',
        features: [
          'Hire expert carpenters',
          'Fittings, and installations with reliable workmanship.',
        ],
        image: require('@/assets/images/bed.png'),
      },
    ],
  },
  {
    id: 'kitchen',
    title: 'Modular/Semi Modular Kitchen',
    items: [
      {
        id: 'k1',
        name: 'Modular Kitchen',
        rating: '4.4',
        reviews: '14',
        price: '299',
        features: [
          'Quick, reliable door repair/installation for all types',
        ],
        image: require('@/assets/images/bed.png'),
      },
      {
        id: 'k2',
        name: 'Semi Modular Kitchen',
        rating: '4.4',
        reviews: '14',
        price: '249',
        features: [
          'Quick, reliable door repair/installation for all types',
        ],
        image: require('@/assets/images/bed.png'),
      },
  
      
    ],
  },
  {
    id: 'kitchen',
    title: 'Modular/Semi Modular Kitchen',
    items: [
      {
        id: 'k1',
        name: 'Modular Kitchen',
        rating: '4.4',
        reviews: '14',
        price: '299',
        features: [
          'Quick, reliable door repair/installation for all types',
        ],
        image: require('@/assets/images/bed.png'),
      },
      {
        id: 'k2',
        name: 'Semi Modular Kitchen',
        rating: '4.4',
        reviews: '14',
        price: '249',
        features: [
          'Quick, reliable door repair/installation for all types',
        ],
        image: require('@/assets/images/bed.png'),
      },
  
      
    ],
  },
  {
    id: 'tvstand',
    title: 'TV stand',
    items: [
      {
        id: 't1',
        name: 'Modular Kitchen',
        rating: '4.4',
        reviews: '14',
        price: '299',
        features: [
          'Quick, reliable door repair/installation for all types',
        ],
        image: require('@/assets/images/bed.png'),
      },
      {
        id: 't2',
        name: 'Semi Modular Kitchen',
        rating: '4.4',
        reviews: '14',
        price: '249',
        features: [
          'Quick, reliable door repair/installation for all types',
        ],
        image: require('@/assets/images/bed.png'),
      },
  
      
    ],
  },
  {
    id: 'consult',
    title: 'Book Consultation',
    items: [
      {
        id: 'c1',
        name: 'Book Call',
        rating: '4.4',
        reviews: '14',
        price: '49',
        features: [
          'Quick, reliable door repair/installation for all types',
        ],
        image: require('@/assets/images/bed.png'),
      }, 
      {
        id: 'c2',
        name: 'Home Visit',
        rating: '4.4',
        reviews: '14',
        price: '149',
        features: [
          'Quick, reliable door repair/installation for all types',
        ],
        image: require('@/assets/images/bed.png'),
      }, 
    ],
  },
];
