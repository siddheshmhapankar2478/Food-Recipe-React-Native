import { View, Text } from 'react-native'
import React from 'react'
import Animated, {FadeInDown} from 'react-native-reanimated'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Instructions = () => {
  return (
    <Animated.View entering={FadeInDown.delay(300).duration(700).springify().damping(12)} className="space-y-4">
    <Text style={{fontSize: hp(2.5)}} className="font-bold flex-1 text-neutral-700">
        Instructions
    </Text>
    <Text style={{fontSize: hp(1.6)}} className="text-neutral-700">
        {
            meal?.strInstructions
        }
    </Text>
</Animated.View>

  )
}

export default Instructions