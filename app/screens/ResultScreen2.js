import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ActivityIndicator,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from 'react-native';
import axios from 'axios';
const {width: WIDTH} = Dimensions.get('window');

import styles from '../styles/ResultStyle'

export default class ResultsScreen extends Component {

  state = {
    results: [],
    results2: [],
    loading: true,
    index: 0,
    username: this.props.navigation.state.params.username,
    userNo: Number,
  }

  componentDidMount() {
    this.fetchWrong()
    this.fetchCorrect()
  }

  fetchWrong() {
    //adb reverse tcp:3003 tcp:3003
    const username = this.state.username
    axios.get("http://localhost:3003/resultLesson2/"+ JSON.stringify(username))
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

  fetchCorrect() {
    //adb reverse tcp:3003 tcp:3003
    const username = this.state.username
    axios.get("http://localhost:3003/resultLessonCorrect2/"+ JSON.stringify(username))
    .then(res => {
        this.setState({ 
            results2: res.data, 
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
      <ScrollView style={styles.container}>
        {
          loading ?
            <View>
               <ActivityIndicator style={{alignItems:'center'}} size={40} color="#74b9ff" />
            </View>
            :
            <View>
                <View style={styles.topBar}>             
                  <Text ></Text>
                  <Text style={{fontSize: 20,color:'#FFFFFF',fontFamily: 'comicsansms'}}>Results</Text>
                  <Text ></Text>
                </View>
              <View>
                {
                  results.length === 0 ? <Text style={styles.welcome}>Try Again</Text> :
                    <View>
                        <View style={styles.resultBoxCorrect}>
                        <Text style={styles.title}>Lesson you have done <Text style={{color:'#67ac00',fontSize: 36,}}>Correct!</Text> </Text>
                          
                          <FlatList
                            data = {this.state.results2}
                            renderItem = {({item}) => 
                              <View>
                                <Text style = {styles.textStart}>
                                  {item.LessonName}  
                                </Text>  
                              </View>
                            }
                            keyExtractor={item => item.id}
                          />
                        </View>


                        <View style={styles.resultBox}>
                        <Text style={styles.title}>Lesson you have done <Text style={{color:'red',fontSize: 36}}>WRONG!</Text></Text>   
                          <FlatList
                            data = {this.state.results}
                            renderItem = {({item}) => 
                              <View>
                                <Text style = {styles.textStart}>
                                  {item.LessonName}  
                                </Text>  
                              </View>
                            }
                            keyExtractor={item => item.id}
                          />
                        </View>
                        <TouchableOpacity style={styles.roundedBtn} onPress={() =>  this.props.navigation.navigate('Menu',{username: username})}>
                            <Text style={styles.roundedBtnText}>Menu</Text>
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
