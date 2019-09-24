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
                            onPress={() => navigate('Menu')}
                            >
                        </Icon>
                        <Text style={{fontSize: 20,color:'#FFFFFF'}}>LESSON</Text>
                        <Text style={{color:'#7F4F2C'}}>Next</Text>
                </View>
                <ScrollView >
                    <View style={styles.content}>
                        <Text></Text>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Article</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Singular / Plural</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Pronoun</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Preposition</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Auxiliary Verb</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Adverb</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Conjunction</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Article</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Infinitive And Gerund</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Participle</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Comparison</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}> Active / Passive</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('PastS')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>If-clause</Text>
                        </TouchableHighlight>
                        <TouchableHighlight  style={styles.roundedBtn} onPress={() => navigate('LessonT')} underlayColor="rgba(215, 147, 63,.3)">
                            <Text style={styles.roundedBtnText}>Tenses</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
               {/* <ScrollView >
                    <Text></Text>
                    <Button 
                        title="Article"
                        color="#f194ff"
                        onPress={() => navigate('PastS') } 
                    />
                    <Text></Text>
                    <Button 
                        title="Singular / Plural" 
                        onPress={() => navigate('PerS') } 
                    />
                    <Text></Text>
                    <Button 
                        title="Pronoun" 
                        onPress={() => navigate('PerS') } 
                    />
                    <Text></Text>
                    <Button 
                        title="Preposition" 
                        onPress={() => navigate('PerS') } 
                    />                             
                    <Text></Text>
                    <Button 
                        title="Auxiliary Verb" 
                        onPress={() => navigate('PerS') } 
                    />
                    <Text></Text>
                    <Button 
                        title="Adverb" 
                        onPress={() => navigate('PerS') } 
                    />
                    <Text></Text>
                    <Button 
                        title="Conjunction" 
                        onPress={() => navigate('PerS') } 
                    />
                    <Text></Text>
                    <Button 
                        title="Infinitive And Gerund" 
                        onPress={() => navigate('PerS') } 
                    />
                    <Text></Text>
                    <Button 
                        title="Participle" 
                        onPress={() => navigate('PerS') } 
                    />
                    <Text></Text>
                    <Button 
                        title="Comparison" 
                        onPress={() => navigate('PerS') } 
                    />
                    <Text></Text>
                    <Button 
                        title="Active / Passive" 
                        onPress={() => navigate('PerS') } 
                    /> 
                    <Text></Text>
                    <Button 
                        title="If-clause" 
                        onPress={() => navigate('PerS') } 
                    /> 
                    <Text></Text>
                    <Button 
                        title="Tenses" 
                        onPress={() => navigate('Tenses') } 
                    />     
                </ScrollView> */}
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
    topBarPad: {
        paddingLeft: 10,
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
  /*<ScrollView >
                            <Button 
                                title="Article"
                                onPress={() => navigate('PastS') } 
                            />
                            <Text></Text>
                            <Button 
                                title="Singular / Plural" 
                                onPress={() => navigate('PerS') } 
                            />
                            <Text></Text>
                            <Button 
                                title="Pronoun" 
                                onPress={() => navigate('PerS') } 
                            />
                            <Text></Text>
                            <Button 
                                title="Preposition" 
                                onPress={() => navigate('PerS') } 
                            />                             
                            <Text></Text>
                            <Button 
                                title="Auxiliary Verb" 
                                onPress={() => navigate('PerS') } 
                            />
                            <Text></Text>
                            <Button 
                                title="Adverb" 
                                onPress={() => navigate('PerS') } 
                            />
                            <Text></Text>
                            <Button 
                                title="Conjunction" 
                                onPress={() => navigate('PerS') } 
                            />
                            <Text></Text>
                            <Button 
                                title="Infinitive And Gerund" 
                                onPress={() => navigate('PerS') } 
                            />
                            <Text></Text>
                            <Button 
                                title="Participle" 
                                onPress={() => navigate('PerS') } 
                            />
                            <Text></Text>
                            <Button 
                                title="Comparison" 
                                onPress={() => navigate('PerS') } 
                            />
                            <Text></Text>
                            <Button 
                                title="Active / Passive" 
                                onPress={() => navigate('PerS') } 
                            /> 
                            <Text></Text>
                            <Button 
                                title="If-clause" 
                                onPress={() => navigate('PerS') } 
                            /> 
                            <Text></Text>
                            <Button 
                                title="Tenses" 
                                onPress={() => navigate('Tenses') } 
                            />     
                        </ScrollView>*/