import React, { Component } from 'react';
import {StyleSheet,
    Text,
    View,
    Button,
    ActivityIndicator
} from 'react-native';

export default class PreTestScreen extends React.Component{
    state = {
        loading: false,
    }
    
    startQuiz = () => {
        const { loading } = this.state;
        const { navigation } = this.props;

        this.setState({ loading: !loading });
        fetch(
            //link db
        )
        .then(response => response.json())
        .then(({ results }) => {
            this.setState({ loading: false });
            navigation.navigate('PretestQuestions', { PretestQuestions: results });
        })
        .catch(err => {
            console.log('ERR ->', err);
            alert(`ERROR:${err.message}`);
            this.setState({ loading: false });
        });
    };

    render() {
        const { loading } = this.state;

        return (
            <View style = {styles.container}>
                {loading ? (
                    <ActivityIndicator size = "large" color = "#008080" />
                ) : (
                    <Button
                        onPress={() => this.startQuiz()}
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