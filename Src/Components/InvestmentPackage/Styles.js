import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../Theme/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  listWrapperContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.2,
    alignSelf: 'center',
    backgroundColor: '#F1F3F4'
  },
  innerWrapperContainer: {
    width: "100%",
    alignSelf: 'center',
    height: hp(10),
    backgroundColor: '#1A469C'
  },
  tableButtonText: {
    fontSize: hp(2.4),
    fontWeight: '700',
    color: Colors.white,
    marginTop: hp(1.5),
    textAlign: "center"
  },
  medalStyle: {
    width: hp(15),
    height: hp(15),
    marginTop: hp(-5),
    alignSelf: "center"
  },
  medelRight: {
    width: "100%",
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: "center"
  },
  medalRightText: {
    fontSize: hp(1.2),
    fontWeight: '700',
    color: "#515151",
    marginTop: hp(0.7)
  },
  medalRightText1: {
    fontSize: hp(1),
    fontWeight: '700',
    color: "#515151",
    marginTop: hp(0.7)
  },
  medalRightLine: {
    height: hp(0.1),
    width: hp(22),
    alignSelf: 'center',
    backgroundColor: "#C2CCDD",
    marginTop: hp(1)
  },
  buttonContainer: {
    width: hp(20),
    alignSelf: 'center',
    height: hp(5),
    borderRadius: 8,
    backgroundColor: "#0045A2",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2)
  },
  buttonText: {
    fontWeight: '700',
    fontSize: hp(2),
    color: Colors.white
  },
});
export default styles;