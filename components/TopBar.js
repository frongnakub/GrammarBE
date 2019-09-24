import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class TopBar extends Component {
    render () {
        return (
                    <View style={styles.topBar}>             
                        <Text ></Text>
                        <Text style={{fontSize: 20,color:'#FFFFFF'}}>HOME</Text>
                        <Text ></Text>
                    </View>
        )
    }

}

const styles = StyleSheet.create({
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

    
  })
  