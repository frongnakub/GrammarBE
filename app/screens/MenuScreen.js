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

const {width: WIDTH} = Dimensions.get('window');

export default class HomeScreen extends Component {
    
    render () {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={require('../images/outer-space-dark-17.png')} style={styles.backgroundImg}>
        <ScrollView >
          <View style={styles.container}>
            <TouchableOpacity style={styles.lessonContainer1} onPress={() => navigate('Article')}>
              <Text></Text>
              <Text style={styles.lessonText1}>Article</Text>       
              <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lessonContainer2} onPress={() => navigate('SingularPlural')}>
            <Text></Text>
              <Text style={styles.lessonText2}>Singular / Plural</Text>   
              <Text></Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.lessonContainer3} onPress={() => navigate('Auxiliary')}>
              <Text></Text>
              <Text style={styles.lessonText3}>Auxiliary Verb</Text>     
              <Text></Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.lessonContainer4} onPress={() => navigate('Adverb')}>
              <Text></Text>
              <Text style={styles.lessonText4}>Adverb</Text>     
              <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lessonContainer5} onPress={() => navigate('Adjective')}>
              <Text></Text>
              <Text style={styles.lessonText5}>Adjective</Text>     
              <Text></Text>
            </TouchableOpacity>      
            <TouchableOpacity style={styles.lessonContainer6} onPress={() => navigate('Conjunction')}>
              <Text></Text>  
              <Text style={styles.lessonText6}>Conjunction</Text>   
              <Text></Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.lessonContainer7} onPress={() => navigate('Gerund')}>
              <Text></Text>
              <Text style={styles.lessonText8}>Infinitive And Gerund</Text>      
              <Text></Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.lessonContainer8} onPress={() => navigate('Participle')}>
              <Text></Text>
              <Text style={styles.lessonText8}>Participle</Text>        
              <Text></Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.lessonContainer9} onPress={() => navigate('Comparison')}>
              <Text></Text>
              <Text style={styles.lessonText9}>Comparison</Text>  
              <Text></Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.lessonContainer10} onPress={() => navigate('ActivePassive')}>
              <Text></Text>
              <Text style={styles.lessonText10}>Active / Passive</Text>    
              <Text></Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.lessonContainer11} onPress={() => navigate('IfClause')}>
              <Text></Text>  
              <Text style={styles.lessonText11}>If-clause</Text>
              <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lessonContainer12} onPress={() => navigate('MenuPrepos')}>
              <Text></Text>   
              <Text style={styles.lessonText12}>Preposition</Text>
              <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lessonContainer13} onPress={() => navigate('Preposition')}>
              <Text></Text> 
              <Text style={styles.lessonText13}>Pronoun</Text>      
              <Text></Text>
            </TouchableOpacity>      
            <TouchableOpacity style={styles.lessonContainer14} onPress={() => navigate('Tenses')}>
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
    },
    lessonContainer2:{
      alignSelf: 'stretch',
      padding: 20,
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
    },
    lessonContainer3:{
      alignSelf: 'stretch',
      padding: 20,
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
      fontSize: 20,
      fontFamily: 'comicsansms',
      color: '#9C27B0',
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
    },
    lessonContainer7:{
      alignSelf: 'stretch',
      padding: 20,
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
      fontSize: 20,
      fontFamily: 'comicsansms',
      color: '#00BCD4',
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
    },
    lessonContainer10:{
      alignSelf: 'stretch',
      padding: 20,
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
      fontSize: 20,
      fontFamily: 'comicsansms',
      color: '#8BC34A',
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
    },
  });