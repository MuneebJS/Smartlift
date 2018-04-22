/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';




export default class RegForm extends Component {
  static navigationOptions = {
    title: 'Signup',
  };
  render() {
    return <ScrollView contentContainerStyle={style.RegForm}>
      <Text style={style.header}>Registration</Text>
      <TextInput style={style.TextInput} placeholder="Full Name" underlineColorAndroid={'transparent'} />

      <TextInput style={style.TextInput} placeholder="Email" underlineColorAndroid={'transparent'} />

      <TextInput style={style.TextInput} placeholder="Contact no" underlineColorAndroid={'transparent'} />

      <TextInput style={style.TextInput} placeholder="Password" secureTextEntry={true}
        underlineColorAndroid={'transparent'} />

<TextInput style={style.TextInput} placeholder="Full Name" underlineColorAndroid={'transparent'} />

<TextInput style={style.TextInput} placeholder="Email" underlineColorAndroid={'transparent'} />

<TextInput style={style.TextInput} placeholder="Contact no" underlineColorAndroid={'transparent'} />

<TextInput style={style.TextInput} placeholder="Password" secureTextEntry={true}
  underlineColorAndroid={'transparent'} />

      <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={style.button}>

        <Text style={style.btntxt}>Sign Up</Text>

      </TouchableOpacity>

    </ScrollView>
  }
}



const style = StyleSheet.create({
  RegForm: {
    // alignself: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#66B5FF',
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 60,
  },

  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  
  },

  TextInput: {
    // alignself: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,

  },

  button: {
    // alignself: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#808080',
    marginTop: 30,
  }



});

