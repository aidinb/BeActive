import React, {Component} from 'react';
import {
    View,Text, Dimensions,
    ScrollView,TouchableOpacity

} from 'react-native';
import UI from '../assets/UI';
import NavBar from "../components/NavBar";
import MenuBox from "../components/MenuBox";
import QuestionBox from "../components/QuestionBox";
import Button from "../components/Button";
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import Firebase from "../util/firebase";

const { Navigation } = require('react-native-navigation');


let {height, width} = Dimensions.get('window');

export default class Answer011 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        Navigation.events().bindComponent(this);
    }

    componentDidMount() {
        Firebase.setLogEvent('NSS');
    }
    render() {
        return (
            <ReactNativeZoomableView
                maxZoom={2}
                minZoom={1}
                zoomStep={0.5}
                initialZoom={1}
            >
            <View style={{
                flex: 1,
                backgroundColor: UI.COLORS_HEX.blue,
                alignItems: 'center',
            }}>
                <NavBar title={'Recomendações\npara o doente DPOC'} iconSrc={'etc'} iconEnable={true}
                        backButtonPress={() => Navigation.pop(this.props.componentId)}/>
                <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, marginTop: 30, width: width}}
                            contentContainerStyle={{alignItems: 'center', justifyContent: 'center',paddingBottom:50}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>

                        <View style={[{
                            width: width - 50,
                            backgroundColor: 'white',
                            alignSelf: 'stretch',
                            shadowOffset: {width: 0, height: 2},
                            elevation: 5,
                            shadowOpacity: 0.7,
                            zIndex: 100,
                            shadowColor: UI.COLORS_HEX.shadow,
                            borderRadius: 9,
                            paddingBottom: 20
                        }, this.props.style]}>
                            <View style={{
                                backgroundColor: UI.COLORS_HEX.primary,
                                height: 30,
                                width: "100%",
                                borderTopRightRadius: 9,
                                borderTopLeftRadius: 9,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}/>
                            <View style={{width: "100%", alignItems: 'center', flex: 1}}>
                                <View style={{
                                    width: width - 80, borderRadius: 7, backgroundColor: UI.COLORS_HEX.primaryLight,
                                    padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20
                                }}>
                                    <Text style={{fontSize: 18, color: 'white', fontFamily:UI.FONT.demiBold}}>TRATAMENTO</Text>
                                </View>

                                <View style={{
                                    width: width - 80, marginTop: 15,
                                    paddingLeft: 10, paddingRight: 10
                                }}>
                                    <Text style={{fontSize: 14, color: 'black', fontFamily:UI.FONT.demiBold}}>- Manter a
                                        terapêutica em curso e as estratégias farmacológicas e não farmacológicas
                                        previamente aplicadas.</Text>
                                </View>

                                <View style={{
                                    width: width - 80, marginTop: 10,
                                    paddingLeft: 10, paddingRight: 10
                                }}>
                                    <Text style={{fontSize: 14, color: 'black', fontFamily:UI.FONT.demiBold}}>- Verificar a
                                        técnica inalatória periodicamente.
                                    </Text>
                                </View>
                                <View style={{
                                    width: width - 80, borderRadius: 7, backgroundColor: UI.COLORS_HEX.primaryLight,
                                    padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20
                                }}>
                                    <Text
                                        style={{fontSize: 18, color: 'white', fontFamily:UI.FONT.demiBold}}>ACONSELHAMENTO</Text>
                                </View>
                                <View style={{
                                    width: width - 80, marginTop: 15,
                                    paddingLeft: 10, paddingRight: 10
                                }}>
                                    <Text style={{fontSize: 14, color: 'black', fontFamily:UI.FONT.demiBold}}>- Manter a vigilância da atividade física diária do doente.
                                    </Text>
                                </View>

                                <View style={{
                                    width: width - 80, marginTop: 15,
                                    paddingLeft: 10, paddingRight: 10
                                }}>
                                    <Text style={{fontSize: 14, color: 'black', fontFamily:UI.FONT.demiBold}}>- Incentivar à manutenção de estilos de vida saudáveis.
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={{
                    shadowOffset: {width: 0, height: 2},
                    elevation: 5,
                    shadowOpacity: 0.7,
                    shadowColor: UI.COLORS_HEX.shadow,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: UI.COLORS_HEX.primary,
                    height: 25
                }}/>
            </View>
            </ReactNativeZoomableView>
        );
    }


}

