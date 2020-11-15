import {Platform} from 'react-native';
exports.COLORS_HEX = {
  default: '#FFFFFF',
  primary: '#F69F27',
  primaryLight: '#F4B569',
  secondary: '#F48500',
  gray: '#9B9B9B',
  negative: '#ff4b4b',
  red: '#D00245',
  pageBack: '#F9E9D9',
  darkTxt: '#404040',
  purple: '#5A368D',
  lightPurple: '#8D508F',
  green: '#209E4A',
  lightGray: 'rgba(205,205,205,0.48)',
  placeholderBg: 'rgba(0,0,0,0.3)',
  shadow: 'rgba(0,0,0,0.5)',
  txtGray: '#7F8C8D',
  cream: '#F7F7F7',
  orange: '#ED9A20',
  lightBlue: '#56A4E1',
  darkGray: '#5B5A5A',
  darkOrange: '#EC5B36',
};

exports.FONT = {
  normal: 'MyriadPro-Cond',
  boldIt: 'MyriadPro-BoldIt',
  boldCond: 'MyriadPro-BoldCond',
  demiBold: 'MyriadPro-Bold',
};

exports.NAVIGATION_STYLE = {
  textColor: '#7F8C8D',
  selectedTextColor: '#106BB3',
  fontFamily: 'Avenir-Black',
  fontSize: 14,
  selectedFontSize: 14,
  iconColor: '#7F8C8D',
  selectedIconColor: '#106BB3',
  statusBarColor: '#106BB3',
  noBorder: true,
  transparent: true,
};

exports.SCREEN_WITH_BACK_BUTTON = {
  bottomTabs: {
    visible: false,
  },
  topBar: {
    visible: true,
    background: {color: '#F2F2F4'},
    noBorder: true,
    backButton: {
      color: '#106BB3',
    },
  },
};
exports.SCREEN_WITHOUT_BACK_BUTTON = {
  bottomTabs: {
    visible: false,
  },
  topBar: {
    visible: false,
  },
};
