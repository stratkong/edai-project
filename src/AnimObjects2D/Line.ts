import p5 from 'p5'
import Colour from '@auxiliary/Colour'
import { Lines } from '@/enums/AnimObjects2D'
import AnimObject2D from '@/core/AnimObject2D'
import Scene2D from '@/core/Scene2D'

export default class Line extends AnimObject2D {

  form: Lines
  info: any

  constructor (form: Lines, info: any, scene: Scene2D) {
    super(scene)
    this.form = form
    this.info = info
  }

  static doublePoint(
    p: p5,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    colour: Colour,
    scene: Scene2D
  ) {
    return new Line(Lines.slopePoint, {
      x1, y1, x2, y2, 
    }, scene)
    p.stroke(colour.rgba)
    // p.line(x1, y1, x2, y2)
  }

  // static pointSlope(
  //   p: p5,
  //   x1: number,
  //   y1: number,
  //   slope: number,
  //   length: number,
  //   colour: Colour
  // ) {
  //   this.form = Lines.slopePoint

  //   const x2 = x1 + length
  //   const y2 = slope * length + y1
  //   p.stroke(colour.rgba)
  //   p.line(x1, y1, x2, y2)
  // }

  // static normal(
  //   p: p5,
  //   a: number,
  //   b: number,
  //   c: number,
  //   length: number,
  //   colour: Colour
  // ) {
  //   this.form = Lines.normal

  //   p.stroke(colour.rgba)
  //   p.strokeWeight(1)
  //   p.push()
  //   p.translate(0, -c / b)
  //   p.rotate(p.atan2(b, a))
  //   p.line(0, 0, length, 0)
  //   p.pop()
  // }

  draw (p: p5) {
    if (this.form == Lines.doublePoint) {
      p.stroke(this.colour.rgba)
      p.line(this.info.x1, this.info.y1, this.info.x2, this.info.y2)
    }
  }
}
