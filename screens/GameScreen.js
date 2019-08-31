import React, { Component } from 'react';
import {StyleSheet,
    Text,
    View,
    Button,
    Dimensions,
    Image
} from 'react-native';

export default class HomeScreen extends Component {
    render () {
        return (
            <View>
                <Text style={styles.instructions}>GAME</Text>
            </View>
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