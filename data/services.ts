import { ImageSourcePropType } from 'react-native';

export interface ServiceOption {
  id: string;
  title: string;
  image: ImageSourcePropType;
  route: string; // expo-router path (file-based)
}

export interface Service {
  id: string;
  name: string;
  icon: ImageSourcePropType;
  options: ServiceOption[];
}

export const SERVICES: Service[] = [
  /* ---------------- CARPENTER ---------------- */
  {
    id: 'carpenter',
    name: 'Carpenter',
    icon: require('@/assets/icons/carpenter.png'),
    options: [
      {
        id: 'repair',
        title: 'Repair',
        image: require('@/assets/images/bed.png'),
        route: '/service/carpenter/repair',
      },
      {
        id: 'new-work',
        title: 'New Work',
        image: require('@/assets/images/bed1.png'),
        route: '/service/carpenter/new-work',
      },
      {
        id: 'installation',
        title: 'Installation',
        image: require('@/assets/images/bed2.png'),
        route: '/service/carpenter/installation',
      },
      {
        id: 'drill',
        title: 'Hanger & Drill',
        image: require('@/assets/images/bed3.png'),
        route: '/service/carpenter/drill',
      },
      {
        id: 'curtain',
        title: 'Curtain Install',
        image: require('@/assets/images/bed4.png'),
        route: '/service/carpenter/curtain',
      },
    ],
  },

  /* ---------------- PLUMBER ---------------- */
  {
    id: 'plumber',
    name: 'Plumber',
    icon: require('@/assets/icons/plumber.png'),
    options: [
      {
        id: 'leakage',
        title: 'Leakage',
        image: require('@/assets/images/bed.png'),
        route: '/service/plumber/leakage',
      },
      {
        id: 'tap-fit',
        title: 'Tap Fit',
        image: require('@/assets/images/bed.png'),
        route: '/service/plumber/tap-fit',
      },
    ],
  },

  /* ---------------- ELECTRICIAN ---------------- */
  {
    id: 'electrician',
    name: 'Electrician',
    icon: require('@/assets/icons/electrician.png'),
    options: [
      {
        id: 'fan-repair',
        title: 'Fan Repair',
        image: require('@/assets/images/bed.png'),
        route: '/service/electrician/fan-repair',
      },
      {
        id: 'wiring',
        title: 'Wiring',
        image: require('@/assets/images/bed.png'),
        route: '/service/electrician/wiring',
      },
    ],
  },

  /* ---------------- CLEANING ---------------- */
  {
    id: 'cleaning',
    name: 'Cleaning',
    icon: require('@/assets/icons/cleaning.png'),
    options: [
      {
        id: 'kitchen',
        title: 'Kitchen Cleaning',
        image: require('@/assets/images/bed.png'),
        route: '/service/cleaning/kitchen',
      },
      {
        id: 'bathroom',
        title: 'Bathroom Cleaning',
        image: require('@/assets/images/bed.png'),
        route: '/service/cleaning/bathroom',
      },
      {
        id: 'complete-home',
        title: 'Complete Home Cleaning',
        image: require('@/assets/images/bed.png'),
        route: '/service/cleaning/complete-home',
      },
      {
        id: 'water-tank',
        title: 'Water Tank Cleaning',
        image: require('@/assets/images/bed.png'),
        route: '/service/cleaning/water-tank',
      },
    ],
  },

  /* ---------------- AC SERVICE ---------------- */
  {
    id: 'ac',
    name: 'AC Service',
    icon: require('@/assets/icons/ac.png'),
    options: [
      {
        id: 'service',
        title: 'AC Service',
        image: require('@/assets/images/bed.png'),
        route: '/service/ac/repair',
      },
      {
        id: 'repair',
        title: 'AC Repair',
        image: require('@/assets/images/bed.png'),
        route: '/service/ac/repair',
      },
      {
        id: 'installation',
        title: 'AC Installation',
        image: require('@/assets/images/bed.png'),
        route: '/service/ac/installation',
      },
      {
        id: 'uninstallation',
        title: 'AC Uninstallation',
        image: require('@/assets/images/bed.png'),
        route: '/service/ac/uninstallation',
      },
    ],
  },

  /* ---------------- RO PURIFIER ---------------- */
  {
    id: 'ro',
    name: 'RO Purifier',
    icon: require('@/assets/icons/ro.png'),
    options: [
      {
        id: 'installation',
        title: 'Installation',
        image: require('@/assets/images/bed.png'),
        route: '/service/ro/installation',
      },
      {
        id: 'service',
        title: 'RO Service',
        image: require('@/assets/images/bed.png'),
        route: '/service/ro/service',
      },
    ],
  },

  /* ---------------- PAINTING ---------------- */
  {
    id: 'painting',
    name: 'Painting & Waterproofing',
    icon: require('@/assets/icons/painter.png'),
    options: [
      {
        id: 'home-visit',
        title: 'Home Visit',
        image: require('@/assets/images/bed.png'),
        route: '/service/painting/home-visit',
      },
      {
        id: 'online-consult',
        title: 'Online Consult',
        image: require('@/assets/images/bed.png'),
        route: '/service/painting/online-consult',
      },
    ],
  },

  /* ---------------- RENOVATION ---------------- */
  {
    id: 'renovation',
    name: 'Renovation',
    icon: require('@/assets/icons/renovation.png'),
    options: [
      {
        id: 'home-renovation',
        title: 'Home Renovation',
        image: require('@/assets/images/bed.png'),
        route: '/service/renovation/home-renovation',
      },
      {
        id: 'kitchen-renovation',
        title: 'Kitchen Renovation',
        image: require('@/assets/images/bed.png'),
        route: '/service/renovation/kitchen-renovation',
      },
      {
        id: 'bathroom-renovation',
        title: 'Bathroom Renovation',
        image: require('@/assets/images/bed.png'),
        route: '/service/renovation/bathroom-renovation',
      },
    ],
  },

  /* ---------------- CONSULTATION ---------------- */
  {
    id: 'consult',
    name: 'Book Consultation',
    icon: require('@/assets/icons/consultant.png'),
    options: [
      {
        id: 'home-visit',
        title: 'Home Visit',
        image: require('@/assets/images/bed.png'),
        route: '/service/consult/home-visit',
      },
      {
        id: 'call',
        title: 'Book a Call',
        image: require('@/assets/images/bed.png'),
        route: '/service/consult/call',
      },
    ],
  },
];
