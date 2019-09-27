import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
    Dimensions,
    TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const {width: WIDTH} = Dimensions.get('window');

export default class Lesson extends Component {
    
    render() {

        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                {/* <TopBarBack/>  */}
                <View style={styles.topBar}>           
                        <Icon
                            name="left"
                            backgroundColor="#7F4F2C"
                            size={30}
                            onPress={() => navigate('Lesson')}
                            >
                        </Icon>
                        <Text style={{fontSize: 20,color:'#FFFFFF'}}>TENSES</Text>
                        <Text style={{color:'#7F4F2C'}}>Next</Text>
                </View>
                <ScrollView >
                    <View style={styles.content}>
                        <Text></Text>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PresentSimple')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Present Simple</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PresentContinuous')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Present Continuous</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PresentPerfect')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Present Perfect</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PresentPerfectContinuous')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Present Perfect Continuous</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastSimple')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Past Simple</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastContinuous')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Past Continuous</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastPerfect')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Past Perfect</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastPerfectContinuous')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Past Perfect Continuous</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('FutureSimple')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Future Simple</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('FutureContinuous')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Future Continuous</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('FuturePerfect')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Future Perfect</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('FuturePerfectContinuous')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Future Perfect Continuous</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#EAD8AB',
    },
    topBar: {
        alignSelf: 'stretch',
        height: 52,
        width: WIDTH,
        flexDirection: 'row', // row
        backgroundColor: '#7F4F2C',
        alignItems: 'center',
        justifyContent: 'space-between', // center, space-around  
        paddingLeft: 10,
        paddingRight: 10, 
    },
    roundedBtnText: {
        fontSize: 22,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color:'#810000',
        textAlign: 'center',
    },
    roundedBtn: {
        width: 300,
        backgroundColor: '#d7933f',
        borderRadius: 50,
        marginBottom: 13,
        paddingTop: 8,
        paddingBottom: 8
    },
    content: {
        alignSelf: 'center',
        alignItems: 'center',
        flex: 2
    },
  });
