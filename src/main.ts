import { identity } from "mathjs";
import Matrix from "./animweb/helpers/Matrix";

let m1 = Matrix.fromRows([1, 0], [0, 1]).inverse
console.log(m1.power(2));