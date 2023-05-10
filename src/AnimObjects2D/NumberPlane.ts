import p5 from 'p5'
import Scene2D from '@/core/Scene2D'
import { Lines } from '@/enums/AnimObjects2D'
import Line from './Line'
import { Width , Height } from "@helpers/Dimensions";
import AnimObject2D from '@/core/AnimObject2D';
import Point from './Point';



export default class NumberPlane extends AnimObject2D {

    
    xAxis: Line
    yAxis: Line
    xPoints: Point[] = []
    yPoints: Point[] = []
    unit: number

    constructor ({unit, s}: { unit: number, s: Scene2D }) {
        super(s)
        this.unit = unit
        this.xAxis = new Line(Lines.doublePoint, { x1: Width.half, y1: 0, x2: Width.half, y2: Height.full }, s);
        this.yAxis = new Line(Lines.doublePoint, { x1: 0, y1: Height.half, x2: Width.full, y2: Height.half }, s);

        for (let i = 0; i < 5; i++) {
            this.xPoints.push(new Point(i * this.unit, 0, { scene: s }))
        }
    }

    draw (p: p5) {
        this.xAxis.draw(p)
        this.yAxis.draw(p)
        for (let pt of this.xPoints) {
            pt.draw(p)
        }

    }

}