import { View, Text } from 'react-native'
import React from 'react'
import { MotiImage, MotiText, MotiView } from 'moti'
import Icon from 'react-native-vector-icons/MaterialIcons'

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

        <View style={{flex: 1, width: '94%'}}>
            <MotiView
                style={{alignItems: 'flex-end'}}
                from={{right: 10}}
                animate={{right: 0}}
                transition={{type: 'timing', duration: 150, loop: true}}
            >
                <Icon 
                    name="notifications-active"
                    size={45}
                    color="#ff0000"
                />
            </MotiView>
        </View>

    </View>
  )
}

export default index