import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from '../../Theme/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  listHeaderBlog: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(3),
    backgroundColor: Colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    borderRadius: 10
  },
  headerImage: {
    width: "100%",
    alignSelf: "center",
    height: hp(10),
    alignItems: 'flex-end'
  },
  tableButton: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderWidth: 1,
    borderColor: "#FFF700",
    backgroundColor: "#00509E",
    marginTop: hp(3)
  },
  tableButtonText: {
    fontSize: hp(1.2),
    fontWeight: '600',
    padding: hp(0.8),
    color: "#FFF700"
  },
  listHeader: {
    width: "90%",
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: hp(2)
  },
  imageStyle: {
    width: hp(7),
    height: hp(7),
    borderRadius: 6
  },
  listDataStyle: {
    marginLeft: hp(1.5)
  },
  titleStyle: {
    fontSize: hp(1.6),
    fontWeight: '700',
    color: "#00509E",
  },
  descriptionStyle: {
    fontSize: hp(1.3),
    fontWeight: '500',
    color: "#545454",
    marginTop: hp(0.4)
  },
  listProgress: {
    width: "90%",
    alignSelf: 'center',
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatAreaWrapper: {
    width: "90%",
    alignSelf: 'center',
    marginTop: hp(0.5),
    marginBottom: hp(0.5)
  },
  chatBottomWrapper: {
    width: "90%",
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
    width: hp(25),
    alignSelf: 'center',
    height: hp(5),
    borderRadius: 8,
    backgroundColor: "#0045A2",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(3),
    marginBottom: hp(2)
  },
  buttonText: {
    fontWeight: '700',
    fontSize: hp(2),
    color: Colors.white
  }
});
export default styles;