import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    ImageBackground
} from 'react-native';
import axios from 'axios';

import styles from '../styles/Style';
import FadeInView from '../screens/FadeInView';

export default class Pronoun extends Component {

    state = {
        lessons: [],
        loading: true,
        index: 0,
        username: this.props.navigation.state.params.username,
    }

    componentDidMount() {
        this.fetchLessonDetail()
    }

    fetchLessonDetail() {
        axios.get("http://localhost:3003/pronoun")
        .then(res => {
            this.setState({ lessons: res.data, loading: false })
        })
        .catch(err => {
            this.setState({ loading: false })
        })
    }

    render() {
        const { lessons, loading, index, username} = this.state
        return (
            <ImageBackground source={require('../images/20112132.jpg')} style={styles.backgroundImg}>
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
                                            <Text style={styles.headers}>Pronoun</Text>
                                            <Text style={styles.text}>{lessons[index].LessonStructure}</Text>
                                            <View style={styles.bodyText}>
                                                <Text style={styles.content}>{'Note: 	All possessive pronouns are not followed by nouns.'} </Text>
                                            </View>
                                            <Text style={styles.text}>{lessons[index].LessonDescription}</Text>
                                            <View style={styles.bodyText}>
                                                <Text style={styles.content}>{'As a subject > \nPattern: Indef. Pron. + Singular V. \n- Everyone seems to dislike English, but no one hates Aj. Pat. \n\nAs an object > \nPattern: Subj. + V. + Indef. Pron. \n- I saw no one at home.	'} </Text>
                                            </View>
                                            <Text style={styles.text}>{lessons[index].SpecialTrick}</Text>
                                            <View style={styles.bodyText}>
                                                <Text style={styles.content}>{'Pattern	:	… who + V. +(O.).\nPattern	: 	… whom + S. + V. + (O.). \n… for / with whom + S. + V. + (O.). \nPattern:	… which + V. + (O.)… \nwhich + S. + V. + (O.)\n… prepositions (at, of , in, to, on) + which + S. + V. + (O.)\nPattern: … whose + S. + V. + (O.)'} </Text>
                                            </View>
                                            <View style={styles.bodyText}>
                                                <Text style={styles.content}>{'Other significant PRONOUNS: all, another, any, both, each, neither, few, less, little, many, much, none, others, several, some, most.'} </Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity onPress={() =>  this.props.navigation.navigate('PronounExercise',{username: username})}>
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
            </ImageBackground>
        
        );
    }
}

