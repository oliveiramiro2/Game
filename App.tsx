import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

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
      <StatusBar backgroundColor='black' style='light' />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 25,
  },
});
