import commander = require("commander");
import { mainPipeline } from "./mainPipeline";

//const newBib = new cite(bib);
// //Inits CLI
// // commander
// // .version("0.1.0")
// // .option("-b --bibinput [bibInput]", "Bibliography input file location")
// // .option("-o --bibinput [outFile]", "Output file name")
// // .parse(process.argv);
// tslint:disable-next-line: no-any

mainPipeline();
