import fs = require("fs");
import cite = require("citation-js");
import { removeUncitedStep } from "./steps/removeUncitedStep";
import { abbreviateStep } from "./steps/abbreviateStep";
import { removeGraphStep } from "./steps/removeGraphStep";
import { filterCampsStep } from "./steps/filterCampsStep";
import { writingStep } from "./steps/writingStep";
import { templateUfrgsString, localeString } from "./steps/allowedTypes";
import { normalize } from "./steps/normalize";
import { normalizeStep } from "./steps/normalizeStep";

export function mainPipeline(
  bib?: string,
  tex?: string,
  ltwa?: string,
  shortWords?: string,
  newBib?: string,
  newTex?: string
): void {
  ltwa = ltwa || "tableData.csv";
  shortWords = shortWords || "shortwords.txt";
  const templateSRC = "templates/ufrgs.csl";
  const ptBRlocale = "locales/pt-br.xml";

  // Initializes abbreviation table data
  const _ltwa = fs.readFileSync(__dirname + `/${ltwa}`, "utf8");

  //Short words file data
  const _shortWords = fs.readFileSync(__dirname + `/${shortWords}`, "utf8");

  //Bibliography file
  let _bib = fs.readFileSync(__dirname + `/${bib}`, "utf8");

  //Tex file
  const _tex: string = fs.readFileSync(__dirname + `/${tex}`, "utf8");

  //Template UFRGS
  const templateUfrgs = fs.readFileSync(__dirname + `/${templateSRC}`, "utf8");

  const ptBRLocale = fs.readFileSync(__dirname + `/${ptBRlocale}`, "utf8");

  //Output bib file
  const _newBib = newBib
    ? __dirname + "/" + newBib
    : __dirname + "/outfile.bib";

  //Bibtex object initialization
  _bib = normalizeStep(_bib);
  const bibTexBib = new cite(_bib);

  //Main pipeline object, resulting from a json parsing on the bibTex object.
  //From now on, every single step in the pipeline has a (JsonBib, ...) => (JsonBib) signature, except for the writing step
  // tslint:disable-next-line: no-any
  let jsonBib: any = bibTexBib.format("data", {
    format: "object"
  });

  //Remove dependency graph
  jsonBib = removeGraphStep(jsonBib);

  //Remove uncited references from bib file
  jsonBib = removeUncitedStep(jsonBib, _tex);

  //Abreviates journal citations
  jsonBib = abbreviateStep(jsonBib, _ltwa, _shortWords);

  jsonBib = filterCampsStep(jsonBib);

  //console.log(jsonBib);
  writingStep(jsonBib, _newBib);
}
