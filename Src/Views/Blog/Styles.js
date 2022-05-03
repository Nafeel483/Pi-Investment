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
    marginBottom: hp(4)
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
  searchFlex: {
    marginTop: hp(2.5),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchText: {
    fontWeight: '700',
    fontSize: hp(2),
    color: "#00509E",
    marginTop: hp(1.5)
  },
  emailWrapper: {
    flexDirection: 'row',
    borderColor: "#EBEFF0",
    backgroundColor: "#EBEFF0",
    height: hp(5.5),
    justifyContent: 'center',
    alignItems: 'center',
    width: hp(27),
    borderRadius: 25
  },
  emailInput: {
    marginLeft: hp(1.5),
    flex: 1,
    fontSize: hp(1.7),
    color: "#8F8F8F",
    fontWeight: '400',
    fontStyle: 'italic'
  },
  searchStyle: {
    width: hp(2.5),
    height: hp(2.3),
    marginLeft: hp(1.5),
  },
  tabContainer: {
    marginTop: hp(3),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listSeperator: {
    height: hp(0.1),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: "#CAD6DA",
    marginBottom: hp(2)
  },
  tabHeadText: {
    fontSize: hp(1.5),
    fontWeight: '700',
    textAlign: 'center'
  },
  seperatorTabContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
  },
  seperatorTab: {
    height: hp(0.3),
    width: hp(10),
    backgroundColor: "#1A469C",
    marginTop: hp(1.5)
  }
});
export default styles;