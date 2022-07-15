import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//import GamePage from './src/pages/GamePage'
import Home from './src/pages/Home'

export default function App() {
  const [loaded] = useFonts({
    updock: require('./assets/Updock-Regular.ttf')
  })

  if(!loaded){
    return null
  }
  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={{flex: 1}}>
        <StatusBar hidden={true} />
        <Home />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
