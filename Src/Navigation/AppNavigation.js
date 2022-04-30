import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import BottomTabView from './BottomNavigation';
import Login from '../Screens/Authentication/Login';
import Signup from '../Screens/Authentication/Signup';
import Profile from '../Screens/Profile';
import NewChat from '../Screens/ChatScreens/NewChat';
import ChatView from '../Screens/ChatScreens/ChatView';
import GroupInfo from '../Screens/ChatScreens/GroupInfo';
import EditProfile from '../Screens/EditProfile';
import ForgotPassword from '../Screens/Authentication/ForgotPassword';
import Connection from '../Screens/Connection';
import VerifyEmail from '../Screens/Authentication/VerifyEmail';
import ResetPassword from '../Screens/Authentication/ResetPassword';
import NewTask from '../Screens/TaskScreens/NewTask';
import SplashScreen from '../Screens/SplashScreen';
import NewSubTask from '../Screens/TaskScreens/NewSubTask';


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
        <Stack.Screen name='BottomTabView' component={BottomTabView} />
        <Stack.Screen name='ProfileStack' component={ProfileStack} />
        <Stack.Screen name='ChatFeature' component={ChatFeature} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen"
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
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'SplashScreen', animation: 'fade-in'
          }
        ]} />
      <Stack.Screen name='Login' component={Login} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'Login', animation: 'fade-in'
          }
        ]} />
      <Stack.Screen name='Signup' component={Signup} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'Signup', animation: 'fade-in'
          }
        ]} />
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'ForgotPassword', animation: 'fade-in'
          }
        ]} />
      <Stack.Screen name='VerifyEmail' component={VerifyEmail} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'VerifyEmail', animation: 'fade-in'
          }
        ]} />
      <Stack.Screen name='ResetPassword' component={ResetPassword} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'ResetPassword', animation: 'fade-in'
          }
        ]} />

      {/*  */}

    </Stack.Navigator>
  )
}

export const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profile"
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
      <Stack.Screen name='Profile' component={Profile} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'Profile', animation: 'fade-in'
          }
        ]} />
      <Stack.Screen name='EditProfile' component={EditProfile} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'EditProfile', animation: 'fade-in'
          }
        ]} />
      <Stack.Screen name='Connection' component={Connection} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'Connection', animation: 'fade-in'
          }
        ]} />
      {/*  */}


    </Stack.Navigator>
  )
}

export const ChatFeature = () => {
  return (
    <Stack.Navigator initialRouteName="NewChat"
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
      <Stack.Screen name='NewChat' component={NewChat} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'NewChat', animation: 'fade-in'
          }
        ]} />
      <Stack.Screen name='ChatView' component={ChatView} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'ChatView', animation: 'fade-in'
          }
        ]} />
      <Stack.Screen name='GroupInfo' component={GroupInfo} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'GroupInfo', animation: 'fade-in'
          }
        ]} />
      <Stack.Screen name='NewTask' component={NewTask} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'NewTask', animation: 'fade-in'
          }
        ]} />
      <Stack.Screen name='NewSubTask' component={NewSubTask} options={() => options}
        sharedElementsConfig={(props) => [
          {
            id: 'NewSubTask', animation: 'fade-in'
          }
        ]} />

      {/* NewSubTask */}
    </Stack.Navigator>
  )
}