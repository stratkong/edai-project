import p5 from 'p5'
import Colour from './helpers/Colour'

export default class Line
{
    static doublePoint (p: p5, x1: number, y1: number, x2: number, y2: number, colour: Colour)
    {   
        p.stroke (colour.rgba)
        p.line(x1, y1, x2, y2)
    }

    static pointSlope (p: p5, x1: number, y1: number, slope: number, length: number, colour: Colour)
    {
        const x2 = x1 + length
        const y2 = slope * length + y1
        p.stroke (colour.rgba)
        p.line (x1, y1, x2, y2)
    }

    static normal (p: p5, a: number, b: number, c: number, length: number, colour: Colour)
    {
        p.stroke(colour.rgba);
        p.strokeWeight(1);
        p.push();
        p.translate(0, -c/b);
        p.rotate(p.atan2(b, a));
        p.line(0, 0, length, 0);
        p.pop();
    }
}