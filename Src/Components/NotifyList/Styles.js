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
    marginTop: hp(3),
    justifyContent: 'space-between'
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
    fontSize: hp(1.5),
    fontWeight: '700',
    color: "#303030",
    marginTop: hp(0.4)
  },
  userConatiner: {
    borderRadius: 6,
    backgroundColor: "#CD0000",
    height: hp(2),
    width: hp(8),
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionStyle: {
    fontSize: hp(1.1),
    fontWeight: '400',
    color: Colors.white,
  },
  dateStyle: {
    fontSize: hp(1.5),
    fontWeight: '400',
    color: "#757575",
    marginTop: hp(0.8)
  },
  listSeperator: {
    height: hp(0.1),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: "#CAD6DA",
    marginTop: hp(2),
  },
  listSeperatorBlog: {
    height: hp(0.1),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: "#CAD6DA",
    marginTop: hp(3),
    // marginBottom: hp(3)
  },
  deleteIcon: {
    width: hp(2.5),
    height: hp(3),
    marginTop: hp(1.5)
  }
});
export default styles;