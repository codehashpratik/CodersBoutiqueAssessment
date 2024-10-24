import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import normalize from '../utils/normalize';
import {Colors, Fonts, Icons} from '../themes/Themes';

const Home = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.grey_white,
      }}>
      {/* <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} /> */}
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <Image
        source={Icons.splashCorner}
        style={{
          height: normalize(150),
          width: normalize(150),
          resizeMode: 'contain',
        }}
      />

      <Image
        source={Icons.splashBack}
        style={{
          height: normalize(200),
          width: normalize(200),
          resizeMode: 'contain',
          alignSelf: 'center',
          marginTop: normalize(40),
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: normalize(15),
            color: Colors.black,
            fontFamily: Fonts.Mochiy_Regular,
            alignSelf: 'center',
            textAlign: 'center',
            marginTop: normalize(20),
          }}>
          Welcome to
        </Text>
        <Text
          style={{
            fontSize: normalize(15),
            color: Colors.sea_Green,
            fontFamily: Fonts.Mochiy_Regular,
            alignSelf: 'center',
            textAlign: 'center',
            marginTop: normalize(20),
            marginLeft: normalize(4),
          }}>
          CodersBoutique !
        </Text>
      </View>
      <View
        style={{
          height: normalize(90),
          width: '60%',
          // backgroundColor: 'orange',
          alignSelf: 'center',
          marginTop: normalize(10),
        }}>
        <Text
          style={{
            fontFamily: Fonts.Poppins_Regular,
            color: Colors.black,
            textAlign: 'center',
          }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A animi
          assumenda, praesentium veritatis necessitatibus numquam.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Products');
        }}
        style={{
          height: normalize(43),
          width: '80%',
          backgroundColor: Colors.sea_Green,
          alignSelf: 'center',
          marginTop: normalize(40),
          borderRadius: normalize(9),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: Fonts.Poppins_SemiBold,
            fontSize: normalize(12),
            color: Colors.white,
          }}>
          View Courses
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
