import React, { Component } from 'react';
import {StyleSheet,
    Text,
    View,
    Button,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel
} from 'react-native-simple-radio-button';
import axios from 'axios';

export default class Questions extends Component {
  state = {
    profile: [],
    loading: true,
    index: 0,
    selected: '',
    check: false,
    answer: null,
    username: this.props.navigation.state.params.username,
    userNo: '',
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
    const { profile, loading, index, answer, check, selected } = this.state
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
                  profile.length === 0 ? <Text style={styles.welcome}>Try Again</Text> :
                    <View>
                        <View>
                            <Text style={styles.title}>Profile</Text>
                            <Text style={styles.question}>User ID: {profile[index].UserNo}</Text>
                            <Text style={styles.question}>Username: {profile[index].Username}</Text>
                            <Text style={styles.question}>Name: {profile[index].Name}</Text>
                            <Text style={styles.question}>Surname: {profile[index].Surname}</Text>
                            <Text style={styles.question}>Email: {profile[index].Email}</Text>                    
                            <TouchableOpacity onPress={this.logout}>
                                <Text style={styles.logout}>Log out</Text>
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
        color: '#3498db'
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
    }
});