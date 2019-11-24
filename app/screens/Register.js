import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    ScrollView, 
    TextInput, 
    ImageBackground, 
    ActivityIndicator ,
    Dimensions
} from 'react-native';

import axios from 'axios';

const {width: WIDTH} = Dimensions.get('window');
const {height: HEIGHT} = Dimensions.get('window');

export default class Register extends Component {
    state = {
        username: '',
        password: '',
        name: '',
        surname: '',
        loading: false,
        message: '',
        email: '',
    }

    register = () => {
        const { username, password, name, surname, email } = this.state

        if (username && password && name && surname && email) {
            this.setState({
                loading: true
            })

            fetch('http://localhost:3003/register', { 
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text-plain, */*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify ({
                    username: this.state.username,
                    password: this.state.password,
                    name: this.state.name,
                    surname: this.state.surname,
                    email: this.state.email
                })
            })
            .then((response) => response.json())
            .then((res) => {
                alert("Register complete.")
                this.props.navigation.navigate('Logged');
            })
            .done();
        }
    }

    render() {
        const { loading, message } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.colContainer}>
                    <Text style={styles.textRes}>Registration Form</Text>
                    <Text style={{color: 'red'}}>{message}</Text>
                    <View style={styles.infoContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            keyboardType="default"
                            onChangeText={(text) => this.setState({ name: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Surname"
                            keyboardType="default"
                            onChangeText={(text) => this.setState({ surname: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="E-mail"
                            keyboardType="default"
                            onChangeText={(text) => this.setState({ email: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            keyboardType="default"
                            onChangeText={(text) => this.setState({ username: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={(text) => this.setState({ password: text })}
                        />
                    {
                        loading ? <ActivityIndicator style={{marginTop: 20}} size={40} color="#74b9ff" />
                            :
                            <TouchableOpacity onPress={this.register}>
                                <Text style={styles.textRegister}>Register</Text>
                            </TouchableOpacity>
                    }
                    </View>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: WIDTH,
        flexDirection: 'column',
        backgroundColor: 'rgb(105,194,198)'
    },
    colContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    textRes:{
        fontSize: 30,
        fontWeight: "bold",
        color: '#fff',
        marginBottom: 30,
        fontFamily: 'comicsansms',
    },
    infoContainer:{
        width: WIDTH,
        left: 0,
        right: 0,
        bottom: 0,
        padding: 20,
        // backgroundColor: 'red'
    },
    input:{
        backgroundColor: 'rgba(255,255,255,1)',
        color: 'rgb(0,0,0)',
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 10,
        fontFamily: 'comicsansms',
        fontSize: 16,
    },
    textRegister: {
        width: 200,
        marginTop: 20,
        marginLeft: 80,
        // backgroundColor: '#03A9F4',
        backgroundColor: 'white',
        textAlign: 'center',
        padding: 10,
        color: 'rgb(105,194,198)',
        fontWeight: '700',
        fontSize: 18,
        // borderRadius: 30,
        elevation: 5,
        alignItems: 'center',
        fontFamily: 'comicsansms',
    },

});