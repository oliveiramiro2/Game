import { View, Text } from 'react-native'
import React from 'react'

import { MotiImage } from 'moti'

import styles from './styles'

const imgHome = require('../../../assets/logoHome.webp')

const index: React.FC = () => {
  return (
    <View style={[styles.contain]}>
        <MotiImage 
            source={imgHome}
            style={{width: '100%', height: "30%"}}
            from={{opacity: 0, bottom: 200}}
            animate={{opacity: 1, bottom: 0}}
            transition={{type: 'spring'}}
        />

        <Text>Jogo</Text>


    </View>
  )
}

export default index