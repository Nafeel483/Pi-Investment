import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Theme/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  backgroundWrapper: {
    flex: 1,
  },
  mainLogo: {
    width: '100%',
    height: "100%",
  }
});
export default styles;