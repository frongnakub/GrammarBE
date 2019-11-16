import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import axios from 'axios';

import styles from '../styles/Style';
import FadeInView from '../screens/FadeInView';

export default class Adverb extends Component {
    state = {
        lessons: [],
        loading: true,
        index: 0,
    }

    componentDidMount() {
        this.fetchLessonDetail()
        this.fetchProfile()
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

    fetchProfile() {
        //adb reverse tcp:3003 tcp:3003
        const username = this.state.username
        axios.get("http://localhost:3003/userData/"+ JSON.stringify(username))
        .then(res => {
            this.setState({ 
                profile: res.data, 
                loading: false,
            })
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
                <View >
                    <FadeInView />
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
                                <TouchableOpacity onPress={() =>  this.props.navigation.navigate('AdverbExercise',{username: username})}>
                                    <Text style={styles.menu}>Exercise</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Menu',{username: username})}>
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