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

const widthScreen = Dimensions.get('window').width;

const NotifyList = (props) => {

  const { item, unique } = props
  return (
    <View key={unique}>
      <View style={[Styles.listHeaderBlog]}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={item?.image} style={Styles.imageStyle} />
          <View style={Styles.listDataStyle}>
            <View style={Styles.userConatiner}>
              <Text style={Styles.descriptionStyle}>{"Khuyến mãi"}</Text>
            </View>
            <Text style={Styles.titleStyle}>{item?.title}</Text>
            <Text style={Styles.dateStyle}>{item?.date}</Text>

          </View>
        </View>
        <TouchableOpacity>
          <Image source={Images.delete} style={Styles.deleteIcon} />
        </TouchableOpacity>
      </View>
      <View style={[Styles.listSeperator]} />
    </View>
  );
}
export default NotifyList;