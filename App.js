import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import SplashScreen from 'react-native-splash-screen';
import Home from './App/Component/Home';
import RegForm from './App/Component/regform';
import SignIn from './App/Component/SignIn';
// import Home from './App/Component/Home';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'A project by Jawwad, Muneeb and Arsalan Ahmed',
});


console.disableYellowBox = true;


const PrimaryNav = StackNavigator({
  Home: { screen: Home }, 
  RegForm: { screen: RegForm },
  SignIn: {screen:SignIn},
  //sg: {screen:RegForm},
  // About: {screen: }
});

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <View style={styles.container}>
      {/* <RegForm /> */}
      <PrimaryNav />
    </View >
  }
}

export default App;


const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#66B5FF',
    // paddingLeft: 60,
    // paddingRight: 60,

  },

});
