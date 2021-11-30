
import { StyleSheet, useColorScheme } from 'react-native';

export const AppColors = {
  // useColorScheme() === 'dark'
  global: {
    primary: '#006EE2',
    white: '#FFF',
    black: '#000',
    lighter: '#F3F3F3',
    darker: '#222',
  },
  safeAreaStyle: {
    backgroundColor: global.white,
    flex: 1,
  },
}