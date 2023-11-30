import { View, Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CachedImage } from '../helpers/image';
import Loading from './loading';
import Animated, { FadeInDown } from 'react-native-reanimated';

const RecipeDescription = ({item,meal,loading}) => {
  return (
    <>
    {/* Recipe Image */}
    <View className="flex flex-row justify-center ">
        <CachedImage 
            uri={item.strMealThumb}
            style={{width:hp(48),height:hp(40),borderRadius:53}}
        />
    </View>

    <View>
    {
        (loading)?(
            <Loading size="large" className="mt-16"/>
        ):(
            <Animated.View entering={FadeInDown.delay(0).duration(100).springify().damping(0)} className="flex justify-between my-8">
                <Text style={{fontSize:hp(3)}} className="font-bold flex-1 text-neutral-600">{meal.strMeal}</Text>
                <Text style={{fontSize:hp(2)}} className="pt-2 pl-2 font-medium flex-1 text-neutral-400">{meal.strArea}</Text>
            </Animated.View>
        )
    }
    </View>

    </>
  )
}

export default RecipeDescription