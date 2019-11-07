import React, { Component } from 'react';
import {
    Dimensions,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,

} from 'react-native';
import axios from 'axios';

import Icon from 'react-native-vector-icons/AntDesign';

const {width: WIDTH} = Dimensions.get('window');

export default class Menubar extends Component {

    state = {
        loading: true,
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
        const { navigate } = this.props.navigation;
        const { username } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.topBar}> 
                    <TouchableOpacity onPress={() => navigate('Menu',{username: username})}>          
                    <Icon
                        name="arrowleft"
                        size={30}
                        
                    />
                    </TouchableOpacity>      
                </View>
                <TouchableOpacity style={styles.barContainer} onPress={() => navigate('Menu',{username: username})}>
                    <Icon
                        name="home"
                        size={20}
                        color= 'rgba(244,67,54,0.5)'
                    /> 
                    <Text style={styles.text}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.barContainer} onPress={() => navigate('PosttestQuestion',{username: username})}>
                    <Icon
                        name="form"
                        size={20}
                        color= 'rgba(244,67,54,0.5)'
                    /> 
                    <Text style={styles.text}>Test</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.barContainer} onPress={() => navigate('ResultScreen')}>
                    <Icon
                        name="save"
                        size={20}
                        color= 'rgba(244,67,54,0.5)'
                    /> 
                    <Text style={styles.text}>Result-Test</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.barContainer} onPress={() => navigate('Logged')}>
                    <Icon
                        name="poweroff"
                        size={20}
                        color= 'rgba(244,67,54,0.5)'
                    /> 
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity>

                <View style={styles.infoContainer}>
                   <Text style={styles.textBot1}>
                        GrammarBE
                    </Text>
                    <Text style={styles.textBot2}>
                        Grammar Basic For English
                    </Text> 
                </View>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: WIDTH,
    },
    topBar: {
        alignSelf: 'stretch',
        height: 48,
        flexDirection: 'row', // row
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between', // center, space-around
        paddingLeft: 10,
        paddingRight: 10,
       },
    barContainer:{
        alignSelf: 'stretch',
        padding: 20,
        height: 70,
        flexDirection: 'row',
        borderBottomColor: 'rgb(0,0,0)',
        borderBottomWidth: 2,
        alignItems: 'center',
        backgroundColor: 'rgb(255,255,255)'
    },
    text:{
        fontFamily: 'comicsansms',
        fontSize: 18,
        padding: 20,
    },
    infoContainer:{
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 20,
    },
    textBot1:{
        fontFamily: 'comicsansms',
        fontSize: 24,
        padding: 5,
    },
    textBot2:{
        fontFamily: 'comicsansms',
        fontSize: 14,
    },

});
