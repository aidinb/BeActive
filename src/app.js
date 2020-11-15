import {Navigation} from 'react-native-navigation';
import {registerScreens} from './Screens';
import UI from './assets/UI';

registerScreens();


Navigation.events().registerAppLaunchedListener(async () => {
    await Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'Home',
                        },
                    },
                ],
            },
        },
    });

});

Navigation.setDefaultOptions({
    bottomTabs:{
        backgroundColor:'#FFFFFF',
        drawBehind:true,
        animate: false,
        titleDisplayMode: 'alwaysHide'
    },
    bottomTab: {
        fontFamily: 'Avenir-Black',
        iconColor: '#626262',
        selectedIconColor: '#106BB3',
        statusBarColor: '#106BB3',
        noBorder: true,
        transparent: false,
        badgeColor: UI.COLORS_HEX.negative,
        iconInsets: {
            // add this to change icon position (optional, iOS only).
            top: 3, // optional, default is 0.
            left: 0, // optional, default is 0.
            bottom: -6, // optional, default is 0.
            right: 0, // optional, default is 0.
        },
    },
    topBar: {
        visible: false,
        backButton: {
            color: '#106BB3',
        },
    },
    layout: {
        orientation: ['portrait'],
        backgroundColor:'#F2F2F4',
        componentBackgroundColor:'#F2F2F4',
    },
    statusBar: {
        visible:true,
        style:'light',
        backgroundColor: '#106BB3',
    },
    // animations: {
    //   pop: {...UI.popAnimations},
    //   push: {...UI.pushAnimations},
    // },
});
