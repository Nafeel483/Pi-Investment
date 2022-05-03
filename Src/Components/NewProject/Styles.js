import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../Theme/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  listContainer: {
    width: widthScreen / 1.15,
    alignSelf: 'center',
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
    marginRight: hp(3.5)
  },
  listHeader: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: hp(2),
    marginBottom: hp(2),
    justifyContent: 'space-between'
  },
  imageStyle: {
    width: hp(7),
    height: hp(10),
    borderRadius: 6
  },
  listDataStyle: {
    width: hp(30)
  },
  listWrapper: {
    width: hp(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  titleStyle: {
    fontSize: hp(1.25),
    fontWeight: '400',
    color: Colors.black,
    width: hp(9)
  },
  descriptionStyle: {
    fontSize: hp(1.1),
    fontWeight: '400',
    color: "#545454",
    textAlign: 'left',
    width: hp(20)

  },
  chatAreaWrapper: {
    width: hp(30),
    alignSelf: 'center',
    marginTop: hp(1)
  },
  chatBottomWrapper: {
    width: hp(27.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignSelf: 'center',
    marginTop: hp(0.3)
  },
  progresText: {
    fontSize: hp(1.1),
    fontWeight: '500',
    color: "#0045A2",
    fontStyle: 'italic'
  },
  chevronStyle: {
    width: hp(6),
    height: hp(6),
    position: 'absolute',
    right: -20,
    top: 35
  },
  listSeperator: {
    height: hp(6.5),
    width: hp(0.55),
    backgroundColor: "#0045A2",
    borderRadius: 25,
    position: 'absolute',
    left: -1,
    top: 33

  },
});
export default styles;