import React, { Component } from 'react';
import {StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
} from 'react-native';

export default class LessonTenses extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={style.wrapper}>
                    <View style={style.top}>
                        <Button 
                            style={style.backBtn}
                            title="Back"
                            onPress={() => navigate('Menu')}
                        ></Button>
                    </View>
                    <View style={style.content}>
                        <ScrollView>
                            <Button 
                                title="Present Simple"
                                onPress={() => navigate('PastS') } 
                            />
                            <Text></Text>
                            <Button 
                                title="Future Simple" 
                                onPress={() => navigate('PerS') } 
                            />
                            <Text></Text>
                            <Button 
                                title="Past Continuous" 
                                onPress={() => navigate('PerS') } 
                            />
                            <Text></Text>
                            <Button 
                                title="Present Continuous" 
                                onPress={() => navigate('PerS') } 
                            />                             
                            <Text></Text>
                            <Button 
                                title="Future Continuous" 
                                onPress={() => navigate('PerS') } 
                            />
                            <Text></Text>
                            <Button 
                                title="Past Perfect" 
                                onPress={() => navigate('PerS') } 
                            />
                            <Text></Text>
                            <Button 
                                title="Conjunction" 
                                onPress={() => navigate('PerS') } 
                            />
                            <Text></Text>
                            <Button 
                                title="Present Perfect" 
                                onPress={() => navigate('PerS') } 
                            />
                            <Text></Text>
                            <Button 
                                title="Future Perfect" 
                                onPress={() => navigate('PerS') } 
                            />
                            <Text></Text>
                            <Button 
                                title="Past Perfect Continuous" 
                                onPress={() => navigate('PerS') } 
                            />
                            <Text></Text>
                            <Button 
                                title="Present Perfect Continuous" 
                                onPress={() => navigate('PerS') } 
                            /> 
                            <Text></Text>
                            <Button 
                                title="If-clause" 
                                onPress={() => navigate('PerS') } 
                            /> 
                            <Text></Text>
                            <Button 
                                title="Future Perfect Continuous" 
                                onPress={() => navigate('PerS') } 
                            />     
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    wrap: {
        paddingTop: 5,
        paddingLeft: 5
    },
    wrapper: {
        paddingTop: 40,
        paddingBottom: 50,
        paddingRight: 5,
        paddingLeft: 5
    },
    top: {
        alignItems: 'center',
        flex: 1
    },
    content: {
        alignSelf: 'center',
        alignItems: 'center',
        flex: 2
    },
    title: {
        color:'#810000',
        fontSize: 58,
        fontWeight: '700',
        fontFamily: 'Roboto'
    },
    backBtn: {
        left: 5,
        position: 'absolute',
        opacity: 0.5,
        transform: [{scale: .7}]
    }
  });