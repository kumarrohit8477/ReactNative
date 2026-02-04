import React, { useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ListRenderItem,
  ImageSourcePropType,
  useWindowDimensions,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Card from '../card';

// ---------------- TYPES ----------------
interface ServiceItem {
  id: string;
  title: string;
  image: ImageSourcePropType;
  route: keyof RootStackParamList;
}

type RootStackParamList = {
  Carpenter: undefined;
  Plumber: undefined;
  Electrician: undefined;
  PaintingnWaterproofing: undefined;
  Mason: undefined;
  FlooringNTiling: undefined;
  Aluminiumwork: undefined;
  SteelNWelding: undefined;
  PVCPanel: undefined;
};

type RootNavigation = NavigationProp<RootStackParamList>;

// ---------------- DATA ----------------
const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Carpenter',
    image: require('@/assets/images/carpenter.png'),
    route: 'Carpenter',
  },
  {
    id: '2',
    title: 'Plumber',
    image: require('@/assets/images/plumber.png'),
    route: 'Plumber',
  },
  {
    id: '3',
    title: 'Electrician',
    image: require('@/assets/images/electrician.png'),
    route: 'Electrician',
  },
  {
    id: '4',
    title: 'Painting & Waterproofing',
    image: require('@/assets/images/painter.png'),
    route: 'PaintingnWaterproofing',
  },
  {
    id: '5',
    title: 'Mason',
    image: require('@/assets/images/mason.png'),
    route: 'Mason',
  },
  {
    id: '6',
    title: 'Flooring & Tiling',
    image: require('@/assets/images/tilesetter.png'),
    route: 'FlooringNTiling',
  },
  {
    id: '7',
    title: 'Aluminium Work',
    image: require('@/assets/images/cabinate.png'),
    route: 'Aluminiumwork',
  },
  {
    id: '8',
    title: 'Steel & Welding',
    image: require('@/assets/images/railing.jpg'),
    route: 'SteelNWelding',
  },
  {
    id: '9',
    title: 'PVC Panel',
    image: require('@/assets/images/pvc.jpg'),
    route: 'PVCPanel',
  },
];

// ---------------- CONSTANTS ----------------
const NUM_COLUMNS = 3;
const CARD_GAP = 12;

// ---------------- COMPONENT ----------------
const ServicesGrid: React.FC = () => {
  const navigation = useNavigation<RootNavigation>();
  const { width } = useWindowDimensions();

  const CARD_WIDTH =
    (width - CARD_GAP * (NUM_COLUMNS + 1)) / NUM_COLUMNS;

  const renderItem = useCallback<ListRenderItem<ServiceItem>>(
    ({ item }) => (
      <Card
        title={item.title}
        image={item.image}
        style={{ width: CARD_WIDTH }}
        onPress={() => navigation.navigate(item.route)}
      />
    ),
    [navigation, CARD_WIDTH]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home improvement services</Text>

      <FlatList
        data={SERVICES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={NUM_COLUMNS}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        initialNumToRender={6}
      />
    </View>
  );
};

export default ServicesGrid;

// ---------------- STYLES ----------------
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: CARD_GAP,
    paddingTop: 10,
    backgroundColor: '#ffffff',
  },

  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#222',
  },

  listContent: {
    paddingBottom: 16,
  },

  row: {
    justifyContent: 'space-between',
    marginBottom: CARD_GAP,
  },
});
