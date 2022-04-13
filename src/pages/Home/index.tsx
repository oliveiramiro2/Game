import { View, Text } from 'react-native'
import React from 'react'
import { MotiImage, MotiText } from 'moti'

import styles from './styles'

const imgHome = require('../../assets/logoHome.webp')

const index: React.FC = () => {
  return (
    <View style={[styles.contain]}>
        <MotiImage 
            source={imgHome}
            style={{width: '100%', height: "30%"}}
            from={{opacity: 0, bottom: 200}}
            animate={{opacity: 1, bottom: 1}}
            transition={{type: 'spring'}}
        />

        <MotiText 
            style={[styles.textWelcome, styles.updock]}
            from={{scale: 0.1, right: 350, borderBottomWidth: 20}}
            animate={{scale: 1, right: 0, borderBottomWidth: 1 }}
            transition={{type: 'timing', duration: 1000}}
        >
            Bem vindo de volta aos games
        </MotiText>


    </View>
  )
}

export default index