import React, { Component } from 'react';
import {StyleSheet,
    Text,
    View,
    Button,
    Dimensions,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends Component {
    render () {
        const { navigate } = this.props.navigation;
        return (
            <View style={[{width: "50%", margin: 10}]}>
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });