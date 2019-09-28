import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { StackNavigator } from 'react-navigation'

export default class ResultsScreen extends Component {
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
    results: [],
    loading: true,
    index: 0,
    username: this.props.navigation.state.params.username,
    userNo: Number,
  }

  componentDidMount() {
    this.fetchResults()
  }

  fetchResults() {
    //adb reverse tcp:3003 tcp:3003
    const username = this.state.username
    axios.get("https://grammar2.herokuapp.com//results1/"+ JSON.stringify(username))
    .then(res => {
        this.setState({ 
            results: res.data, 
            loading: false,
        })
    })
    .catch(err => {
      this.setState({ loading: false })
    })
  }

  render() {
    const { results, loading, index, username } = this.state
    return (
      <View style={styles.container}>
        {
          loading ?
            <View>
               <ActivityIndicator style={{marginTop: 20}} size={40} color="#74b9ff" />
            </View>
            :
            <View style={styles.wrapper}>
              <View>
                {
                  results.length === 0 ? <Text style={styles.welcome}>Try Again</Text> :
                    <View>
                        <View>
                            <Text style={styles.title}>Results</Text>
                            <Text style={styles.question}>Question No: {results[index].Question_QuestionNo}</Text>
                            <Text style={styles.question}>Answer: {results[index].Answer}</Text>    
                            <Text style={styles.question}>Results: {results[index].Results}</Text>
                            <Text style={styles.question}>Lesson: {results[index].LessonName}</Text>            
                            <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Menu',{username: username})}>
                              <Text style={styles.menu}>Menu</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() =>  this.props.navigation.navigate('PretestQuestions2',{username: username})}>
                              <Text style={styles.menu}>Pre-test 2</Text>
                            </TouchableOpacity>
                      </View>
                    </View>
                }
              </View>
            </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        color: '#3E3E3E',
        padding: 10,
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
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '700',
        color: '#3E3E3E'
    },
    question: {
        fontSize: 18,
        marginBottom: 20,
        color: '#3E3E3E'
    },
    logout: {
        backgroundColor: '#F44336',
        textAlign: 'center',
        padding: 10,
        color: 'white',
        marginTop: 20,
        fontWeight: '500',
        fontSize: 16,
        borderRadius: 30,
        elevation: 5
    },
    menu: {
      backgroundColor: 'blue',
      textAlign: 'center',
      padding: 10,
      color: 'white',
      marginTop: 20,
      fontWeight: '500',
      fontSize: 16,
      borderRadius: 30,
      elevation: 5
    }
});