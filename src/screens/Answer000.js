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

export default class Answer000 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        Navigation.events().bindComponent(this);
    }

    componentDidMount() {
        Firebase.setLogEvent('NNN');
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
                                    width: width - 80, marginTop: 10,
                                    paddingLeft: 10, paddingRight: 10
                                }}>
                                    <Text style={{fontSize: 14, color: 'black', fontFamily:UI.FONT.demiBold}}>- Reavaliar e
                                        ajustar o tratamento farmacológico de acordo com as recomendações <Text
                                            style={{fontSize: 14, fontFamily:UI.FONT.normal,letterSpacing:0.5,fontWeight: 'normal'}}>(mudar de molécula e/ou de
                                            inalador).</Text></Text>
                                </View>

                                <View style={{
                                    width: width - 80, marginTop: 10,
                                    paddingLeft: 10, paddingRight: 10
                                }}>
                                    <Text style={{fontSize: 14, color: 'black', fontFamily:UI.FONT.demiBold}}>- Considerar
                                        mudança de tratamento para regime de administração bi-diária.</Text>
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
                                    <Text style={{fontSize: 14, color: 'black', fontFamily:UI.FONT.demiBold}}>- Aconselhar o
                                        doente a repousar 30’ após as refeições, planeando a realização das tarefas e a
                                        sua execução no período do dia que sente mais energia.</Text>
                                </View>
                                <View style={{
                                    width: width - 80, marginTop: 10,
                                    paddingLeft: 10, paddingRight: 10
                                }}>
                                    <Text style={{fontSize: 14, color: 'black', fontFamily:UI.FONT.demiBold}}>- Incentivar ao aumento da atividade física diária <Text
                                            style={{fontSize: 14, fontFamily:UI.FONT.normal,letterSpacing:0.5,fontWeight: 'normal'}}>(ex: passeios curtos de 30 minutos, ir às compras, passear o cão, ir ao café).</Text></Text>
                                </View>
                                <View style={{
                                    width: width - 80, marginTop: 15,
                                    paddingLeft: 10, paddingRight: 10
                                }}>
                                    <Text style={{fontSize: 14, color: 'black', fontFamily:UI.FONT.demiBold}}>- Incentivar maior participação nas atividades da casa.
                                    </Text>
                                </View>
                                <View style={{
                                    width: width - 80, marginTop: 15,
                                    paddingLeft: 10, paddingRight: 10
                                }}>
                                    <Text style={{fontSize: 14, color: 'black', fontFamily:UI.FONT.demiBold}}>- Fazer, com o doente, uma lista de objetivos a atingir.
                                    </Text>
                                </View>


                                <View style={{
                                    width: width - 80, borderRadius: 7, backgroundColor: UI.COLORS_HEX.primaryLight,
                                    padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20
                                }}>
                                    <Text
                                        style={{fontSize: 18, color: 'white', fontFamily:UI.FONT.demiBold}}>OUTRAS ESTRATÉGIAS</Text>
                                </View>


                                <View style={{
                                    width: width - 80, marginTop: 10,
                                    paddingLeft: 10, paddingRight: 10
                                }}>
                                    <Text style={{fontSize: 14, color: 'black', fontFamily:UI.FONT.demiBold}}>- Avaliar potenciais causas para não dormir bem <Text
                                            style={{fontSize: 14, fontFamily:UI.FONT.normal,letterSpacing:0.5,fontWeight: 'normal'}}>(ex: insónia, dores, refluxo gastro-esofágico, insuficiência cardíaca, apneia do sono).</Text></Text>
                                </View>

                                <View style={{
                                    width: width - 80, marginTop: 15,
                                    paddingLeft: 10, paddingRight: 10
                                }}>
                                    <Text style={{fontSize: 14, color: 'black', fontFamily:UI.FONT.demiBold}}>- Referenciar a consulta de Pneumologia/Patologia do Sono para investigação de eventuais distúrbios do sono.</Text>
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

