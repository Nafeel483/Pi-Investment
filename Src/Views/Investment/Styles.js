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
  mainContainer: {
    marginTop: hp(3),
    width: widthScreen / 1.12,
    alignSelf: "center",
    backgroundColor: "#F1F3F4"
  },
  headTitle: {
    fontSize: hp(2.5),
    fontWeight: '700',
    color: "#00509E",
    marginTop: hp(2),
    textAlign: 'center'
  },
  listWrapper: {
    width: "85%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: hp(1)
  },
  titleStyle: {
    fontSize: hp(1.4),
    fontWeight: '400',
    color: "#7A7A7A",
  },
  descriptionStyle1: {
    fontSize: hp(1.4),
    fontWeight: '500',
    color: Colors.black,
    width: hp(15)
  },
  listContainerWrapper: {
    marginTop: hp(2),
    marginBottom: hp(2)
  },
  graphContainer: {
    marginTop: hp(3),
    width: widthScreen / 1.12,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  graphTitle: {
    fontSize: hp(2.5),
    fontWeight: '700',
    color: "#00509E",
    width: hp(14),
    // textAlign: "center"
  },
  boxStyle: {
    width: hp(5),
    height: hp(2),
    backgroundColor: '#88A1BC'
  },
  boxStyle1: {
    width: hp(5),
    height: hp(2),
    backgroundColor: '#0045A2'
  },
  boxText: {
    color: "#515151",
    fontSize: hp(1.5),
    fontWeight: '400',
    marginLeft: hp(0.8)
  },
  chatAreaWrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: hp(4),
  },

  viewTabelContainer: {
    width: widthScreen,
    alignSelf: 'center',
    backgroundColor: "#004090",
    // marginTop: hp(3)
  },
  chartHeadText: {
    fontSize: hp(2),
    fontWeight: '700',
    color: Colors.textBlue,
  },
  viewTabelHead: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableHead: {
    width: hp(18),
    height: hp(10),
  },
  tableHeadRight: {
    width: hp(23),
    height: hp(10),
    backgroundColor: "#0045A2",
    alignItems: 'center'
  },
  tableHeadLeftText: {
    color: "#E4F1FF",
    fontSize: hp(2),
    fontWeight: '600',
    marginTop: hp(2)
  },
  tableHeadRightText: {
    color: "#F1FF00",
    fontSize: hp(1.6),
    fontWeight: '600',
    marginTop: hp(1.5)
  },
  tableButtonContainer: {
    flexDirection: 'row',
    marginTop: hp(1),
    justifyContent: 'space-between',
    width: hp(20),
    alignSelf: 'center'
  },
  tableButton: {
    borderRadius: 8
  },
  tableButtonText: {
    fontSize: hp(1.2),
    fontWeight: '600',
    padding: hp(0.8)
  },
  tableLeftDataText: {
    color: "#E4F1FF",
    fontSize: hp(1.5),
    fontWeight: '500',
  },
  tableRightDataText: {
    color: Colors.white,
    fontSize: hp(1.5),
    fontWeight: '500',
    marginLeft: hp(2)
  },
  tableLeftDataWrapper: {
    width: hp(18),
    height: hp(4),
    justifyContent: 'center'
  },
  tableRightDataWrapper: {
    width: hp(23),
    height: hp(4),
    backgroundColor: "#0045A2",
    justifyContent: 'center'
  },
});
export default styles;