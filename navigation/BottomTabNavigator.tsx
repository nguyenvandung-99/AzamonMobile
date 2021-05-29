import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import BiddingScreen from '../screens/bidding';
import MyAccountScreen from '../screens/myaccount';
import MatchHighlightScreen from '../screens/myaccount/matchhighlight'
import SelectPicture from '../screens/myaccount/matchhighlight/selectpicture';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Bidding"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, tabStyle: { paddingVertical: 5 } }}>
      <BottomTab.Screen
        name="Bidding"
        component={BiddingNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="soccer" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="My Account"
        component={MyAccountNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="account-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof MaterialCommunityIcons>['name']; color: string }) {
  return <MaterialCommunityIcons style={{ marginBottom: -3}} size={30} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const BiddingStack = createStackNavigator<TabOneParamList>();

function BiddingNavigator() {
  return (
    <BiddingStack.Navigator>
      <BiddingStack.Screen
        name="BiddingScreen"
        component={BiddingScreen}
        options={{ headerTitle: 'Bidding' }}
      />
    </BiddingStack.Navigator>
  );
}

const MyAccountStack = createStackNavigator<TabTwoParamList>();

function MyAccountNavigator() {
  return (
    <MyAccountStack.Navigator>
      <MyAccountStack.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{ headerTitle: 'My Account' }}
      />
      <MyAccountStack.Screen
        name="MatchHighlight"
        component={MatchHighlightScreen}
        options={{ headerTitle: 'Match Highlight'}}
      />
      <MyAccountStack.Screen
        name="SelectPicture"
        component={SelectPicture}
        options={{ headerTitle: 'Select Picture'}}
      />
    </MyAccountStack.Navigator>
  );
}
