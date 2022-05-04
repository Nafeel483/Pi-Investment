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
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styles from '../../Views/InvestmentProject/Styles';
import Images from '../../Theme/Images';
import Colors from '../../Theme/Colors';

const widthScreen = Dimensions.get('window').width;

const TemporaryInvest = (props) => {

 
  return (
    <View style={Styles.listWrapperContainer}>
    <View style={Styles.innerWrapperContainer}>
      <Image source={Images.model} style={Styles.medalStyle} />
      <View style={Styles.medelRight}>
        <View style={Styles.tableButton}>
          <Text style={Styles.tableButtonText}>{`Gói đồng`}</Text>
        </View>
        <Text style={[Styles.medalRightText, { marginTop: hp(2) }]}>{"Doanh thu lên đến: 150%"}</Text>
        <View style={Styles.medalRightLine}/>
        <Text style={Styles.medalRightText}>{"Từ 10.000.000vnd đến dưới 50.000.000"}</Text>
        <View style={Styles.medalRightLine}/>
        <Text style={Styles.medalRightText}>{"DDoanh thu: Từ 2%/tháng đến 4%/tháng"}</Text>
        <View style={Styles.medalRightLine}/>
        <Text style={Styles.medalRightText}>{"Phí Quản Lí: 20%"}</Text>
        <View style={Styles.medalRightLine}/>
        <Text style={Styles.medalRightText}>{"Tổng Doanh Thu (dự kiến): 15.000.000"}</Text>
      </View>
    </View>
  </View>
  );
}
export default TemporaryInvest;