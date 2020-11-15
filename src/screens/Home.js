import React, {Component} from 'react';
import {
    View,Text, Dimensions,Image,ScrollView

} from 'react-native';
import UI from '../assets/UI';
import NavBar from "../components/NavBar";
import MenuBox from "../components/MenuBox";
import Firebase from "../util/firebase";

const { Navigation } = require('react-native-navigation');


let {height, width} = Dimensions.get('window');

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        Navigation.events().bindComponent(this);
    }


    componentDidAppear(){

    }

    componentDidMount() {
        Firebase.setLogEvent('First_open');

    }


    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: UI.COLORS_HEX.blue,
                alignItems: 'center',
            }}>
                <NavBar>
                    <View style={{width: "100%", alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            style={{
                                width: Platform.OS === 'ios' ? 200 : 160,
                                height: Platform.OS === 'ios' ? 62 : 50,
                                marginBottom: 15
                            }}
                            source={require('../assets/appIcons/Logo_BeActive-14.png')}
                            resizeMode={'cover'}
                        />
                    </View>
                </NavBar>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems: 'center',paddingBottom: 170}}
                            style={{paddingTop: Platform.OS === 'ios' ? 50 : 30}}>
                    <MenuBox iconSrc={require('../assets/appIcons/questionMark.png')} title={'QUESTIONÁRIO'}
                             onPress={() => {
                                 Firebase.setLogEvent('Quest');

                                 Navigation.push(this.props.componentId, {
                                     component: {
                                         name: 'Questions',
                                     },
                                 })
                             }}/>
                    <MenuBox iconSrc={require('../assets/appIcons/etc.png')} onPress={() => {
                        Firebase.setLogEvent('Rec');

                        Navigation.push(this.props.componentId, {
                            component: {
                                name: 'Recommend',
                            },
                        })
                    }} title={'RECOMENDAÇÕES'} style={{marginTop: 40}}/>
                </ScrollView>

                <View style={{
                    width: width - 30,
                    backgroundColor: 'white',
                    height: Platform.OS === 'ios' ? 150 : 100,
                    position: 'absolute',
                    bottom: 0,
                    borderRadius: 7
                }}>
                    <View style={{width: "100%", padding: 10}}>
                        <Text style={{
                            color: UI.COLORS_HEX.primary,
                            fontSize: 16,
                            fontFamily: UI.FONT.normal,
                            letterSpacing: 0.5
                        }}>Uma iniciativa:</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        width: "100%",
                        justifyContent: 'space-around',
                        padding: 5,
                        marginTop: Platform.OS === 'ios' ? 10 : 0
                    }}>
                        <Image
                            style={{
                                width: Platform.OS === 'ios' ? 65 : 45,
                                height: Platform.OS === 'ios' ? 55 : 40,
                            }}
                            source={require('../assets/appIcons/dpoc.png')}
                            resizeMode={'cover'}
                        />
                        <Image
                            style={{
                                width: Platform.OS === 'ios' ? 55 : 40,
                                height: Platform.OS === 'ios' ? 55 : 40,
                            }}
                            source={require('../assets/appIcons/pul.png')}
                            resizeMode={'cover'}
                        />
                        <Image
                            style={{
                                width: Platform.OS === 'ios' ? 55 : 40,
                                height: Platform.OS === 'ios' ? 55 : 40,
                            }}
                            source={require('../assets/appIcons/gresp.png')}
                            resizeMode={'cover'}
                        />
                        <Image
                            style={{
                                width: Platform.OS === 'ios' ? 55 : 40,
                                height: Platform.OS === 'ios' ? 55 : 40,
                            }}
                            source={require('../assets/appIcons/respira.png')}
                            resizeMode={'cover'}
                        />
                        <Image
                            style={{
                                width: Platform.OS === 'ios' ? 55 : 40,
                                height: Platform.OS === 'ios' ? 55 : 40,
                            }}
                            source={require('../assets/appIcons/spp.png')}
                            resizeMode={'cover'}
                        />
                    </View>
                </View>
            </View>

        );
    }


}

