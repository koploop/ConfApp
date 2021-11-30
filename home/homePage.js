import React, { useEffect, useState } from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import { View } from 'react-native';
import {
  Button,
  Icon,
  Header,
  Image,
  Input,
  CheckBox
} from 'react-native-elements'

import { AppColors, } from '../common/AppColors';


const HomeView = () => {
  return (
    <View></View>
  );
}

const HeaderView = () => {
  return (
    <SafeAreaView style={AppColors.safeAreaStyle}></SafeAreaView>
  );
}