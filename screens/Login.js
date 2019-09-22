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
    KeyboardAvoidingView 
} from 'react-native';
import { StackNavigator } from 'react-navigation'

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
                'Accept': 'application/json, text-plain, */*',
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
            <ScrollView style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>GrammarBE</Text>
                    <Text style={{color: 'red'}}>{message}</Text>
                    <TextInput
                        style={styles.username}
                        placeholder="Username"
                        keyboardType="default"
                        onChangeText={(text) => this.setState({ username: text })}
                    />
                    <TextInput
                        style={styles.password}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                    {
                        loading ? <ActivityIndicator style={{marginTop: 20}} size={40} color="#74b9ff" />
                            :
                            <TouchableOpacity onPress={this.login}>
                                <Text style={styles.login}>Enter</Text>
                            </TouchableOpacity>
                    }
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#3E3E3E',
        backgroundColor: '#03A9F4',
        padding: 100,
    },
    wrapper: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        marginTop: 50,
    },
    title: {
        flex: 1,
        fontSize: 20,
        marginBottom: 5,
        fontWeight: '500',
        color: '#03A9F4',
    },
    login: {
        marginTop: 20,
        backgroundColor: '#03A9F4',
        textAlign: 'center',
        padding: 10,
        color: 'white',
        fontWeight: '700',
        fontSize: 15,
        borderRadius: 30,
        elevation: 5,
        alignItems: 'center',
    },
    username: {
        marginTop: 5,
        backgroundColor: '#EEEEEE',
        color: '#3E3E3E',
        padding: 10,
        width: 175,
        fontSize: 17,
        borderColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomWidth: 1,
        elevation: 5,

    },
    password: {
        backgroundColor: '#EEEEEE',
        color: '#3E3E3E',
        padding: 10,
        width: 175,
        fontSize: 17,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        elevation: 5,
        marginBottom: 10,
    }
});