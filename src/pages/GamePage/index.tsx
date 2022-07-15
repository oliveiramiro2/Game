import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { GameEngine } from 'react-native-game-engine'

import styles from './styles'
import Ball from './../Components/Ball'
import Entitie from '../../entities'

const Game = () => {

  return (
    <SafeAreaView style={[styles.containMain]}>
      <GameEngine
        style={[styles.gameEngine]}
        entities={Entitie()}
      >
        <View style={[styles.containPage]}>
          <Ball /> 

          <View style={{backgroundColor: '#ddd', rotation: 2}}>
            <Image 
              source={require('./../../assets/cannon.jpg')}
              style={[styles.containImgCannon]}
            />
          </View>
        </View>
      </GameEngine>
    </SafeAreaView>
  )
}

export default Game