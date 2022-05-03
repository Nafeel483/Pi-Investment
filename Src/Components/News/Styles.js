import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../Theme/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  listHeader: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: hp(2)
  },
  listHeaderBlog: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: hp(2)
  },
  imageStyle: {
    width: hp(7),
    height: hp(7),
    borderRadius: 6
  },
  listDataStyle: {
    marginLeft: hp(1.5)
  },
  titleStyle: {
    fontSize: hp(1.8),
    fontWeight: '700',
    color: "#303030",
  },
  descriptionStyle: {
    fontSize: hp(1.5),
    fontWeight: '700',
    color: "#0045A2",
    marginTop: hp(0.4)
  },
  dateStyle: {
    fontSize: hp(1.5),
    fontWeight: '400',
    color: "#757575",
    marginTop: hp(0.8)
  },
  listSeperator: {
    height: hp(0.1),
    width: widthScreen / 1.2,
    alignSelf: 'center',
    backgroundColor: "#CAD6DA",
    marginTop: hp(2),
    // marginBottom: hp(3)
  },
  listSeperatorBlog:{
    height: hp(0.1),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: "#CAD6DA",
    marginTop: hp(2),
    // marginBottom: hp(3)
  }
});
export default styles;