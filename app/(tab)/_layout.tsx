import React from "react";
import { Tabs } from "expo-router";
import { Image, StyleSheet } from "react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#496868",
        tabBarInactiveTintColor: "#999999",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("@/assets/icons/home.png")}
              style={[styles.image, { tintColor: color, width: size, height: size }]}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("@/assets/icons/cart.png")}
              style={[styles.image, { tintColor: color, width: size, height: size }]}
            />),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("@/assets/icons/account.png")}
              style={[styles.image, { tintColor: color, width: size, height: size }]}
            />),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
  },
});
