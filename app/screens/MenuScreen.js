import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Text,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

const rows = 3;
const cols = 2;
const marginHorizontal = 4;
const marginVertical = 4;
const width = (Dimensions.get('window').width / cols) - (marginHorizontal * (cols + 1));
const height = (Dimensions.get('window').height / rows) - (marginVertical * (rows + 1));

export default class MenuScreen extends Component {

    state = {
        username: this.props.navigation.state.params.username,
    }
    
    render () {
        const { navigate } = this.props.navigation;
        return (
            <View style={stylesGrid.container}>
                    <View style={stylesGrid.topBar}>             
                        <Text style={{color:'#7F4F2C'}}>Back</Text>
                        <Text style={{fontSize: 20,color:'#FFFFFF'}}>HOME</Text>
                        <Icon
                            name="logout"
                            color="#ffff"
                            backgroundColor="#7F4F2C"
                            size={30}
                            onPress={() => navigate('Logged')}
                            >
                        </Icon>
                    </View>
                <ScrollView>
                <View style={stylesGrid.sectionContainer}>
                        <TouchableOpacity onPress={() => navigate('Pretest',{username: this.state.username})} style={stylesGrid.boxContainer}>
                            <Image
                                style={{width: 100, height: 100}}
                                source={require('../images/Pre.png')}/>
                            <Text>Pre-test</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('Lesson')} style={stylesGrid.boxContainer}>
                            <Image
                                style={{width: 100, height: 100}}
                                source={require('../images/Lesson.png')}/>
                            <Text>Lesson</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('Game')} style={stylesGrid.boxContainer}>
                            <Image
                                style={{width: 100, height: 100}}
                                source={require('../images/Game1.png')}/>
                            <Text>Game</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('Post-test')} style={stylesGrid.boxContainer}>
                            <Image
                                style={{width: 100, height: 100}}
                                source={require('../images/Post.png')}/>
                            <Text>Post-test</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('Forum')} style={stylesGrid.boxContainer}>
                            <Image
                                style={{width: 100, height: 100}}
                                source={require('../images/Chat.png')}/>
                            <Text>Forum</Text>
                        </TouchableOpacity>
                        <Text style={stylesGrid.boxContainer1}></Text>
                    </View>  
                </ScrollView>
             </View>   
        )
    }
}

const stylesGrid = StyleSheet.create({
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
    container: {
        flex: 1,
        backgroundColor:'#EAD8AB',
    },
    sectionContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxContainer: {
        marginTop: marginVertical,
        marginBottom: marginVertical,
        marginLeft: marginHorizontal,
        marginRight: marginHorizontal,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    boxContainer1: {
        marginTop: marginVertical,
        marginBottom: marginVertical,
        marginLeft: marginHorizontal,
        marginRight: marginHorizontal,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
    },
  })
  
              /*<ScrollView>
                    <View style={stylesGrid.sectionContainer}>
                        <TouchableOpacity onPress={() => navigate('Pretest')} style={stylesGrid.boxContainer}>
                            <Text>Pre-test</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('Lesson')} style={stylesGrid.boxContainer}>
                            <Text>Lesson</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('Game')} style={stylesGrid.boxContainer}>
                            <Text>Game</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('Post-test')} style={stylesGrid.boxContainer}>
                            <Text>Post-test</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigate('Forum')} style={stylesGrid.boxContainer}>
                            <Text>Forum</Text>
                        </TouchableOpacity>
                        <View style={stylesGrid.boxContainer1}></View>
                    </View>
                </ScrollView>*/
              /*<View style={[{width: "50%", margin: 10}]}>
                <Button
                    title="Pre-test"
                    onPress={() => navigate('Pretest')}
                ></Button>
                <Text></Text>
                <Button
                    title="Lesson"
                    onPress={() => navigate('Lesson')}
                ></Button>
                <Text></Text>
                <Button
                    title="Game"
                    onPress={() => navigate('Game')}
                ></Button>
                <Text></Text>
                <Button
                    title="Post-test"
                    onPress={() => navigate('Posttest')}
                ></Button>
                <Text></Text>
                <Button
                    title="Forum"
                    onPress={() => navigate('Forum')}
                ></Button>
            </View>*/