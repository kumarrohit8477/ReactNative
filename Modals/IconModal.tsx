import React, { memo, useCallback } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  InteractionManager,
  FlatList,
  Dimensions,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Service, ServiceOption } from '@/data/services';

/* ---------- TYPES ---------- */

interface Props {
  service: Service;
  onClose: () => void;
}

type RootStackParamList = Record<
  string,
  { serviceName: string; optionSelected: string }
>;

const SCREEN_WIDTH = Dimensions.get('window').width;

/* ---------- OPTION CARD ---------- */

const OptionCard = memo(({ 
  option, 
  onPress 
}: { 
  option: ServiceOption; 
  onPress: (opt: ServiceOption) => void; 
}) => {
  return (
    <Pressable
      onPress={() => onPress(option)}
      accessibilityRole="button"
      accessibilityLabel={`Select ${option.title}`}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
    >
      <Image source={option.image} style={styles.image} />
      <Text style={styles.text} numberOfLines={2}>
        {option.title}
      </Text>
    </Pressable>
  );
});

OptionCard.displayName = 'OptionCard';

/* ---------- MAIN COMPONENT ---------- */

const IconModal: React.FC<Props> = ({ service, onClose }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = useCallback(
    (option: ServiceOption) => {
      if (!option.route) return;

      // Close modal first for a smoother transition
      onClose();

      InteractionManager.runAfterInteractions(() => {
        navigation.navigate(option.route!, {
          serviceName: service.name,
          optionSelected: option.title,
        });
      });
    },
    [navigation, onClose, service.name]
  );

  if (!service) return null;

  return (
    <View style={styles.backdrop}>
      {/* Dismiss backdrop */}
      <Pressable 
        style={StyleSheet.absoluteFill} 
        onPress={onClose} 
        accessibilityLabel="Close modal"
      />

      <View style={styles.centeredCard}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>{service.name}</Text>
          <Pressable
            style={styles.closeButton}
            onPress={onClose}
            hitSlop={15}
          >
            <Image
              source={require('@/assets/icons/back.png')}
              style={styles.closeButtonImage}
            />
          </Pressable>
        </View>

        {/* Options Grid */}
        <FlatList
          data={service.options}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <OptionCard option={item} onPress={handlePress} />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default memo(IconModal);

/* ---------- STYLES ---------- */

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  centeredCard: {
    width: '100%',
    maxWidth: 420,
    maxHeight: '80%', // Prevents overflow on small screens
    backgroundColor: '#c47c7c',
    borderRadius: 28,
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 12,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  closeButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
  },
  closeButtonImage: {
    width: 12,
    height: 12,
    tintColor: '#333',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff', // Changed to white for better contrast on #c47c7c
  },
  listContent: {
    paddingBottom: 10,
  },
  row: {
    justifyContent: 'flex-start',
    gap: 8,
    marginBottom: 8,
  },
  card: {
    flex: 1/3, // Forces 3 columns exactly
    aspectRatio: 0.9,
    backgroundColor: '#9dbbd8',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardPressed: {
    transform: [{ scale: 0.95 }],
    backgroundColor: '#f3f4f6',
  },
  image: {
    width: '100%',
    height: '60%',
    resizeMode: 'contain',
    marginBottom: 5,
  },
  text: {
    fontSize: 11,
    fontWeight: '700',
    color: '#374151',
    textAlign: 'center',
  },
});