import React, { useState } from 'react';
import {
  Image,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Styles from './Styles';
import Images from '../../Theme/Images';
import Colors from '../../Theme/Colors';
import NotifyList from '../../Components/NotifyList';

const Notify = (props) => {
  const [listData, setListData] = useState([
    {
      image: Images.list1,
      title: "Sự kiện ra mắt nền tảng PIF - Pi",
      date: "24/09/2022 11:23"
    },
    {
      image: Images.list2,
      title: "Sự kiện ra mắt nền tảng PIF - Pi",
      date: "24/09/2022 11:23"
    },
    {
      image: Images.list3,
      title: "Sự kiện ra mắt nền tảng PIF - Pi",
      date: "24/09/2022 11:23"
    },
    {
      image: Images.list4,
      title: "Sự kiện ra mắt nền tảng PIF - Pi",
      date: "24/09/2022 11:23"
    },
    {
      image: Images.list1,
      title: "Sự kiện ra mắt nền tảng PIF - Pi",
      date: "24/09/2022 11:23"
    },
    {
      image: Images.list2,
      title: "Sự kiện ra mắt nền tảng PIF - Pi",
      date: "24/09/2022 11:23"
    },
    {
      image: Images.list3,
      title: "Sự kiện ra mắt nền tảng PIF - Pi",
      date: "24/09/2022 11:23"
    },
    {
      image: Images.list4,
      title: "Sự kiện ra mắt nền tảng PIF - Pi",
      date: "24/09/2022 11:23"
    },
  ])

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={Styles.safeHeadContainer} />
        <SafeAreaView style={Styles.safeAreaContainer} >
          <StatusBar barStyle="dark-content" />

          <ImageBackground source={Images.header} style={Styles.backgroundStyle}>
            <View style={Styles.headerContainer}>
              <TouchableOpacity onPress={() => { props.navigation.goBack() }}
                style={Styles.backBoxContainer}>
                <Image source={Images.back} style={Styles.backImage} />
              </TouchableOpacity>
              <Text style={Styles.headerText}>{"Thông báo"?.toUpperCase()}</Text>
              <View style={Styles.empty} />
            </View>
          </ImageBackground>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContent}>
              {
                listData?.map((item, listKey) => {
                  return (
                    <NotifyList item={item} unique={listKey}  />
                  )
                })

              }
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
export default Notify;