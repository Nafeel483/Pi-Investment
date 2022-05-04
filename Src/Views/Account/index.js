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


const Account = (props) => {

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
              <Text style={Styles.headerText}>{"Tài khoản"?.toUpperCase()}</Text>
              <View style={Styles.empty} />
            </View>
          </ImageBackground>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContent}>

              <View style={Styles.profileContainer}>
                <View style={Styles.profileWrapper}>
                  <Image source={Images.ellipse} style={Styles.profileImage} />
                  <View style={{ marginLeft: hp(1.5), marginTop: hp(0.4) }}>
                    <Text style={Styles.profileText}>{"Nguyễn Hồng Đức"}</Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={Styles.profileDetailMain}>{"Email:"}</Text>
                      <Text style={Styles.profileDetailDes}>{"caotuankiet.tiendat@gmail.com"}</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: hp(0.3) }}>
                      <Text style={Styles.profileDetailMain}>{"Tên Đăng Nhập:"}</Text>
                      <Text style={Styles.profileDetailDes}>{"caotuankiet"}</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: hp(0.3) }}>
                      <Text style={Styles.profileDetailMain}>{"Mã Định Danh:"}</Text>
                      <Text style={Styles.profileDetailDes}>{"615510"}</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={Styles.profileDetailContainer}>
                {/* 1 */}
                <TouchableOpacity style={Styles.profileContentWrapper}>
                  <View style={Styles.contentWrapper}>
                    <Image source={Images.member} style={Styles.memberStyle} />
                    <Text style={Styles.contentText}>{"Thành viên"}</Text>
                  </View>
                  <Image source={Images.chevronIcon} style={Styles.rightIconStyle} />
                </TouchableOpacity>
                <View style={Styles.listSeperator} />
                {/* 2 */}
                <TouchableOpacity onPress={() => {
                  props.navigation.navigate('ProfileStack', {
                    screen: 'History',
                  })
                }}
                  style={Styles.profileContentWrapper}>
                  <View style={Styles.contentWrapper}>
                    <Image source={Images.history} style={Styles.memberStyle} />
                    <Text style={Styles.contentText}>{"Lịch sử"}</Text>
                  </View>
                  <Image source={Images.chevronIcon} style={Styles.rightIconStyle} />
                </TouchableOpacity>
              </View>



              <View style={Styles.profileDetailContainer}>
                {/* 1 */}
                <TouchableOpacity style={Styles.profileContentWrapper}>
                  <View style={Styles.contentWrapper}>
                    <Image source={Images.changePass} style={Styles.lockStyle} />
                    <Text style={Styles.contentText}>{"Đổi mật khẩu"}</Text>
                  </View>
                  <Image source={Images.chevronIcon} style={Styles.rightIconStyle} />
                </TouchableOpacity>
                <View style={Styles.listSeperator} />
                {/* 2 */}
                <TouchableOpacity style={Styles.profileContentWrapper}>
                  <View style={Styles.contentWrapper}>
                    <Image source={Images.securityLayer} style={Styles.lockStyle} />
                    <Text style={Styles.contentText}>{"Bảo mật 2 lớp"}</Text>
                  </View>
                  <Image source={Images.chevronIcon} style={Styles.rightIconStyle} />
                </TouchableOpacity>
                <View style={Styles.listSeperator} />
                {/* 3 */}
                <TouchableOpacity style={Styles.profileContentWrapper}>
                  <View style={Styles.contentWrapper}>
                    <Image source={Images.accountVerify} style={Styles.securityStyle} />
                    <Text style={Styles.contentText}>{"Xác thực tài khoản"}</Text>
                  </View>
                  <Image source={Images.chevronIcon} style={Styles.rightIconStyle} />
                </TouchableOpacity>
                <View style={Styles.listSeperator} />
                {/* 4 */}
                <TouchableOpacity style={Styles.profileContentWrapper}>
                  <View style={Styles.contentWrapper}>
                    <Image source={Images.updateBank} style={Styles.memberStyle} />
                    <Text style={Styles.contentText}>{"Cập nhật tài khoản ngân hàng"}</Text>
                  </View>
                  <Image source={Images.chevronIcon} style={Styles.rightIconStyle} />
                </TouchableOpacity>
                <View style={Styles.listSeperator} />
                {/* 5 */}
                <TouchableOpacity style={Styles.profileContentWrapper}>
                  <View style={Styles.contentWrapper}>
                    <Image source={Images.personalInfo} style={Styles.memberStyle} />
                    <Text style={Styles.contentText}>{"Thông tin cá nhâ"}</Text>
                  </View>
                  <Image source={Images.chevronIcon} style={Styles.rightIconStyle} />
                </TouchableOpacity>
              </View>


              <View style={Styles.profileDetailContainer}>
                {/* 1 */}
                <TouchableOpacity style={Styles.profileContentWrapper}>
                  <View style={Styles.contentWrapper}>
                    <Image source={Images.userManual} style={Styles.securityStyle} />
                    <Text style={Styles.contentText}>{"Hướng dẫn sử dụng"}</Text>
                  </View>
                  <Image source={Images.chevronIcon} style={Styles.rightIconStyle} />
                </TouchableOpacity>
                <View style={Styles.listSeperator} />
                {/* 2 */}
                <TouchableOpacity style={Styles.profileContentWrapper}>
                  <View style={Styles.contentWrapper}>
                    <Image source={Images.support} style={Styles.supportStyle} />
                    <Text style={Styles.contentText}>{"Hỗ trợ"}</Text>
                  </View>
                  <Image source={Images.chevronIcon} style={Styles.rightIconStyle} />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={Styles.buttonContainer}>
                <Text style={Styles.buttonText}>{"Đăng xuất"}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
export default Account;