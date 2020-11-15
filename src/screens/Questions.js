import React, {Component} from 'react';
import {
    View,Text, Dimensions,
    ScrollView,TouchableOpacity,Alert

} from 'react-native';
import UI from '../assets/UI';
import NavBar from "../components/NavBar";
import MenuBox from "../components/MenuBox";
import QuestionBox from "../components/QuestionBox";

const { Navigation } = require('react-native-navigation');


let {height, width} = Dimensions.get('window');

export default class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question1:null,
            question2:null,
            question3:null,
        };
        Navigation.events().bindComponent(this);
    }

    submitAnswer = () => {

        if (this.state.question1 === true && this.state.question2 === true && this.state.question3 === true) {
            Navigation.push(this.props.componentId, {
                component: {
                    name: 'Answer111',
                },
            })
        }else if(this.state.question1 === true && this.state.question2 === false && this.state.question3 === false){
            Navigation.push(this.props.componentId, {
                component: {
                    name: 'Answer100',
                },
            })
        }else if(this.state.question1 === false && this.state.question2 === true && this.state.question3 === false){
            Navigation.push(this.props.componentId, {
                component: {
                    name: 'Answer010',
                },
            })
        }else if(this.state.question1 === false && this.state.question2 === false && this.state.question3 === true){
            Navigation.push(this.props.componentId, {
                component: {
                    name: 'Answer001',
                },
            })
        }else if(this.state.question1 === true && this.state.question2 === false && this.state.question3 === true){
            Navigation.push(this.props.componentId, {
                component: {
                    name: 'Answer101',
                },
            })
        }else if(this.state.question1 === true && this.state.question2 === true && this.state.question3 === false){
            Navigation.push(this.props.componentId, {
                component: {
                    name: 'Answer110',
                },
            })
        }else if(this.state.question1 === false && this.state.question2 === true && this.state.question3 === true){
            Navigation.push(this.props.componentId, {
                component: {
                    name: 'Answer011',
                },
            })
        }else if(this.state.question1 === false && this.state.question2 === false && this.state.question3 === false){
            Navigation.push(this.props.componentId, {
                component: {
                    name: 'Answer000',
                },
            })
        }else{
            Alert.alert(
                "Erro",
                'Por favor, responda a todas as perguntas.',
                [
                    {
                        text: 'OK',
                    },

                ],
            )
        }
    };

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: UI.COLORS_HEX.blue,
                alignItems: 'center',
            }}>
                <NavBar title={'QUESTIONÁRIO'} iconSrc={'question'}
                        backButtonPress={() => Navigation.pop(this.props.componentId)} iconEnable={true}/>
                <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, marginTop: 30, width: width}}
                            contentContainerStyle={{alignItems: 'center', justifyContent: 'center',paddingBottom:50}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <QuestionBox answer={this.state.question1} pressedYes={() => this.setState({question1: true})}
                                     pressedNo={() => this.setState({question1: false})}
                                     style={{marginTop: 10,}}
                                     title={'DIAS/SINTOMAS'}
                                     question={'Sente cansaço ou dificuldade\n' + 'em respirar?'}/>
                        <QuestionBox answer={this.state.question2} pressedYes={() => this.setState({question2: true})}
                                     pressedNo={() => this.setState({question2: false})}
                                     style={{marginTop: 20,}}
                                     title={'NOITE/SONO'} question={'Dorme bem?'}/>
                        <QuestionBox answer={this.state.question3} pressedYes={() => this.setState({question3: true})}
                                     pressedNo={() => this.setState({question3: false})}
                                     style={{marginTop: 20,}}
                                     title={'ATIVIDADE'} question={'Sai de casa todos os dias?'}/>
                    </View>
                    <TouchableOpacity style={{
                        width: width - 70,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: UI.COLORS_HEX.secondary,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 20
                    }} activeOpacity={0.6} onPress={this.submitAnswer}>
                        <Text style={{color: 'white', fontSize: 22,fontFamily:UI.FONT.demiBold}}>SUBMETER</Text>
                    </TouchableOpacity>
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

        );
    }


}

