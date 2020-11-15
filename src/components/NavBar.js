import React, {Component} from 'react';
import {View, Platform, Dimensions, TouchableOpacity, Text, Image} from 'react-native';
import UI from '../assets/UI'
let {height, width} = Dimensions.get('window');

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[{
                height: Platform.OS === 'ios' ? 120 : 90,
                backgroundColor: UI.COLORS_HEX.primary,
                alignSelf: 'stretch',
                shadowOffset: {width: 0, height: 2},
                elevation: 5,
                shadowOpacity: 0.7,
                zIndex: 100,
                justifyContent: "flex-end",
                shadowColor: UI.COLORS_HEX.shadow,
            }, this.props.style]}>

                {this.props.children}
                {this.props.title && <View style={{
                    height: 60,
                    width: "100%",
                    borderTopRightRadius: 9,
                    borderTopLeftRadius: 9,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={this.props.backButtonPress} style={{
                        alignItems: 'center'
                    }}>
                        <View style={{width: 40, paddingLeft: 10}}>
                            <Image
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                                source={require('../assets/appIcons/backImage.png')}
                                resizeMode={'cover'}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={{width: width - 40, alignItems: 'center', justifyContent: 'center', paddingRight: 40}}>
                        <Text style={{
                            color: 'white', fontSize: 18,
                            fontFamily: UI.FONT.demiBold, textTransform: 'uppercase', textAlign: 'center',
                            marginTop: 5
                        }}>{this.props.title}</Text>
                    </View>
                </View>}

                {this.props.iconEnable && this.props.iconEnable === true && <View style={{
                    width: "100%",
                    borderTopRightRadius: 9,
                    borderTopLeftRadius: 9,
                    height: 30
                }}>
                    {this.props.iconSrc && <Image
                        style={{
                            width: 50,
                            height: 56,
                            position: 'absolute',
                            bottom: -28,
                            left: width / 2 - 27
                        }}
                        source={this.props.iconSrc === 'question' ? require('../assets/appIcons/questionMark.png') : require('../assets/appIcons/etc.png')}
                        resizeMode={'cover'}
                    />}
                </View>}

            </View>

        );
    }


}

