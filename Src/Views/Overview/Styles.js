import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../Theme/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.darkBlue
  },
  safeHeadContainer: {
    backgroundColor: Colors.darkBlue
  },
  scrollContent: {
    marginBottom: hp(0.01)
  },
  backgroundStyle: {
    width: widthScreen,
    height: hp("67%"),
    alignSelf: 'center'
  },
  headerContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(8),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftCombine: {
    flexDirection: 'row'
  },
  rightCombine: {
    flexDirection: 'row',
    marginTop: hp(1)
  },
  profileImage: {
    width: hp(5),
    height: hp(5),
    borderRadius: hp(5)
  },
  profileText: {
    fontWeight: '700',
    fontSize: hp(2.2),
    color: Colors.white,
    marginTop: hp(1),
    marginLeft: hp(1)
  },
  flagStyle: {
    width: hp(4),
    height: hp(3),
  },
  notifyStyle: {
    width: hp(2.5),
    height: hp(3),
    marginLeft: hp(2)
  },
  mainLogoContainer: {
    marginTop: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2)
  },
  appLogo: {
    width: hp(30),
    height: hp(6.8)
  },
  walletWrapper: {
    marginTop: hp(3),
    width: widthScreen / 1.12,
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: Colors.white
  },
  walletInnerWrapper: {
    width: '90%',
    alignSelf: 'center',
    marginTop: hp(1.5),
    marginBottom: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  revenueStyle: {
    width: hp(2.2),
    height: hp(2.5)
  },
  revenueText: {
    fontSize: hp(1.7),
    fontWeight: '700',
    color: Colors.textBlue,
    marginTop: hp(0.5),
    marginLeft: hp(0.3)
  },
  seperator: {
    height: hp(0.1),
    width: hp(10),
    backgroundColor: Colors.textBlue,
    marginTop: hp(0.7)
  },
  amountContainer: {
    flexDirection: 'row',
    marginTop: hp(3)
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
  withdrawContainer: {
    width: hp(10),
    height: hp(4),
    borderRadius: 8,
    backgroundColor: "#00387C",
    justifyContent: 'center',
    alignItems: 'center'
  },
  withdrawText: {
    fontSize: hp(1.2),
    fontWeight: '600',
    color: Colors.white
  },
  reinvestContainer: {
    width: hp(10),
    height: hp(4),
    borderRadius: 8,
    backgroundColor: "#00851D",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(1)
  },
  chartsContainer: {
    width: widthScreen,
    // height: hp(50),
    backgroundColor: "#F6F6F6",
    // marginTop: hp(7)
  },
  combineMain: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    flexDirection: 'row',
    marginTop: hp(-4),
    justifyContent: 'space-between'
  },
  combineDataContainer: {
    width: hp(20),
    height: hp(13),
    backgroundColor: Colors.white,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  combineHeader: {
    width: '100%',
    height: hp(4),
    backgroundColor: '#F2F6FA',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  combineHeaderWrapper: {
    width: '80%',
    alignSelf: 'center'
  },
  combineHeaderText: {
    fontSize: hp(1.7),
    fontWeight: '700',
    color: Colors.textBlue,
  },
  combineAmount: {
    fontSize: hp(2),
    fontWeight: '700',
    color: Colors.cyanBlue
  },
  combineAmountContainer: {
    flexDirection: 'row',
    marginTop: hp(3)
  },
  combineCurrencyText: {
    fontSize: hp(1.5),
    fontWeight: '700',
    color: Colors.cyanBlue,
    marginTop: hp(0.4),
    marginLeft: hp(0.8)
  },
  combineWrapperRight: {
    flexDirection: 'row',
    marginTop: hp(2)
  },
  combineAmountRight: {
    fontSize: hp(1.6),
    fontWeight: '700',
    color: Colors.cyanBlue
  },
  combineCurrencyTextRight: {
    fontSize: hp(1.3),
    fontWeight: '700',
    color: Colors.cyanBlue,
    marginTop: hp(0.4),
    marginLeft: hp(0.8)
  },
  transDate: {
    fontSize: hp(1.2),
    fontWeight: '400',
    color: Colors.darkGrey,
    marginTop: hp(0.5)
  },
  chatAreaWrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: hp(2),
  },
  chartHeadText: {
    fontSize: hp(2),
    fontWeight: '700',
    color: Colors.textBlue,
    marginBottom: hp(3)
  },
  viewTabelContainer: {
    width: widthScreen,
    alignSelf: 'center',
    backgroundColor: "#004090"
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
    height: hp(9),
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
    height: hp(5),
    justifyContent: 'center'
  },
  tableRightDataWrapper: {
    width: hp(23),
    height: hp(5),
    backgroundColor: "#0045A2",
    justifyContent: 'center'
  },
  listContainer: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: hp(2),
    // marginBottom: hp(1.5)
  },
  listHeadCombine: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(3)
  },
  allProductList: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginBottom: hp(3)
  },
  listHeadText: {
    fontSize: hp(2),
    fontWeight: '700',
    color: Colors.textBlue,
    // marginBottom: hp(3)
  },
  viewAll: {
    fontSize: hp(1.6),
    fontWeight: '500',
    color: Colors.textBlue,
    fontStyle: 'italic',
    marginTop: hp(0.4)
  },
  listButtonContainer: {
    flexDirection: 'row',
  },
  listButton: {
    width: hp(13),
    height: hp(4.5),
    borderRadius: 8,
    backgroundColor: "#00387C",
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: hp(2),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  listButtonText: {
    fontSize: hp(1.8),
    fontWeight: '700',
    color: Colors.white
  },
  listSeperator: {
    height: hp(0.1),
    width: widthScreen / 1.2,
    alignSelf: 'center',
    backgroundColor: "#CAD6DA",
    marginTop: hp(3),

  },
});
export default styles;