import { View, Text } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const GreetingsAndPunchline = () => {
  return (
    <View className="mx-4 mb-5">
        <Text style={{ fontSize: hp(2.5) }} className="text-neutral-600 ">Hello Sid!</Text>
        <View className="">
            <Text style={{ fontSize: hp(3.8) }} className="font-semibold text-neutral-600">Make your own food</Text>
        </View>
        <Text style={{ fontSize: hp(3.8) }} className="font-semibold text-neutral-600">stay at <Text className="text-amber-400">home</Text></Text>
    </View>
  )
}

export default GreetingsAndPunchline