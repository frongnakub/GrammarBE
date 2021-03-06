import { StyleSheet,Dimensions } from 'react-native';

const {width: WIDTH} = Dimensions.get('window');
const {hight: HEIGHT} = Dimensions.get('window');

module.exports = StyleSheet.create({
    backgroundImg: {
        flex: 1,
        width: WIDTH,
        height: HEIGHT,
        //backgroundColor:'transparent',
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
        marginBottom: 20,
        backgroundColor: '#F3E5AB',
        fontFamily: 'comicsansms',
    },
    bodyText2: {
        borderColor: '#000000',
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 20,
        fontSize: 20,
        marginBottom: 20,
        fontFamily: 'comicsansms',
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
        fontFamily: 'comicsansms',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: '#000000',
        backgroundColor: '#f59cff',
    },
    headers2: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
        color: '#3E3E3E',
        fontFamily: 'comicsansms',
    },
    content: {
        fontSize: 18,
        fontWeight: '400',
        color: '#3E3E3E',
        marginBottom: 10,
        fontFamily: 'comicsansms_bold',
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#3E3E3E',
        marginBottom: 5,
        fontFamily: 'comicsansms',
    },
    text: {
        fontSize: 18,
        marginBottom: 15,
        color: '#3E3E3E',
        fontFamily: 'comicsansms',
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
      elevation: 5,
      fontFamily: 'comicsansms',
    },
    load: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 2,
    },
    containerT: { 
        flex: 1, 
        padding: 16, 
        paddingTop: 30, 
        backgroundColor: '#fff' 
    },
    headT: {  
        height: 40,  
        backgroundColor: '#f1f8ff'  
    },
    wrapperT: { 
        flexDirection: 'row' 
    },
    titleT: { 
        flex: 1,
        backgroundColor: '#f6f8fa' 
    },
    rowT: {  
        height: 150 
    },
    textT: { 
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'comicsansms',
    }
});