import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

let ballFeature = ['red','black','green','purple','blue']

const Ball = () => {
  const [numBalls, setNumBalls] = useState(60)
  const [allBalls, setAllBalls] = useState([])

  useEffect(() => {
    for(var i=0; i<numBalls; i++){
      setAllBalls(function (prev):any {
          return [...prev,
          ballFeature[Math.floor(Math.random() * 5)]]
        })
    }
  }, [])
  return (
    <View style={[styles.containBalls]}>
        {allBalls.map((item, id) => (
          <View key={id} style={[styles.containBall, {backgroundColor: item}]} />
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  containBall: {
    width: 29,
    height: 29,
    borderRadius: 50,
  },

  containBalls: {
      width: '100%',
      height: 400,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
  },
})

export default Ball