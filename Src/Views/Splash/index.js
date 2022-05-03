import React, { Component } from 'react';
import {
  Image,
  View,
  SafeAreaView
} from 'react-native';
import Styles from './Styles';
import Images from '../../Theme/Images';



class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.moved = false;
  }
  componentDidMount = () => {
    this.focusListener = this.props.navigation.addListener('focus', async () => {
      setTimeout(() => {
        if (!this.moved) {
          this.props.navigation.navigate('BottomTab', {
            screen: 'Overview',

          })
        }
      }, 3000);
    })
  }
 
  render() {
    return (
      <>

        <View style={Styles.backgroundWrapper}>
          <Image source={Images.splash} style={Styles.mainLogo} />
        </View>

      </>
    );
  }
}

export default SplashScreen;