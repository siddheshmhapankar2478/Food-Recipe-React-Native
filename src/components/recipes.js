import { View, Text, Image, FlatList, Pressable } from 'react-native'
import React,{useState,useEffect} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated,{ FadeInDown } from 'react-native-reanimated';
import Loading from './loading';
import { CachedImage } from '../helpers/image';
// import { useNavigation } from '@react-navigation/native';

const Recipes = ({categories,meals,setMeals}) => {
  const renderItem = ({ item, index }) => (
    // <Animated.View style={{width:hp(20),height:hp(28)}} className="m-1" entering={FadeInDown.delay(index=100).duration(600).springify().damping(12)}>
    <View style={{width:hp(20),height:hp(28)}} className="m-1">
      <Pressable 
       key={index}
    style={{
      flex: 1,
      borderRadius: 12,
      overflow: 'hidden', // Ensure that the content doesn't overflow
      backgroundColor: 'white', // Set a background color to separate items
      elevation: 2, // Add elevation for a shadow effect
      height: hp(25), 
      width: hp(20),
    }}
      className="flex-1 flex-col border border-gray-400  m-2 rounded-xl shadow-lg p-1" >
        <View className="w-fit justify-center items-center">
            <CachedImage uri={item.strMealThumb}  style={{ height: hp(20), width: hp(18) }} className="rounded-xl rounded-b-none " />
        </View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize:hp(2)}} className="text-neutral-600 pl-2 py-1">
          {item.strMeal.length > 20 ? `${item.strMeal.slice(0, 20)}...` : item.strMeal}
        </Text>
      </Pressable>
    </View>
    // </Animated.View> 
  );

  return (
    <View className="items-center">
    {
      (categories.length===0||meals.length===0)?(<Loading size="large" className="mt-20"/>):(
      <>
      <Text className="font-bold text-neutral-600" style={{fontSize:hp(3)}}>Recipies</Text>
      <FlatList
        data={meals}
        renderItem={renderItem}
        keyExtractor={(item) => item.idMeal}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={{ paddingHorizontal: 8 }}
      />
      </>
      )
    }
    </View>
  );
};
export default Recipes