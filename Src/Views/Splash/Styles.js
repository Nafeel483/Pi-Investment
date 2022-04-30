import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  backgroundWrapper: {
    flex: 1,
    width: '100%',
    height: "100%",
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: Colors.White
  },
  mainLogo: {
    width: hp(22),
    height: hp(17),
  }
});
export default styles;