import React, { useState } from 'react';
import {
  Image,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  FlatList
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Styles from './Styles';
import Images from '../../Theme/Images';
import Colors from '../../Theme/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ProjectList from '../../Components/ProjectList';
import NewProject from '../../Components/NewProject';

const Projects = (props) => {
  const [search, setSearch] = useState("")
  const [tabsData, setTabsData] = useState([
    "Tất cả",
    "Giải trí",
    "Thẩm mĩ",
    "Công nghệ"
  ])
  const [clickTab, setClickTab] = useState(2)
  const [listData, setListData] = useState([
    {
      headImage: Images.headList1,
      image: Images.list6,
      title: "Nhà hàng Tân Nam Hải",
    },
    {
      headImage: Images.headList2,
      image: Images.list7,
      title: "Nhà hàng Tân Nam Hải",
    },
  ])
  const [newsList, setNewsList] = useState([
    {
      image: Images.list5
    },
    {
      image: Images.list3
    },
    {
      image: Images.list1
    },
  ])

  const myNewsList = (item, newsKey) => {
    return (
      <NewProject item={item} unique={newsKey} />
    )
  }

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
              <Text style={Styles.headerText}>{"Dự án"?.toUpperCase()}</Text>
              <View style={Styles.empty} />
            </View>
          </ImageBackground>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContent}>

              {/* Search */}
              <View style={Styles.emailWrapper}>
                <Image source={Images.search} style={Styles.searchStyle} />
                <TextInput
                  style={Styles.emailInput}
                  value={search}
                  placeholder={"Tìm kiếm dự án đầu tư"}
                  placeholderTextColor={"#8F8F8F"}
                  autoCapitalize='none'
                  onChangeText={(value) => {
                    setSearch(value)
                  }}
                />
              </View>

              {/* Tabs */}
              <View style={Styles.tabContainer}>
                {
                  tabsData?.map((item, tabKey) => {
                    return (
                      <TouchableOpacity key={tabKey} onPress={() => setClickTab(tabKey)}>
                        <View>
                          <Text style={[Styles.tabHeadText, {
                            color: clickTab == tabKey ? "#1A469C" : '#45575B',
                            fontSize: clickTab == tabKey ? hp(2) : hp(1.5),
                            marginTop: clickTab == tabKey ? 0 : hp(0.5),
                          }]}>{item}</Text>
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

              {
                listData?.map((item, listKey) => {
                  return (
                    <ProjectList item={item} unique={listKey} navigation={props.navigation} />
                  )
                })
              }
              <View style={Styles.listHeadCombine}>
                <Text style={Styles.listHeadText}>{"Đã kết thúc"?.toUpperCase()}</Text>
                <Text style={Styles.viewAll}>{"Xem tất cả"}</Text>
              </View>
              <View style={Styles.listSeperator} />
              <View style={Styles.allProductList}>
                <FlatList
                  horizontal={true}
                  scrollEnabled={true}
                  showsHorizontalScrollIndicator={false}
                  data={newsList}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => myNewsList(item, index)}
                />
              </View>

            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
export default Projects;