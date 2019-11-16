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

export default class Preposition extends Component {

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
        axios.get("http://localhost:3003/preposition")
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
                <View  >
                    <FadeInView />
                </View>
                :
                <View style={styles.wrapper}>
                <View>
                    {
                    lessons.length === 0 ? <Text style={styles.welcome}>Try Again</Text> :
                        <View>
                            <View>
                                <Text style={styles.headers}>Preposition</Text>
                                <View style={styles.bodyText2}>
                                        <Text style={styles.content}>{'about, above, according to, across, after, against, all over, along, among, around, as, as well as, at, before, behind, below, between, because of, by, despite, down, due to, during, for, from, from..to, in, in addition to, in case of, inside, into, instead of, like, near, of, off, on, onto, outside, opposite, over, owing to, since, through, throughout, to, toward, under, until, up, upon, with, within, without \n\n- I am nagging like an old boy \n- Despite being late, he continued to sleep.'} </Text>
                                </View>
                                <View style={styles.bodyText2}>
                                        <Text style={styles.content}>{'at dinner, by luck, in a way, \nat work, by day, in the long run, \nat first sight, from the house, \nout of sight, up the stairs, \non your left, on my way, in front of camera, out of stock \n\n- Please put his photo out of my sight. \n- He took a knife from the kitchen.'} </Text>
                                </View>
                                <View style={styles.bodyText}>
                                        <Text style={styles.content}>{'Some prepositions have more than one word: all over, away from, in front of, on top of, out of, \nin between, apart from, next to \n- You are far away from me.\n- I am sitting in front of you.'} </Text>
                                </View>
                                <Text style={styles.text}>{lessons[index].LessonStructure}</Text>
                                <View style={styles.bodyText}>
                                        <Text style={styles.content}>{'Pattern >\nPrep. + N./N. phr. + Intransitive V. + Subj.'} </Text>
                                </View>
                                <Text style={styles.content}>Preposition of time -> They are used to specify when an action takes place: </Text>
                                <Text style={styles.text}>{lessons[index].LessonDescription}</Text>

                                <Text style={styles.content}>Preposition of place -> They are used to indicate where an action happens: </Text>
                                <Text style={styles.text}>{lessons[index].SpecialTrick}</Text>
                            </View> 
                            <TouchableOpacity onPress={() =>  this.props.navigation.navigate('PrepositionExercise',{username: username})}>
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

