// import { StyleSheet,Dimensions } from 'react-native';

// const {width: WIDTH} = Dimensions.get('window');
// const {hight: HEIGHT} = Dimensions.get('window');

// module.exports  = StyleSheet.create({
//     // headerTitle:{
//     //   color: '#fff',
//     //   fontSize: 15,
//     //   padding: 20,
//     //   textAlign: "center",
//     //   //backgroundColor: 'rgb(91, 136, 0)',
//     // },
//     // headerButton:{
//     //   padding: 10,
//     // },
//   topBar: {
//       alignSelf: 'stretch',
//       height: 48,
//       flexDirection: 'row', // row
//       backgroundColor: 'rgb(91, 136, 0)',
//       alignItems: 'center',
//       justifyContent: 'space-between', // center, space-around
//       paddingLeft: 10,
//       paddingRight: 10,
//       // borderBottomColor: '#fff',
//       // borderBottomWidth: 5
//      },
//     textNull:{
//       color: 'rgb(91, 136, 0)',
//       fontSize: 20
//     },
//     container: {
//       flex: 1,
//       width: WIDTH,
//       flexDirection: 'column',
//     },
//     headerContainer:{
//       height: 40,
//       // flexDirection: 'row',
//       backgroundColor: 'rgba(0,0,0,0.2)',
//       justifyContent: 'space-between', 
//     },
//     bodyContainer:{
//       flex: 1,
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     questionContainer:{
//       marginTop: 50,
//       marginBottom: 10,
//       marginLeft: 10,
//       marginRight: 10,
//       alignItems: 'center',
//     },
//     questionText:{
//       fontSize: 18,
//       textAlign: 'center'
//     },
//     choiceContainer:{
//       marginTop: 50,
//       alignItems: 'center',
//     },
//     selection: {
//       borderColor: '#D6BA84',
//       borderWidth: 2,
//       paddingHorizontal: 10,
//       paddingVertical: 10,
//       borderRadius: 30,
//       marginBottom: 10,
//       width: 300,
//       fontSize: 18,
//     },
//     select: {
//       borderColor: '#D6BA84',
//       borderWidth: 2,
//       paddingHorizontal: 10,
//       paddingVertical: 10,
//       borderRadius: 30,
//       marginBottom: 10,
//       width: 300,
//       fontSize: 18,
//       backgroundColor:'orange'
//     },
//     infoContainer:{
//       position: 'absolute',
//       left: 0,
//       right: 0,
//       bottom: 0,
//       padding: 20,
//       height: 52,
//       flexDirection: 'row',
//       backgroundColor: 'black',
//       alignItems: 'center',
//       justifyContent: 'space-between', 
//     },
//     iconContainer:{
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     textIcon:{
//       fontSize: 10,
//       color: '#ffffff'
//     }
  
//   });

import { StyleSheet,Dimensions } from 'react-native';

const {width: WIDTH} = Dimensions.get('window');
const {hight: HEIGHT} = Dimensions.get('window');

module.exports  = StyleSheet.create({
    container: {
      flex: 1,
      width: WIDTH,
      flexDirection: 'column',
    },
    topBar: {
      alignSelf: 'stretch',
      height: 48,
      flexDirection: 'row', // row
      backgroundColor: 'rgb(105,194,198)',
      alignItems: 'center',
      justifyContent: 'space-between', // center, space-around
      paddingLeft: 10,
      paddingRight: 10,
      // borderBottomColor: '#fff',
      // borderBottomWidth: 5
     },
    headerContainer:{
      height: 40,
      flexDirection: 'row',
      backgroundColor: '#ffc2bc',
      justifyContent: 'space-between', 
    },
    bodyContainer:{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    textNull:{
      color: '#fff',
      fontSize: 20
    },
    headerContainer:{
      height: 40,
      // flexDirection: 'row',
      backgroundColor: 'rgba(0,0,0,0.2)',
      justifyContent: 'space-between', 
    },
    questionContainer:{
      marginTop: 50,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      alignItems: 'center',
    },
    questionText:{
      fontSize: 18,
      textAlign: 'center',
      fontFamily: 'comicsansms',
    },
    choiceContainer:{
      marginTop: 20,
      alignItems: 'center',
    },
    infoContainer:{
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      // padding: 20,
    },
    selection: {
      borderColor: '#D6BA84',
      borderWidth: 2,
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 30,
      marginBottom: 10,
      width: 300,
      fontSize: 18,
      fontFamily: 'comicsansms',
    },
    select: {
      borderColor: '#D6BA84',
      borderWidth: 2,
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 30,
      marginBottom: 10,
      width: 300,
      fontSize: 18,
      backgroundColor:'orange',
      fontFamily: 'comicsansms',
    },
    check: {
      color: 'white',
      backgroundColor: '#3498db',
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 30,
      fontSize: 17,
      marginBottom: 10,
      fontWeight: '500',
      textAlign: 'center',
      fontFamily: 'comicsansms',
    },
    next: {
      color: 'white',
      backgroundColor: '#67ac00',
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 30,
      fontSize: 17,
      marginBottom: 10,
      fontWeight: '500',
      textAlign: 'center',
      fontFamily: 'comicsansms',
    },
    nextFalse: {
      color: 'white',
      backgroundColor: 'red',
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 30,
      fontSize: 17,
      marginBottom: 10,
      fontWeight: '500',
      textAlign: 'center',
    },
    selected: {
      color: 'white',
      backgroundColor: 'lightgray',
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 30,
      fontSize: 17,
      marginBottom: 10,
      fontWeight: '500',
      textAlign: 'center',
      fontFamily: 'comicsansms',
    },
    true : {
      fontSize: 20,
      marginBottom: 10,
      fontWeight: '500',
      color: 'green',
      textAlign: 'center',
    },
    false : {
      fontSize:20,
      marginBottom: 10,
      fontWeight: '500',
      color: 'red',
      textAlign: 'center',
    },
    contentSpaceBetween: {
      alignItems: 'center',
      //justifyContent: 'space-around',
      flex: 2,
    },
    checkContainer:{
      width: 250,
    },
    checkButtonContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: 10,
    },
    checkButton:{
      width: WIDTH/3,
    },
  
  });