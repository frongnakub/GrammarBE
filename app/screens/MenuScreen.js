import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    ImageBackground
} from 'react-native';

import axios from 'axios';

const {width: WIDTH} = Dimensions.get('window');

import Icon from 'react-native-vector-icons/AntDesign';

export default class HomeScreen extends Component {
  state = {
    loading: true,
    username: this.props.navigation.state.params.username,
  }

    render () {
        const { navigate } = this.props.navigation;
        const {  loading, username } = this.state
        return (
            <ImageBackground source={require('../images/18111318.jpg')} style={styles.backgroundImg}>
              <View style={styles.topBar}>             
                <Text ></Text>
                <Text style={{fontSize: 20,fontFamily: 'comicsansms'}}>Lesson</Text>
                <TouchableOpacity onPress={() => navigate('MenuBar',{username: username})}>
                  <Icon
                  name="bars"
                  size={30}
                  />   
                </TouchableOpacity>
                    
              </View>
        <ScrollView >
          <View style={styles.container}>
            <TouchableOpacity style={styles.lessonContainer1} onPress={() => navigate('Article',{username: username})}>
              <Text></Text>
              <Text style={styles.lessonText1}>Article</Text>       
              <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lessonContainer2} onPress={() => navigate('SingularPlural',{username: username})}>
            <Text></Text>
              <Text style={styles.lessonText2}>Noun</Text>   
              <Text></Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.lessonContainer3} onPress={() => navigate('Auxiliary',{username: username})}>
              <Text></Text>
              <Text style={styles.lessonText3}>Auxiliary Verb</Text>     
              <Text></Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.lessonContainer4} onPress={() => navigate('Adverb',{username: username})}>
              <Text></Text>
              <Text style={styles.lessonText4}>Adverb</Text>     
              <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lessonContainer5} onPress={() => navigate('Adjective',{username: username})}>
              <Text></Text>
              <Text style={styles.lessonText5}>Adjective</Text>     
              <Text></Text>
            </TouchableOpacity>      
            <TouchableOpacity style={styles.lessonContainer6} onPress={() => navigate('Conjunction',{username: username})}>
              <Text></Text>  
              <Text style={styles.lessonText6}>Conjunction</Text>   
              <Text></Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.lessonContainer7} onPress={() => navigate('Gerund',{username: username})}>
              <Text></Text>
              <Text style={styles.lessonText7}>{'Infinitive & Gerund'}</Text>      
              <Text></Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.lessonContainer8} onPress={() => navigate('Participle',{username: username})}>
              <Text></Text>
              <Text style={styles.lessonText8}>Participle</Text>        
              <Text></Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.lessonContainer9} onPress={() => navigate('Comparison',{username: username})}>
              <Text></Text>
              <Text style={styles.lessonText9}>Comparison</Text>  
              <Text></Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.lessonContainer10} onPress={() => navigate('ActivePassive',{username: username})}>
              <Text></Text>
              <Text style={styles.lessonText10}>Active / Passive</Text>    
              <Text></Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.lessonContainer11} onPress={() => navigate('IfClause',{username: username})}>
              <Text></Text>  
              <Text style={styles.lessonText11}>If-clause</Text>
              <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lessonContainer12} onPress={() => navigate('Preposition',{username: username})}>
              <Text></Text>   
              <Text style={styles.lessonText12}>Preposition</Text>
              <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lessonContainer13} onPress={() => navigate('Pronoun',{username: username})}>
              <Text></Text> 
              <Text style={styles.lessonText13}>Pronoun</Text>      
              <Text></Text>
            </TouchableOpacity>      
            <TouchableOpacity style={styles.lessonContainer14} onPress={() => navigate('Tenses',{username: username})}>
              <Text></Text>
              <Text style={styles.lessonText14}>Tenses</Text> 
              <Text></Text>
            </TouchableOpacity>   
          </View>
          
        </ScrollView>
      </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImg: {
      flex: 1,
      width: WIDTH,
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      //backgroundColor:'rgba(155,0,24,.5)'
    },
    topBar: {
      alignSelf: 'stretch',
      height: 48,
      flexDirection: 'row', // row
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between', // center, space-around
      paddingLeft: 10,
      paddingRight: 10,
      // borderBottomColor: '#fff',
      // borderBottomWidth: 5
     },
    // headerTitle:{
    //   color: '#fff',
    //   fontSize: 15,
    //   padding: 20,
    //   textAlign: 'center',
    //   fontFamily: 'Romance',
    // },
    headerButton:{
      padding: 10,
    },
    lessonContainer1:{
      alignSelf: 'stretch',
      padding: 20,
      alignItems: 'center',
      borderColor: 'rgba(244,67,54,0.5)',
      borderWidth: 5,
      height: 120,
      width: (WIDTH/2)-20,
      borderRadius: 50,
      marginVertical: 10,
      marginHorizontal: 5,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    lessonText1:{
      fontSize: 20,
      fontFamily: 'comicsansms',
      color: 'rgb(244,67,54)',
      textAlign: 'center'
    },
    lessonContainer2:{
      alignSelf: 'stretch',
      //padding: 20,
      height: 70,
      alignItems: 'center',
      borderColor: 'rgba(233,30,99,0.7)',
      borderWidth: 5,
      height: 120,
      width: (WIDTH/2)-20,
      borderRadius: 50,
      marginVertical: 10,
      marginHorizontal: 5,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    lessonText2:{
      fontSize: 20,
      fontFamily: 'comicsansms',
      color: 'rgba(233,30,99,0.7)',
      textAlign: 'center'
    },
    lessonContainer3:{
      alignSelf: 'stretch',
      //padding: 20,
      height: 70,
      alignItems: 'center',
      borderColor: '#9C27B0',
      borderWidth: 5,
      height: 120,
      width: (WIDTH/2)-20,
      borderRadius: 50,
      marginVertical: 10,
      marginHorizontal: 5,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    lessonText3:{
      fontSize: 17,
      fontFamily: 'comicsansms',
      color: '#9C27B0',
      textAlign: 'center'
    },
    lessonContainer4:{
      alignSelf: 'stretch',
      padding: 20,
      height: 70,
      alignItems: 'center',
      borderColor: '#3F51B5',
      borderWidth: 5,
      height: 120,
      width: (WIDTH/2)-20,
      borderRadius: 50,
      marginVertical: 10,
      marginHorizontal: 5,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    lessonText4:{
      fontSize: 20,
      fontFamily: 'comicsansms',
      color: '#3F51B5',
      textAlign: 'center'
    },
    lessonContainer5:{
      alignSelf: 'stretch',
      padding: 20,
      height: 70,
      alignItems: 'center',
      borderColor: '#2196F3',
      borderWidth: 5,
      height: 120,
      width: (WIDTH/2)-20,
      borderRadius: 50,
      marginVertical: 10,
      marginHorizontal: 5,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    lessonText5:{
      fontSize: 20,
      fontFamily: 'comicsansms',
      color: '#2196F3',
      textAlign: 'center'
    },
    lessonContainer6:{
      alignSelf: 'stretch',
      padding: 20,
      height: 70,
      alignItems: 'center',
      borderColor: '#03A9F4',
      borderWidth: 5,
      height: 120,
      width: (WIDTH/2)-20,
      borderRadius: 50,
      marginVertical: 10,
      marginHorizontal: 5,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    lessonText6:{
      fontSize: 20,
      fontFamily: 'comicsansms',
      color: '#03A9F4',
      textAlign: 'center'
    },
    lessonContainer7:{
      alignSelf: 'stretch',
      //padding: 20,
      height: 70,
      alignItems: 'center',
      borderColor: '#00BCD4',
      borderWidth: 5,
      height: 120,
      width: (WIDTH/2)-20,
      borderRadius: 50,
      marginVertical: 10,
      marginHorizontal: 5,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    lessonText7:{
      fontSize: 16,
      fontFamily: 'comicsansms',
      color: '#00BCD4',
      textAlign: 'center'
    },
    lessonContainer8:{
      alignSelf: 'stretch',
      padding: 20,
      height: 70,
      alignItems: 'center',
      borderColor: '#009688',
      borderWidth: 5,
      height: 120,
      width: (WIDTH/2)-20,
      borderRadius: 50,
      marginVertical: 10,
      marginHorizontal: 5,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    lessonText8:{
      fontSize: 20,
      fontFamily: 'comicsansms',
      color: '#009688',
      textAlign: 'center'
    },
    lessonContainer9:{
      alignSelf: 'stretch',
      padding: 20,
      height: 70,
      alignItems: 'center',
      borderColor: '#4CAF50',
      borderWidth: 5,
      height: 120,
      width: (WIDTH/2)-20,
      borderRadius: 50,
      marginVertical: 10,
      marginHorizontal: 5,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    lessonText9:{
      fontSize: 20,
      fontFamily: 'comicsansms',
      color: '#4CAF50',
      textAlign: 'center'
    },
    lessonContainer10:{
      alignSelf: 'stretch',
      //padding: 20,
      height: 70,
      alignItems: 'center',
      borderColor: '#8BC34A',
      borderWidth: 5,
      height: 120,
      width: (WIDTH/2)-20,
      borderRadius: 50,
      marginVertical: 10,
      marginHorizontal: 5,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    lessonText10:{
      fontSize: 16,
      fontFamily: 'comicsansms',
      color: '#8BC34A',
      textAlign: 'center'
    },
    lessonContainer11:{
      alignSelf: 'stretch',
      padding: 20,
      height: 70,
      alignItems: 'center',
      borderColor: '#CDDC39',
      borderWidth: 5,
      height: 120,
      width: (WIDTH/2)-20,
      borderRadius: 50,
      marginVertical: 10,
      marginHorizontal: 5,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    lessonText11:{
      fontSize: 20,
      fontFamily: 'comicsansms',
      color: '#CDDC39',
      textAlign: 'center'
    },
      lessonContainer12:{
      alignSelf: 'stretch',
      padding: 20,
      height: 70,
      alignItems: 'center',
      borderColor: '#FFC107',
      borderWidth: 5,
      height: 120,
      width: (WIDTH/2)-20,
      borderRadius: 50,
      marginVertical: 10,
      marginHorizontal: 5,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    lessonText12:{
      fontSize: 20,
      fontFamily: 'comicsansms',
      color: '#FFC107',
      textAlign: 'center'
    },
    lessonContainer13:{
      alignSelf: 'stretch',
      padding: 20,
      height: 70,
      alignItems: 'center',
      borderColor: '#FF9800',
      borderWidth: 5,
      height: 120,
      width: (WIDTH/2)-20,
      borderRadius: 50,
      marginVertical: 10,
      marginHorizontal: 5,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    lessonText13:{
      fontSize: 20,
      fontFamily: 'comicsansms',
      color: '#FF9800',
      textAlign: 'center'
    },
    lessonContainer14:{
      alignSelf: 'stretch',
      padding: 20,
      height: 70,
      alignItems: 'center',
      borderColor: '#FF5722',
      borderWidth: 5,
      height: 120,
      width: (WIDTH/2)-20,
      borderRadius: 50,
      marginVertical: 10,
      marginHorizontal: 5,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    lessonText14:{
      fontSize: 20,
      fontFamily: 'comicsansms',
      color: '#FF5722',
      textAlign: 'center'
    },
  });