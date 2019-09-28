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

export default class Article extends Component {
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
        axios.get("http://localhost:3003/article")
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
                <ImageBackground source={require('../images/bg.png')} style={styles.backgroundImg}>
                    <View style={styles.wrapper}>
                    <View>
                        {
                        lessons.length === 0 ? <Text style={styles.welcome}>Try Again</Text> :
                            <View>
                                <View>
                                    <Text style={styles.headers}>Article</Text>
                                    <Text style={styles.text}>{lessons[index].LessonDescription}</Text>
                                    <Text style={styles.title}>Details: </Text>
                                    <Text style={styles.text}>{lessons[index].SpecialTrick}</Text>
                                </View>
                                <TouchableOpacity onPress={() =>  this.props.navigation.navigate('ArticleExercise')}>
                                    <Text style={styles.menu}>Exercise</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Lesson')}>
                                    <Text style={styles.menu}>Back</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                    </View>
                </ImageBackground>
            }
        </ScrollView>
        );
    }
}
