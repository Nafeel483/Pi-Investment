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
import * as Progress from 'react-native-progress';
import Styles from './Styles';
import Images from '../../Theme/Images';
import Colors from '../../Theme/Colors';

const widthScreen = Dimensions.get('window').width;

const NewProject = (props) => {

  const { item, unique } = props
  return (
    <View key={unique}
      style={Styles.listContainer}>
        <TouchableOpacity>
        <Image source={Images.line} style={Styles.listSeperator} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={Images.arrowRight} style={Styles.chevronStyle} />
      </TouchableOpacity>
      <View style={Styles.listHeader}>
        <Image source={item?.image} style={Styles.imageStyle} />
        <View style={Styles.listDataStyle}>
          <View style={Styles.listWrapper}>
            <Text style={Styles.titleStyle}>{"Website:"}</Text>
            <Text style={Styles.descriptionStyle}>{"http://www.nhahangtannamhai.com/"}</Text>
          </View>

          <View style={[Styles.listWrapper, { marginTop: hp(0.3) }]}>
            <Text style={Styles.titleStyle}>{"Ngày khởi tạo"}</Text>
            <Text style={Styles.descriptionStyle}>{"2022-02-25 09:57:12"}</Text>
          </View>

          <View style={[Styles.listWrapper, { marginTop: hp(0.3) }]}>
            <Text style={Styles.titleStyle}>{"Doanh Thu:"}</Text>
            <Text style={Styles.descriptionStyle}>{"Từ 2.0% - 7.0%"}</Text>
          </View>


          <View style={[Styles.listWrapper, { marginTop: hp(0.3) }]}>
            <Text style={Styles.titleStyle}>{"Đầu tư:"}</Text>
            <Text style={Styles.descriptionStyle}>{"Kết thúc: 2d 14h 34m 30s"}</Text>
          </View>

          <View style={Styles.chatAreaWrapper}>
            <Progress.Bar progress={0.75} width={hp(28)}
              unfilledColor={"#D2E8FF"} color={"#0045A2"}
              borderColor={Colors.white} height={7} borderRadius={15}
            />
          </View>
          <View style={Styles.chatBottomWrapper}>
            <Text style={Styles.progresText}>{"120 nhà đầu tư"}</Text>
            <Text style={Styles.progresText}>{"7.200.000/ 9.000.000vnd"}</Text>
          </View>

        </View>
      </View>
    </View>
  );
}
export default NewProject;