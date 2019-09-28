import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Dimensions,
    Image
} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    }
    
    render () {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Let's get started."
                onPress={() => navigate('Menu')}
            ></Button>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });