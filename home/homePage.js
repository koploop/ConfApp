import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions, TouchableHighlight } from 'react-native'
import { View, StatusBar, StyleSheet, ImageBackground, useWindowDimensions } from 'react-native'
import {
  Text,
  Button,
  Icon,
  Header,
  Image,
  Input,
  CheckBox
} from 'react-native-elements'
import { TabView, SceneMap } from 'react-native-tab-view';

import { AppColors, SafeAreaStyle } from '../common/AppColors'
import { pTx, pTd } from '../common/AppSize';



const HomeView = () => {
  return (
    <SafeAreaView edges={['right', 'bottom', 'left']} style={AppColors.safeAreaStyle}>
      <StatusBar barStyle={'light-content'} />
      <HomeHeader />
      <ContentV />
    </SafeAreaView>
  );
}

const HomeHeader = () => {

  const btnList = [
    {
      img: require('../imgs/join_meet.png'),
      title: '加入会议'
    }, {
      img: require('../imgs/create_meet.png'),
      title: '发起会议'
    }, {
      img: require('../imgs/order_meet.png'),
      title: '预约会议'
    }
  ];
  return (
    <View style={styles.headerView}>
      <ImageBackground source={require('../imgs/meeting_bg.png')} style={styles.bgImage}>
        <View style={styles.btnContainer}>
          {
            btnList.map((item, index) => {
              return <View >
                <TouchableHighlight activeOpacity={0.6} underlayColor={"white"} onPress={() => alert('Pressed!')}>
                  <Image
                    source={item.img}
                    style={styles.btnImg}
                  />
                </TouchableHighlight>
                <Text style={styles.btnTitleStyle}>{item.title}</Text>
              </View>
            })
          }
        </View>
      </ImageBackground>
    </View>
  );
}


const ContentV = () => {
  const ConfPage = () => (
    <View style={{ backgroundColor: 'red' }}>
      <Text>'dddd'</Text>
    </View>
  );

  const LivePage = () => (
    <View style={{ backgroundColor: 'blue' }}>
      <Text>'dddd'</Text>
    </View>
  );

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'conf', title: '会议' },
    { key: 'live', title: '直播' },
  ]);

  const layout = useWindowDimensions();
  const renderScene = SceneMap({
    conf: ConfPage,
    live: LivePage,
  });

  return <View style={{flex:1}}>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width, height: 100 }}
      style={{ flex:1}}
    />
  </View>

}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'contain',
    // justifyContent: 'center'
  },
  headerView: {
    width: Dimensions.get('window').width,
    height: pTx(218),
    // backgroundColor: 'gray',
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    width: Dimensions.get('window').width - 40,
    height: 134,
    position: 'absolute',
    bottom: 0,
  },
  btnViewStyle: {
    flexDirection: 'column',
    backgroundColor: 'blue',
  },
  btnImg: {
    width: 56,
    height: 56,
    borderRadius: 4
  },
  btnTitleStyle: {
    marginTop: 8,
    fontSize: 14,
    color: '#212121'
  },
});

export default HomeView;