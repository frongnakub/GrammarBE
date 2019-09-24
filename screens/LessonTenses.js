import React, { Component } from 'react';
import {StyleSheet,
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
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Past Simple</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Present Simple</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Future Simple</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Past Continuous</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Present Continuous</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Future Continuous</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Past Perfect</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Present Perfect</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Future Perfect</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Past Perfect Continuous</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Present Perfect Continuous</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
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
  
// export default class LessonTenses extends Component {
//     render() {
//         const { navigate } = this.props.navigation;
//         return (
//             <View>
//                 <View style={style.wrapper}>
//                     <View style={style.top}>
//                         <Button 
//                             style={style.backBtn}
//                             title="Back"
//                             onPress={() => navigate('Menu')}
//                         ></Button>
//                     </View>
//                     <View style={style.content}>
//                         <ScrollView>
//                             <Button 
//                                 title="Present Simple"
//                                 onPress={() => navigate('PastS') } 
//                             />
//                             <Text></Text>
//                             <Button 
//                                 title="Future Simple" 
//                                 onPress={() => navigate('PerS') } 
//                             />
//                             <Text></Text>
//                             <Button 
//                                 title="Past Continuous" 
//                                 onPress={() => navigate('PerS') } 
//                             />
//                             <Text></Text>
//                             <Button 
//                                 title="Present Continuous" 
//                                 onPress={() => navigate('PerS') } 
//                             />                             
//                             <Text></Text>
//                             <Button 
//                                 title="Future Continuous" 
//                                 onPress={() => navigate('PerS') } 
//                             />
//                             <Text></Text>
//                             <Button 
//                                 title="Past Perfect" 
//                                 onPress={() => navigate('PerS') } 
//                             />
//                             <Text></Text>
//                             <Button 
//                                 title="Conjunction" 
//                                 onPress={() => navigate('PerS') } 
//                             />
//                             <Text></Text>
//                             <Button 
//                                 title="Present Perfect" 
//                                 onPress={() => navigate('PerS') } 
//                             />
//                             <Text></Text>
//                             <Button 
//                                 title="Future Perfect" 
//                                 onPress={() => navigate('PerS') } 
//                             />
//                             <Text></Text>
//                             <Button 
//                                 title="Past Perfect Continuous" 
//                                 onPress={() => navigate('PerS') } 
//                             />
//                             <Text></Text>
//                             <Button 
//                                 title="Present Perfect Continuous" 
//                                 onPress={() => navigate('PerS') } 
//                             /> 
//                             <Text></Text>
//                             <Button 
//                                 title="If-clause" 
//                                 onPress={() => navigate('PerS') } 
//                             /> 
//                             <Text></Text>
//                             <Button 
//                                 title="Future Perfect Continuous" 
//                                 onPress={() => navigate('PerS') } 
//                             />     
//                         </ScrollView>
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }

// const style = StyleSheet.create({
//     wrap: {
//         paddingTop: 5,
//         paddingLeft: 5
//     },
//     wrapper: {
//         paddingTop: 40,
//         paddingBottom: 50,
//         paddingRight: 5,
//         paddingLeft: 5
//     },
//     top: {
//         alignItems: 'center',
//         flex: 1
//     },
//     content: {
//         alignSelf: 'center',
//         alignItems: 'center',
//         flex: 2
//     },
//     title: {
//         color:'#810000',
//         fontSize: 58,
//         fontWeight: '700',
//         fontFamily: 'Roboto'
//     },
//     backBtn: {
//         left: 5,
//         position: 'absolute',
//         opacity: 0.5,
//         transform: [{scale: .7}]
//     }
//   });