import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { categoryData,mealData } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated,{ FadeInDown } from 'react-native-reanimated';
import { CachedImage } from '../helpers/image';


const Categories = ({categories,activeCategory,handleChangeCategory}) => {

    return (
        <Animated.View entering={FadeInDown.duration(500).springify()} >
    <ScrollView horizontal showsHorizontalScrollIndicator={false} 
    contentContainerStyle={{paddingHorizontal:15}}
    className="space-x-2">
        {
            categories.map((category)=>{
                let isActive = category.strCategory === activeCategory;
                let activeButtonClass=isActive?" bg-amber-400":" bg-black/10";
                return(
                    <TouchableOpacity key={category.idCategory} 
                    onPress={()=>handleChangeCategory(category.strCategory)}
                    className="flex items-center space-y-1">
                        <View className={"rounded-full p-2 bg-pink-400 "+activeButtonClass}>
                            <CachedImage uri={category.strCategoryThumb} style={{width:hp(6),height:hp(6)}} className="rounded-full"/>
                        </View>
                        <Text className="text-neutral-600" style={{fontSize:hp(1.6)}}>{category.strCategory}</Text>
                    </TouchableOpacity>
                );
            })        
        }
    </ScrollView>
    </Animated.View>
  )
}

export default Categories