import { StyleSheet } from "react-native";
const COLORS = {
  primary: '#005A64',
  secondary: '#E6F4F6',
  background: '#FFFFFF',
  sectionBg: '#F7F9FA',
  cardBg: '#FFFFFF',
  textDark: '#1A1A1A',
  textMuted: '#6B7280',
  border: '#E5E7EB',
  star: '#FFB400',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  /* ---------- HERO ---------- */
  heroContainer: {
    flexDirection: 'row',
    height: 180,
    margin: 16,
    borderRadius: 16,
    backgroundColor: '#FFF5EA',
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  heroContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#7D512D',
  },
  heroSubtitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 6,
    color: '#7D512D',
  },
  heroImage: {
    width: '55%',
    height: '100%',
    resizeMode: 'cover',
  },

  /* ---------- CATEGORY ---------- */
  categorySection: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textDark,
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    width: '25%',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: COLORS.cardBg,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    marginBottom: 8,
  },
  gridIcon: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  gridText: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '600',
    color: COLORS.textMuted,
    lineHeight: 16,
  },

  grayDivider: {
    height: 10,
    backgroundColor: COLORS.sectionBg,
    marginVertical: 8,
  },

  /* ---------- SERVICE SECTION ---------- */
  serviceSection: {
    backgroundColor: COLORS.sectionBg,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.textDark,
    paddingHorizontal: 16,
    marginBottom: 12,
  },

  /* ---------- CARD ---------- */
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardBg,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 16,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
  },
  cardLeft: {
    flex: 1,
    paddingRight: 12,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  ratingText: {
    fontSize: 13,
    color: COLORS.textMuted,
    marginLeft: 4,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 8,
    color: COLORS.textDark,
  },

  featureRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.primary,
    marginTop: 7,
    marginRight: 8,
  },
  featureText: {
    fontSize: 13,
    color: COLORS.textMuted,
    lineHeight: 18,
    flex: 1,
  },
  viewDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  viewDetailsText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.primary,
  },

  /* ---------- RIGHT SIDE ---------- */
  cardRight: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: 88,
    height: 75,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
  },
  addButton: {
    marginTop: 10,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 26,
    paddingVertical: 7,
    borderRadius: 8,
    elevation: 3,
  },
  addText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  optionsText: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginTop: 18,
  },
});
