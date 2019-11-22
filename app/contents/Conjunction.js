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

export default class Conjunction extends Component {

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
        axios.get("http://localhost:3003/conjunction")
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
            <ImageBackground source={require('../images/21112052.jpg')} style={styles.backgroundImg}>
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
                                            <Text style={styles.headers}>Conjunction</Text>
                                            <Text style={styles.text}>{lessons[index].LessonDescription}</Text>
                                            <Text style={styles.text}>{lessons[index].SpecialTrick}</Text>
                                        </View>
                                        <TouchableOpacity onPress={() =>  this.props.navigation.navigate('ConjunctionExercise',{username: username})}>
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
