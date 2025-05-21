import chalk from "chalk"
import {numVocals, bigNum} from "./functions.js";
// console.log(chalk.grey("Hello World"));

// let frase;
// if (process.argv[2]) {
//     frase = process.argv[2]
// } else {
//     frase = "Hello Boolean"
// }

// Provo con il ternario

const frase = process.argv[2]? process.argv[2] : "Hello Boolean";

console.log(chalk.cyan(frase));
console.log(numVocals(process.argv[2]))
console.log(bigNum(process.argv[2]))

