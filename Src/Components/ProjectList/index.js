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
import Styles from './Styles';
import Images from '../../Theme/Images';
import Colors from '../../Theme/Colors';
import * as Progress from 'react-native-progress';

const widthScreen = Dimensions.get('window').width;

const ProjectList = (props) => {

  const { item, unique } = props
  return (
    <View key={unique}>
      <View style={Styles.listHeaderBlog}>
        <ImageBackground source={item?.headImage} style={Styles.headerImage}
          imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
          <View style={Styles.tableButton}>
            <Text style={Styles.tableButtonText}>{`Đang gọi vốn`}</Text>
          </View>
        </ImageBackground>
        <View style={Styles.listHeader}>
          <Image source={item?.image} style={Styles.imageStyle} />
          <View style={Styles.listDataStyle}>
            <Text style={Styles.titleStyle}>{item?.title}</Text>
            <Text style={Styles.descriptionStyle}>{'Nhà hàng có quy mô bậc nhất Quy Nhơn'}</Text>
            <Text style={Styles.descriptionStyle}>{'Nhà hàng có quy mô bậc nhất Quy Nhơn'}</Text>
            <Text style={Styles.descriptionStyle}>{'Nhà hàng có quy mô bậc nhất.'}</Text>
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

        <TouchableOpacity onPress={() => { props.navigation.navigate("ProjectDetail") }}
          style={Styles.buttonContainer}>
          <Text style={Styles.buttonText}>{"Xem thêm"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default ProjectList;