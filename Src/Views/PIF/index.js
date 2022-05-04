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


const PIF = (props) => {


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
              <Text style={Styles.headerText}>{"Về PIF"?.toUpperCase()}</Text>
              <View style={Styles.empty} />
            </View>
          </ImageBackground>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContent}>

              <View style={Styles.listContainer}>

                <Text style={Styles.headTitle}>{"Cơ hội đầu tư cho mọi người"}</Text>

                <Text style={Styles.descriptionStyle}>{`PIF - sẽ dùng các dự án đã và đang tạo ra thu lợi nhuận ổn định để gọi vốn phát triển và xây dựng thêm các địa điểm, chi nhánh mới. Để đảm bảo quyền lợi cho nhà đầu tư và cộng đồng của PIF chúng tôi sẽ có các gói đầu tư hợp lý với tài chính của từng cá nhân, doanh nghiệp và mức lãi suất phù hợp cho cộng đồng.`}</Text>
                <Text style={Styles.descriptionStyle}>{`PIF thiết lập chương trình uỷ thác đầu tư dựa trên hợp đồng online và quản lý dựa trên phần mềm web và app tiện lợi cho nhà đầu tư và cộng đồng`}</Text>

                <Image source={Images.pif1} style={Styles.listImage} />

                <Text style={Styles.headTitle}>{"KẾT NÓI NGUỒN VỐN VÀ HỖ TRỢ VẬN HÀNH CHO CÁC DOANH NGHIỆP START UP"}</Text>
              </View>

              <View style={Styles.listWrapperContainer}>
                <View style={Styles.listContainer}>
                  <Image source={Images.pif2} style={Styles.listImage1} />
                  <Text style={[Styles.descriptionStyle, { marginBottom: hp(2) }]}>{`PIF thiết lập chương trình uỷ thác đầu tư dựa trên hợp đồng online và quản lý dựa trên phần mềm web và app tiện lợi cho nhà đầu tư và cộng đồng`}</Text>

                </View>
              </View>

              <View style={Styles.listContainer}>
                <Text style={Styles.headTitle}>{"Giải trí"}</Text>
              </View>
              <View style={Styles.listWrapperContainer}>
                <View style={Styles.listContainer}>
                  <Image source={Images.pif3} style={Styles.listImage1} />
                  <Text style={[Styles.descriptionStyle, { marginBottom: hp(2) }]}>{`PIF thiết lập chương trình uỷ thác đầu tư dựa trên hợp đồng online và quản lý dựa trên phần mềm web và app tiện lợi cho nhà đầu tư và cộng đồng`}</Text>

                </View>
              </View>

            </View>
          </ScrollView>

        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
export default PIF;