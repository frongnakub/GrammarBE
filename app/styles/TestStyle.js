import { StyleSheet,Dimensions } from 'react-native';

const {width: WIDTH} = Dimensions.get('window');
const {hight: HEIGHT} = Dimensions.get('window');

module.exports  = StyleSheet.create({
    container: {
      flex: 1,
      width: WIDTH,
      flexDirection: 'column',
    },
    headerContainer:{
      height: 40,
      flexDirection: 'row',
      backgroundColor: '#fa9f3e',
      justifyContent: 'space-between', 
    },
    bodyContainer:{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
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
      fontSize: 18,
      fontWeight: '500',
      color: 'green',
      textAlign: 'center',
    },
    false : {
      fontSize: 18,
      fontWeight: '500',
      color: 'red',
      textAlign: 'center',
    },
    contentSpaceBetween: {
      alignItems: 'center',
      justifyContent: 'space-around',
      flex: 2,
    },
    checkContainer:{
      width: 250,
    },
  
  });