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

import Icon from 'react-native-vector-icons/MaterialIcons';

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
    results2: [],
    loading: true,
    index: 0,
    username: this.props.navigation.state.params.username,
    userNo: Number,
  }

  componentDidMount() {
    this.fetchCorrect()
  }

  fetchCorrect() {
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

  render() {
    const { results, loading, index, username } = this.state
    return (
      <ScrollView style={styles.container}>
        {
          loading ?
            <View>
               <ActivityIndicator style={{marginTop: 20}} size={40} color="#74b9ff" />
            </View>
            :
            <View>
                {/* <View style={styles.topBar}>             
                  <Text ></Text>
                  <Text style={{fontSize: 20,color:'#FFFFFF'}}>Results</Text>
                  <Text ></Text>
                </View> */}
              <View>
                {
                  results.length === 0 ? <Text style={styles.welcome}>Try Again</Text> :
                    <View>
                        <View style={styles.resultBox}>
                        <Text style={styles.title}>Lesson you have done WRONG!</Text>   
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
                        <TouchableOpacity style={styles.roundedBtn} onPress={() =>  this.props.navigation.navigate('Menu')}>
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
        fontSize: 24,
        fontWeight: '700',
        color: '#3E3E3E',
        marginBottom: 20,
        marginTop: 30,
    },
    textStart: {
      fontSize: 18,
      color: '#3E3E3E',
      textAlign: 'center',
      fontWeight: '500',
      marginBottom: 10,
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