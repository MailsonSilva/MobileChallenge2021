import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons as Icons } from '@expo/vector-icons';

import Home from "../../pages/Home";


export default function MyTabs() {
  const Tab = createBottomTabNavigator();

  return (
   <Tab.Navigator
      screenOptions={({ route }) => ({
         tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
               case 'Home':
                  iconName = 'home';
                  break;
            }

            return <Icons name={iconName} size={38} color={color} />;
         },
      })}
      tabBarOptions={{
         showLabel: false,
      }}
   >         
      <Tab.Screen name="Home" component={Home}/>      
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

