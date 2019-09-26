import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    Dimensions
} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

export default class PreTestScreen extends Component{
    state = {
        loading: false,
        username: this.props.navigation.state.params.username,
    }
    
    render() {
        const { loading, username } = this.state;
        const { navigate } = this.props.navigation;

        return (
            <View style = {styles.container}>
                {loading ? (
                    <ActivityIndicator size = "large" color = "#008080" />
                ) : (
                    <View style={styles.contentSpaceBetween}>
                        <View style={styles.roundedBtn}>
                            <TouchableOpacity onPress={() =>  this.props.navigation.navigate('PretestQuestions',{username: username})}>
                                <Text style={styles.roundedBtnText}>Start Quiz</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: WIDTH,
      backgroundColor: '#EAD8AB',
    },
    roundedBtnText: {
        fontSize: 22,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color:'#810000',
        textAlign: 'center',
    },
    roundedBtn: {
        width: 200,
        backgroundColor: '#d7933f',
        borderRadius: 50,
        marginBottom: 13,
        paddingTop: 8,
        paddingBottom: 8
    },
    contentSpaceBetween: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 2,
    }

  });