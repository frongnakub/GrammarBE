import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ActivityIndicator,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import axios from 'axios';

import styles from '../styles/ExcerciseStyle';
import Icon from 'react-native-vector-icons/AntDesign';

const {width: WIDTH} = Dimensions.get('window');

export default class SingularPlural extends Component {
  state = {
    questions: [],
    loading: true,
    index: 0,
    selected: '',
    check: false,
    answer: null,
    qNo: 1,
  }

  componentDidMount() {
    this.fetchQuestions()
  }

  fetchQuestions() {
    axios.get("http://localhost:3003/singularPluralExercise")
    .then(res => {
      console.log('user no', res.data)
      this.setState({ questions: res.data, loading: false })
    })
    .catch(err => {
      this.setState({ loading: false })
      console.log('AAAAAAAAAAAAAAAAAAA')
    })
  }

  chooseAnswer(answer) {
    this.setState({ selected: answer })
  }

  checkAnswer = (answer) => {
    if (this.state.selected) {
      if (answer === this.state.selected) {
        this.setState({
          check: true,
          answer: true,
        })
        alert("Correct")
      } 
      else {
        this.setState({
          check: true,
          answer: false,
        })
        alert("Wrong")
      }
    }
  }

  previousQuestion = () => {
    const { questions, index, qNo } = this.state
    if (questions.length === index - 1) {
      console.log("...");
    } else {
      this.setState({
        qNo: qNo - 1,
        index: index - 1,
        check: false,
        answer: null,
        selected: ''
      })
    }
  }

  nextQuestion = () => {
    const { questions, index, qNo } = this.state
    if (questions.length === index + 1) {
      console.log("...");
    } else {
      this.setState({
        qNo: qNo + 1,
        index: index + 1,
        check: false,
        answer: null,
        selected: ''
      })
    }
  }

  render() {
    const { questions, loading, index, answer, check, selected, username, qNo } = this.state
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <View style={styles.topBar}>             
        <TouchableOpacity>          
          <Icon
            name="home"
            size={30}
            color='#fff'
            onPress={() => navigate('Menu')}
          />
        </TouchableOpacity> 
        <Text style={{fontSize: 20,color:'#fff',fontFamily: 'comicsansms'}}>Exercise</Text>
        <Text style={styles.textNull}>DONE</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={{padding: 10,textAlign:"right",fontWeight:'400', fontSize: 16}}>{qNo}/10</Text>
      </View>
      {
        loading ?
          <View style={styles.contentSpaceBetween}>
             <ActivityIndicator style={{marginTop: 20}} size={40} color="#74b9ff" />
          </View>
          :
          <View style={styles.bodyContainer}>
            
            <View>
              {
                questions.length === 0 ? <Text style={{alignItems:'center'}}>Try Again</Text> :
                    <View >
                      <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>{questions[index].Question}</Text>
                      </View>

                      <View style={styles.choiceContainer}>
                        <TouchableOpacity onPress={() => this.chooseAnswer(questions[index].Option1)} >
                          <Text style={selected === questions[index].Option1 ? styles.select : styles.selection}> A. {questions[index].Option1} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.chooseAnswer(questions[index].Option2)}>
                          <Text style={selected === questions[index].Option2 ? styles.select : styles.selection}> B. {questions[index].Option2} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.chooseAnswer(questions[index].Option3)}>
                          <Text style={selected === questions[index].Option3 ? styles.select : styles.selection}> C. {questions[index].Option3} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.chooseAnswer(questions[index].Option4)}>
                          <Text style={selected === questions[index].Option4 ? styles.select : styles.selection}> D. {questions[index].Option4} </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
              }
            </View>
            {
                check ?
                  <View style={styles.infoContainer}>
                    {
                      answer ?
                        <View>
                           <TouchableOpacity style={styles.iconContainer} onPress={this.previousQuestion}>
                            <Icon
                                name="left"
                                color="#fff"
                                size={20}
                            />
                            <Text style={styles.textIcon}>Previous</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.iconContainer} onPress={() => this.checkAnswer(questions[index].CorrectAnswer)}>
                            <Icon
                                name="check"
                                color="#fff"
                                size={20}
                            />
                            <Text style={styles.textIcon}>Check</Text>
                          </TouchableOpacity>
                          {questions.length === index + 1 ? (
                            <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.navigate('SingularPlural')}>
                              <Icon
                                  name="right"
                                  color="#fff"
                                  size={20}
                              />
                              <Text style={styles.textIcon}>Finish</Text>
                            </TouchableOpacity>
                          ) : (
                            <TouchableOpacity style={styles.iconContainer} onPress={this.nextQuestion}>
                              <Icon
                                  name="right"
                                  color="#fff"
                                  size={20}
                              />
                              <Text style={styles.textIcon}>Next</Text>
                            </TouchableOpacity>
                          )}
                        </View>
                        :
                        <View style={styles.infoContainer}>
                          <TouchableOpacity style={styles.iconContainer} onPress={this.previousQuestion}>
                            <Icon
                                name="left"
                                color="#fff"
                                size={20}
                            />
                            <Text style={styles.textIcon}>Previous</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.iconContainer} onPress={() => this.checkAnswer(questions[index].CorrectAnswer)}>
                            <Icon
                                name="check"
                                color="#fff"
                                size={20}
                            />
                            <Text style={styles.textIcon}>Check</Text>
                          </TouchableOpacity>
                          {questions.length === index + 1 ? (
                            <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.navigate('SingularPlural')}>
                              <Icon
                                  name="right"
                                  color="#fff"
                                  size={20}
                              />
                              <Text style={styles.textIcon}>Finish</Text>
                            </TouchableOpacity>
                          ) : (
                            <TouchableOpacity style={styles.iconContainer} onPress={this.nextQuestion}>
                              <Icon
                                  name="right"
                                  color="#fff"
                                  size={20}
                              />
                              <Text style={styles.textIcon}>Next</Text>
                            </TouchableOpacity>
                          )}
                        </View>
                    }
                  </View>
                  :
                  <View style={styles.infoContainer}>
                    <TouchableOpacity style={styles.iconContainer} onPress={this.previousQuestion}>
                        <Icon
                          name="left"
                          color="#fff"
                          size={20}
                        />
                      <Text style={styles.textIcon}>Previous</Text>
                    </TouchableOpacity>
                    {
                      selected ?
                        <TouchableOpacity style={styles.iconContainer} onPress={() => this.checkAnswer(questions[index].CorrectAnswer)}>
                          <Icon
                              name="check"
                              color="#fff"
                              size={20}
                          />
                          <Text style={styles.textIcon}>Check</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.iconContainer}>
                          <Icon
                              name="check"
                              color="#fff"
                              size={20}
                          />
                          <Text style={styles.textIcon}>Check</Text>
                        </TouchableOpacity>
                    }
                    {questions.length === index + 1 ? (
                      <TouchableOpacity style={styles.iconContainer} onPress={() => this.props.navigation.navigate('SingularPlural')}>
                        <Icon
                            name="right"
                            color="#fff"
                            size={20}
                        />
                        <Text style={styles.textIcon}>Finish</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity style={styles.iconContainer} onPress={this.nextQuestion}>
                        <Icon
                          name="right"
                          color="#fff"
                          size={20}
                        />
                        <Text style={styles.textIcon}>Next</Text>
                      </TouchableOpacity>
                    )}
                  </View>
            }
          </View>
      }
      </View>
    );
  }
}