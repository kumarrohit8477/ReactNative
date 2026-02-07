import { ImageSourcePropType } from 'react-native';
export interface ServiceOption {
  id: string;
  title: string;
  image: ImageSourcePropType;
  route: string; // expo-router path
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
      {
        id: 'consultation',
        title: 'Book Consultation',
        image: require('@/assets/images/bed4.png'),
        route: '/service/carpenter/consultation',
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
        id: 'pipe-leakage',
        title: 'Pipe Leakage Repair',
        image: require('@/assets/images/bed4.png'),
        route: '/service/plumber/pipe-repair',
      },
      {
        id: 'drain-cleaning',
        title: 'Drain Cleaning',
        image: require('@/assets/images/bed4.png'),
        route: '/service/plumber/drain',
      },
      {
        id: 'tap-fitting',
        title: 'Tap & Fitting Work',
        image: require('@/assets/images/bed4.png'),
        route: '/service/plumber/tap',
      },
      {
        id: 'new-installation',
        title: 'New Plumbing Installation',
        image: require('@/assets/images/bed4.png'),
        route: '/service/plumber/installation',
      },
      {
        id: 'consultation',
        title: 'Book Consultation',
        image: require('@/assets/images/bed4.png'),
        route: '/service/plumber/consultation',
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
      {
        id: 'wiring',
        title: 'Wiring & Rewiring',
        image: require('@/assets/images/bed.png'),
        route: '/service/electrician/wiring',
      },
      {
        id: 'mcb-fuse',
        title: 'MCB, Fuse & DB Work',
        image: require('@/assets/images/bed.png'),
        route: '/service/electrician/mcb',
      },
      {
        id: 'inverter',
        title: 'Inverter & Battery Work',
        image: require('@/assets/images/bed.png'),
        route: '/service/electrician/inverter',
      },
      {
        id: 'appliance',
        title: 'Appliance Installation',
        image: require('@/assets/images/bed.png'),
        route: '/service/electrician/appliance',
      },
      {
        id: 'inspection',
        title: 'Electrical Safety Inspection',
        image: require('@/assets/images/bed.png'),
        route: '/service/electrician/inspection',
      },
      {
        id: 'consultation',
        title: 'Book Consultation',
        image: require('@/assets/images/bed.png'),
        route: '/service/electrician/consultation',
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
        title: 'Waterproofing',
        image: require('@/assets/images/bed.png'),
        route: '/service/painting/interior',
      },
      {
        id: 'waterproofing',
        title: 'Exterior Painting',
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
      {
        id: 'consultation',
        title: 'Book Consultation',
        image: require('@/assets/images/bed.png'),
        route: '/service/renovation/consultation',
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
        route: '/service/consult/carpenter',
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
        id: 'floor-tiles',
        title: 'Floor Tile Laying',
        image: require('@/assets/images/bed.png'),
        route: '/service/flooring/floor-tiles',
      },
      {
        id: 'wall-tiles',
        title: 'Wall Tile Installation',
        image: require('@/assets/images/bed.png'),
        route: '/service/flooring/wall-tiles',
      },
      {
        id: 'marble',
        title: 'Marble / Granite Flooring',
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
        id: 'windows',
        title: 'Aluminium Windows',
        image: require('@/assets/images/bed.png'),
        route: '/service/aluminium/windows',
      },
      {
        id: 'doors',
        title: 'Aluminium Doors',
        image: require('@/assets/images/bed.png'),
        route: '/service/aluminium/doors',
      },
      {
        id: 'partition',
        title: 'Office / Home Partition',
        image: require('@/assets/images/bed.png'),
        route: '/service/aluminium/partition',
      },
      {
        id: 'repair',
        title: 'Repair & Replacement',
        image: require('@/assets/images/bed.png'),
        route: '/service/aluminium/repair',
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
        id: 'ceiling',
        title: 'PVC Ceiling',
        image: require('@/assets/images/bed.png'),
        route: '/service/pvc/ceiling',
      },
      {
        id: 'wall',
        title: 'PVC Wall Panel',
        image: require('@/assets/images/bed.png'),
        route: '/service/pvc/wall',
      },
      {
        id: 'bathroom',
        title: 'PVC Bathroom Panel',
        image: require('@/assets/images/bed.png'),
        route: '/service/pvc/bathroom',
      },

      {
        id: 'repair',
        title: 'Repair & Replacement',
        image: require('@/assets/images/bed.png'),
        route: '/service/pvc/repair',
      },

    ],
  }
];
