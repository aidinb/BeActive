import React, {Component} from 'react';
import {View, Platform, Dimensions,TouchableOpacity,Text} from 'react-native';
import UI from '../assets/UI'
import Button from "./Button";
let {height, width} = Dimensions.get('window');

export default class QuestionBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[{
                height: 170,
                width: width - 70,
                backgroundColor: 'white',
                alignSelf: 'stretch',
                shadowOffset: {width: 0, height: 2},
                elevation: 5,
                shadowOpacity: 0.7,
                zIndex: 100,
                shadowColor: UI.COLORS_HEX.shadow,
                borderRadius: 9
            }, this.props.style]}>
                <View style={{
                    backgroundColor: UI.COLORS_HEX.primary,
                    height: 50,
                    width: "100%",
                    borderTopRightRadius: 9,
                    borderTopLeftRadius: 9,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{fontSize: 18, color: 'white',fontFamily:UI.FONT.demiBold}}>{this.props.title}</Text>

                </View>
                <View style={{width: "100%", alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Text style={{fontSize: 16, color: 'black',textAlign:'center',fontFamily:UI.FONT.demiBold}}>{this.props.question}</Text>
                </View>

                <View style={{width: "100%", padding: 10, justifyContent: 'space-around', flexDirection: 'row'}}>
                    <Button onPress={this.props.pressedYes}
                            style={{backgroundColor: this.props.answer === true ? UI.COLORS_HEX.secondary : UI.COLORS_HEX.primaryLight}}
                            title={'SIM'}/>
                    <Button onPress={this.props.pressedNo}
                            style={{backgroundColor:this.props.answer === false ? UI.COLORS_HEX.secondary : UI.COLORS_HEX.primaryLight}}
                            title={'NÃO'}/>
                </View>
                {this.props.children}

            </View>

        );
    }


}

