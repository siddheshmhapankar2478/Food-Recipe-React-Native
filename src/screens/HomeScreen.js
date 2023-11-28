import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {BellIcon,MagnifyingGlassIcon} from "react-native-heroicons/outline"
import Categories from '../components/categories';
import axios from 'axios';
import Recipes from '../components/recipes';
const HomeScreen = () => {
  const [activeCategory,setActiveCategory]=useState("Beef");
  const [categories,setCategories]=useState([]);
  useEffect(()=>{
    getCategory();
  },[]);
  const getCategory=async()=>{
    try{
      const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
      if(response&&response.data){
        console.log("got data"+response.data);
        setCategories(response.data.categories);
      }
    }
    catch(err){
      console.log(err); 
    }
  }
  return (
    <View className="flex-1 bg-white">
      <StatusBar style='dark'/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:50}}
        className="space-y-6 pt-14">

      {/* Avatar and bell icon */}
      <View className="mx-4 flex-row justify-between mb-2">
        <Image source={require("../../assets/images/avatar.png")} style={{height:hp(5),width:hp(5.5)}}/>
        <BellIcon size={hp(4)} color="gray" />
      </View>

      {/* Greetings and punchline */}
      <View className="mx-4 space-y-2 mb-2">
        <Text style={{fontSize:hp(1.7)}} className="text-neutral-600">Hello Sid!</Text>
        <View className="">
          <Text style={{fontSize:hp(3.8)}} className="font-semibold text-neutral-600">Make your own food</Text>
        </View>
          <Text style={{fontSize:hp(3.8)}} className="font-semibold text-neutral-600">stay at <Text className="text-amber-400">home</Text></Text>
      </View>

      {/* Search bar */}
      <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-2">
        <TextInput placeholder='Search Recipe' 
        placeholderTextColor={"gray"}
          style={{fontSize:hp(1.7)}}
          className="flex-1 text-base mb-1 pl-3 tracking-wider"
        />
        <View className="bg-white rounded-full p-3">
          <MagnifyingGlassIcon size={hp(2.5)} color="gray" strokeWidth={3}/>
        </View>
      </View>

      {/* Categories */}
      <View>
        {categories.length!=0&&<Categories categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>}
      </View>
      
      {/* Recipes */}
      <View>
        <Recipes/>
      </View>
      
      
      </ScrollView>

    </View>
  )
}

export default HomeScreen