import React, { memo, useCallback } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import { router } from 'expo-router';
import { styles } from './style';
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

/* ---------- OPTION CARD ---------- */

const OptionCard = memo(({ option, onPress }: OptionCardProps) => {
  return (
    <View style={styles.optionWrapper}>
     
      <Pressable
        onPress={() => onPress(option)}
        style={({ pressed }) => [
          styles.card,
          pressed && styles.cardPressed,
        ]}
      >
        <Image source={option.image} style={styles.image} />
      </Pressable>
       <Text
        style={styles.optionTitle}
        numberOfLines={2}          // max 2 lines
        ellipsizeMode="tail"
      >
        {option.title}
      </Text>
    </View>
  );
});

OptionCard.displayName = 'OptionCard';

/* ---------- MAIN MODAL ---------- */

const IconModal: React.FC<ModalProps> = ({ service, onClose }) => {
  const handlePress = useCallback(
    (option: ServiceOption) => {
      if (!option.route) return;

      // Close modal
      onClose();

      // Navigate after modal animation
      setTimeout(() => {
        router.push({
          pathname: option.route,
          params: {
            serviceName: service.name,
            optionSelected: option.title,
          },
        });
      }, 0);
    },
    [onClose, service.name]
  );

  return (
    <View style={styles.backdrop}>
      {/* Backdrop */}
      <Pressable
        style={StyleSheet.absoluteFill}
        onPress={onClose}
        accessibilityLabel="Close modal"
      />

      {/* Modal Card */}
      <View style={styles.centeredCard}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>{service.name}</Text>
          <Pressable onPress={onClose} hitSlop={15} style={styles.closeButton}>
            <Image
              source={require('@/assets/icons/back.png')}
              style={styles.closeButtonImage}
            />
          </Pressable>
        </View>

        {/* Options */}
        <FlatList
          data={service.options}
          keyExtractor={(item) => item.id}
          numColumns={3}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <OptionCard option={item} onPress={handlePress} />
          )}
        />
      </View>
    </View>
  );
};

export default memo(IconModal);


