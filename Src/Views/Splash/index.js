import React, { Component } from 'react';
import {
  Image,
  View,
  SafeAreaView
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { loginWithEmail } from '../../Redux/Actions/auth';


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
          // this.props.navigation.navigate('AuthStack', {
          //   screen: 'Login',

          // })
          this.showData()
        }
      }, 3000);
    })
  }
  showData = async () => {
    let loginCredentials = await AsyncStorage.getItem('loginCredentials')
    console.log("nafeel Logs::", loginCredentials)
    if (loginCredentials == 'null' || loginCredentials == null) {
      this.props.navigation.navigate('AuthStack', {
        screen: 'Login',
      })
    }
    else {
      let user = JSON.parse(loginCredentials)
      console.log("nafeel user::", user)
      const data = {
        email: user?.email,
        password: user?.password,
      };
      console.log("Login User::", data)
      this.props.loginUsers(user);
    }
  }
  render() {
    // console.log("Nafeel Splash Screen::", this.props.auth)
    return (
      <>

        {/* <SafeAreaView style={Styles.backgroundWrapper}> */}
        <View style={Styles.backgroundWrapper}>
          <Image source={Images.loginLogo} style={Styles.mainLogo} />
        </View>
        {/* </SafeAreaView> */}

      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginUsers: (user) => dispatch(loginWithEmail(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen);