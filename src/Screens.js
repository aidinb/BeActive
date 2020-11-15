import {Navigation} from 'react-native-navigation';
import React from 'react';

import Home from './screens/Home';
import Questions from './screens/Questions';
import Answer111 from './screens/Answer111';
import Answer100 from './screens/Answer100';
import Answer010 from './screens/Answer010';
import Answer001 from './screens/Answer001';
import Answer101 from './screens/Answer101';
import Answer110 from './screens/Answer110';
import Answer011 from './screens/Answer011';
import Answer000 from './screens/Answer000';
import Recommend from './screens/Recommend';


export function registerScreens() {
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Questions', () => Questions);
  Navigation.registerComponent('Answer111', () => Answer111);
  Navigation.registerComponent('Answer100', () => Answer100);
  Navigation.registerComponent('Answer010', () => Answer010);
  Navigation.registerComponent('Answer001', () => Answer001);
  Navigation.registerComponent('Answer101', () => Answer101);
  Navigation.registerComponent('Answer110', () => Answer110);
  Navigation.registerComponent('Answer011', () => Answer011);
  Navigation.registerComponent('Answer000', () => Answer000);
  Navigation.registerComponent('Recommend', () => Recommend);

}
