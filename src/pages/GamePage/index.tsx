import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'

import styles from './styles'
import Ball from './../Components/Ball'

const imgCannon = require('./../../assets/cannon.jpg')

const Game = () => {

  return (
    <SafeAreaView style={[styles.containMain]}>
      <View style={[styles.containPage]}>
        <Ball /> 

        <View style={{backgroundColor: '#ddd', rotation: 2}}>
          <Image 
            source={imgCannon}
            style={[styles.containImgCannon]}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Game