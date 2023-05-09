import p5 from 'p5'
import AnimObject2D from '@/core/AnimObject2D'
import { NumberPlaneProps } from '@/interfaces/AnimObjects2D'
export default class NumberPlane extends AnimObject2D
{
    gridSize: number
    gridSpace: number

    constructor (options: NumberPlaneProps)
    {
        super(options.scene)
        this.gridSize = options.gridSize
        this.gridSpace = 50
    }

    draw (p: p5)
    {
        //horizontal
        for (let y = -this.gridSize;y <= this.gridSize; y = y + this.gridSize)
        {   
            p.stroke(this.colour.rgba)
            p.line(-this.gridSize*50, y*50, this.gridSize*50, y*50)

            //y labels

            p.stroke(this.colour.rgba)
            p.circle(-this.gridSpace*50, y*50, 5)
        }

        //vertical
        for(let x = -this.gridSize;x <= this.gridSize;x = x + this.gridSpace)
        {
            p.stroke(this.colour.rgba)
            p.line(x*50, -this.gridSize*50, x*50, this.gridSize*50)

            //x labels

            p.stroke(this.colour.rgba)
            p.circle(x*50, -this.gridSpace*50, 5)
        }

        //x and y axes
        p.stroke(this.colour.rgba)
        p.line(-this.gridSize*50, 0, this.gridSize*50, 0)
        p.line(0, -this.gridSize*50, 0, this.gridSize*50)
    }
}