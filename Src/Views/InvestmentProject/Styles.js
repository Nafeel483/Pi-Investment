import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Theme/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from 'react-native-reanimated';

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
    marginBottom: hp(3)
  },
  headerImage: {
    width: widthScreen,
    alignSelf: "center",
    height: hp(20),
  },
  headerModelwrapper: {
    width: widthScreen,
    alignSelf: "center",
    backgroundColor: Colors.white,
    marginTop: hp(-10),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  headerContainer: {
    flexDirection: 'row',
    width: widthScreen,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: hp(2)
  },
  backBoxContainer: {
    width: hp(8),
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center'
  },
  backImage: {
    height: hp(2.5),
    width: hp(2),
    tintColor: "#0045A2"
  },
  headerText: {
    fontWeight: '700',
    fontSize: hp(2.4),
    color: "#00509E",
    marginTop: hp(1),
  },
  emptyContainer: {
    width: hp(8),
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center'
  },
  empty: {
    fontWeight: '400',
    fontSize: hp(1.2),
    color: Colors.black,
  },
  stepper: {
    marginTop: hp(3),
    width: widthScreen / 1.2,
    alignSelf: 'center',
    height: hp(3.5)
  },
  tabContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(1),
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  tabText: {
    fontSize: hp(1.3),
    fontWeight: "500",
    width: hp(7.5),
    textAlign: 'left',
    marginLeft: hp(1.5),
    marginRight: hp(1.5),
    alignSelf: 'center'
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
    // marginBottom: hp(3)
  },
  listDestext: {
    fontSize: hp(1.5),
    fontWeight: '500',
    color: "#515151",
    marginTop: hp(0.4)
  },
  lineSeperator: {
    height: hp(0.1),
    width: hp(22),
    alignSelf: 'center',
    backgroundColor: "#C2CCDD",
  },
  emailUpperWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(2)
  },
  emailWrapperTab: {
    flexDirection: 'row',
    borderColor: "#EBEFF0",
    backgroundColor: "#EBEFF0",
    height: hp(5.5),
    justifyContent: 'center',
    alignItems: 'center',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    borderRadius: 25,
    marginTop: hp(1)
  },
  emailWrapper: {
    flexDirection: 'row',
    borderColor: "#EBEFF0",
    backgroundColor: "#EBEFF0",
    height: hp(5.5),
    justifyContent: 'center',
    alignItems: 'center',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    borderRadius: 25,
    marginTop: hp(3)
  },
  emailInput: {
    marginLeft: hp(2),
    flex: 1,
    fontSize: hp(2.5),
    color: "#515151",
    fontWeight: '600',
  },
  buttonContainer: {
    width: widthScreen / 1.3,
    alignSelf: 'center',
    height: hp(5),
    borderRadius: 8,
    backgroundColor: "#0045A2",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(3),
  },
  buttonText: {
    fontWeight: '700',
    fontSize: hp(2),
    color: Colors.white
  },
  pointsText: {
    fontSize: hp(1.3),
    fontWeight: '400',
    color: "#515151",
    width: widthScreen / 1.12,
    alignSelf: 'center',
    fontStyle: 'italic'
  },
  listWrapperContainer: {
    marginTop: hp(2),
    width: widthScreen,
    alignSelf: 'center',
    backgroundColor: '#F1F3F4'
  },
  innerWrapperContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(1.5),
    marginBottom: hp(1.5)
  },
  medalStyle: {
    width: hp(20),
    height: hp(20)
  },
  tableButton: {
    width: hp(9),
    height: hp(3),
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#1A469C",
    backgroundColor: "#1A469C",
    justifyContent: 'center',
    alignItems: "center"
  },
  tableButtonText: {
    fontSize: hp(1.4),
    fontWeight: '700',
    color: Colors.white
  },
  medelRight: {
    width: hp(22),
    alignSelf: 'center'
  },
  medalRightText: {
    fontSize: hp(1),
    fontWeight: '500',
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
  tabEmailText: {
    fontSize: hp(1.5),
    fontWeight: '500',
    color: "#515151",
    marginLeft: hp(1.2)
  },

  secondButtonWrapper: {
    marginTop: hp(3),
    flexDirection: 'row',
    width: widthScreen / 1.2,
    alignSelf: "center",
    justifyContent: "space-between"
  },
  secondButtonInner: {
    width: hp(22),
    height: hp(5),
    borderRadius: 8,
    backgroundColor: "#939A00",
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondButtonInner2: {
    width: hp(15),
    height: hp(5),
    borderRadius: 8,
    backgroundColor: "#3F3F3F",
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(3),
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionStyle: {
    fontSize: hp(1.4),
    fontWeight: '500',
    color: "#545454",
  },
  descripEmailStyle: {
    fontSize: hp(1.4),
    fontWeight: '600',
    color: "#0045A2",
  },
  questionText: {
    fontSize: hp(1.3),
    fontWeight: '400',
    color: "#B1B1B1",
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: hp(2)
  },
  amountContainer: {
    flexDirection: 'row',
    marginTop: hp(0.4)
  },
  amountText: {
    fontSize: hp(2.8),
    fontWeight: '700',
    color: Colors.cyanBlue,
  },
  currencyText: {
    fontSize: hp(2.3),
    fontWeight: '700',
    color: Colors.cyanBlue,
    marginTop: hp(0.4),
    marginLeft: hp(0.8)
  },
  tabFourStyle: {
    fontSize: hp(1.5),
    fontWeight: '500',
    color: "#545454",
    marginTop: hp(1),
    width: widthScreen / 1.35,
    alignSelf: 'center',
    textAlign: 'center'
  },
});
export default styles;