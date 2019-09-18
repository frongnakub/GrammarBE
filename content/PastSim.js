import React, { Component } from 'react';

import {StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
} from 'react-native';


export default class PastSim extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View>
                <View >
                    <Text style={style.message}>........</Text>
                </View>
                <Button 
                    style={style.backBtn}
                    title="Back"
                    onPress={() => navigate('Menu')}
                ></Button>
            </View>
        );
    }
}

const style = StyleSheet.create({
    backBtn: {
        top: 5,
        left: 5,
        position: 'absolute',
        opacity: 0.5,
        transform: [{scale: .7}]
      },
      message: {
        color: '#d7933f',
        fontSize: 18,
        lineHeight: 20,
        maxWidth: 400,
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'center'
    },
  });