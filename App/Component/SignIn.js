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
  Image,
  KeyboardAvoidingView,

} from 'react-native';





export default class SignIn extends Component {
  static navigationOptions = {
    title: 'Signup',
  };
  render() {
    return (
    
    <KeyboardAvoidingView View behavior="padding" style={style.container} >
    
     <View style={style.logoContainer}>

    <Image source={require('./cl.png')} style={style.logo} />
       
         </View>

    <View style={style.formcontainer}>

    <TextInput
     placeholder="Username or email" placeholderTextColor="#cccccc" style={style.input}/>

    <TextInput
     placeholder="Password" style={style.input} placeholderTextColor="#cccccc" secureTextEntry={true}/>
        </View>     

        <View style={style.sin}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={style.button}>

<Text style={style.btntxt}>Sign In</Text>

</TouchableOpacity>

<TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')} style={style.fp}>
        <Text>Forget Password?</Text>
      </TouchableOpacity>
            </View>

    </KeyboardAvoidingView>
    )
  }
}



const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#66B5FF'
  },

  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  
  },

//   TextInput: {
//     // alignself: 'stretch',
//     height: 40,
//     marginBottom: 30,
//     color: '#fff',
//     borderBottomColor: '#f8f8f8',
//     borderBottomWidth: 1,
//   },

  logo:{
    height:120,
    width:120,
  justifyContent: 'center',
    marginTop:60,
    alignItems: 'center',
    marginLeft: 115, 
  },

  logoContainer:{

  },

  input:{
      height:40,
      backgroundColor:'white',
      marginBottom:20,
      marginTop:20,
      color: 'black',
      paddingHorizontal:10
  },

  formcontainer:{
      padding:20,
  },

  button:{
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#808080',
    marginTop: 5,
    width:200,

  },
  sin:{
      alignItems:'center',
      justifyContent:'center'

  },

  fp:{
    marginTop:15

  }
  

});

