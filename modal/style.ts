import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
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
    backgroundColor: '#fff',
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
