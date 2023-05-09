import Colour from '@/auxiliary/Colour'
import Scene2D from '@/core/Scene2D'

export interface AnimObjectProps {
  scene: Scene2D
  colour?: Colour
}

export interface PointProps extends AnimObjectProps {
  size?: number
}
