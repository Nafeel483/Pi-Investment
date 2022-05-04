import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Theme/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#E8ECEF"
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
  profileContainer: {
    width: widthScreen,
    alignSelf: 'center',
    backgroundColor: Colors.white
  },
  profileWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: hp(2),
    marginBottom: hp(2)
  },
  profileImage: {
    width: hp(10),
    height: hp(10),
    borderRadius: hp(10)
  },
  profileText: {
    fontWeight: '700',
    fontSize: hp(1.9),
    color: "#303030",
  },
  profileDetailMain: {
    fontWeight: '400',
    fontSize: hp(1.5),
    color: "#757575",
  },
  profileDetailDes: {
    fontWeight: '700',
    fontSize: hp(1.5),
    color: "#757575",
    marginLeft: hp(1)
  },

  profileDetailContainer: {
    width: widthScreen,
    alignSelf: 'center',
    backgroundColor: Colors.white,
    marginTop: hp(3)
  },
  contentWrapper: {
    flexDirection: "row",
  },
  profileContentWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: hp(2),
    justifyContent: 'space-between',
    marginBottom: hp(2)
  },
  listSeperator: {
    height: hp(0.1),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: "#CAD6DA",
  },
  memberStyle: {
    width: hp(2.5),
    height: hp(2.5)
  },
  contentText: {
    fontWeight: '700',
    fontSize: hp(1.9),
    color: "#303030",
    marginLeft: hp(2)
  },
  rightIconStyle: {
    width: hp(1),
    height: hp(2),
    marginTop: hp(0.35)
  },
  lockStyle: {
    width: hp(2),
    height: hp(2.5),
    marginLeft: hp(0.3)
  },
  securityStyle: {
    width: hp(2.5),
    height: hp(2.7)
  },
  supportStyle: {
    width: hp(2.5),
    height: hp(2.6)
  },
  buttonContainer: {
    width: widthScreen / 1.3,
    alignSelf: 'center',
    height: hp(6),
    borderRadius: 8,
    backgroundColor: "#0045A2",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(5),
    marginBottom: hp(2)
  },
  buttonText: {
    fontWeight: '700',
    fontSize: hp(2),
    color: Colors.white
  }
});
export default styles;