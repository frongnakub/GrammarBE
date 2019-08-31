import React, { Component } from 'react';
import {StyleSheet,
    Text,
    View,
    Button,
    ActivityIndicator
} from 'react-native';
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel
} from 'react-native-simple-radio-button'

export default class HomeScreen extends Component {
    state = {
        question: [],
        currentQuestion: '',
    }
    
    render () {
        return (
            <View>
                <Text style={styles.instructions}>PRE-TEST</Text>
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