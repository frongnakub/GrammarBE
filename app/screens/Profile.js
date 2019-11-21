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
                          <Avatar
                            rounded
                            size="xlarge"
                            //activeOpacity={0.7}
                            source={require('../images/network.png')}
                            containerStyle={{marginTop: 20 ,marginBottom: 15 }} 
                          />
                          <Text style={styles.card}>{profile[index].Name}   {profile[index].Surname}</Text>
                          <Text style={styles.card}>{profile[index].Email}</Text>
                        </View>
                        <View>
                            <Text style={styles.textStart}>You have to do the pretest first.</Text>
                            <TouchableOpacity onPress={() =>  this.props.navigation.navigate('PretestQuestions',{username: username})}>
                              <Text style={styles.menu}>Pre-test</Text>
                            </TouchableOpacity>
                            <Text style={styles.textStart}>If you have already done the pretest.</Text>
                            <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Menu',{username: username})}>
                              <Text style={styles.menu}>Menu</Text>
                            </TouchableOpacity>
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
      backgroundColor: '#ffc2bc',
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
    title: {
        alignItems: 'center',
        backgroundColor: '#ffc73a',
        marginTop: 10,
    },
    card: {
        fontSize: 18,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        color: '#3E3E3E',
        textAlign: 'center',
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