import React, { useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MostBookingServicesItem from "./mostbookingserviceitem";
const MostBookingServices = () => {
  const scrollRef = useRef<ScrollView>(null);
  const navigation = useNavigation<any>(); // Replace with proper type if needed
  return (
    <View style={styles.mainbox}>
      <Text style={styles.title}>Most Booked Services</Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Carpenter")}
        >
          <MostBookingServicesItem
            image={require("@/assets/images/bed.png")}
            serviceName="Carpenter"
            rating="4.0"
            price="400"
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Ro")}
        >
          <MostBookingServicesItem
            image={require("@/assets/images/ro.png")}
            serviceName="RO Service"
            rating="4.0"
            price="400"
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Acservice")}
        >
          <MostBookingServicesItem
            image={require("@/assets/images/ac.png")}
            serviceName="AC Service"
            rating="4.0"
            price="400"
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Kitchen")}
        >
          <MostBookingServicesItem
            image={require("@/assets/images/kitchen.png")}
            serviceName="Modular Kitchen"
            rating="4.0"
            price="400"
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Bed")}
        >
          <MostBookingServicesItem
            image={require("@/assets/images/bed.png")}
            serviceName="King Size Bed"
            rating="4.0"
            price="10000"
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default MostBookingServices;

const styles = StyleSheet.create({
  mainbox: {
    marginVertical: 10,
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
    color: "#000",
  },
  scrollContent: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
});
