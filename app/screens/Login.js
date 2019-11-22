import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    TextInput, 
    ActivityIndicator,
    Dimensions,
    ImageBackground,
    TouchableNativeFeedback,
    StatusBar,
    SafeAreaView,
    Keyboard,
    KeyboardAvoidingView,
} from 'react-native';
import axios from 'axios';

const {width: WIDTH} = Dimensions.get('window');
const {height: HEIGHT} = Dimensions.get('window');

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    login = () => {
        fetch('http://localhost:3003/users', { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                username: this.state.username,
                password: this.state.password,
            })
        })
        .then((response) => response.json())
        .then((res) => {
            if (res.success === true){
                this.props.navigation.navigate('Profile', {username: res.user}); 
            }
            else{
                alert(res.message);
            }
        })
        .done();
    }

    render() {
        const { loading, message } = this.state
        return (
            <ImageBackground source={require('../images/backgroud.png')} style={styles.backgroundImg}>
                <SafeAreaView style={styles.container}>
                        
                        <Text style={{color: 'red'}}>{message}</Text>
                    
                    <StatusBar barStyle='light-content'/>
                    <KeyboardAvoidingView  style={styles.container} >
                    <TouchableNativeFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.infoContainer}>
                            <TextInput style={styles.input}
                                placeholder = "Enter username"
                                placeholderTextColor = "rgb(0,0,0)"
                                onChangeText={text => this.setState({username: text})}
                                returnKeyType="next"
                                autoCorrect={false}
                            />
                            <TextInput style={styles.input}
                                placeholder = "Enter password"
                                placeholderTextColor = "rgb(0,0,0)"
                                onChangeText={text=> this.setState({password: text})}
                                returnKeyType="go"
                                secureTextEntry
                                autoCorrect={true}
                            />  
                        
                        {
                            loading ? <ActivityIndicator style={{marginTop: 20}} size={40} color="#74b9ff" />
                                :
                                <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>GET STARTED</Text>
                                </TouchableOpacity>
                        }
                        <Text style={styles.click} onPress={() =>  this.props.navigation.navigate('Regis')}>Create Account</Text>
                        </View>
                    </TouchableNativeFeedback>
                </KeyboardAvoidingView>

                </SafeAreaView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImg:{
        flex: 1,
        width: WIDTH,
        height: HEIGHT,
        flexDirection: 'column',
    },
    container:{ 
        flex: 1,
        //backgroundColor: 'rgb(105,194,198)'
    },
    logoContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    // logo:{
    //     width: 400,
    //     height: 500,
    // },
    infoContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 290,
        padding: 20,
        // backgroundColor: 'red'
    },
    input:{
        height: 50,
        backgroundColor: 'rgba(255,255,255,1)',
        color: 'rgb(0,0,0)',
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 10,
        fontFamily: 'comicsansms',
        fontSize: 14,
    },
    buttonContainer:{
        backgroundColor: '#f7c744',
        paddingVertical: 10,
        borderRadius: 10

    },
    buttonText:{
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'comicsansms',
    },
    click: {
        fontSize: 18,
        paddingTop: 15,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'comicsansms',
    },
    buttonCF:{
        alignSelf: 'stretch',
        //flexDirection: 'row',
        //justifyContent: 'space-between', // center, space-around
        paddingLeft: 10,
        paddingRight: 10
    }

})