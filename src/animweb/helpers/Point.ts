import p5 from 'p5'
import Colour from './Colour';

export default class Point 
{
  colour: Colour;
  size: number;
  x: number;
  y: number;

  constructor(colour: Colour = new Colour(0,0,0,1), size: number = 1, x: number, y: number) 
  {
    this.colour = colour;
    this.size = size;
    this.x = x;
    this.y = y;
  }

  draw(p: p5) 
  {
    p.noStroke()
    p.fill(this.colour.toString())
    p.ellipse(this.x, this.y, this.size, this.size)
  }
}

