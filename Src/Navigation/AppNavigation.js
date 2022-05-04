import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import BottomTab from './BottomNavigation';
import Splash from '../Views/Splash';
import Account from '../Views/Account';
import History from '../Views/History';

enableScreens();

const Stack = createStackNavigator();
const navigationRef = React.createRef();


const options = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,

      }
    };
  },

};

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export default function RootNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          transitionConfig: () => ({
            containerStyle: {
              backgroundColor: 'transparent'
            }
          }),
          navigationOptions: { gesturesEnabled: false, }
        }}>
        <Stack.Screen name='AuthStack' component={AuthStack} />
        <Stack.Screen name='BottomTab' component={BottomTab} />
        <Stack.Screen name='ProfileStack' component={ProfileStack} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'extend',
            }),
          },
        }),
      }}
      presentation="modal"
    >
      <Stack.Screen name='Splash' component={Splash} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'Splash', animation: 'fade-in'
          }
        ]} />
     
      {/*  */}

    </Stack.Navigator>
  )
}


export const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'extend',
            }),
          },
        }),
      }}
      presentation="modal"
    >
      <Stack.Screen name='Account' component={Account} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'Account', animation: 'fade-in'
          }
        ]} />
        <Stack.Screen name='History' component={History} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'History', animation: 'fade-in'
          }
        ]} />
     
      {/* History */}

    </Stack.Navigator>
  )
}
