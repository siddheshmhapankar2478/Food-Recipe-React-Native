import { View, Text, TouchableOpacity } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated,{ FadeIn } from 'react-native-reanimated';

import React from 'react'

const BackAndFavouriteBtn = ({favourite,setFavourite,navigation}) => {
  return (
    <Animated.View entering={FadeIn.delay(200).duration(500)} className="w-full flex flex-row justify-between mt-10">
        <TouchableOpacity onPress={()=>navigation.goBack()} className="ml-5">
            <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="#fbbf24"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setFavourite(!favourite)} className="mr-5">
            <HeartIcon size={hp(3.5)} strokeWidth={4.5} color={(!favourite)?"gray":"red"}/>
        </TouchableOpacity>
    </Animated.View>
  )
}

export default BackAndFavouriteBtn