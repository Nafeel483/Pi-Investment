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
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PieChart from 'react-native-pie-chart';

const Investment = (props) => {

  const [investList, setInvestList] = useState([
    {
      title: "Số dự án đã đầu tư",
      point: "13 dự án",
    },
    {
      title: "Tổng doanh thu",
      point: "15.134.000.456 VNĐ",
    },
    {
      title: "Tổng doanh thu đã nhận",
      point: "5.134.000.456 VNĐ",
    },
    {
      title: "Tổng doanh thu còn lại",
      point: "5.134.000.456 VNĐ",
    },
  ])
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

  const widthAndHeight = 150
  const series = [123, 321,]
  const sliceColor = ['#88A1BC', '#0045A2',]
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
              <Text style={Styles.headerText}>{"Quản lý đầu tư"?.toUpperCase()}</Text>
              <View style={Styles.empty} />
            </View>
          </ImageBackground>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContent}>

              <View style={Styles.mainContainer}>
                <Text style={Styles.headTitle}>{"Thống kê đầu tư"}</Text>

                <View style={Styles.listContainerWrapper}>
                  {
                    investList?.map((item, investKey) => {
                      return (
                        <View key={investKey}
                          style={Styles.listWrapper}>
                          <Text style={Styles.titleStyle}>{item?.title}</Text>
                          <Text style={Styles.descriptionStyle1}>{item?.point}</Text>
                        </View>
                      )
                    })

                  }
                </View>
              </View>

              <View style={Styles.graphContainer}>
                <View>
                  <Text style={Styles.graphTitle}>{"Biểu đồ doanh thu"}</Text>
                  <View style={{ flexDirection: "row", marginTop: hp(4) }}>
                    <View style={Styles.boxStyle} />
                    <Text style={Styles.boxText}>{"Tổng nhận (dự kiến)"}</Text>
                  </View>
                  <View style={{ flexDirection: "row", marginTop: hp(1) }}>
                    <View style={Styles.boxStyle1} />
                    <Text style={Styles.boxText}>{"Tổng nhận (dự kiến)"}</Text>
                  </View>
                </View>
                <View style={{ marginTop: hp(1) }}>
                  <PieChart
                    widthAndHeight={widthAndHeight}
                    series={series}
                    sliceColor={sliceColor}
                  />
                </View>

              </View>

              <View style={Styles.chatAreaWrapper}>
                  <Text style={Styles.chartHeadText}>{"Danh sách đang đầu tư"?.toUpperCase()}</Text>
                </View>
              <View style={[Styles.viewTabelContainer, { marginTop: hp(3) }]}>
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
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
export default Investment;