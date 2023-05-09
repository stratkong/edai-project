import Point from './AnimObjects2D/Point'
import Scene2D from './core/Scene2D'
import { Width, Height } from './helpers/Dimensions'

const scene = new Scene2D(Width.full, Height.full)

const point = new Point(100, 100, { scene })
scene.add(point)
