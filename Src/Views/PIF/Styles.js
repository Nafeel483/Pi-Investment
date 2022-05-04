import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Theme/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.white
  },
  safeHeadContainer: {
    backgroundColor: "#0045A2"
  },
  scrollContent: {
    marginBottom: hp(6)
  },
  backgroundStyle: {
    width: widthScreen,
    alignSelf: 'center',
    height: hp(10),
    justifyContent: 'center'
  },
  headerContainer: {
    flexDirection: 'row',
    width: widthScreen,
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  backBoxContainer: {
    width: hp(8),
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center'
  },
  backImage: {
    height: hp(2.5),
    width: hp(2)
  },
  headerText: {
    fontWeight: '700',
    fontSize: hp(2.4),
    color: Colors.white,
    marginTop: hp(1),
  },
  empty: {
    width: hp(9)
  },
  listContainer: {
    width: widthScreen / 1.15,
    alignSelf: 'center'
  },
  listWrapperContainer: {
    marginTop: hp(2),
    width: widthScreen,
    alignSelf: 'center',
    backgroundColor: '#F1F3F4'
  },
  headTitle: {
    fontSize: hp(2.5),
    fontWeight: '700',
    color: "#00509E",
    marginTop: hp(3),
    textAlign: 'center'
  },
  descriptionStyle: {
    fontSize: hp(1.5),
    fontWeight: '500',
    color: "#515151",
    marginTop: hp(2),
  },
  listImage: {
    width: widthScreen / 1.15,
    alignSelf: 'center',
    height: hp(40),
    marginTop: hp(3),
  },
  listImage1: {
    width: widthScreen / 1.15,
    alignSelf: 'center',
    height: hp(20),
    marginTop: hp(3),
  }
});
export default styles;