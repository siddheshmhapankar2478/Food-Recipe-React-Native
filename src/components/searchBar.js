import { View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

const SearchBar = ({getMealByName}) => {
  const [searchText,setSearchText]=useState("");
  useEffect(()=>{
    console.log("searchText=",searchText);
    // getMealByName(searchText);
  },[searchText]);
  return (
    <View className="mx-4 mb-4 flex-row items-center rounded-full bg-black/5 p-2">
      <TextInput placeholder='Search Recipe'
        placeholderTextColor={"gray"}
        value={searchText}
        onChangeText={newText => setSearchText(newText)}        
        style={{ fontSize: hp(1.7) }}
        className="flex-1 text-base mb-1 pl-3 tracking-wider"
      />
      <View className="bg-white rounded-full p-3">
        <MagnifyingGlassIcon size={hp(2.5)} color="gray" strokeWidth={3} />
      </View>
    </View>
  )
}

export default SearchBar