
export default class Matrix {
    rows: number;
    cols: number;
    data: number[][];
  
    constructor(rows: number, cols: number, data: number[][]) {
      this.rows = rows;
      this.cols = cols;
      this.data = data;
    }
  
    toArray(): number[] {
        const arr: number[] = [];
        for (let i = 0; i < this.rows; i++) {
          for (let j = 0; j < this.cols; j++) {
            arr.push(this.data[i][j]);
          }
        }
        return arr;
    }

    add(other: Matrix): Matrix {
        if (this.rows !== other.rows || this.cols !== other.cols) {
          throw new Error("Matrix dimensions must match");
        }
        const data: number[][] = [];
        for (let i = 0; i < this.rows; i++) {
          const row: number[] = [];
          for (let j = 0; j < this.cols; j++) {
            row.push(this.data[i][j] + other.data[i][j]);
          }
          data.push(row);
        }
        return new Matrix(this.rows, this.cols, data);
      }
}
