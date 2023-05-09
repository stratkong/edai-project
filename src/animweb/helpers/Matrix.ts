import { javascript } from "@codemirror/lang-javascript";
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

    static fromRows (...rows: Array<any>) { // formation of matrix with help of row elements
        let finalMatrix = new Matrix()
        rows.forEach((row, i) => {
            row.forEach((num: number, j: number) => {
                finalMatrix.matrix.set([i, j], num)
            })
        })
        return finalMatrix;
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
        const numRows1: number = (math.size(matrix.matrix) as Array<number>)[0];
        const numCols1: number = (math.size(matrix.matrix) as Array<number>)[1];
        const numRows2: number = (math.size(this.matrix) as Array<number>)[0];
        const numCols2: number = (math.size(this.matrix) as Array<number>)[1];

        if (numRows1 !== numRows2 || numCols1 !== numCols2) {
            throw new Error("Matrix dimensions must match");
        }
        
        const addMatrix = math.add(matrix.matrix,this.matrix);
        var finalMatrix = new Matrix();
        finalMatrix.matrix = addMatrix;
        return finalMatrix;

    }

    subtract (matrix: Matrix) {
        const numRows1 = (math.size(matrix.matrix) as Array<number>)[0];
        const numCols1: number = (math.size(matrix.matrix)  as Array<number>)[1];
        const numRows2: number = (math.size(this.matrix)  as Array<number>)[0];
        const numCols2: number = (math.size(this.matrix)  as Array<number>)[1];

        if (numRows1 !== numRows2 || numCols1 !== numCols2) {
            throw new Error("Matrix dimensions must match");
        }
        
        const subtMatrix = math.subtract(matrix.matrix,this.matrix);
        var finalMatrix = new Matrix();
        finalMatrix.matrix = subtMatrix;
        return finalMatrix;

    }


    
    multiply (matrix: Matrix | number) {
        if (matrix instanceof Matrix) {

            const numCols1: number = (math.size(matrix.matrix) as Array<number>) [1];
            const numRows2: number = (math.size(this.matrix) as Array<number>)[0];
    
            if (numCols1 !== numRows2) {
                throw new Error("Matrix multiplication is not possible.");
            }
        }
        
        const multMatrix = matrix instanceof Matrix ? math.multiply(matrix.matrix,this.matrix) : math.multiply(matrix,this.matrix) 
        var finalMatrix = new Matrix();
        finalMatrix.matrix = multMatrix;
        return finalMatrix;

    }

    static identity (order: number) {
        const identityMatrix = math.identity( order , order ) as MatrixType ;
        var finalMatrix = new Matrix();
        finalMatrix.matrix = identityMatrix;
        return finalMatrix; 
    }
    

    get inverse () {
        if ( math.det(this.matrix) == 0){
            throw new Error("Inverse of this matrix is not defined");
            
        }
        const inverseMatrix = math.inv(this.matrix);
        let finalMatrix = new Matrix();
        finalMatrix.matrix = inverseMatrix
        return finalMatrix;

    }

    get adjoint (){
        const adjointMatrix = math.multiply( math.det(this.matrix) , math.inv(this.matrix)) ;
        let finalMatrix = new Matrix() ;
        finalMatrix.matrix = adjointMatrix ;
        return finalMatrix;
    }

    get transpose () {
        const transposeMatrix = math.transpose( this.matrix);
        let finalMatrix = new Matrix();
        finalMatrix.matrix = transposeMatrix;
        return finalMatrix;
    }

    static zeroes ( order: number) {
        const zeroMatrix = math.zeros( order , order ) as MatrixType;
        let finalMatrix = new Matrix();
        finalMatrix.matrix = zeroMatrix;
        return finalMatrix;
    }

    power ( power: number) {
        // @ts-ignore
        const powMatrix = math.pow(this.matrix  , power );
        let finalMatrix = new Matrix() ;
        // @ts-ignore
        finalMatrix.matrix = powMatrix;
        return finalMatrix;
    }
}