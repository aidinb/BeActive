import React, {Component} from 'react';
import {
    View,Text, Dimensions,
    ScrollView,TouchableOpacity

} from 'react-native';
import UI from '../assets/UI';
import NavBar from "../components/NavBar";
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

const { Navigation } = require('react-native-navigation');


let {height, width} = Dimensions.get('window');

export default class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        Navigation.events().bindComponent(this);
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
                <NavBar title={'Recomendações'} iconSrc={'etc'} iconEnable={true}
                        backButtonPress={() => Navigation.pop(this.props.componentId)}/>
                <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, marginTop: 30, width: width}}
                            contentContainerStyle={{alignItems: 'center', justifyContent: 'center', paddingBottom: 50}}>
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
                                height: 70,
                                width: "100%",
                                borderTopRightRadius: 9,
                                borderTopLeftRadius: 9,
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 5
                            }}>
                                <Text style={{
                                    textTransform: 'uppercase',
                                    color: 'white',
                                    fontSize: 13,
                                    fontFamily: UI.FONT.demiBold,
                                    textAlign: 'center'
                                }}>Recomendações gerais no acompanhamento dos doentes com DPOC</Text>
                            </View>
                            <View style={{width: "100%", alignItems: 'center', flex: 1}}>
                                <View style={{width: width - 80, padding: 10, marginTop: 5}}>
                                    <Text style={{fontFamily: UI.FONT.normal, letterSpacing: 0.5, fontSize: 16}}>Em
                                        todas as oportunidades de diálogo com o seu doente com DPOC:</Text>
                                </View>

                                <View style={{
                                    width: width - 80,
                                    marginTop: 5,
                                    borderWidth: 2,
                                    borderColor: UI.COLORS_HEX.primaryLight,
                                    borderRadius: 7,
                                }}>
                                    <View style={{
                                        width: width - 82,
                                        borderTopRightRadius: 7,
                                        backgroundColor: UI.COLORS_HEX.primaryLight,
                                        padding: 5,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        paddingTop: 15,
                                        paddingBottom: 15,
                                    }}>
                                        <Text style={{
                                            textTransform: 'uppercase',
                                            color: 'white',
                                            fontSize: 11,
                                            fontFamily: UI.FONT.demiBold,
                                            textAlign: 'center'
                                        }}>VERIFICAR A ADESÃO À TERAPÊUTICA INALADA, DE ACORDO COM AS INDICAÇÕES DO
                                            MEDICAMENTO</Text>
                                    </View>

                                    <View style={{width: "100%", flexDirection: 'row'}}>
                                        <View style={{
                                            flex: 0.33,
                                            borderRightColor: UI.COLORS_HEX.primaryLight,
                                            borderRightWidth: 2,
                                            padding: 5,
                                            paddingVertical: 15
                                        }}>
                                            <Text style={{
                                                textAlign: 'center',
                                                fontFamily: UI.FONT.normal,
                                                letterSpacing: 0.5,
                                                fontSize: 16
                                            }}>Toma</Text>
                                            <Text style={{
                                                textAlign: 'center',
                                                fontSize: 12,
                                                fontFamily: UI.FONT.normal,
                                                letterSpacing: 0.5
                                            }}>(regularidade, horário e
                                                dosagem)</Text>
                                        </View>
                                        <View style={{
                                            flex: 0.33,
                                            borderRightColor: UI.COLORS_HEX.primaryLight,
                                            borderRightWidth: 2,
                                            padding: 5,
                                            paddingVertical: 15,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Text style={{
                                                textAlign: 'center',
                                                fontFamily: UI.FONT.normal,
                                                letterSpacing: 0.5,
                                                fontSize: 15
                                            }}>Técnica
                                                Inalatória</Text>
                                        </View>
                                        <View style={{
                                            flex: 0.33,
                                            padding: 5,
                                            paddingVertical: 15,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Text style={{
                                                textAlign: 'center',
                                                fontFamily: UI.FONT.normal,
                                                letterSpacing: 0.5,
                                                fontSize: 15,
                                            }}>Manuseio
                                                dos dispositivos</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={{width: width - 80, padding: 10, marginTop: 5}}>
                                    <Text style={{fontFamily: UI.FONT.normal, letterSpacing: 0.5, fontSize: 16,}}>Se
                                        necessário ou indicado, mude de fármaco e/ou de inalador, conforme as
                                        necessidades e/ou preferências do doente.</Text>
                                </View>

                                <View style={{
                                    width: width - 80, borderRadius: 7, backgroundColor: UI.COLORS_HEX.primaryLight,
                                    padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20
                                }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            color: 'white',
                                            fontFamily: UI.FONT.demiBold,
                                            textAlign: 'center'
                                        }}>ACONSELHAR/MOTIVAR
                                        O DOENTE A DEIXAR DE FUMAR</Text>
                                </View>

                                <View style={{width: width - 80, padding: 10, marginTop: 5}}>
                                    <Text style={{fontFamily: UI.FONT.normal, letterSpacing: 0.5, fontSize: 16,}}>Se
                                        necessário ou indicado, encaminhe o doente para consulta de cessação
                                        tabágica.</Text>
                                </View>

                                <View style={{
                                    width: width - 80, borderRadius: 7, backgroundColor: UI.COLORS_HEX.primaryLight,
                                    padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20
                                }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            color: 'white',
                                            fontFamily: UI.FONT.demiBold,
                                            textAlign: 'center'
                                        }}>PONDERAR
                                        REFERENCIAÇÃO PARA PROGRAMA DE REABILITAÇÃO RESPIRATÓRIA NA COMUNIDADE</Text>
                                </View>

                                <View style={{
                                    width: width - 80, borderRadius: 7, backgroundColor: UI.COLORS_HEX.primaryLight,
                                    padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20
                                }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            color: 'white',
                                            fontFamily: UI.FONT.demiBold,
                                            textAlign: 'center'
                                        }}>RECOMENDAR A VACINAÇÃO ANTI-GRIPAL ANUAL E A VACINAÇÃO
                                        ANTI-PNEUMOCÓCICA</Text>
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

