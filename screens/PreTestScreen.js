import React, { Component } from 'react';
import {StyleSheet,
    Text,
    View,
    Button,
    ActivityIndicator
} from 'react-native';

export default class PreTestScreen extends Component{
    state = {
        loading: false,
    }
    
    render() {
        const { loading } = this.state;
        const { navigate } = this.props.navigation;

        return (
            <View style = {styles.container}>
                {loading ? (
                    <ActivityIndicator size = "large" color = "#008080" />
                ) : (
                    <Button
                        onPress={() => navigate('PretestQuestions')}
                        title="Start Quiz"
                        color="#008080"
                    />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });