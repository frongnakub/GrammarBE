import React, { Component } from 'react';
import { Text,View,StyleSheet } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import { ShareApi } from 'react-native-fbsdk';

import AppNavigator from './navigation/AppNavigator';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <AppNavigator />
      </View>
    );
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