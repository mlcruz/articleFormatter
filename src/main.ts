import fs = require("fs");
import commander = require("commander");
import cite = require("citation-js");
import { removeUncitedStep } from "./steps/removeUncitedStep";
import { abbreviateStep } from "./steps/abbreviateStep";
import { removeGraphStep } from "./steps/removeGraphStep";

//const newBib = new cite(bib);

// //Inits CLI
// // commander
// // .version("0.1.0")
// // .option("-b --bibinput [bibInput]", "Bibliography input file location")
// // .option("-o --bibinput [outFile]", "Output file name")
// // .parse(process.argv);

// tslint:disable-next-line: no-any

mainPipeline();

function mainPipeline(
  tex?: string,
  bib?: string,
  shortWords?: string,
  ltwa?: string,
  newTex?: string,
  newBib?: string
): void {
  ltwa = "tableData.csv";
  shortWords = "shortwords.txt";
  bib = "bib1/refs.bib";
  tex = "bib1/main.tex";

  // Initializes abbreviation table data
  const _ltwa = fs.readFileSync(__dirname + `/${ltwa}`, "utf8");

  //Short words file data
  const _shortWords = fs.readFileSync(__dirname + `/${shortWords}`, "utf8");

  //Bibliography file
  const _bib = fs.readFileSync(__dirname + `/${bib}`, "utf8");

  //Tex file
  const _tex: string = fs.readFileSync(__dirname + `/${tex}`, "utf8");

  //Output bib file
  const _newBib = "outbib.bib";

  //Bibtex object initialization
  const bibTexBib = new cite(_bib);

  //Main pipeline object, resulting from a json parsing on the bibTex object.
  //Form Now on, every single step in the pipeline has a (JsonBib, ...) => (JsonBib) signature
  // tslint:disable-next-line: no-any
  let jsonBib: any = bibTexBib.format("data", { format: "object" });

  //Remove dependency graph
  jsonBib = removeGraphStep(jsonBib);

  //Remove uncited references from bib file
  jsonBib = removeUncitedStep(jsonBib, _tex);

  //Abreviates journal citations
  jsonBib = abbreviateStep(jsonBib, _ltwa, _shortWords);

  //Pipeline writing step

  const outJson = new cite(jsonBib);
  const outFile = outJson.format("bibtex", {});

  fs.writeFile(__dirname + `/${_newBib}`, outFile, err => {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}
