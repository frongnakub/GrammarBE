import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    ActivityIndicator,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import axios from 'axios';

import { Avatar } from 'react-native-elements';

const { height, width } = Dimensions.get('window');

import FadeInView from './FadeInView';

export default class Profile extends Component {

  state = {
    profile: [],
    loading: true,
    index: 0,
    username: this.props.navigation.state.params.username,
    userNo: Number,
  }

  componentDidMount() {
    this.fetchProfile()
  }

  fetchProfile() {
    //adb reverse tcp:3003 tcp:3003
    const username = this.state.username
    axios.get("http://localhost:3003/userData/"+ JSON.stringify(username))
    .then(res => {
        this.setState({ 
            profile: res.data, 
            loading: false,
        })
    })
    .catch(err => {
      this.setState({ loading: false })
    })
  }

  render() {
    const { profile, loading, index, username } = this.state
    return (
      <View style={styles.backgroundImg}>
        {
          loading ?
            <View>
               <FadeInView />
            </View>
            :
              <View>
                {
                  profile.length === 0 ? <Text style={styles.welcome}>Try Again</Text> :
                    <View>
                        <View style={styles.title}>
                          <Text style={styles.profile}>Profile</Text>
                          <Text style={styles.card}>Username: </Text>
                          <Text style={styles.card2}>{profile[index].Username}</Text>
                          <Text style={styles.card}>Name: </Text>
                          <Text style={styles.card2}>{profile[index].Name} {profile[index].Surname}</Text>
                          <Text style={styles.card}>Email: </Text>
                          <Text style={styles.card2}>{profile[index].Email}</Text>
                        </View>
                        <View>
                          {profile[index].UserStatus_UserStatusNo === 2 ? (
                            <View>
                              <Text style={styles.textStart}>You have already done both of pretest.</Text>
                              <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Menu',{username: username})}>
                                <Text style={styles.menu}>Menu</Text>
                              </TouchableOpacity>
                            </View>
                            ) : 
                            profile[index].UserStatus_UserStatusNo === 1 ? (
                            <View>
                              <Text style={styles.textStart}>{"You have to do the second pretest \nafter you have finished the first one."}</Text>
                              <TouchableOpacity onPress={() =>  this.props.navigation.navigate('PretestQuestions2',{username: username})}>
                                <Text style={styles.menu}>Pre-test No.2</Text>
                              </TouchableOpacity>
                            </View>
                            ) : (
                            <View>
                              <Text style={styles.textStart}>You have to do the pretest first.</Text>
                              <TouchableOpacity onPress={() =>  this.props.navigation.navigate('PretestQuestions',{username: username})}>
                                <Text style={styles.menu}>Pre-test No.1</Text>
                              </TouchableOpacity>
                            </View>
                            )
                          }
                          
                            {/* <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Logged')}>
                              <Text style={styles.logout}>Log out</Text>
                            </TouchableOpacity> */}
                        </View>
                      </View>
                }
              </View>
        }
      </View>
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
      width: width,
      height: height,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
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
    profile: {
      fontSize: 30,
      textAlign: 'center',
      color: '#3E3E3E',
      fontFamily: 'comicsansms',
    },
    title: {
        backgroundColor: 'white',
        marginTop: 10,
    },
    card: {
        fontSize: 18,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        color: '#3E3E3E',
        fontFamily: 'comicsansms',
    },
    card2 : {
      fontSize: 24,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      color: '#2856fc',
      fontFamily: 'comicsansms',
    },
    textStart: {
      fontSize: 18,
      marginTop: 30,
      marginLeft: 20,
      marginRight: 20,
      color: '#3E3E3E',
      textAlign: 'center',
      fontWeight: '500',
      fontFamily: 'comicsansms',
    },
    menu: {
      backgroundColor: '#03A9F4',
      textAlign: 'center',
      padding: 10,
      color: 'white',
      marginTop: 20,
      fontWeight: '500',
      fontSize: 16,
      borderRadius: 30,
      elevation: 5,
      fontFamily: 'comicsansms',
    }
});