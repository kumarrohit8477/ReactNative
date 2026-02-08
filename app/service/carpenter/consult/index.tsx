import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
  StatusBar,
  Alert,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// --- Interfaces ---
interface TimeSlot {
  id: string;
  time: string;
}

interface DateOption {
  id: string;
  day: string; // e.g., 'Mon'
  date: number; // e.g., 24
  fullDate: string; // e.g., '2023-10-24'
}

// --- Dummy Data ---
const DATES: DateOption[] = [
  { id: '1', day: 'Mon', date: 21, fullDate: '2023-10-21' },
  { id: '2', day: 'Tue', date: 22, fullDate: '2023-10-22' },
  { id: '3', day: 'Wed', date: 23, fullDate: '2023-10-23' },
  { id: '4', day: 'Thu', date: 24, fullDate: '2023-10-24' },
  { id: '5', day: 'Fri', date: 25, fullDate: '2023-10-25' },
  { id: '6', day: 'Sat', date: 26, fullDate: '2023-10-26' },
];

const MORNING_SLOTS: TimeSlot[] = [
  { id: '1', time: '09:00 AM' },
  { id: '2', time: '10:00 AM' },
  { id: '3', time: '11:00 AM' },
  { id: '4', time: '11:30 AM' },
];

const AFTERNOON_SLOTS: TimeSlot[] = [
  { id: '5', time: '02:00 PM' },
  { id: '6', time: '03:00 PM' },
  { id: '7', time: '04:00 PM' },
  { id: '8', time: '05:30 PM' },
];

const BookConsultation = () => {
  // --- State ---
  const [selectedDate, setSelectedDate] = useState<string>(DATES[0].id);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [reason, setReason] = useState('');
  
  // --- Handlers ---
  const handleConfirm = () => {
    if (!selectedTime) {
      Alert.alert('Selection Missing', 'Please select a time slot.');
      return;
    }
    if (!reason.trim()) {
      Alert.alert('Details Missing', 'Please briefly describe the reason for consultation.');
      return;
    }

    const dateObj = DATES.find(d => d.id === selectedDate);
    const timeObj = [...MORNING_SLOTS, ...AFTERNOON_SLOTS].find(t => t.id === selectedTime);

    Alert.alert(
      'Booking Confirmed!',
      `Date: ${dateObj?.fullDate}\nTime: ${timeObj?.time}\nReason: ${reason}`,
      [{ text: 'OK', onPress: () => console.log('Booking Saved') }]
    );
  };

  // --- Render Items ---
  const renderDateItem = ({ item }: { item: DateOption }) => {
    const isSelected = selectedDate === item.id;
    return (
      <TouchableOpacity
        style={[styles.dateCard, isSelected && styles.dateCardActive]}
        onPress={() => setSelectedDate(item.id)}
      >
        <Text style={[styles.dateDay, isSelected && styles.textActive]}>{item.day}</Text>
        <Text style={[styles.dateNumber, isSelected && styles.textActive]}>{item.date}</Text>
      </TouchableOpacity>
    );
  };

  const renderTimeSlot = (slot: TimeSlot) => {
    const isSelected = selectedTime === slot.id;
    return (
      <TouchableOpacity
        key={slot.id}
        style={[styles.timeChip, isSelected && styles.timeChipActive]}
        onPress={() => setSelectedTime(slot.id)}
      >
        <Text style={[styles.timeText, isSelected && styles.textActive]}>{slot.time}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* 1. Date Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Date</Text>
          <Text style={styles.sectionSubtitle}>October 2023</Text>
          <FlatList
            data={DATES}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderDateItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.dateList}
          />
        </View>

        {/* 2. Time Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Time</Text>
          
          <Text style={styles.slotHeader}>Morning</Text>
          <View style={styles.slotsGrid}>
            {MORNING_SLOTS.map(renderTimeSlot)}
          </View>

          <Text style={styles.slotHeader}>Afternoon</Text>
          <View style={styles.slotsGrid}>
            {AFTERNOON_SLOTS.map(renderTimeSlot)}
          </View>
        </View>

        {/* 3. Patient Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Details</Text>
          <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Full Name"
                style={styles.input}
                placeholderTextColor="#999"
                defaultValue="Alex Johnson"
            />
            <TextInput 
                placeholder="Write your problem/reason..."
                style={[styles.input, styles.textArea]}
                placeholderTextColor="#999"
                multiline
                numberOfLines={4}
                value={reason}
                onChangeText={setReason}
                textAlignVertical="top"
            />
          </View>
        </View>

      </ScrollView>

      {/* Footer Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.confirmButtonText}>Confirm Booking</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#333',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollContent: {
    paddingBottom: 100, // space for footer
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f9f9f9',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  // Date Picker
  dateList: {
    paddingVertical: 10,
  },
  dateCard: {
    width: 60,
    height: 70,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    // Shadow
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  dateCardActive: {
    backgroundColor: '#333',
    borderColor: '#333',
  },
  dateDay: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  dateNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  textActive: {
    color: '#fff',
  },
  // Time Picker
  slotHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginTop: 10,
    marginBottom: 10,
  },
  slotsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  timeChip: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#eee',
    width: '30%', // roughly 3 columns
    alignItems: 'center',
  },
  timeChipActive: {
    backgroundColor: '#333',
    borderColor: '#333',
  },
  timeText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },
  // Inputs
  inputContainer: {
    marginTop: 10,
  },
  input: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },
  textArea: {
    height: 100,
  },
  // Footer
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  confirmButton: {
    backgroundColor: '#333',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookConsultation;