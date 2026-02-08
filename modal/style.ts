import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  /* BACKDROP */
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)', // Slightly softer dim
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  /* MODAL CARD */
  centeredCard: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF', // Clean white
    borderRadius: 32, // Smoother corners
    paddingTop: 24,
    paddingBottom: 20,
    paddingHorizontal: 20,
    // Better Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
    paddingHorizontal: 4,
  },

  title: {
    fontSize: 24,
    fontWeight: '700', // Bolder for modern look
    color: '#1A1A1A',
    letterSpacing: -0.5,
  },

  closeButton: {
    backgroundColor: '#F3F4F6', // Light gray background
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  closeButtonImage: {
    width: 12,
    height: 12,
    tintColor: '#6B7280',
  },

  /* LIST */
  listContent: {
    paddingBottom: 8,
  },

  row: {
    justifyContent: 'flex-start', // Better control than space-between
    gap: 12, // Modern spacing
    marginBottom: 20,
  },

  /* OPTION CARD */
  optionWrapper: {
    width: (width - 110) / 3, // Dynamic calculation based on padding/gap
    alignItems: 'center',
  },

  card: {
    width: '100%',
    aspectRatio: 1, // Keep it perfectly square
    borderRadius: 20,
    backgroundColor: '#F9FAFB',
    marginBottom: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },

  cardPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.92 }],
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  optionTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#4B5563',
    textAlign: 'center',
    lineHeight: 16,
    height: 32, // Maintains 2-line alignment
  },
});