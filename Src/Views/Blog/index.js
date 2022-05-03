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
import News from '../../Components/News';

const Blog = (props) => {
  const [search, setSearch] = useState("")
  const [tabsData, setTabsData] = useState([
    "Tin công ty",
    "Sự kiện",
    "Doanh nghiệp",
    "Đầu tư"
  ])
  const [clickTab, setClickTab] = useState(0)
  const [listData, setListData] = useState([
    {
      image: Images.list1,
      title: "Sự kiện ra mắt nền tảng PIF - Pi",
      description: "Investment Fund tại Việt Nam",
      date: "24/09/2022 11:23"
    },
    {
      image: Images.list2,
      title: "Sự kiện ra mắt nền tảng PIF - Pi",
      description: "Investment Fund tại Việt Nam",
      date: "24/09/2022 11:23"
    },
    {
      image: Images.list3,
      title: "Sự kiện ra mắt nền tảng PIF - Pi",
      description: "Investment Fund tại Việt Nam",
      date: "24/09/2022 11:23"
    },
    {
      image: Images.list4,
      title: "Sự kiện ra mắt nền tảng PIF - Pi",
      description: "Investment Fund tại Việt Nam",
      date: "24/09/2022 11:23"
    },
    {
      image: Images.list1,
      title: "Sự kiện ra mắt nền tảng PIF - Pi",
      description: "Investment Fund tại Việt Nam",
      date: "24/09/2022 11:23"
    },
     {
      image: Images.list2,
      title: "Sự kiện ra mắt nền tảng PIF - Pi",
      description: "Investment Fund tại Việt Nam",
      date: "24/09/2022 11:23"
    },
    {
      image: Images.list3,
      title: "Sự kiện ra mắt nền tảng PIF - Pi",
      description: "Investment Fund tại Việt Nam",
      date: "24/09/2022 11:23"
    },
    {
      image: Images.list4,
      title: "Sự kiện ra mắt nền tảng PIF - Pi",
      description: "Investment Fund tại Việt Nam",
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
              <TouchableOpacity style={Styles.backBoxContainer}>
                <Image source={Images.back} style={Styles.backImage} />
              </TouchableOpacity>
              <Text style={Styles.headerText}>{"BLOG"}</Text>
              <View style={Styles.empty} />
            </View>
          </ImageBackground>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContent}>

              {/* Search */}
              <View style={Styles.searchFlex}>
                <Text style={Styles.searchText}>{"Danh mục"?.toUpperCase()}</Text>
                <View style={Styles.emailWrapper}>
                  <Image source={Images.search} style={Styles.searchStyle} />
                  <TextInput
                    style={Styles.emailInput}
                    value={search}
                    placeholder={"Tìm kiếm bài viết"}
                    placeholderTextColor={"#8F8F8F"}
                    autoCapitalize='none'
                    onChangeText={(value) => {
                      setSearch(value)
                    }}
                  />
                </View>
              </View>
              {/* Tabs */}
              <View style={Styles.tabContainer}>
                {
                  tabsData?.map((item, tabKey) => {
                    return (
                      <TouchableOpacity key={tabKey} onPress={() => setClickTab(tabKey)}>
                        <View>
                          <Text style={[Styles.tabHeadText, { color: clickTab == tabKey ? "#1A469C" : '#45575B' }]}>{item}</Text>
                          {
                            clickTab == tabKey ?
                              <View style={Styles.seperatorTab} />
                              : null
                          }
                        </View>
                      </TouchableOpacity>
                    )
                  })
                }
              </View>

              <View style={Styles.listSeperator} />
              {
                listData?.map((item, listKey) => {
                  return (
                    <News item={item} unique={listKey} screen={"Blog"} />
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
export default Blog;