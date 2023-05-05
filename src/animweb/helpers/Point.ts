import p5 from 'p5'

export default class Point {
  colour: string;
  size: number;
  x: number;
  y: number;

  constructor(colour: string, size: number, x: number, y: number) {
    this.colour = colour;
    this.size = size;
    this.x = x;
    this.y = y;
  }

  draw(p: p5) {
    p.noStroke();
    p.fill(this.colour);
    p.ellipse(this.x, this.y, this.size, this.size);
  }
}

