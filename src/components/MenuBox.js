import React, {Component} from 'react';
import {View, Platform, Dimensions, TouchableOpacity, Text, Image} from 'react-native';
import UI from '../assets/UI'
let {height, width} = Dimensions.get('window');

export default class MenuBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={this.props.onPress} style={[{
                height:  Platform.OS === 'ios' ?180:150,
                width: width - 50,
                backgroundColor: UI.COLORS_HEX.primary,
                alignSelf: 'stretch',
                shadowOffset: {width: 0, height: 2},
                elevation: 5,
                shadowOpacity: 0.7,
                zIndex: 100,
                shadowColor: UI.COLORS_HEX.shadow,
                borderRadius: 9
            }, this.props.style]}>
                <View style={{
                    backgroundColor: UI.COLORS_HEX.secondary,
                    height:  Platform.OS === 'ios' ?70:50,
                    width: "100%",
                    borderTopRightRadius: 9,
                    borderTopLeftRadius: 9
                }}>
                    {this.props.iconSrc && <Image
                        style={{
                            width: 50,
                            height: 56,
                            position:'absolute',
                            bottom:-28,
                            left:(width - 50)/2 - 27
                        }}
                        source={this.props.iconSrc}
                        resizeMode={'cover'}
                    />}
                </View>

                <View style={{width:"100%",alignItems:'center',justifyContent:'center',flex:1}}>
                    <Text style={{color:'white',fontSize:22,fontFamily:UI.FONT.demiBold}}>{this.props.title}</Text>
                </View>


                {this.props.children}

            </TouchableOpacity>

        );
    }


}

