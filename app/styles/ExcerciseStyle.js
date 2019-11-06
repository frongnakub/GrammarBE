import { StyleSheet,Dimensions } from 'react-native';

const {width: WIDTH} = Dimensions.get('window');
const {hight: HEIGHT} = Dimensions.get('window');

module.exports  = StyleSheet.create({
    // headerTitle:{
    //   color: '#fff',
    //   fontSize: 15,
    //   padding: 20,
    //   textAlign: "center",
    //   //backgroundColor: 'rgb(91, 136, 0)',
    // },
    // headerButton:{
    //   padding: 10,
    // },
  topBar: {
      alignSelf: 'stretch',
      height: 48,
      flexDirection: 'row', // row
      backgroundColor: 'rgb(91, 136, 0)',
      alignItems: 'center',
      justifyContent: 'space-between', // center, space-around
      paddingLeft: 10,
      paddingRight: 10,
      // borderBottomColor: '#fff',
      // borderBottomWidth: 5
     },
    textNull:{
      color: 'rgb(91, 136, 0)',
      fontSize: 20
    },
    container: {
      flex: 1,
      width: WIDTH,
      flexDirection: 'column',
    },
    headerContainer:{
      height: 40,
      // flexDirection: 'row',
      backgroundColor: 'rgba(0,0,0,0.2)',
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
      textAlign: 'center'
    },
    choiceContainer:{
      marginTop: 50,
      alignItems: 'center',
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
      backgroundColor:'orange'
    },
    infoContainer:{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 20,
      height: 52,
      flexDirection: 'row',
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'space-between', 
    },
    iconContainer:{
      flexDirection: 'column',
      alignItems: 'center',
    },
    textIcon:{
      fontSize: 10,
      color: '#ffffff'
    }
  
  });