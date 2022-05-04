import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Theme/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#F9FAFB"
  },
  safeHeadContainer: {
    backgroundColor: "#0045A2"
  },
  scrollContent: {
    marginBottom: hp(3)
  },
  headerImage: {
    width: widthScreen,
    alignSelf: "center",
    height: hp(20),
    alignItems: 'flex-end'
  },
  listHeadCombine: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(3)
  },
  listHeadText: {
    fontSize: hp(2),
    fontWeight: '700',
    color: Colors.textBlue,
    marginTop: hp(0.4)
    // marginBottom: hp(3)
  },
  viewAll: {
    fontSize: hp(1.6),
    fontWeight: '500',
    color: Colors.textBlue,
    fontStyle: 'italic',
    marginTop: hp(0.4)
  },
  listSeperator: {
    height: hp(0.1),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: "#C2CCDD",
    marginTop: hp(1),
  },
  tableButton: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FFF700",
    backgroundColor: "#00509E",
  },
  tableButtonText: {
    fontSize: hp(1.2),
    fontWeight: '600',
    padding: hp(0.8),
    color: "#FFF700"
  },
  descriptionContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(2)
  },
  descriptionStyle: {
    fontSize: hp(1.3),
    fontWeight: '500',
    color: "#545454",
  },
  listWrapper: {
    width: hp(38),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignSelf: 'center',
    alignItems: 'flex-start',
    marginTop: hp(2)
  },
  titleStyle: {
    fontSize: hp(1.4),
    fontWeight: '400',
    color: "#AAAAAA",
    width: hp(9)
  },
  descriptionStyle1: {
    fontSize: hp(1.4),
    fontWeight: '500',
    color: "#545454",
    textAlign: 'left',
    width: hp(26)
  },
  listProgress: {
    width: widthScreen / 1.25,
    alignSelf: 'center',
    marginTop: hp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatAreaWrapper: {
    width: widthScreen / 1.25,
    alignSelf: 'center',
    marginTop: hp(0.5),
    marginBottom: hp(0.5)
  },
  chatBottomWrapper: {
    width: widthScreen / 1.25,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignSelf: 'center',
  },
  progresText: {
    fontSize: hp(1.1),
    fontWeight: '500',
    color: "#0045A2",
    // fontStyle: 'italic'
  },
  progresText1: {
    fontSize: hp(1.1),
    fontWeight: '500',
    color: "#474747",
    // fontStyle: 'italic'
  },
  buttonContainer: {
    width: widthScreen / 1.3,
    alignSelf: 'center',
    height: hp(5),
    borderRadius: 8,
    backgroundColor: "#0045A2",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),
  },
  buttonText: {
    fontWeight: '700',
    fontSize: hp(2),
    color: Colors.white
  },
  tabContainer: {
    marginTop: hp(3),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tabHeadText: {
    fontSize: hp(1.5),
    fontWeight: '700',
    textAlign: 'center',
    width: hp(8)
  },
  seperatorTab: {
    height: hp(0.3),
    width: hp(10),
    backgroundColor: "#1A469C",
    marginTop: hp(1.5)
  },
  bottomContainer: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: hp(2),
    marginBottom: hp(2)
  },
});
export default styles;