import { StyleSheet,Dimensions } from 'react-native';

const {width: WIDTH} = Dimensions.get('window');
const {hight: HEIGHT} = Dimensions.get('window');

module.exports  = StyleSheet.create({
    container: {
        flex: 1,
        width: WIDTH,
        backgroundColor: '#EAD8AB',
    },
    bottom: {
        justifyContent: 'space-between',
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '700',
        color: '#3E3E3E',
        marginBottom: 20,
        marginTop: 30,
        fontFamily: 'comicsansms',
    },
    textStart: {
      fontSize: 18,
      color: '#3E3E3E',
      textAlign: 'center',
      fontWeight: '500',
      marginBottom: 10,
      fontFamily: 'comicsansms',
    },
    resultBox: {
      fontSize: 18,
      margin: 20,
      backgroundColor: 'rgba(255,0,0,0.4)',
      borderRadius: 20,
      borderWidth: 5,
      borderColor: 'rgb(255,0,0)',
    },
    resultBoxCorrect: {
      fontSize: 18,
      margin: 20,
      backgroundColor:'rgba(0,255,0,0.1)',
      borderRadius: 20,
      borderWidth: 5,
      borderColor: '#67ac00'
    },
    resultText: {
        textAlign: 'center',
        fontSize: 18,
        padding: 10,
        color: '#ffff',
    },
    roundedBtnText: {
      fontSize: 22,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      color:'#ffff',
      textAlign: 'center',
      fontFamily: 'comicsansms'
    },
    roundedBtn: {
        justifyContent: 'center',
        //width: 300,
        backgroundColor: '#956F3F',
        borderRadius: 50,
        margin: 20,
        paddingTop: 8,
        paddingBottom: 8
    },
    topBar: {
      alignSelf: 'stretch',
      height: 52,
      flexDirection: 'row', // row
      backgroundColor: '#7F4F2C',
      alignItems: 'center',
      justifyContent: 'space-between', // center, space-around
      paddingLeft: 10,
      paddingRight: 10
  },
});