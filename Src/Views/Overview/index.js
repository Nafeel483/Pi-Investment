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
  Dimensions,
  FlatList
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styles from './Styles';
import Images from '../../Theme/Images';
import Colors from '../../Theme/Colors';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
import * as Progress from 'react-native-progress';
import NewProject from '../../Components/NewProject';
import News from '../../Components/News';

const widthScreen = Dimensions.get('window').width;

const Overview = (props) => {

  const [tableData, setTableData] = useState([
    {
      name: "Tổng đầu tư",
      price: "510.000.000"
    },
    {
      name: "Doanh thu đã nhận",
      price: "6.000.000"
    },
    {
      name: "Doanh thu hôm nay ",
      price: "$10.000"
    },
    {
      name: "Tổng thu hôm nay",
      price: "1.122.000.000"
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
  ])

  const data1 = [
    { x: -2, y: 3 },
    { x: -1, y: 10 },
    { x: 0, y: 3 },
    { x: 1, y: 8 },
    { x: 2, y: 12 },
    { x: 3, y: 8 },
    { x: 4, y: 4 },
    { x: 5, y: 12 },
    { x: 6, y: 7 },
    { x: 7, y: 14 },
    { x: 8, y: 4 },
    { x: 9, y: 15 },
    { x: 10, y: 10 },
  ]

  const data2 = [
    { x: -2, y: 15 },
    { x: -1, y: 10 },
    { x: 0, y: 12 },
    { x: 1, y: 15 },
    { x: 2, y: 6 },
    { x: 3, y: 0 },
    { x: 4, y: 5 },
    { x: 5, y: 8 },
    { x: 6, y: 12 },
    { x: 7, y: 14 },
    { x: 8, y: 12 },
    { x: 9, y: 13.5 },
    { x: 10, y: 18 },
  ]

  const myNewsList = (item, newsKey) => {
    return (
      <NewProject item={item} unique={newsKey} />
    )
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={Styles.safeAreaContainer} forceInset={{ top: "never" }} >
          <StatusBar barStyle="dark-content" />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContent}>
              <ImageBackground source={Images.background} style={Styles.backgroundStyle}>
                {/* Header */}
                <View style={Styles.headerContainer}>

                  <View style={Styles.leftCombine}>
                    <TouchableOpacity>
                      <Image source={Images.ellipse} style={Styles.profileImage} />
                    </TouchableOpacity>
                    <Text style={Styles.profileText}>{"Nguyễn Hồng Đức"}</Text>
                  </View>
                  <View style={Styles.rightCombine}>
                    <TouchableOpacity>
                      <Image source={Images.flag} style={Styles.flagStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Notify")}>
                      <Image source={Images.notification} style={Styles.notifyStyle} />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Logo Portion */}
                <View style={Styles.mainLogoContainer}>
                  <Image source={Images.homeLogo} style={Styles.appLogo} />
                </View>
                {/* WithDraw Revenue */}
                <View style={Styles.walletWrapper}>
                  <View style={Styles.walletInnerWrapper}>
                    <View>
                      <View style={{ flexDirection: 'row' }}>
                        <Image source={Images.revenue} style={Styles.revenueStyle} />
                        <Text style={Styles.revenueText}>{"VÍ DOANH THU"}</Text>
                      </View>
                      <View style={Styles.seperator} />

                      <View style={Styles.amountContainer}>
                        <Text style={Styles.amountText}>{"200.000.000"}</Text>
                        <Text style={Styles.currencyText}>{"vnd"}</Text>

                      </View>
                    </View>
                    <View>
                      <TouchableOpacity style={Styles.withdrawContainer}>
                        <Text style={Styles.withdrawText}>{`Rút tiền`?.toUpperCase()}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={Styles.reinvestContainer}>
                        <Text style={Styles.withdrawText}>{`Tái đầu tư`?.toUpperCase()}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>


                {/* Remaining Revenue */}
                <View style={Styles.walletWrapper}>
                  <View style={Styles.walletInnerWrapper}>
                    <View>
                      <View style={{ flexDirection: 'row' }}>
                        <Image source={Images.revenue} style={Styles.revenueStyle} />
                        <Text style={Styles.revenueText}>{`Doanh thu còn lại`?.toUpperCase()}</Text>
                      </View>
                      <View style={Styles.seperator} />

                      <View style={Styles.amountContainer}>
                        <Text style={Styles.amountText}>{"200.000.000"}</Text>
                        <Text style={Styles.currencyText}>{"vnd"}</Text>
                      </View>
                    </View>
                    <View>
                      <TouchableOpacity style={[Styles.withdrawContainer, { marginTop: hp(1) }]}>
                        <Text style={Styles.withdrawText}>{`Danh sách`?.toUpperCase()}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ImageBackground>
              <View style={Styles.chartsContainer}>

                <View style={Styles.combineMain}>
                  {/* 1 */}
                  <View style={Styles.combineDataContainer}>
                    <View style={Styles.combineHeader}>
                      <View style={Styles.combineHeaderWrapper}>
                        <Text style={Styles.combineHeaderText}>{"Doanh thu hôm nay"}</Text>
                      </View>
                    </View>
                    <View style={Styles.combineHeaderWrapper}>
                      <View style={Styles.combineAmountContainer}>
                        <Text style={Styles.combineAmount}>{"2.00.000"}</Text>
                        <Text style={Styles.combineCurrencyText}>{"vnd"}</Text>
                      </View>
                    </View>
                  </View>
                  {/* 2 */}
                  <View style={Styles.combineDataContainer}>
                    <View style={Styles.combineHeader}>
                      <View style={Styles.combineHeaderWrapper}>
                        <Text style={Styles.combineHeaderText}>{"Lệnh rút đang chờ"}</Text>
                      </View>
                    </View>
                    <View style={Styles.combineHeaderWrapper}>
                      <View style={Styles.combineWrapperRight}>
                        <Text style={Styles.combineAmountRight}>{"2.00.000"}</Text>
                        <Text style={Styles.combineCurrencyTextRight}>{"vnd"}</Text>
                      </View>
                      <Text style={Styles.transDate}>{"Ngày thực hiện: 20/2/2022"}</Text>
                    </View>
                  </View>

                </View>

                <View style={Styles.chatAreaWrapper}>
                  <Text style={Styles.chartHeadText}>{"Báo cáo doanh thu"?.toUpperCase()}</Text>
                  <Chart
                    style={{ height: 200, width: widthScreen / 1.2, alignSelf: 'center' }}

                    // padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                    xDomain={{ min: -2, max: 10 }}
                    yDomain={{ min: -4, max: 20 }}
                  >
                    <VerticalAxis

                      tickCount={2} theme={{
                        labels: { visible: false },
                        axis: { stroke: { color: Colors.blue, width: 5 } },
                        grid: { stroke: { color: Colors.blue, width: 5, } }
                      }} />

                    <Line data={data1} theme={{ stroke: { color: '#353535', width: 2 } }} />
                    <Line data={data2} theme={{ stroke: { color: '#44bd32', width: 2 } }} />
                  </Chart>

                  <View style={Styles.chatAreaWrapper}>
                    <Progress.Bar progress={0.45} width={widthScreen / 1.2}
                      unfilledColor={Colors.white} color={"#0045A2"}
                      borderColor={Colors.white} height={15} borderRadius={15}
                    />
                  </View>
                </View>

                <View style={Styles.chatAreaWrapper}>
                  <Text style={Styles.chartHeadText}>{"Danh sách đang đầu tư"?.toUpperCase()}</Text>
                </View>

                <View style={Styles.viewTabelContainer}>
                  <View style={Styles.viewTabelHead}>
                    <View style={Styles.tableHead}>
                      <Text style={Styles.tableHeadLeftText}>{`Tên dự án`?.toUpperCase()}</Text>
                    </View>
                    <View style={Styles.tableHeadRight}>
                      <Text style={Styles.tableHeadRightText}>{`Nhà hàng tân nam hải`?.toUpperCase()}</Text>
                      <View style={Styles.tableButtonContainer}>
                        <View style={[Styles.tableButton, { backgroundColor: Colors.white }]}>
                          <Text style={[Styles.tableButtonText, { color: "#002A54" }]}>{`Chi tiết`}</Text>
                        </View>
                        <View style={[Styles.tableButton, { backgroundColor: "#002A54", marginLeft: hp(1) }]}>
                          <Text style={[Styles.tableButtonText, { color: "#F1FF00" }]}>{`Xem hợp đồng`}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  {/* Table Content */}
                  {
                    tableData?.map((item, index) => {
                      return (
                        <View key={index}
                          style={[Styles.viewTabelContainer, { backgroundColor: index % 2 == 0 ? "#114F9C" : "#004090" }]}>
                          <View style={Styles.viewTabelHead}>
                            <View style={[Styles.tableLeftDataWrapper, { backgroundColor: index % 2 == 0 ? "#114F9C" : "#004090" }]}>
                              <Text style={Styles.tableLeftDataText}>{item?.name?.toUpperCase()}</Text>
                            </View>
                            <View style={[Styles.tableRightDataWrapper, { backgroundColor: index % 2 == 0 ? "#1153AC" : "#0045A2" }]}>
                              <Text style={Styles.tableRightDataText}>{item?.price?.toUpperCase()}</Text>
                            </View>
                          </View>
                        </View>
                      )
                    })

                  }
                </View>

              </View>
              <View style={Styles.chartsContainer}>
                <View style={Styles.listContainer}>
                  <View style={Styles.listHeadCombine}>
                    <Text style={Styles.listHeadText}>{"Dự án mới"?.toUpperCase()}</Text>
                    <Text style={Styles.viewAll}>{"Xem tất cả"}</Text>
                  </View>
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


                  <Text style={Styles.chartHeadText}>{"Tin tức"?.toUpperCase()}</Text>
                  <View style={Styles.listButtonContainer}>
                    <TouchableOpacity style={[Styles.listButton, { backgroundColor: "#0045A2" }]}>
                      <Text style={[Styles.listButtonText, { color: Colors.white }]}>{`Tin tức`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Styles.listButton, { backgroundColor: "#E6E8ED" }]}>
                      <Text style={[Styles.listButtonText, { color: "#757575" }]}>{`Sự kiện`}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={Styles.listSeperator} />
                  {
                    listData?.map((item, listKey) => {
                      return (
                        <News item={item} unique={listKey} screen={"Overview"} />
                      )
                    })

                  }
                </View>
              </View>


            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
export default Overview;