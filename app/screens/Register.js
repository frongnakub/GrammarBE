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

const { height, width } = Dimensions.get('window');

const w = percent => (width * percent) / 100;
const h = percent => (height * percent) / 100;
const totalSize = num => (Math.sqrt((height * height) + (width * width)) * num) / 100;

export default class Register extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Buat akun',
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: '#7EB633',
        }
    }

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
            <ImageBackground source={require('../images/hood.png')} style={styles.backgroundImg}>
           
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Register Form</Text>
                    <Text style={{color: 'red'}}>{message}</Text>
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
                                <Text style={styles.register}>Register</Text>
                            </TouchableOpacity>
                    }

                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     color: '#3E3E3E',
    //     backgroundColor: '#03A9F4',
    //     padding: 100,
    // },
    backgroundImg: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // wrapper: {
    //     flex: 1,
    //     backgroundColor: 'white',
    //     padding: 20,
    //     borderRadius: 20,
    // },
    title: {
        alignItems: 'center',
        fontSize: totalSize(5),
        marginBottom: h(4),
        marginTop: h(7),
        fontWeight: '700',
        color: '#ffff',
        textAlign: 'center'
    },
    register: {
        marginTop: 20,
        backgroundColor: '#03A9F4',
        textAlign: 'center',
        padding: 10,
        color: 'white',
        fontWeight: '700',
        fontSize: totalSize(2.5),
        borderRadius: 30,
        elevation: 5,
        alignItems: 'center',
    },
    // name: {
    //     marginTop: 2,
    //     backgroundColor: '#EEEEEE',
    //     color: '#3E3E3E',
    //     padding: 10,
    //     width: 175,
    //     fontSize: 17,
    //     borderColor: 'white',
    //     borderTopLeftRadius: 15,
    //     borderTopRightRadius: 15,
    //     borderBottomWidth: 1,
    //     elevation: 5,

    // },
    // username: {
    //     marginTop: 5,
    //     backgroundColor: '#EEEEEE',
    //     color: '#3E3E3E',
    //     padding: 10,
    //     width: 175,
    //     fontSize: 17,
    //     borderColor: 'white',
    //     borderTopLeftRadius: 15,
    //     borderTopRightRadius: 15,
    //     borderBottomWidth: 1,
    //     elevation: 5,
    // },
    // password: {
    //     marginTop: 5,
    //     backgroundColor: '#EEEEEE',
    //     color: '#3E3E3E',
    //     padding: 10,
    //     width: 175,
    //     fontSize: 17,
    //     borderColor: 'white',
    //     borderTopLeftRadius: 15,
    //     borderTopRightRadius: 15,
    //     borderBottomWidth: 1,
    //     elevation: 5,
    // }
    input: {
        marginVertical: 5,
        flexDirection: 'row', // row
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'space-between', // center, space-around
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: 'white',
        borderRadius: 15,
        marginTop: h(1.5),
        marginBottom: h(1.5),
        elevation: 5,
    },
});