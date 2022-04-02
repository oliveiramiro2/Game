import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import styles from './styles'
import Ball from './../Components/Ball'

const Game = () => {

  return (
    <SafeAreaView style={[styles.containMain]}>
      <View style={[]}>
        <Ball /> 
      </View>
    </SafeAreaView>
  )
}

export default Game