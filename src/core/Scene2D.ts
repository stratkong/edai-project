/*
The Scene Class acts as the root of all other AnimObject2Ds.
An AnimObject2D is a special class (see AnimObject2D.ts) on which we add transitions
and functions to draw shapes.

The Scene itself cannot be animated, but every AnimObject2D can be animated.

P.S - A function declared inside a class is called a method
*/

import p5 from 'p5'
import AnimObject2D from './AnimObject2D'
import { createSketch } from '@helpers/sketch'
import Colour from '@/auxiliary/Colour'
import { v4 as uuid } from 'uuid'
import { TransitionQueueItem } from '@/interfaces/transitions'
import { frameRate } from '@/helpers/Constants'
import { wait } from '@/helpers/BasicFunctions'

export default class Scene2D {
  height: number
  width: number
  sketch: any
  objects: Array<AnimObject2D>
  backgroundColour: Colour
  canvasElement: HTMLElement | null = null
  stopLoop: any = null
  startLoop: any = null
  transitionQueue: Array<TransitionQueueItem> = []
  id: string = uuid()
  hidden: boolean = false
  fonts: {
    [fontName: string]: any
  } = {}

  constructor(
    width = 800,
    height = 800,
    backgroundColour = Colour.fromHex('#ccc')
  ) {
    this.width = width // default width of the Scene is 800
    this.height = height // default height of the Scene is 800
    this.objects = [] // the objects property will be an Array containing AnimObject2D instances
    this.backgroundColour = backgroundColour // default background Colour is gray
    /*
    Creates a p5js sketch by specifying setup and draw methods
    setup() runs once when scene is initialised
    draw() runs every frame
    */
    this.sketch = createSketch({
      setup: this.setup.bind(this),
      draw: this.draw.bind(this),
      preload: this.preload.bind(this),
    })

    new p5(this.sketch, document.body)
  }

  resetScene() {
    for (let object of this.objects) if (object.remove) object.remove()
    this.objects = []
    this.transitionQueue = []
  }

  updateSceneProps(obj: AnimObject2D) {
    if (obj.iterables.length != 0) {
      obj.scene = this
      obj.iterables.forEach((name: string) => {
        // @ts-ignore
        obj[name].forEach((o) => this.updateSceneProps(o))
      })
    } else {
      obj.scene = this
    }
  }

  enqueueTransition(transition: TransitionQueueItem) {
    this.transitionQueue.push(transition)
    // console.log('queued', [...this.transitionQueue])
  }

  dequeueTransition(transition: TransitionQueueItem) {
    // console.log(this.transitionQueue)
    this.transitionQueue = this.transitionQueue.filter(({ id }) => {
      return id != transition.id
    })
    // console.log('unqueued', [...this.transitionQueue])
  }

  // adds an AnimObject2D to be rendered onto the canvas
  add(obj: AnimObject2D): AnimObject2D {
    // updates the sceneHeight anf sceneWidth properties of the AnimObject2D
    // obj.updateSceneDimensions(this.width, this.height)
    this.updateSceneProps(obj)

    // adds the AnimObject2D to the array of objects to be rendered
    this.objects.push(obj)
    return obj
  }

  // sets up some initial values i.e. witdth, height, background Colour, etc.
  setup(p: p5) {
    p.frameRate(frameRate)
    let canvas = p.createCanvas(this.width, this.height, p.P2D)
    this.canvasElement = canvas.elt
    p.colorMode(p.RGB)
    this.stopLoop = () => p.noLoop()
    this.startLoop = () => p.loop()
  }

  /*
  draws each AnimObject2D onto the canvas
  the actual draw code is included inside the AnimObject2D.draw method
  Scene.draw just runs AnimObject2D.draw for every AnimObject2D in Scene.objects
  */
  draw(p: any) {
    console.log('thi srn')
    p.clear()
    p.background(this.backgroundColour.rgba)
    this.objects.forEach((obj) => obj.draw(p))
  }

  async hide() {
    if (this.stopLoop) this.stopLoop()
    this.hidden = true
    this.resetScene()
    while (!this.canvasElement) {
      await wait(100)
    }
    this.canvasElement.classList.add('hidden')
  }

  async show() {
    this.hidden = false
    while (!this.canvasElement) {
      await wait(100)
    }
    this.canvasElement.classList.remove('hidden')
    this.startLoop()
  }

  preload(p: any) {
    this.fonts.Math = p.loadFont('/mathfont.otf')
  }

  async wait(timeout?: number): Promise<void> {
    console.log(this.transitionQueue)
    return new Promise(async (resolve, reject) => {
      setTimeout(async () => {
        while (this.transitionQueue.length != 0) {
          await wait(100)
        }
        if (timeout) {
          setTimeout(() => resolve(), timeout)
        } else resolve()
      }, 500)
    })
  }

  /*
  opposite of Scene.add
  removes the given AnimObject2D from the canvas
  this is done by remove the AnimObject2D from Scene.objects
  */
  remove(obj: AnimObject2D) {
    this.objects = this.objects.filter((o) => o.id != obj.id)
  }
}
