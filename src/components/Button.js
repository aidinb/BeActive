import React, {Component} from 'react';
import {View, Dimensions, Text, TouchableOpacity} from 'react-native';
import UI from '../assets/UI';
let {height, width} = Dimensions.get('window');

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {height: 100, width: 100};
  }

  render() {
      return (
          <TouchableOpacity
              activeOpacity={0.9}
              onPress={this.props.onPress}
              style={[
                  {
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                      width: this.props?.width ? this.props.width : (width - 140) / 2,
                      flexDirection: 'row',
                      borderRadius: 7
                  },
                  this.props.style,
              ]}>
              <Text
                  style={{
                      fontSize: this.props.fontSize ? this.props.fontSize : 17,
                      color: UI.COLORS_HEX.default,
                      backgroundColor: 'transparent',
                      elevation: 10,
                      textAlign: 'center',
                      fontFamily:UI.FONT.demiBold
                  }}>
                  {this.props.title}
              </Text>
          </TouchableOpacity>
      );
  }
}
