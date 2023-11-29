import { View, Image } from 'react-native'
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import React from 'react'

const AvtarAndBell = () => {
  return (
        <View className="mx-4 flex-row justify-between mt-8 mb-5">
            <Image source={require("../../assets/images/avatar.png")} style={{ height: hp(5), width: hp(5.5) }} />
            <BellIcon size={hp(4)} color="gray" />
        </View>
    )
}

export default AvtarAndBell