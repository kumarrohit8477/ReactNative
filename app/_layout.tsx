import { Stack } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Stack>
      {/* The main tab interface */}
      <Stack.Screen name="(tab)" options={{ headerShown: false }} />
    </Stack>
  )
}

export default _layout