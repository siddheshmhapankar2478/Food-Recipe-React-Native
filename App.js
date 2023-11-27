import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Navigation from './navigation';
export default function App() {
  return (
    // <View className="flex-1 items-center justify-center bg-black">
    //   <Text className="text-red-400">Hello app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Navigation/>
  );
}
