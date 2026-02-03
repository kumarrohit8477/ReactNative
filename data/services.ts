import { ImageSourcePropType } from 'react-native';
export interface ServiceOption {
  id: string;
  title: string;
  image: ImageSourcePropType;
  route: string; // The navigation screen name
}
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
      { id: 'carpenter-repair', title: 'Repair', image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
      { id: 'carpenter-new', title: 'New Work', image: require('@/assets/images/bed1.png'), route: 'ServiceDetails' },
      { id: 'carpenter-install', title: 'Installation', image: require('@/assets/images/bed2.png'), route: 'ServiceDetails' },
      { id: 'carpenter-drill', title: 'Hanger & Drill', image: require('@/assets/images/bed3.png'), route: 'ServiceDetails' },
      { id: 'carpenter-curtain', title: 'Curtains Install', image: require('@/assets/images/bed4.png'), route: 'ServiceDetails' },
    ],
  },

  {
    id: 'plumber',
    name: 'Plumber',
    icon: require('@/assets/icons/plumicon.png'),
    options: [
      { id: 'plumber-leak', title: 'Leakage', image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
      { id: 'plumber-tap', title: 'Tap Fit', image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
    ],
  },

  {
    id: 'electrician',
    name: 'Electrician',
    icon: require('@/assets/icons/elecicon.png'),
    options: [
      { id: 'electrician-fan', title: 'Fan Repair', image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
      { id: 'electrician-wire', title: 'Wiring', image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
    ],
  },

  {
    id: 'cleaning',
    name: 'Cleaning ',
    icon: require('@/assets/icons/cleaningicon.png'),
    options: [
      { id: 'kitchen', title: 'Kitchen cleaning', image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
      { id: 'bathroom', title: 'Bathroom cleaning', image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
      { id: 'home', title: 'Complete Home cleaning', image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
      { id: 'watertank', title: 'Water Tank cleaning', image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
    ],
  },
  {
    id: 'ac',
    name: 'AC Service',
    icon: require('@/assets/icons/acicon.png'),
    options: [
      { id: 'ac-repair', title: 'AC Repair', image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
      { id: 'ac-install', title: 'AC Installation',image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
      { id: 'ac-install', title: 'AC Uninstallation',image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
    ],
  },

  {
    id: 'appliance',
    name: 'Appliance Repair',
    icon: require('@/assets/icons/caricon.png'),
    options: [
      { id: 'consult-home', title: 'Home Visit', image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
      { id: 'consult-online', title: 'Online Consult', image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
    ],
  },
  {
    id: 'painting',
    name: 'Painting & Panel',
    icon: require('@/assets/icons/caricon.png'),
    options: [
      { id: 'consult-home', title: 'Home Visit', image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
      { id: 'consult-online', title: 'Online Consult', image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
    ],
  },
  {
    id: 'renovation',
    name: 'Renovation',
    icon: require('@/assets/icons/caricon.png'),
    options: [
      { id: 'reno-home', title: 'Home Renovation', image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
      { id: 'reno-kitchen', title: 'Kitchen Renovation', image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
      { id: 'reno-bathroom', title: 'Bathroom Renovation', image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
    ],
  },
  {
    id: 'consult',
    name: 'Book Consultation',
    icon: require('@/assets/icons/caricon.png'),
    options: [
      { id: 'consult-home', title: 'Home Visit', image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
      { id: 'consult-online', title: 'Book a Call', image: require('@/assets/images/bed.png'), route: 'ServiceDetails' },
    ],
  },
];
