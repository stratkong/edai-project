import { matrix, Matrix as MatrixType } from "mathjs";
import *as math from "mathjs"

export default class Matrix {

    matrix: MatrixType = matrix()

    constructor (...rows: Array<any>) { // formation of matrix with help of row elements
        rows.forEach((row, i) => {
            row.forEach((num: number, j: number) => {
                this.matrix.set([i, j], num)
            })
        })
    }

    static fromColumns (...cols: Array<any>) { // formation of matrix with help of column elements
        let m = new Matrix()
        cols.forEach((col, i) => {
            col.forEach((num: number, j: number) => {
                m.matrix.set([j, i], num)
            })
        })
        return m;
    }

    add (matrix: Matrix) {
        //@ts-ignore
        const numRows1: number = math.size(matrix.matrix)[0];
        //@ts-ignore
        const numCols1: number = math.size(matrix.matrix)[1];
        //@ts-ignore
        const numRows2: number = math.size(this.matrix)[0];
        //@ts-ignore
        const numCols2: number = math.size(this.matrix)[1];

        if (numRows1 !== numRows2 || numCols1 !== numCols2) {
            throw new Error("Matrix dimensions must match");
        }
        
        const addMatrix = math.add(matrix.matrix,this.matrix);
        var finalMatrix = new Matrix();
        finalMatrix.matrix = addMatrix;
        return finalMatrix;

    }

    subtract (matrix: Matrix) {
        //@ts-ignore
        const numRows1: number = math.size(matrix.matrix)[0];
        //@ts-ignore
        const numCols1: number = math.size(matrix.matrix)[1];
        //@ts-ignore
        const numRows2: number = math.size(this.matrix)[0];
        //@ts-ignore
        const numCols2: number = math.size(this.matrix)[1];

        if (numRows1 !== numRows2 || numCols1 !== numCols2) {
            throw new Error("Matrix dimensions must match");
        }
        
        const subtMatrix = math.subtract(matrix.matrix,this.matrix);
        var finalMatrix = new Matrix();
        finalMatrix.matrix = subtMatrix;
        return finalMatrix;

    }


    
    multiply (matrix: Matrix) {
        //@ts-ignore
        const numRows1: number = math.size(matrix.matrix)[0];
        //@ts-ignore
        const numCols1: number = math.size(matrix.matrix)[1];
        //@ts-ignore
        const numRows2: number = math.size(this.matrix)[0];
        //@ts-ignore
        const numCols2: number = math.size(this.matrix)[1];

        if (numCols1 !== numRows1) {
            throw new Error("Matrix multiplication is not possible.");
        }
        
        const multMatrix = math.multiply(matrix.matrix,this.matrix);
        var finalMatrix = new Matrix();
        finalMatrix.matrix = multMatrix;
        return finalMatrix;

    }

    identity (matrix: Matrix) {
        //@ts-ignore
        const numRows: number = math.size(matrix.matrix)[0];
        //@ts-ignore
        const numCols: number = math.size(matrix.matrix)[1];

        const identityMatrix = math.identity( numRows , numCols );
        var finalMatrix = new Matrix();
        //@ts-ignore
        finalMatrix.matrix = identityMatrix;
        return finalMatrix; 
    }

}