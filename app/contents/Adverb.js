import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import axios from 'axios';

import styles from '../styles/Style';

export default class Adverb extends Component {
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
        axios.get("http://localhost:3003/adverb")
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
                <View style={styles.load}>
                <ActivityIndicator style={{marginTop: 20}} size={40} color="#74b9ff" />
                </View>
                :
                    <View style={styles.wrapper}>
                    <View>
                        {
                        lessons.length === 0 ? <Text style={styles.welcome}>Try Again</Text> :
                            <View>
                                <View>
                                    <Text style={styles.headers}>Adverb</Text>
                                    <Text style={styles.text}>{lessons[index].LessonDescription}</Text>
                                    <Text style={styles.content}>{'Form of Adverbs\n     Adverbs have various forms; many are formed by adding ‘-ly’ to an adjective. However, some adverbs share the same form and the same meaning as some adjectives:'}</Text>
                                    <View style={styles.bodyText2}>
                                        <Text style={styles.content}>{'deep, low, termly, even, near, monthly, early, hard, fortnightly, far, next, annually fast, alike, hourly, high, inside, nightly, late, outside, weekly, long, yearly, daily'} </Text>
                                    </View>
                                    <Text style={styles.text}>{lessons[index].SpecialTrick}</Text>
                                </View>
                                <TouchableOpacity onPress={() =>  this.props.navigation.navigate('AdverbExercise')}>
                                    <Text style={styles.menu}>Exercise</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Lesson')}>
                                    <Text style={styles.menu}>Back</Text>
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