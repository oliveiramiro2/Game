import React from 'react'
import Matter from 'matter-js'
import { View } from 'react-native'

const BallE = (props: any) => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody / 2
    const yBody = props.body.position.y - heightBody / 2

    const color = props.color

    return(
        <View
            style={{
                borderWidth: 2,
                borderColor: color,
                position: 'absolute',
                left: xBody,
                top: yBody,
                width: widthBody,
                height: heightBody
            }}
        />
    )
}

export default (world: any, color: any, pos: any, size: any) => {
  const initialBall = Matter.Bodies.rectangle(
      pos.x,
      pos.y,
      size.width,
      size.height,
      {label: 'Ball'}
  )
  Matter.World.add(world, initialBall)

  return{
      body: initialBall,
      color,
      pos,
      renderer: <BallE />
  }
}

