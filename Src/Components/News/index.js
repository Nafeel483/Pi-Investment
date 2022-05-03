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

const News = (props) => {

  const { item, unique, screen } = props
  return (
    <View key={unique}>
      <View style={[screen == "Blog" ? Styles.listHeaderBlog : Styles.listHeader]}>
        <Image source={item?.image} style={Styles.imageStyle} />
        <View style={Styles.listDataStyle}>
          <Text style={Styles.titleStyle}>{item?.title}</Text>
          <Text style={Styles.descriptionStyle}>{item?.description}</Text>
          <Text style={Styles.dateStyle}>{item?.date}</Text>

        </View>
      </View>
      <View style={[screen == "Blog" ? Styles.listSeperatorBlog : Styles.listSeperator]} />
    </View>
  );
}
export default News;