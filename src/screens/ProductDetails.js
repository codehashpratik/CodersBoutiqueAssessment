import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import normalize from '../utils/normalize';
import {Colors, Fonts, Icons} from '../themes/Themes';
import LinearGradient from 'react-native-linear-gradient';

const ProductDetails = props => {
  const obj = props?.route?.params;
  console.log(obj);
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          height: normalize(85),
          width: '100%',
          backgroundColor: Colors.white,
          alignItems: 'center',
          flexDirection: 'row',
          shadowOffset: {width: 10, height: 10},
          shadowColor: 'black',
          shadowOpacity: 1,
          elevation: 9,
          zIndex: 999,
        }}>
        <Text
          style={{
            fontFamily: Fonts.Poppins_SemiBold,
            color: Colors.sea_Green,
            fontSize: normalize(17),
            marginTop: normalize(35),
            marginLeft: normalize(10),
          }}>
          Course Details
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={{
            marginLeft: normalize(130),
            marginTop: normalize(30),
          }}>
          <Image
            source={Icons.back}
            style={{
              height: normalize(23),
              width: normalize(23),
              resizeMode: 'contain',
              tintColor: Colors.half_baked,
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Colors.grey_white,
        }}>
        <View
          style={{
            height: normalize(130),
            width: normalize(130),
            marginLeft: normalize(24),
            borderColor: Colors.moonstone_blue,
            borderWidth: 1,
            marginTop: normalize(24),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: normalize(6),
          }}>
          <Image
            source={{
              uri: obj.image,
            }}
            style={{
              height: normalize(110),
              width: normalize(110),
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: Fonts.Mochiy_Regular,
            marginTop: normalize(10),
            marginLeft: normalize(30),
            fontSize: normalize(14),
            color: Colors.black,
          }}>
          {obj.title}
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Poppins_Italic,
            marginTop: normalize(5),
            marginLeft: normalize(35),
            fontSize: normalize(12),
            color: 'green',
          }}>
          Rs {obj.price}/-
        </Text>
        <View
          style={{
            height: 1,
            width: '85%',
            backgroundColor: 'grey',
            alignSelf: 'center',
            marginTop: normalize(20),
          }}
        />
        <View
          style={{
            height: normalize(200),
            width: '85%',

            borderColor: Colors.moonstone_blue,
            marginTop: normalize(20),
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Regular,

              fontSize: normalize(12),
              color: Colors.black,
            }}>
            {obj.description}
          </Text>
        </View>
        <View
          style={{
            height: normalize(140),
            width: normalize(140),

            position: 'absolute',
            right: normalize(15),
            top: normalize(25),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: normalize(35),
              width: normalize(100),
              backgroundColor: Colors.black,
              marginVertical: normalize(5),
              borderRadius: normalize(6),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                color: Colors.white,
                fontSize: normalize(11),
              }}>
              Add to Cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: normalize(35),
              width: normalize(100),
              borderWidth: 1,
              borderColor: Colors.black,
              marginVertical: normalize(5),
              borderRadius: normalize(6),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                color: Colors.black,
                fontSize: normalize(11),
              }}>
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
