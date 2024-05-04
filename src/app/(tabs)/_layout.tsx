import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons'; import { Link, Tabs } from "expo-router";

import Colors from "@/src/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useIsAdmin } from "@/src/stores/authStore";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color: string;
}) {
  return <MaterialCommunityIcons size={20} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const admin = useIsAdmin()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: admin ? Colors.light.background : Colors.light.tint,
        tabBarInactiveTintColor: admin ? Colors.light.text : Colors.light.text,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {
          backgroundColor: admin ? Colors.light.tint : Colors.light.background,
        }
      }}
    >
      <Tabs.Screen name='index' options={{ href: null }} />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          headerTitleAlign: "center",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="silverware-variant" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Orders",
          tabBarIcon: ({ color }) => <TabBarIcon name="order-bool-descending" color={color} />,
        }}
      />
    </Tabs>
  );
}
