import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { MotiImage, MotiText, MotiView } from 'moti'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconFA from 'react-native-vector-icons/FontAwesome5'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import MaskInput from 'react-native-mask-input';
import TextInputMask from 'react-native-text-input-mask';
//import { TextInputMask } from 'react-native-masked-text'
//import { translate, Translate } from 'react-native-translate';
//import * as translate from 'google-translate-api'
import translate from "translate";

import styles from './styles'

const imgHome = require('../../assets/logoHome.webp')

const index: React.FC = () => {
    const [phone, setPhone] = React.useState('37988037773');
    
    

    useEffect(() => {
        translate("Hello world", "pt")
        .then((res: any) => console.log(res))
    }, [])
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
                from={{right: 350, borderBottomWidth: 20}}
                animate={{right: 0, borderBottomWidth: 1 }}
                transition={{type: 'timing', duration: 900}}
            >
                Bem vindo de volta aos games
            </MotiText>

        <View style={{flex: 1, width: '100%', flexDirection: 'row', justifyContent: "space-between", marginTop: 6}}>
            <MotiView
                style={{marginLeft: 5}}
                from={{opacity: 0.1}}
                animate={{opacity: 1}}
                transition={{type: 'timing', duration: 800, loop: true}}
            >
                <Icon 
                    name="notifications-active"
                    size={25}
                    color="#ff0000"
                />
            </MotiView>
            <MotiView
                style={{alignItems: 'center', position: "relative"}}
                from={{bottom: 5}}
                animate={{bottom: 0}}
                transition={{loop: true}}
            >
                <Icon 
                    name="email"
                    size={25}
                    color="#ffffff"
                />
            </MotiView>
            <MotiView
                style={{alignItems: 'flex-end', marginRight: 5}}
                from={{height: 25}}
                animate={{height: 0}}
                transition={{loop: true, type: 'timing', duration: 1200}}
            >
                <IconFA 
                    name="user-circle"
                    size={25}
                    color="#eee"
                />
            </MotiView>

        </View>

        <Text>ok</Text>

        <View style={{backgroundColor: '#fff'}}>
            {/* <MaskInput 
                mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                value={phone}
                onChangeText={(text, rawText) => {
                    setPhone(text)
                }}
            /> */}
            {/* <TextInputMask
                mask={'[(99)] [99999]-[9999]'}
                value={phone}
                onChangeText={(text) => {
                    setPhone(text)
                }}
            /> */}
            {/* <TextInputMask
                type='cel-phone'
                options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) '
                }}
                value={phone}
                onChangeText={(text, rawText) => {
                    setPhone(text)
                }}
            /> */}
        </View>


        <Swipeable
            renderLeftActions={handlerTextHome}
            useNativeAnimations={true}
        >
            <View style={{borderWidth: 2, borderColor: '#fff', marginBottom: 50}}>
                <Text style={{color: '#fff'}}>me arraste </Text>
                <Text style={{color: '#fff'}}>me arraste </Text>
                <Text style={{color: '#fff'}}>me arraste </Text>
                <Text style={{color: '#fff'}}>me arraste </Text>
                <Text style={{color: '#fff'}}>me arraste </Text>
                <Text style={{color: '#fff'}}>me arraste </Text>
            </View>
        </Swipeable>

    </View>
  )
}

const handlerTextHome = () => (
    <View style={{flex: 1}}><Text>Qual a boa de hoje?</Text></View>
)

export default index