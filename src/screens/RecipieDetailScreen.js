import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import BackAndFavouriteBtn from '../components/backAndFavouriteBtn';
import RecipeDescription from '../components/recipeDescription';
import Ingredients from '../components/ingredients';
import Instructions from '../components/instructions';
const RecipieDetailScreen = (props) => {
    let item=props.route.params;
    const navigation = useNavigation();
    const[favourite,setFavourite]=useState();
    const[meal,setMeal]=useState(null);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        // console.log(item.idMeal);
        getMealData(item.idMeal);
    },[]);
  const getMealData = async (id ) => {
    try {
      const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      if (response && response.data) {
        setMeal(response.data.meals[0]);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <ScrollView className="flex-1" 
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{paddingBottom:30}}
    >
        <StatusBar />
        <BackAndFavouriteBtn navigation={navigation} favourite={favourite} setFavourite={setFavourite}/>
        <RecipeDescription item={item} meal={meal} loading={loading} />
        <Ingredients/>
        <Instructions/>
    </ScrollView>
  )
}

export default RecipieDetailScreen