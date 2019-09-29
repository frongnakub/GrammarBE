import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import axios from 'axios';
const {width: WIDTH} = Dimensions.get('window');

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ResultsScreen2 extends Component {
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
    results2: [],
    loading: true,
    index: 0,
    username: this.props.navigation.state.params.username,
    userNo: Number,
  }

  componentDidMount() {
    this.fetchCorrect()
    this.fetchInCorrect()
  }

  fetchCorrect() {
    //adb reverse tcp:3003 tcp:3003
    const username = this.state.username
    axios.get("https://grammar2.herokuapp.com/results2/"+ JSON.stringify(username))
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

  fetchInCorrect() {
    //adb reverse tcp:3003 tcp:3003
    const username = this.state.username
    axios.get("https://grammar2.herokuapp.com/resultII/"+ JSON.stringify(username))
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
    const { results, results2, loading, index, username } = this.state
    return (
      <View style={styles.container}>
        {
          loading ?
            <View>
               <ActivityIndicator style={{marginTop: 20}} size={40} color="#74b9ff" />
            </View>
            :
            <View >
                <View style={styles.topBar}>             
                  <Text ></Text>
                  <Text style={{fontSize: 20,color:'#FFFFFF'}}>Results</Text>
                  <Text ></Text>
                </View>
              <View>
                {
                  results.length === 0 ? <Text style={styles.welcome}>Try Again</Text> :
                  <View>
                        <Text style={styles.title}>Pre-Test 2</Text>
                    <View style={styles.resultBox}>    
                        <Text style={styles.resultText}>Correct</Text>
                        <View style={styles.resultBox2}>
                          <Icon
                              name="check-circle"
                              color="#23C50B"
                              size={40}
                            />
                          <Text style={styles.resultText}>    
                            {results[index].Correct}
                          </Text>
                        </View>    
                  </View>
                </View>
                }
                {
                  results2.length === 0 ? <Text style={styles.welcome}>Try Again</Text> :
                  <View>
                      <View style={styles.resultBox}>    
                          <Text style={styles.resultText}>Incorrect</Text>
                          <View style={styles.resultBox2}>
                            <Icon
                                name="cancel"
                                color="#DD2E44"
                                size={40}
                              />
                            <Text style={styles.resultText}>    
                              {results2[index].Incorrect}
                            </Text>
                          </View>    
                    </View>
                        {/* <Text style={styles.question}>Incorrect: {results2[index].Incorrect}</Text> */}
                        <TouchableOpacity style={styles.roundedBtn} onPress={() =>  this.props.navigation.navigate('Menu')}>
                          <Text style={styles.roundedBtnText}>Menu</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles.roundedBtn} onPress={() =>  this.props.navigation.navigate('PretestQuestions2',{username: username})}>
                          <Text style={styles.roundedBtnText}>Pre-test No.2</Text>
                        </TouchableOpacity> */}
                  
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
      width: WIDTH,
      backgroundColor: '#EAD8AB',
  },
  // wrapper: {
  //     flex: 1,
  //     flexDirection: 'column',
  //     alignItems: 'center',
  //     justifyContent: 'space-between',
  //     padding: 30,
  // },
  bottom: {
      justifyContent: 'space-between',
  },
  title: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: '700',
      color: '#3E3E3E',
      marginBottom: 30,
      marginTop: 30,
  },
  resultBox: {
      fontSize: 18,
      margin: 20,
      backgroundColor: '#D6BA84',
      borderRadius: 20,
  },
  resultBox2: {
    flexDirection: 'row',
    justifyContent: 'center',
    //justifyContent: 'space-between'
  },
  resultText: {
      textAlign: 'center',
      fontSize: 18,
      padding: 10,
      color: '#ffff',
  },
  roundedBtnText: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color:'#ffff',
    textAlign: 'center',
  },
  roundedBtn: {
      justifyContent: 'center',
      //width: 300,
      backgroundColor: '#956F3F',
      borderRadius: 50,
      margin: 20,
      paddingTop: 8,
      paddingBottom: 8
  },
  topBar: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: '#7F4F2C',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
},
  // logout: {
  //     backgroundColor: '#F44336',
  //     textAlign: 'center',
  //     padding: 10,
  //     color: 'white',
  //     marginTop: 20,
  //     fontWeight: '500',
  //     fontSize: 16,
  //     borderRadius: 30,
  //     elevation: 5
  // },
  // menu: {
  //   backgroundColor: 'blue',
  //   textAlign: 'center',
  //   padding: 10,
  //   color: 'white',
  //   marginTop: 20,
  //   fontWeight: '500',
  //   fontSize: 16,
  //   borderRadius: 40,
  //   elevation: 5
  // }
});