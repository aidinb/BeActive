import React, {Component} from 'react';
import {View, ActivityIndicator, Dimensions, Text} from 'react-native';
import UI from '../assets/UI';

let {height, width} = Dimensions.get('window');

export default class Loading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          paddingTop: height / 2 - 70,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
          zIndex: 200,
        }}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            width: 180,
            height: 130,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            paddingTop: 20,
          }}>
          <ActivityIndicator
            color={UI.COLORS_HEX.blue}
            animating
            size={'large'}
          />
          <Text
            style={{
              marginTop: 25,
              fontFamily: UI.FONT.tbold,
              color: UI.COLORS_HEX.default,
              fontSize: 17,
            }}>
            Loading
          </Text>
        </View>
      </View>
    );
  }
}
