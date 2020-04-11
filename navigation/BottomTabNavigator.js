import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import RelaxScreen from '../screens/RelaxScreen';
import InsightsScreen from '../screens/InsightsScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Chat',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-chatbubbles" />,
        }}
      />
      <BottomTab.Screen
        name="Insights"
        component={InsightsScreen}
        options={{
          title: 'Insights',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-bulb" />,
        }}
      />
      <BottomTab.Screen
        name="Relax"
        component={RelaxScreen}
        options={{
          title: 'Relax',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-pulse" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'WeGotThis!';
    case 'Links':
      return 'Links to learn more';
    case 'Relax':
      return 'Relax';
    case 'Insights':
      return 'Insights';
  }
}
