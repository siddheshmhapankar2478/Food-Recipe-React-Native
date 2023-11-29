import { View, Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CachedImage } from '../helpers/image';
import Loading from './loading';

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
            <View className="px-4 flex justify-between space-y-4 pt-8">
                <Text style={{fontSize:hp(3)}} className="font-bold flex-1 text-neutral-600">{meal.strMeal}</Text>
                <Text style={{fontSize:hp(2)}} className="font-medium flex-1 text-neutral-400">{meal.strArea}</Text>
            </View>
        )
    }
    </View>

    </>
  )
}

export default RecipeDescription