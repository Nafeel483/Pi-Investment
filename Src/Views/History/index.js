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


const History = (props) => {

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
              <Text style={Styles.headerText}>{"Lịch sử"?.toUpperCase()}</Text>
              <View style={Styles.empty} />
            </View>
          </ImageBackground>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContent}>

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
                      <Image source={Images.time} style={Styles.timeStyle} />
                      <Text style={Styles.revenueText}>{`Lệnh rút đang chờ`?.toUpperCase()}</Text>
                    </View>
                    <View style={Styles.seperator} />

                    <View style={Styles.amountContainer}>
                      <Text style={Styles.amountText}>{"200.000.000"}</Text>
                      <Text style={Styles.currencyText}>{"vnd"}</Text>
                    </View>
                  </View>
                  <View>
                    <View style={Styles.timeContainer}>
                      <Text style={Styles.timeText}>{"Ngày thực hiện: 20/2/2022"}</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={Styles.listContent}>
                <Text style={Styles.chartHeadText}>{"Danh sách chi tiết"?.toUpperCase()}</Text>
                <View style={Styles.listButtonContainer}>
                  <View style={Styles.listButtonWrapper}>
                    <TouchableOpacity style={[Styles.listButton, { backgroundColor: "#0045A2" }]}>
                      <Text style={[Styles.listButtonText, { color: Colors.white }]}>{`Lịch sử ví`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Styles.listButton, { backgroundColor: "#DDE6ED", width: hp(14), }]}>
                      <Text style={[Styles.listButtonText, { color: "#707070" }]}>{`Lịch sử lệnh rút`}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ marginTop: hp(0.5) }}>
                    <View style={Styles.listButtonWrapper}>
                      <Text style={Styles.profileDetailMain}>{"Từ"}</Text>
                      <Text style={Styles.profileDetailDes}>{"24/05/2022"}</Text>
                    </View>
                    <View style={Styles.listButtonWrapper}>
                      <Text style={Styles.profileDetailMain}>{"Đến"}</Text>
                      <Text style={Styles.profileDetailDes}>{"30/09/2022"}</Text>
                    </View>
                  </View>
                </View>
              </View>


            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
export default History;