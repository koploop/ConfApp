import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';

import { View, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import {
  Text,
  Button,
  Icon,
  Header,
  Image,
  Input,
  CheckBox
} from 'react-native-elements'

import { AppColors, SafeAreaStyle } from '../common/AppColors';
import { pTx, pTd } from '../common/AppSize';


const HomeView = () => {
  return (
    <SafeAreaView edges={['right', 'bottom', 'left']} style={AppColors.safeAreaStyle}>
      <StatusBar barStyle={'light-content'} />
      <HeaderView />

    </SafeAreaView>
  );
}

const HeaderView = () => {

  return (
    <View style={styles.headerView}>
      <ImageBackground source={require('../imgs/meeting_bg.png')} style={styles.bgImage}>
        <View style={styles.btnContainer}>
          <Icon></Icon>
          <Text>加入会议</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'contain',
    // justifyContent: 'center'
  },
  headerView: {
    width: Dimensions.get('window').width,
    height: pTx(218)
  },
  btnContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'red',
    marginHorizontal: 20,
    height: 134,
    position: 'absolute',
    bottom: 40,
  },
  iconStyle: {
    
  },
});

export default HomeView;