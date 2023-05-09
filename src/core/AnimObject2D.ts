import Colour from '@/auxiliary/Colour'
import p5 from 'p5'
import Scene2D from './Scene2D'
import { v4 as uuid } from 'uuid'

export default class AnimObject2D {
  remove?: Function
  iterables: Array<string> = []
  scene: Scene2D
  colour: Colour = Colour.fromHex('#000')
  id: string = uuid()

  constructor(scene: Scene2D) {
    this.scene = scene
  }

  draw(p: p5) {}
}
