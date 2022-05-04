import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Theme/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#F5F7F8"
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

  walletWrapper: {
    marginTop: hp(3),
    width: widthScreen / 1.12,
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: Colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
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
  timeStyle: {
    width: hp(2.5),
    height: hp(2.5)
  },
  timeContainer: {
    width: hp(10),
    marginTop: hp(1)
  },
  timeText: {
    fontSize: hp(1.3),
    fontWeight: '400',
    color: "#474747",
    textAlign: 'center'
  },
  listContent: {
    marginTop: hp(3),
    width: widthScreen / 1.12,
    alignSelf: "center",
  },
  chartHeadText: {
    fontSize: hp(2),
    fontWeight: '700',
    color: Colors.textBlue,
    marginBottom: hp(3)
  },
  listButtonContainer: {
    flexDirection: 'row',
    width: widthScreen / 1.12,
    alignSelf: "center",
    justifyContent: 'space-between'
  },
  listButtonWrapper: {
    flexDirection: 'row',
  },
  listButton: {
    width: hp(11),
    height: hp(4.5),
    borderRadius: 5,
    backgroundColor: "#00387C",
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: hp(1),
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
    fontSize: hp(1.5),
    fontWeight: '700',
    color: Colors.white
  },
  profileDetailMain: {
    fontWeight: '400',
    fontSize: hp(1.2),
    color: "#474747",
  },
  profileDetailDes: {
    fontWeight: '700',
    fontSize: hp(1.2),
    color: "#474747",
    marginLeft: hp(0.4)
  },
});
export default styles;