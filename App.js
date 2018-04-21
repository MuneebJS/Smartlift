import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import RegForm from './App/Component/regform';
import Home from './App/Component/regform';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'A project by Jawwad, Muneeb and Arsalan Ahmed',
});

class App extends Component {
componentDidMount(){
  SplashScreen.hide();
}


  render() {
    return <View style={styles.container}>
     
      <RegForm />
    </View >
  }
}

export default App;


const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#66B5FF',
    paddingLeft: 60,
    paddingRight: 60,

  },

});
