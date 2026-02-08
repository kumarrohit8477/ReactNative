import { ImageSourcePropType } from 'react-native';
export interface ServiceOption {
  id: string;
  title: string;
  image: ImageSourcePropType;
  route: string;
}

export interface Service {
  id: string;
  name: string;
  icon: ImageSourcePropType;
  options: ServiceOption[];
}

export const SERVICES: Service[] = [
  /* ================= CARPENTER ================= */
  {
    id: 'carpenter',
    name: 'Carpenter',
    icon: require('@/assets/icons/carpenter.png'),
    options: [
      {
        id: 'repair',
        title: 'Repair Work',
        image: require('@/assets/images/bed.png'),
        route: '/service/carpenter/repair',
      },
      {
        id: 'new-work',
        title: 'New Furniture Work',
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
        id: 'drill-hanger',
        title: 'Hanger & Drill',
        image: require('@/assets/images/bed3.png'),
        route: '/service/carpenter/drill',
      },
      {
        id: 'curtain',
        title: 'Curtain Installation',
        image: require('@/assets/images/bed4.png'),
        route: '/service/carpenter/curtain',
      },
    ],
  },

  /* ================= PLUMBER ================= */
  {
    id: 'plumber',
    name: 'Plumbing Services',
    icon: require('@/assets/icons/plumber.png'),
    options: [
      {
        id: 'plumbingservice',
        title: 'Plumbing Service',
        image: require('@/assets/images/bed4.png'),
        route: '/service/plumber/installation',
      },
      {
        id: 'new-installation',
        title: 'New Plumbing Installation',
        image: require('@/assets/images/bed4.png'),
        route: '/service/plumber/installation',
      },
    ],
  },

  /* ================= ELECTRICIAN ================= */
  {
    id: 'electrician',
    name: 'Electrician',
    icon: require('@/assets/icons/electrician.png'),
    options: [
      {
        id: 'switch-socket',
        title: 'Switch & Socket Work',
        image: require('@/assets/images/bed.png'),
        route: '/service/electrician/switch-socket',
      },
      {
        id: 'light-installation',
        title: 'Light & Fixture Installation',
        image: require('@/assets/images/bed.png'),
        route: '/service/electrician/light-installation',
      },
    ],
  },

  /* ================= CLEANING ================= */
  {
    id: 'cleaning',
    name: 'Cleaning',
    icon: require('@/assets/icons/cleaning.png'),
    options: [
      {
        id: 'kitchen',
        title: 'Kitchen \n Cleaning',
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
        id: 'full-home',
        title: 'Complete Home Cleaning',
        image: require('@/assets/images/bed.png'),
        route: '/service/cleaning/full-home',
      },
      {
        id: 'water-tank',
        title: 'Water Tank Cleaning',
        image: require('@/assets/images/bed.png'),
        route: '/service/cleaning/water-tank',
      },
    ],
  },

  /* ================= AC SERVICE ================= */
  {
    id: 'ac',
    name: 'AC Service',
    icon: require('@/assets/icons/ac.png'),
    options: [
      {
        id: 'service',
        title: 'AC Service',
        image: require('@/assets/images/bed.png'),
        route: '/service/ac/service',
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
    ],
  },

  /* ================= RO PURIFIER ================= */
  {
    id: 'ro',
    name: 'RO Purifier',
    icon: require('@/assets/icons/ro.png'),
    options: [
      {
        id: 'installation',
        title: 'RO Installation',
        image: require('@/assets/images/bed.png'),
        route: '/service/ro/installation',
      },
      {
        id: 'service',
        title: 'RO Service',
        image: require('@/assets/images/bed.png'),
        route: '/service/ro/service',
      },
      {
        id: 'repair',
        title: 'RO Repair',
        image: require('@/assets/images/bed.png'),
        route: '/service/ro/repair',
      },
      {
        id: 'amc',
        title: 'Annual Maintenance (AMC)',
        image: require('@/assets/images/bed.png'),
        route: '/service/ro/amc',
      },
    ],
  },

  /* ================= PAINTING ================= */
  {
    id: 'painting-waterproofing',
    name: 'Painting & Water Proofing',
    icon: require('@/assets/icons/painter.png'),
    options: [
      {
        id: 'painting',
        title: 'Painting',
        image: require('@/assets/images/bed.png'),
        route: '/service/painting/interior',
      },
      {
        id: 'waterproofing',
        title: 'Waterproofing',
        image: require('@/assets/images/bed.png'),
        route: '/service/painting/exterior',
      },
    ],
  },
  /* ================= RENOVATION ================= */
  {
    id: 'renovation',
    name: 'Renovation',
    icon: require('@/assets/icons/renovation.png'),
    options: [
      {
        id: 'home',
        title: 'Home Renovation',
        image: require('@/assets/images/bed.png'),
        route: '/service/renovation/home',
      },
      {
        id: 'kitchen',
        title: 'Kitchen Renovation',
        image: require('@/assets/images/bed.png'),
        route: '/service/renovation/kitchen',
      },
      {
        id: 'bathroom',
        title: 'Bathroom Renovation',
        image: require('@/assets/images/bed.png'),
        route: '/service/renovation/bathroom',
      },
    ],
  },
  /* ================= CONSULTATION ================= */
  {
    id: 'consult',
    name: 'Book Consultation',
    icon: require('@/assets/icons/consultant.png'),
    options: [
      {
        id: 'call',
        title: 'Book Call',
        image: require('@/assets/images/bed.png'),
        route: '/service/consult/home-visit',
      },
      {
        id: 'homevisit',
        title: 'Home Visit',
        image: require('@/assets/images/bed.png'),
        route: '/service/consult/plumber',
      },

    ],
  },
  /* ================= RENOVATION ================= */
  {
    id: 'mason',
    name: 'Mason',
    icon: require('@/assets/images/bed.png'),
    options: [
      {
        id: 'home',
        title: 'Home Renovation',
        image: require('@/assets/images/bed.png'),
        route: '/service/renovation/home',
      },
      {
        id: 'kitchen',
        title: 'Kitchen Renovation',
        image: require('@/assets/images/bed.png'),
        route: '/service/renovation/kitchen',
      },
      {
        id: 'bathroom',
        title: 'Bathroom Renovation',
        image: require('@/assets/images/bed.png'),
        route: '/service/renovation/bathroom',
      },
      {
        id: 'consultation',
        title: 'Book Consultation',
        image: require('@/assets/images/bed.png'),
        route: '/service/renovation/consultation',
      },
    ],
  },
  /* ================= MASON ================= */
  {
    id: 'mason',
    name: 'Mason',
    icon: require('@/assets/images/bed.png'),
    options: [
      {
        id: 'brickwork',
        title: 'Brick & Block Work',
        image: require('@/assets/images/bed.png'),
        route: '/service/mason/brickwork',
      },
      {
        id: 'plaster',
        title: 'Plastering Work',
        image: require('@/assets/images/bed.png'),
        route: '/service/mason/plaster',
      },
      {
        id: 'repair',
        title: 'Repair & Renovation',
        image: require('@/assets/images/bed.png'),
        route: '/service/mason/repair',
      },
      {
        id: 'concrete',
        title: 'Concrete & RCC Work',
        image: require('@/assets/images/bed.png'),
        route: '/service/mason/concrete',
      },
      {
        id: 'consultation',
        title: 'Book Consultation',
        image: require('@/assets/images/bed.png'),
        route: '/service/mason/consultation',
      },
    ],
  },

  /* ================= FLOORING & TILING ================= */
  {
    id: 'flooring-tiling',
    name: 'Flooring & Tiling',
    icon: require('@/assets/images/bed.png'),
    options: [
      {
        id: 'tiling',
        title: 'Tiling',
        image: require('@/assets/images/bed.png'),
        route: '/service/flooring/wall-tiles',
      },
      {
        id: 'marble',
        title: 'Marble & Granite Flooring',
        image: require('@/assets/images/bed.png'),
        route: '/service/flooring/marble',
      },
      {
        id: 'bathroom-tiling',
        title: 'Bathroom & Kitchen Tiling',
        image: require('@/assets/images/bed.png'),
        route: '/service/flooring/bathroom',
      },
    ],
  },

  /* ================= ALUMINIUM WORK ================= */
  {
    id: 'aluminium-work',
    name: 'Aluminium Work',
    icon: require('@/assets/images/bed.png'),
    options: [
      {
        id: 'newwork',
        title: 'New Work',
        image: require('@/assets/images/bed.png'),
        route: '/service/aluminium/windows',
      },
      {
        id: 'repairnreplacement',
        title: 'Repair & Replacement',
        image: require('@/assets/images/bed.png'),
        route: '/service/aluminium/doors',
      },
    ],
  },

  /* ================= STEEL & WELDING ================= */
  {
    id: 'steel-welding',
    name: 'Steel & Welding',
    icon: require('@/assets/images/bed.png'),
    options: [
      {
        id: 'grill',
        title: 'Window & Balcony Grill',
        image: require('@/assets/images/bed.png'),
        route: '/service/welding/grill',
      },
      {
        id: 'gate',
        title: 'Gate Fabrication',
        image: require('@/assets/images/bed.png'),
        route: '/service/welding/gate',
      },
      {
        id: 'shed',
        title: 'Shed & Structure Work',
        image: require('@/assets/images/bed.png'),
        route: '/service/welding/shed',
      },
      {
        id: 'repair',
        title: 'Welding Repair',
        image: require('@/assets/images/bed.png'),
        route: '/service/welding/repair',
      },
    ],
  },

  /* ================= PVC PANEL ================= */
  {
    id: 'pvc-panel',
    name: 'PVC Panel',
    icon: require('@/assets/images/bed.png'),
    options: [
      {
        id: 'external',
        title: 'Exterior Panel',
        image: require('@/assets/images/bed.png'),
        route: '/service/pvc/ceiling',
      },
      {
        id: 'interior',
        title: 'Interior Panel',
        image: require('@/assets/images/bed.png'),
        route: '/service/pvc/wall',
      },
    ],
  }
];
