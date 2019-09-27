import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView,
    ImageBackground
} from 'react-native';
import axios from 'axios';

const {width: WIDTH} = (Dimensions.get('window').width);
const {height: HEIGHT} = (Dimensions.get('window').height);

export default class PresentSimple extends Component {
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
                    <View>
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
                                        <Text style={styles.headers}>Present Simple Tense</Text>
                                        <View style={styles.bodyText}>
                                            <Text style={styles.text}>{lessons[index].LessonStructure}</Text>
                                        </View>
                                        <Text style={styles.title}>Details: </Text>
                                        <Text style={styles.text}>{lessons[index].LessonDescription}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('PresentSimpleExercise')}>
                                    <Text style={styles.menu}>Exercise</Text>
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

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: 'white',
    //     color: '#3E3E3E',
    //     padding: 10,
    // },
    backgroundImg: {
        flex: 1,
        width: WIDTH,
        height: HEIGHT,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyText: {
        borderColor: '#000000',
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 20,
        fontSize: 20,
        marginBottom: 10,
        backgroundColor: '#F3E5AB',
    },
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 30,
    },
    bottom: {
        justifyContent: 'space-between',
    },
    headers: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: '500',
        color: '#3E3E3E',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#3E3E3E',
        marginBottom: 5,
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
        color: '#3E3E3E'
    },
    menu: {
      backgroundColor: 'blue',
      textAlign: 'center',
      padding: 10,
      color: 'white',
      marginTop: 10,
      fontWeight: '500',
      fontSize: 16,
      borderRadius: 30,
      elevation: 5
  }
});