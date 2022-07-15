import Matter from 'matter-js'

import BirdE from '../components/BallEntitie'

const Entitie = () => {
  let engine = Matter.Engine.create({enableSleeping: false})

  let world = engine.world

  world.gravity.y = 0.4

  return {
    physics: {engine, world},
    Ball: BirdE(world, 'red', {x: 50, y:250}, {height: 40, width: 40})
  }
}

export default Entitie