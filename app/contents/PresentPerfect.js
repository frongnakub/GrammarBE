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

export default class PresentPerfect extends Component {
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
        axios.get("http://localhost:3003/presentPerfect")
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
                            <Text style={styles.headers}>Present Perfect Tense</Text>
                                    <View style={styles.bodyText}>
                                        <Text style={styles.headers2}>{'Structure: \nSubj. + has/have + V.3'}</Text>
                                    </View>
                                    <Text style={styles.text}>{lessons[index].LessonStructure}</Text>
                                    
                                    <View style={styles.bodyText}>
                                        <Text style={styles.content}>Time References: since, for, up to now, up to the present moment</Text>
                                    </View>
                                    <Text style={styles.content}>{'***since: point of time in the past \ne.g. since last Monday, since the nineteenth century \nfor: period of time \ne.g. for one term, for 15 years'}
                                    </Text>

                                    <Text style={styles.text}>{lessons[index].LessonDescription}</Text>
                                    <View style={styles.bodyText}>
                                        <Text style={styles.content}>Time References: just, yet, already, recently, never, ever</Text>
                                    </View>
                            <TouchableOpacity onPress={() =>  this.props.navigation.navigate('PresentPerfectExercise')}>
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

