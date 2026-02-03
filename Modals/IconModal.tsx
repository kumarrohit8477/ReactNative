import React, { memo, useCallback } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  InteractionManager,
  FlatList,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Service, ServiceOption } from '@/data/services';

/* ---------- TYPES ---------- */

interface ModalProps {
  service: Service;
  onClose: () => void;
}

interface OptionCardProps {
  option: ServiceOption;
  onPress: (option: ServiceOption) => void;
}

type RootStackParamList = Record<
  string,
  { serviceName: string; optionSelected: string }
>;

/* ---------- OPTION CARD ---------- */

const OptionCard = memo(({ option, onPress }: OptionCardProps) => {
  return (
    <View style={styles.optionWrapper}>
      {/* Title ABOVE the card */}
      <Text style={styles.optionTitle} numberOfLines={1}>
        {option.title}
      </Text>

      <Pressable
        onPress={() => onPress(option)}
        style={({ pressed }) => [
          styles.card,
          pressed && styles.cardPressed,
        ]}
      >
        <Image source={option.image} style={styles.image} />
      </Pressable>
    </View>
  );
});

OptionCard.displayName = 'OptionCard';

/* ---------- MAIN COMPONENT ---------- */

const IconModal: React.FC<ModalProps> = ({ service, onClose }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = useCallback(
    (option: ServiceOption) => {
      if (!option.route) return;

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
      {/* Backdrop dismiss */}
      <Pressable
        style={StyleSheet.absoluteFill}
        onPress={onClose}
        accessibilityLabel="Close modal"
      />

      <View style={styles.centeredCard}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>{service.name}</Text>
          <Pressable style={styles.closeButton} onPress={onClose} hitSlop={15}>
            <Image
              source={require('@/assets/icons/back.png')}
              style={styles.closeButtonImage}
            />
          </Pressable>
        </View>

        {/* Options Grid */}
        <FlatList
          data={service.options}
          keyExtractor={(item) => item.id}
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
  /* BACKDROP */
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },

  /* MODAL CARD */
  centeredCard: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#f2eded',
    borderRadius: 24,
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 14,
    elevation: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#3e2d2d',
  },

  closeButton: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 20,
    elevation: 3,
  },

  closeButtonImage: {
    width: 14,
    height: 14,
    tintColor: '#333',
  },

  /* LIST */
  listContent: {
    paddingBottom: 16,
  },

  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  /* OPTION CARD */
  optionWrapper: {
    flex: 1,
    maxWidth: '31%',
  },

  optionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 4,
  },

  card: {
    height: 85,
    borderRadius: 16,
    overflow: 'hidden',
  },

  cardPressed: {
    transform: [{ scale: 0.95 }],
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
