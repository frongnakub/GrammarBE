import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import axios from 'axios';

import styles from '../styles/Style';
import FadeInView from '../screens/FadeInView';


export default class PresentSimple extends Component {

    state = {
        lessons: [],
        loading: true,
        index: 0,
    }

    componentDidMount() {
        this.fetchLessonDetail()
    }

    fetchLessonDetail() {
        axios.get("http://localhost:3003/presentSimple")
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
            <ScrollView>
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
                                        <Text style={styles.headers}>Present Simple Tense</Text>
                                        <View style={styles.bodyText}>
                                            <Text style={styles.headers2}>{'Structure: Subj. + V.1'}</Text>
                                        </View>
                                        <Text style={styles.text}>{lessons[index].LessonDescription}</Text> 
                                        
                                        <View style={styles.bodyText}>
                                        <Text style={styles.content}>{'Time References:	always, often, sometimes, occasionally, frequently, generally, usually, every day, \nMondays and Thursdays, nowadays'} </Text>
                                        </View>
                                    
                                    </View>
                                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('PresentSimpleExercise')}>
                                        <Text style={styles.menu}>Exercise</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Tenses')}>
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

