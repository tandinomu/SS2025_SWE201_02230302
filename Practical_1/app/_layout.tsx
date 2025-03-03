import React from 'react';
import { Tabs } from 'expo-router';

const TabLayout: React.FC = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' }, // Hide tab bar for onboarding
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="second" />
      <Tabs.Screen name="third" />
    </Tabs>
  );
};

export default TabLayout;