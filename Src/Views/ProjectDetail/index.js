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
  Dimensions
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Styles from './Styles';
import Images from '../../Theme/Images';
import Colors from '../../Theme/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Progress from 'react-native-progress';

const widthScreen = Dimensions.get('window').width;

const ProjectDetail = (props) => {
  const [tabsData, setTabsData] = useState([
    "Thông tin chi tiết",
    "Công ty",
    "Báo cáo tài chính",
    "Hợp đồng mẫu"
  ])
  const [clickTab, setClickTab] = useState(0)
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={Styles.safeHeadContainer} />
        <SafeAreaView style={Styles.safeAreaContainer} >
          <StatusBar barStyle="dark-content" />
          <ImageBackground source={Images.headList1} style={Styles.headerImage} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContent}>

              <View style={Styles.listHeadCombine}>
                <Text style={Styles.listHeadText}>{"Nhà hàng Tân Nam Hải"}</Text>
                <View style={Styles.tableButton}>
                  <Text style={Styles.tableButtonText}>{`Đang gọi vốn`}</Text>
                </View>
              </View>
              <View style={Styles.listSeperator} />

              <View style={Styles.descriptionContainer}>
                <Text style={Styles.descriptionStyle}>{`Nhà hàng có quy mô bậc nhất Quy Nhơn Nhà hàng có quy mô bậc nhất Quy Nhơn Nhà hàng có quy mô bậc nhất Quy Nhơn Nhà hàng có quy mô bậc nhất Quy Nhơn Nhà hàng có quy mô bậc nhất Quy NhơnNhà hàng có quy mô bậc nhất Quy Nhơnƒ`}</Text>


                <View style={Styles.listWrapper}>
                  <Text style={Styles.titleStyle}>{"Website:"}</Text>
                  <Text style={Styles.descriptionStyle1}>{"http://www.nhahangtannamhai.com/"}</Text>
                </View>

                <View style={[Styles.listWrapper, { marginTop: hp(0.3) }]}>
                  <Text style={Styles.titleStyle}>{"Ngày khởi tạo"}</Text>
                  <Text style={Styles.descriptionStyle1}>{"2022-02-25 09:57:12"}</Text>
                </View>

                <View style={[Styles.listWrapper, { marginTop: hp(0.3) }]}>
                  <Text style={Styles.titleStyle}>{"Doanh Thu:"}</Text>
                  <Text style={Styles.descriptionStyle1}>{"Từ 2.0% - 7.0%"}</Text>
                </View>


                <View style={[Styles.listWrapper, { marginTop: hp(0.3) }]}>
                  <Text style={Styles.titleStyle}>{"Đầu tư:"}</Text>
                  <Text style={Styles.descriptionStyle1}>{"Kết thúc: 2d 14h 34m 30s"}</Text>
                </View>
              </View>


              <View style={Styles.listProgress}>
                <Text style={Styles.progresText1}>{"Đầu tư"}</Text>
                <Text style={Styles.progresText1}>{"Kết thúc: 2d 14h 34m 30s"}</Text>
              </View>
              <View style={Styles.chatAreaWrapper}>
                <Progress.Bar progress={0.75} width={widthScreen / 1.25}
                  unfilledColor={"#D2E8FF"} color={"#0045A2"}
                  borderColor={Colors.white} height={7} borderRadius={15}
                />
              </View>
              <View style={Styles.chatBottomWrapper}>
                <Text style={Styles.progresText}>{"120 nhà đầu tư"}</Text>
                <Text style={Styles.progresText}>{"7.200.000/ 9.000.000 VNĐ"}</Text>
              </View>

              <TouchableOpacity onPress={() => { props.navigation.navigate("InvestmentProject") }}
                style={[Styles.buttonContainer, { backgroundColor: '#00851D', marginTop: hp(4), }]}>
                <Text style={Styles.buttonText}>{"Đầu tư"}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={Styles.buttonContainer}>
                <Text style={Styles.buttonText}>{"Đầu tư"}</Text>
              </TouchableOpacity>


              {/* Tabs */}
              <View style={Styles.tabContainer}>
                {
                  tabsData?.map((item, tabKey) => {
                    return (
                      <TouchableOpacity key={tabKey} onPress={() => setClickTab(tabKey)}>
                        <View>
                          <Text style={[Styles.tabHeadText, {
                            color: clickTab == tabKey ? "#1A469C" : '#45575B',
                            fontSize: clickTab == tabKey ? hp(1.7) : hp(1.5),
                            marginTop: clickTab == tabKey ? 0 : hp(0.3),
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
              <View style={Styles.bottomContainer}>
                <View style={Styles.listWrapper}>
                  <Text style={Styles.titleStyle}>{"Website:"}</Text>
                  <Text style={Styles.descriptionStyle1}>{"http://www.nhahangtannamhai.com/"}</Text>
                </View>

                <View style={[Styles.listWrapper, { marginTop: hp(0.3) }]}>
                  <Text style={Styles.titleStyle}>{"Ngày khởi tạo"}</Text>
                  <Text style={Styles.descriptionStyle1}>{"2022-02-25 09:57:12"}</Text>
                </View>

                <View style={[Styles.listWrapper, { marginTop: hp(0.3) }]}>
                  <Text style={Styles.titleStyle}>{"Doanh Thu:"}</Text>
                  <Text style={Styles.descriptionStyle1}>{"Từ 2.0% - 7.0%"}</Text>
                </View>


                <View style={[Styles.listWrapper, { marginTop: hp(0.3) }]}>
                  <Text style={Styles.titleStyle}>{"Đầu tư:"}</Text>
                  <Text style={Styles.descriptionStyle1}>{"Kết thúc: 2d 14h 34m 30s"}</Text>
                </View>
              </View>


            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
export default ProjectDetail;