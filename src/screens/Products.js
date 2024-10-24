import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import ProductList from '../utils/ProductList.json';
import normalize from '../utils/normalize';
import {Colors, Fonts, Icons} from '../themes/Themes';

const Products = props => {
  console.log(ProductList);
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
          Available courses
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={{
            marginLeft: normalize(100),
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
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: Colors.grey_white,
        }}>
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle={'dark-content'}
        />
        <FlatList
          data={ProductList}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            width: '90%',
            alignSelf: 'center',
            paddingVertical: 20,
          }}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('ProductDetails', {
                    title: item.title,
                    description: item.description,
                    image: item.image,
                    price: item.price,
                  });
                }}
                style={{
                  height: normalize(180),
                  width: normalize(130),
                  backgroundColor: Colors.white,
                  marginTop: normalize(15),
                  marginHorizontal: normalize(7),
                  shadowColor: Colors.black,
                  elevation: normalize(9),
                  borderRadius: normalize(9),
                  alignItems: 'center',
                }}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    height: normalize(70),
                    width: normalize(70),
                    resizeMode: 'contain',
                    marginTop: normalize(20),
                  }}
                />
                <Text
                  style={{
                    fontFamily: Fonts.Mochiy_Regular,
                    fontSize: normalize(13),
                    color: Colors.black,
                    marginTop: normalize(10),
                    textAlign: 'center',
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Italic,
                    fontSize: normalize(12),
                    textAlign: 'center',
                    color: Colors.moonstone_blue,
                    marginTop: normalize(10),
                  }}>
                  Rs {item.price}/-
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Products;
