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
  ScrollView,
  Button,
  Image,
  label
} from 'react-native';





export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',

  
  };
  render() {
    return <View style={style.Home}>

<View style={style.msg}>
<TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')} style={style.btnSI}>
        <Text>SignIn</Text>
      </TouchableOpacity>
   
            </View> 
         
<View>

<Image source={require('./cl.png')} style={style.logo} />

      </View>

<View style={style.mHbtn}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('RegForm')} style={style.buttond}>
        <Text>Driver</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate('RegForm')} style={style.buttonp}>
        <Text>Passenger</Text>
      </TouchableOpacity>

</View>      

    </View>
  }
}



const style = StyleSheet.create({
 
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

  buttond: {
 
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#808080',
    marginTop: 100,
    marginBottom:10,
    
     width:200
    
  },

  buttonp: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#808080',
    marginTop:0.2,
    width:200,
  },

 logo:{
  height:160,
  width:160,
justifyContent: 'center',
  marginTop:80,
  alignItems: 'center',
  marginLeft: 95
 },

 mHbtn:{
  // flex:3,
   alignItems:'center'
 },

 
sg:{
 width:240,
 height:40,
  marginLeft:195
},

Home:{
  backgroundColor: '#CC9999',
  borderBottomWidth: 1,
  marginTop:41

},

btnSI:{
  marginTop:10,
  marginLeft:310,
  width:null,
  height:null
}



});;

