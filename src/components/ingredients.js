import { View, Text } from 'react-native'
import React from 'react'
import Animated, {FadeInDown} from 'react-native-reanimated'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Ingredients = () => {
  return (
    <Animated.View entering={FadeInDown.delay(200).duration(700).springify().damping(12)} className="space-y-4">
            <Text style={{fontSize: hp(2.5)}} className="font-bold flex-1 text-neutral-700">
                Ingredients
            </Text>
            <View className="space-y-2 ml-3">
                {
                    ingredientsIndexes(meal).map(i=>{
                        return (
                            <View key={i} className="flex-row space-x-4">
                                <View style={{height: hp(1.5), width: hp(1.5)}}
                                    className="bg-amber-300 rounded-full" />
                                <View className="flex-row space-x-2">
                                        <Text style={{fontSize: hp(1.7)}} className="font-extrabold text-neutral-700">{meal['strMeasure'+i]}</Text>
                                        <Text style={{fontSize: hp(1.7)}} className="font-medium text-neutral-600">{meal['strIngredient'+i]}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </Animated.View>
        
  )
}

export default Ingredients