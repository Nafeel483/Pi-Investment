import React from 'react';
import {
  StyleSheet,
  Image,
  Platform,
  Text,
  View
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Images from '../Styles/Images';
import Colors from '../Styles/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import Dashboard from '../Screens/Dashboard';
import Projects from '../Screens/Projects';
import Tasks from '../Screens/TaskScreens/Tasks';
import Chat from '../Screens/ChatScreens/Chat';
import Works from '../Screens/Works';
import Reports from '../Screens/Reports';
import ReportView from '../Screens/Reports/ReportView';
import ReportWorkView from '../Screens/Reports/ReportWorkView';


const navigationRef = React.createRef();



export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

const Tab = createBottomTabNavigator();
const DashboardStack = createStackNavigator();
const ChatStack = createStackNavigator();
const TaskStack = createStackNavigator();
const ProjectStack = createStackNavigator();
const WorkStack = createStackNavigator();
const ReportsStack = createStackNavigator();

export const DashboardsStack = () => {
  return (
    <DashboardStack.Navigator initialRouteName="DashboardHome"
      screenOptions={{
        headerShown: false,
      }}>
      <DashboardStack.Screen name="DashboardHome" component={Dashboard} />
    </DashboardStack.Navigator>
  );
}

export const ChatsStack = () => {
  return (
    <ChatStack.Navigator initialRouteName="ChatHome"
      screenOptions={{
        headerShown: false,
      }}>
      <ChatStack.Screen name="ChatHome" component={Chat} />
    </ChatStack.Navigator>
  );
}

export const TasksStack = () => {
  return (
    <TaskStack.Navigator initialRouteName="TasksHome"
      screenOptions={{
        headerShown: false,
      }}>
      <TaskStack.Screen name="TasksHome" component={Tasks} />
    </TaskStack.Navigator>
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
export const WorksStack = () => {
  return (
    <WorkStack.Navigator initialRouteName="WorksHome"
      screenOptions={{
        headerShown: false,
      }}>
      <WorkStack.Screen name="WorksHome" component={Works} />

    </WorkStack.Navigator>
  );
}

export const ReportStack = () => {
  return (
    <ReportsStack.Navigator initialRouteName="ReportsHome"
      screenOptions={{
        headerShown: false,
      }}>
      <ReportsStack.Screen name="ReportsHome" component={Reports} />
      <ReportsStack.Screen name="ReportView" component={ReportView} />
      <ReportsStack.Screen name="ReportWorkView" component={ReportWorkView} />
    </ReportsStack.Navigator>
  );
}

export const BottomTabView = (props) => {
  // console.log("Bottom Tabs", props, props?.chat)
  let unreadChatCount = props?.chat?.unreadChatCount?.count ? props?.chat?.unreadChatCount?.count : 0
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let image
          let labelName
          if (route.name === 'Dashboard') {
            image = focused ? Images.dashboadIcon : Images.dashboadIcon;
            labelName = 'Dashboard'
          }
          else if (route.name === 'Chat') {
            image = focused
              ? Images.message
              : Images.message;
            labelName = 'Chat'
          }
          else if (route.name === 'Tasks') {
            image = focused
              ? Images.task
              : Images.task;
            labelName = 'Tasks'
          }
          else if (route.name === 'Projects') {
            image = focused ? Images.folder : Images.folder;
            labelName = 'Projects'
          }
          else if (route.name === 'Works') {
            image = focused ? Images.workIcon : Images.workIcon;
            labelName = 'Works'
          }
          else if (route.name === 'Reports') {
            image = focused ? Images.reports : Images.reports;
            labelName = 'Reports'
          }
          return (
            <>
              <Image
                source={image}
                style={{
                  width: route.name === 'Tasks' ? hp(2.6) : route.name === 'Projects' ? hp(2.8) : route.name === 'Reports' ? hp(2.6) : hp(2.8),
                  height: route.name === 'Tasks' ? hp(2.8) : route.name === 'Projects' ? hp(2.9) : route.name === 'Reports' ? hp(3) : hp(2.8),
                  tintColor: focused ? Colors.Black : Colors.blue,
                  marginTop: Platform.OS == 'ios' ? hp(1) : 0
                }}
              />
              {
                route.name === 'Chat' && unreadChatCount != 0 ?
                  <View style={{
                    height: hp(2.3),
                    width: hp(2.3),
                    position: 'absolute',
                    right: 15,
                    top: Platform.OS == 'ios' ? 2 : 8,
                    borderRadius: hp(2.3),
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Colors.red,
                  }}>
                    <Text style={{
                      fontSize: hp(1.3),
                      color: Colors.White,
                      fontWeight: '700',
                      fontFamily: "Inter",
                    }}>
                      {`${unreadChatCount?.toString()}`}
                    </Text>
                  </View>
                  : null
              }
              <Text style={{
                marginBottom: Platform.OS == 'android' ? hp(1.5) : hp(0.2),
                marginTop: Platform.OS == 'android' ? hp(-1.5) : hp(1),
                color: focused == true ? Colors.Black : Colors.blue,
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
      <Tab.Screen name="Dashboard" component={DashboardsStack} />
      <Tab.Screen name="Chat" component={ChatsStack} />
      <Tab.Screen name="Tasks" component={TasksStack} />
      <Tab.Screen name="Projects" component={ProjectsStack} />
      <Tab.Screen name="Works" component={WorksStack} />
      <Tab.Screen name="Reports" component={ReportStack} />
    </Tab.Navigator>
  );
}

const mapStateToProps = state => {
  return {
    chat: state.chat
  }
}

export default connect(mapStateToProps, null)(BottomTabView)