// HomeScreen.js
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import AvtarAndBell from '../components/avtarAndBell';
import Categories from '../components/categories';
import axios from 'axios';
import { mealData } from '../constants';
import GreetingsAndPunchline from '../components/greetingsAndPunchline';
import SearchBar from '../components/searchBar';
import Recipes from '../components/recipes';

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getCategory();
    getRecipe();
  }, []);

  const getCategory = async () => {
    try {
      const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (err) {
      console.log(err);
    }
  }
  const getRecipe = async (category="Beef") => {
    try {
      const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      if (response && response.data) {
        setMeals(response.data.meals);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleChangeCategory=(category)=>{
    getRecipe(category);
    setActiveCategory(category);
    setMeals([]);
  }
  return (
    <View className="flex-1 bg-white p-2">
      <StatusBar style='dark' />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        data={[
          { key: 'avatarAndBell', component: <AvtarAndBell /> },
          { key: 'greetingsAndPunchline', component: <GreetingsAndPunchline /> },
          { key: 'searchBar', component: <SearchBar /> },
          { key: 'categories', component: <Categories categories={categories} activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} /> },
          { key: 'recipes', component: <Recipes categories={categories} meals={meals} /> }
        ]}
        renderItem={({ item }) => item.component}
      />
    </View>
  );
}

export default HomeScreen;
