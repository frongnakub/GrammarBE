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

export default class Article extends Component {
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
        axios.get("http://localhost:3003/article")
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
            {/* <ScrollView style={styles.container}></ScrollView> */}
            <ScrollView>
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
                                        <Text style={styles.headers}>Article</Text>
                                        <View style={styles.bodyText}>
                                            <Text style={styles.content}>{'Indefinite article:  a, an'} </Text>
                                        </View>
                                        <Text style={styles.text}>{lessons[index].LessonDescription}</Text>
                                        
                                        <View style={styles.bodyText}>
                                            <Text style={styles.content}>{'Indefinite article: a, an cannot be used in the following cases:'} </Text>
                                        </View>
                                        <Text style={styles.text}>{lessons[index].SpecialTrick}</Text>
                                        
                                        <View style={styles.bodyText}>
                                            <Text style={styles.content}>{'Definite article: the is used before a noun, e.g. the sun, the guitar, the worst accident, etc. \nLike the indefinite article (a, an), "the" has various usages.'}</Text>
                                        </View>
                                        <Text style={styles.text}>{lessons[index].LessonStructure}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('ArticleExercise',{username: username})}>
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
