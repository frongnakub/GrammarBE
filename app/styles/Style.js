import { StyleSheet,Dimensions } from 'react-native';

const {width: WIDTH} = Dimensions.get('window');
const {hight: HEIGHT} = Dimensions.get('window');

module.exports = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: 'white',
    //     color: '#3E3E3E',
    //     padding: 10,
    // },
    backgroundImg: {
        flex: 1,
        width: WIDTH,
        height: HEIGHT,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyText: {
        borderColor: '#000000',
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 20,
        fontSize: 20,
        marginBottom: 10,
        backgroundColor: '#F3E5AB',
    },
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 30,
    },
    bottom: {
        justifyContent: 'space-between',
    },
    headers: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: '500',
        color: '#3E3E3E',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#3E3E3E',
        marginBottom: 5,
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
        color: '#3E3E3E',
    },
    menu: {
      backgroundColor: '#502ff5',
      textAlign: 'center',
      padding: 10,
      color: 'white',
      marginTop: 10,
      fontWeight: '500',
      fontSize: 16,
      borderRadius: 30,
      elevation: 5
    },
    load: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 2,
    },
});