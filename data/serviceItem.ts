import { ImageSourcePropType } from 'react-native';

export interface ServiceItem {
  id: string;
  title: string;
  image: ImageSourcePropType;
  route: string; // Expo Router path
}

// ---------------- DATA ----------------
export const SERVICES: ServiceItem[] = [
  {
    id: 'carpenter',
    title: 'Carpenter',
    image: require('@/assets/images/carpenter.png'),
    route: '/service/carpenter',
  },
  {
    id: 'plumber',
    title: 'Plumber',
    image: require('@/assets/images/plumber.png'),
    route: '/service/plumber',
  },
  {
    id: 'electrician',
    title: 'Electrician',
    image: require('@/assets/images/electrician.png'),
    route: '/service/electrician',
  },
  {
    id: 'painting-waterproofing',
    title: 'Painting & Waterproofing',
    image: require('@/assets/images/painter.png'),
    route: '/service/painter',
  },
  {
    id: 'mason',
    title: 'Mason',
    image: require('@/assets/images/mason.png'),
    route: '/service/mason',
  },
  {
    id: 'flooring-tiling',
    title: 'Flooring & Tiling',
    image: require('@/assets/images/tilesetter.png'),
    route: '/service/flooring',
  },
  {
    id: 'aluminium-work',
    title: 'Aluminium Work',
    image: require('@/assets/images/cabinate.png'),
    route: '/service/aluminium',
  },
  {
    id: 'steel-welding',
    title: 'Steel & Welding',
    image: require('@/assets/images/railing.jpg'),
    route: '/service/steel',
  },
  {
    id: 'pvc-panel',
    title: 'PVC Panel',
    image: require('@/assets/images/pvc.jpg'),
    route: '/service/pvc',
  },
];
