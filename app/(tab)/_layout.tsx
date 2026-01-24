import { Tabs } from "expo-router"
import React from "react"
const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }} >
      <Tabs.Screen name="index" options={{ title: 'Home', }} />
      <Tabs.Screen name="cart" options={{ title: 'Cart', }} />
      <Tabs.Screen name="account" options={{ title: 'Account', }} />

    </Tabs>
  )
}

export default _layout


