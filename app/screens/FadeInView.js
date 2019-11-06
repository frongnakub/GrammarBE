import React, { Component } from 'react';
import {Animated, Easing, Text, View} from 'react-native';

import Model from './Model';

export default class FadeInView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fadeAnim: new Animated.Value(0), // init opacity 0
      };
    }
    componentDidMount() {
        Animated.sequence([
            Animated.timing(
                // Uses easing functions
                this.state.fadeAnim, // The value to drive
                {toValue: 400,
                 duration: 5000,
                 easing: Easing.linear
                }, // Configuration
            )
        ]).start(()=>{
            this.componentDidMount();
        }); // Don't forget start!
    }
    render() {
        const interpolatedRotateAnimation = this.state.fadeAnim.interpolate({
            inputRange:[0,100],
            outputRange:['0deg','360deg'],
        })
      return (
        <Animated.View // Special animatable View
          style={{transform:[{rotate: interpolatedRotateAnimation}]}}>
            <Model/>
        </Animated.View>
      );
    }
  }
