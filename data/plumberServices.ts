import { ImageSourcePropType } from 'react-native';

export interface PlumberService {
  id: string;
  title: string;
  image: ImageSourcePropType;
  route: string;
}

export const PLUMBER_SERVICES: PlumberService[] = [
  {
    id: '1',
    title: 'Pipe Leakage Repair',
    image: require('@/assets/images/plumber/pipe.png'),
    route: '/plumber/pipe-repair',
  },
  {
    id: '2',
    title: 'Bathroom Plumbing',
    image: require('@/assets/images/plumber/bathroom.png'),
    route: '/plumber/bathroom',
  },
  {
    id: '3',
    title: 'Kitchen Plumbing',
    image: require('@/assets/images/plumber/kitchen.png'),
    route: '/plumber/kitchen',
  },
  {
    id: '4',
    title: 'Drain Cleaning',
    image: require('@/assets/images/plumber/drain.png'),
    route: '/plumber/drain',
  },
  {
    id: '5',
    title: 'Water Tank & Motor',
    image: require('@/assets/images/plumber/motor.png'),
    route: '/plumber/motor',
  },
  {
    id: '6',
    title: 'Tap & Fitting',
    image: require('@/assets/images/plumber/tap.png'),
    route: '/plumber/tap',
  },
  {
    id: '7',
    title: 'Geyser Installation',
    image: require('@/assets/images/plumber/geyser.png'),
    route: '/plumber/geyser',
  },
];

