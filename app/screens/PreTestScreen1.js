import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import axios from 'axios';

const { height, width } = Dimensions.get('window');

import FadeInView from './FadeInView';

export default class Pre2 extends Component {

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
                        <View>
                            <Text style={styles.textStart}>You have to do the pretest first.</Text>
                            <TouchableOpacity onPress={() =>  this.props.navigation.navigate('PretestQuestions2',{username: username})}>
                              <Text style={styles.menu}>Start Pretest Questions R.2</Text>
                            </TouchableOpacity>
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
    backgroundImg: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: '#ffc2bc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStart: {
      fontSize: 18,
      marginTop: 30,
      marginLeft: 20,
      marginRight: 20,
      color: '#3E3E3E',
      textAlign: 'center',
      fontFamily: 'comicsansms_bold'
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
      fontFamily: 'comicsansms'
    }
});