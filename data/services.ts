import { ImageSourcePropType } from 'react-native';

/* ---------- TYPE DEFINITIONS ---------- */

/**
 * Represents an individual sub-category or task 
 * within a main service.
 */
export interface ServiceOption {
  id: string;
  title: string;
  image: ImageSourcePropType;
  route: string; // The navigation screen name
}

/**
 * Represents a main service category shown in the Midbox grid.
 */
export interface Service {
  id: string;
  name: string;
  icon: ImageSourcePropType;
  options: ServiceOption[];
}

/* ---------- DATA EXPORT ---------- */

export const SERVICES: Service[] = [
  {
    id: 'carpenter',
    name: 'Carpenter',
    icon: require('@/assets/icons/caricon.png'),
    options: [
      {
        id: 'c-1',
        title: 'Repair',
        image: require('@/assets/images/bed.png'),
        route: 'ServiceDetails'
      },
      {
        id: 'c-2',
        title: 'New Work',
        image: require('@/assets/images/bed.png'),
        route: 'ServiceDetails'
      },
      {
        id: 'c-3',
        title: 'Installation',
        image: require('@/assets/images/bed.png'),
        route: 'ServiceDetails'
      },
    ],
  },
  {
    id: 'plumber',
    name: 'Plumber',
    icon: require('@/assets/icons/caricon.png'),
    options: [
      {
        id: 'p-1',
        title: 'Leakage',
        image: require('@/assets/icons/caricon.png'),
        route: 'ServiceDetails'
      },
      {
        id: 'p-2',
        title: 'Tap Fit',
        image: require('@/assets/icons/caricon.png'),
        route: 'ServiceDetails'
      },
    ],
  },
  {
    id: 'electrician',
    name: 'Electrician',
    icon: require('@/assets/icons/caricon.png'),
    options: [
      {
        id: 'e-1',
        title: 'Fan Repair',
        image: require('@/assets/icons/caricon.png'),
        route: 'ServiceDetails'
      },
      {
        id: 'e-2',
        title: 'Wiring',
        image: require('@/assets/icons/caricon.png'),
        route: 'ServiceDetails'
      },
    ],
  },
  {
    id: 'ac',
    name: 'AC Service',
    icon: require('@/assets/icons/caricon.png'),
    options: [
      {
        id: 'ac-1',
        title: 'Fan Repair',
        image: require('@/assets/icons/caricon.png'),
        route: 'ServiceDetails'
      },
      {
        id: 'e-2',
        title: 'Wiring',
        image: require('@/assets/icons/caricon.png'),
        route: 'ServiceDetails'
      },
    ],
  },
  {
    id: 'electrician',
    name: 'Electrician',
    icon: require('@/assets/icons/caricon.png'),
    options: [
      {
        id: 'e-1',
        title: 'Fan Repair',
        image: require('@/assets/icons/caricon.png'),
        route: 'ServiceDetails'
      },
      {
        id: 'e-2',
        title: 'Wiring',
        image: require('@/assets/icons/caricon.png'),
        route: 'ServiceDetails'
      },
    ],
  },
  {
    id: 'electrician',
    name: 'Electrician',
    icon: require('@/assets/icons/caricon.png'),
    options: [
      {
        id: 'e-1',
        title: 'Fan Repair',
        image: require('@/assets/icons/caricon.png'),
        route: 'ServiceDetails'
      },
      {
        id: 'e-2',
        title: 'Wiring',
        image: require('@/assets/icons/caricon.png'),
        route: 'ServiceDetails'
      },
    ],
  },
  {
    id: 'electrician',
    name: 'Electrician',
    icon: require('@/assets/icons/caricon.png'),
    options: [
      {
        id: 'e-1',
        title: 'Fan Repair',
        image: require('@/assets/icons/caricon.png'),
        route: 'ServiceDetails'
      },
      {
        id: 'e-2',
        title: 'Wiring',
        image: require('@/assets/icons/caricon.png'),
        route: 'ServiceDetails'
      },
    ],
  },
  {
    id: 'electrician',
    name: 'Electrician',
    icon: require('@/assets/icons/caricon.png'),
    options: [
      {
        id: 'e-1',
        title: 'Fan Repair',
        image: require('@/assets/icons/caricon.png'),
        route: 'ServiceDetails'
      },
      {
        id: 'e-2',
        title: 'Wiring',
        image: require('@/assets/icons/caricon.png'),
        route: 'ServiceDetails'
      },

    ],
  },
  {
    id: 'consult',
    name: 'Book Consultation',
    icon: require('@/assets/icons/caricon.png'),
    options: [
      {
        id: 'c-1',
        title: 'Fan Repair',
        image: require('@/assets/icons/caricon.png'),
        route: 'ServiceDetails'
      },
      {
        id: 'c-2',
        title: 'Wiring',
        image: require('@/assets/icons/caricon.png'),
        route: 'ServiceDetails'
      },
    ],
  },
];