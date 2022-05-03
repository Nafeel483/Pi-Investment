import React from 'react';
import {
  StyleSheet,
  Image,
  Platform,
  Text,
  View
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Images from '../Theme/Images';
import Colors from '../Theme/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import Overview from '../Views/Overview';
import Projects from '../Views/Projects';
import PIF from '../Views/PIF';
import Investment from '../Views/Investment';
import Blog from '../Views/Blog';
import Notify from '../Views/Notify';


const navigationRef = React.createRef();



export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

const Tab = createBottomTabNavigator();
const OverviewStack = createStackNavigator();
const ProjectStack = createStackNavigator();
const PIFStack = createStackNavigator();
const InvestmentStack = createStackNavigator();
const BlogStack = createStackNavigator();

export const OverviewsStack = () => {
  return (
    <OverviewStack.Navigator initialRouteName="OverviewHome"
      screenOptions={{
        headerShown: false,
      }}>
      <OverviewStack.Screen name="OverviewHome" component={Overview} />
      <OverviewStack.Screen name="Notify" component={Notify} />
    </OverviewStack.Navigator>
  );
}
export const ProjectsStack = () => {
  return (
    <ProjectStack.Navigator initialRouteName="ProjectsHome"
      screenOptions={{
        headerShown: false,
      }}>
      <ProjectStack.Screen name="ProjectsHome" component={Projects} />

    </ProjectStack.Navigator>
  );
}
export const PIFsStack = () => {
  return (
    <PIFStack.Navigator initialRouteName="PIFHome"
      screenOptions={{
        headerShown: false,
      }}>
      <PIFStack.Screen name="PIFHome" component={PIF} />
    </PIFStack.Navigator>
  );
}

export const InvestmentsStack = () => {
  return (
    <InvestmentStack.Navigator initialRouteName="InvestmentsHome"
      screenOptions={{
        headerShown: false,
      }}>
      <InvestmentStack.Screen name="InvestmentsHome" component={Investment} />
    </InvestmentStack.Navigator>
  );
}


export const BlogsStack = () => {
  return (
    <BlogStack.Navigator initialRouteName="BlogHome"
      screenOptions={{
        headerShown: false,
      }}>
      <BlogStack.Screen name="BlogHome" component={Blog} />

    </BlogStack.Navigator>
  );
}



export const BottomTabView = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let image
          let labelName
          if (route.name === 'Overview') {
            image = focused ? Images.overview : Images.overview;
            labelName = 'Tổng quan'
          }
          else if (route.name === 'Projects') {
            image = focused
              ? Images.project
              : Images.project;
            labelName = 'Dự án'
          }
          else if (route.name === 'PIF') {
            image = focused
              ? Images.pif
              : Images.pif;
            labelName = 'Về PIF'
          }
          else if (route.name === 'Investment') {
            image = focused ? Images.investment : Images.investment;
            labelName = 'Quản lý đầu tư'
          }
          else if (route.name === 'Blog') {
            image = focused ? Images.blog : Images.blog;
            labelName = 'Blog'
          }

          return (
            <>
              <Image
                source={image}
                style={{
                  width: hp(2.8),
                  height: hp(2.8),
                  tintColor: focused ?  Colors.blue : Colors.dullBlue,
                  marginTop: Platform.OS == 'ios' ? hp(1) : 0
                }}
              />

              <Text style={{
                marginBottom: Platform.OS == 'android' ? hp(1.5) : hp(0.2),
                marginTop: Platform.OS == 'android' ? hp(-1.5) : hp(1),
                color: focused == true ? Colors.blue : Colors.dullBlue,
                textAlign: 'center',
                fontSize: hp(1.1)
              }}>{labelName}</Text>
            </>
          );
        },
        tabBarStyle: { height: hp(10) },
        headerShown: false,
        tabBarShowLabel: false
      })}
    // tabBarOptions={{
    //   activeTintColor: Colors.Black,
    //   inactiveTintColor: Colors.blue,
    // }}
    >
      <Tab.Screen name="Overview" component={OverviewsStack} />
      <Tab.Screen name="Projects" component={ProjectsStack} />
      <Tab.Screen name="PIF" component={PIFsStack} />
      <Tab.Screen name="Investment" component={InvestmentsStack} />
      <Tab.Screen name="Blog" component={BlogsStack} />
    </Tab.Navigator>
  );
}



export default BottomTabView