import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    ScrollView, 
    TextInput, 
    AsyncStorage, 
    ActivityIndicator,
    KeyboardAvoidingView,
    Dimensions,
    ImageBackground,
} from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';

const { height, width } = Dimensions.get('window');

const w = percent => (width * percent) / 100;
const h = percent => (height * percent) / 100;
const totalSize = num => (Math.sqrt((height * height) + (width * width)) * num) / 100;

export default class Login extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Login',
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: '#03A9F4',
        }
    }
    
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
                //AsyncStorage.setItem('user', res.user);
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
            <ImageBackground source={require('../images/hood.png')} style={styles.backgroundImg}>
                        <View>
                        <Text style={styles.title}>GrammarBE</Text>
                        <Text style={{color: 'red'}}>{message}</Text>
                        <View style={styles.contentSpaceBetween}>
                            <View style={styles.input}>
                                <Icon name="person" size={20} backgroundColor="#ffff" />
                                <TextInput
                                    style={styles.inputStyle}
                                    placeholder="Username"
                                    keyboardType="default"
                                    onChangeText={(text) => this.setState({ username: text })}
                                />
                            </View>
                            <View style={styles.input}>
                                <Icon name="key" size={20} backgroundColor="#ffff" />
                                <TextInput
                                    style={styles.inputStyle}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    onChangeText={(text) => this.setState({ password: text })}
                                />
                            </View>    
                        </View>
                        {
                            loading ? <ActivityIndicator style={{marginTop: 20}} size={40} color="#74b9ff" />
                                :
                                <TouchableOpacity onPress={this.login} style={styles.contentSpaceBetween}>
                                    <Text style={styles.login}>GET STARTED</Text>
                                </TouchableOpacity>
                        }
                        <Text style={styles.click} onPress={() =>  this.props.navigation.navigate('Regis')}>Create Account</Text>
                    </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImg: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        flex: 1,
        padding: 20,
        borderRadius: 20,
        marginTop: 50,
    },
    title: {
        alignItems: 'center',
        fontSize: totalSize(5),
        marginBottom: h(4),
        marginTop: h(7),
        fontWeight: '700',
        color: '#ffff',
        textAlign: 'center',
    },
    login: {
        //marginBottom: h(4),
        //marginTop: h(3),
        //marginVertical: 5,
        backgroundColor: '#03A9F4',
        color: 'white',
        borderRadius: 15,
        width: 300,
        //elevation: 5,
        fontWeight: '700',
        fontSize: totalSize(2.5),
        textAlign: 'center',
        padding: 10,
    },
    input: {
        marginVertical: 5,
        flexDirection: 'row', // row
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'space-between', // center, space-around
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 17,
        borderColor: 'white',
        borderRadius: 15,
        marginTop: h(1.5),
        marginBottom: h(1.5),
        elevation: 5,
    },
    inputStyle: {
        flex: 1,
    },
    register: {
        flex: 1,
        fontSize: 13,
        marginTop: 10,
        fontWeight: '500',
        color: 'black',
        textAlign: 'right'
    },
    click: {
        //flex: 1,
        fontSize: totalSize(2.5),
        marginTop: 5,
        textAlign: 'center',
        fontWeight: '500',
        //textDecorationLine: 'underline',
        color: '#ffff',
        //textAlign: 'right'
    },
    contentSpaceBetween: {
        marginTop: h(7),
        marginBottom: h(4),
        alignItems: 'center',
        justifyContent: 'space-around',
        //flex: 2,
    },
});