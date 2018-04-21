import React, { Component } from 'react';
  import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground

   
  } from 'react-native';

  export default class Home extends Component {
    render() {
      return <ImageBackground source={require('./App/Images/bg.jpg')} 
      
      style={style.Home}>
       
      </ImageBackground>
    }
  }



  const style = StyleSheet.create({
    Home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }

  });

