import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import axios from 'axios';

import styles from '../styles/Style';
import FadeInView from '../screens/FadeInView';

export default class PastSimple extends Component {
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
        axios.get("http://localhost:3003/pastSimple")
        .then(res => {
            this.setState({ lessons: res.data, loading: false })
        })
        .catch(err => {
            this.setState({ loading: false })
        })
    }

    render() {
        const { lessons, loading, index, username } = this.state
        return (
            <ImageBackground source={require('../images/20112132.jpg')} style={styles.backgroundImg}>
                <ScrollView style={styles.container}>
                    {
                    loading ?
                        <View  >
                            <FadeInView />
                        </View>
                        :
                        // <ImageBackground source={require('../images/bg.png')} style={styles.backgroundImg}>
                            <View style={styles.wrapper}>
                            <View>
                                {
                                lessons.length === 0 ? <Text style={styles.welcome}>Try Again</Text> :
                                    <View>
                                        <View>
                                            <Text style={styles.headers}>Past Simple Tense</Text>
                                            <View style={styles.bodyText}>
                                                <Text style={styles.headers2}>{'Structure: Subj. + V.2'}</Text>
                                            </View>
                                            <Text style={styles.text}>{lessons[index].LessonDescription}</Text> 
                                            
                                            <View style={styles.bodyText}>
                                                <Text style={styles.content}>{'Time references:	ago, last…, for, yesterday, in 1961, a year last April, already, earlier, first, early, historical, primitive, former, initial, original, previously, lately'} </Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity onPress={() =>  this.props.navigation.navigate('PastSimpleExercise',{username: username})}>
                                            <Text style={styles.menu}>Exercise</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Tenses',{username: username})}>
                                            <Text style={styles.menu}>Back</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                            </View>
                            </View>
                        // </ImageBackground>
                    }
                </ScrollView>        
            </ImageBackground>
        
        );
    }
}
