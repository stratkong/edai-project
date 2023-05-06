import { matrix, Matrix as MatrixType } from "mathjs";
import *as math from "mathjs"

export default class Matrix {

    matrix: MatrixType = matrix()

    constructor (...rows: Array<any>) { // [[1, 2, 3], [2, 3, 4]]
        rows.forEach((row, i) => {
            row.forEach((num: number, j: number) => {
                this.matrix.set([i, j], num)
            })
        })
    }

    static fromColumns (...cols: Array<any>) {
        let m = new Matrix()
        cols.forEach((col, i) => {
            col.forEach((num: number, j: number) => {
                m.matrix.set([j, i], num)
            })
        })
        return m;
    }

    addition (matrix: Matrix) {


        const addMatrix = math.add(matrix.matrix,this.matrix);
        let finalMatrix = new Matrix();
        finalMatrix.matrix = addMatrix;
        return finalMatrix;

    }

}