import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Card from '../card';

const DATA = [
  {
    id: '1',
    title: 'Carpenter',
    image: require('@/assets/images/bed.png'),
  },
  {
    id: '2',
    title: 'Plumber',
    image: require('@/assets/images/bed.png'),
  },
  {
    id: '3',
    title: 'Painter',
    image: require('@/assets/images/bed.png'),
  },
  {
    id: '4',
    title: 'Electrician',
    image: require('@/assets/images/bed.png'),
  },
  {
    id: '4',
    title: 'Electrician',
    image: require('@/assets/images/bed.png'),
  },
  {
    id: '4',
    title: 'Electrician',
    image: require('@/assets/images/bed.png'),
  },
  {
    id: '4',
    title: 'Electrician',
    image: require('@/assets/images/bed.png'),
  },
  {
    id: '4',
    title: 'Electrician',
    image: require('@/assets/images/bed.png'),
  },
  {
    id: '4',
    title: 'Electrician',
    image: require('@/assets/images/bed.png'),
  },
];

const CardContainer: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        numColumns={3} // 👈 grid columns
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.image}
            onPress={() => console.log(item.title)}
          />
        )}
      />
    </View>
  );
};

export default CardContainer;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 8,
  },

  row: {
    justifyContent: 'space-between',
  },
});
