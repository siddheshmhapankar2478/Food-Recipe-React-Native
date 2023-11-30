//Ingredients
import { View, Text } from 'react-native'
import React from 'react'
import Animated, {FadeInDown} from 'react-native-reanimated'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Instructions from '../components/instructions';

const Ingredients = ({meal}) => {
    const ingredientsIndexes = (meal)=>{
        if(!meal) return [];
        let indexes = [];
        for(let i = 1; i<=20; i++){
          if(meal['strIngredient'+i]){
              indexes.push(i);
            }
          }
          return indexes;
        }
  return (
    <>
        {
      meal&&

    <Animated.View entering={FadeInDown.delay(800).duration(700).springify().damping(12)} className="space-y-4">
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
        <Instructions meal={meal}/>
    </Animated.View>
        }
    </>
        
  )
}

export default Ingredients