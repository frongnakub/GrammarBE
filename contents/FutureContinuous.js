import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import axios from 'axios';
import { StackNavigator } from 'react-navigation'

export default class FutureContinuous extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        title: 'Login',
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#03A9F4',
    }
  }

    state = {
        lessons: [],
        loading: true,
        index: 0,
    }

    componentDidMount() {
        this.fetchLessonDetail()
    }

    fetchLessonDetail() {
        axios.get("http://localhost:3003/futureContinuous")
        .then(res => {
            this.setState({ lessons: res.data, loading: false })
        })
        .catch(err => {
            this.setState({ loading: false })
        })
    }

    render() {
        const { lessons, loading, index } = this.state
        return (
        <ScrollView style={styles.container}>
            {
            loading ?
                <View>
                <ActivityIndicator style={{marginTop: 20}} size={40} color="#74b9ff" />
                </View>
                :
                <View style={styles.wrapper}>
                <View>
                    {
                    lessons.length === 0 ? <Text style={styles.welcome}>Try Again</Text> :
                        <View>
                            <View>
                                <Text style={styles.headers}>Future Continuous Tense</Text>
                                <Text style={styles.text}>{lessons[index].LessonStructure}</Text>
                                <Text style={styles.title}>Details: </Text>
                                <Text style={styles.text}>{lessons[index].LessonDescription}</Text>
                            </View>
                            <TouchableOpacity onPress={() =>  this.props.navigation.navigate('FutureContinuousExercise')}>
                              <Text style={styles.menu}>Exercise</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
                </View>
            }
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        color: '#3E3E3E',
        padding: 10,
    },
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 30,
    },
    bottom: {
        justifyContent: 'space-between',
    },
    headers: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: '500',
        color: '#3E3E3E',
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
        color: '#3E3E3E'
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#3E3E3E',
        marginBottom: 5,
    },
    menu: {
      backgroundColor: 'blue',
      textAlign: 'center',
      padding: 10,
      color: 'white',
      marginTop: 10,
      fontWeight: '500',
      fontSize: 16,
      borderRadius: 30,
      elevation: 5
  }
});