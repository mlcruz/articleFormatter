import fs = require("fs");
import cite = require("citation-js");
import { removeUncitedStep } from "./steps/removeUncitedStep";
import { abbreviateStep } from "./steps/abbreviateStep";
import { removeGraphStep } from "./steps/removeGraphStep";
import { filterCampsStep } from "./steps/filterCampsStep";
import { writingStep } from "./steps/writingStep";
import { templateUfrgsString, localeString } from "./steps/allowedTypes";

export function mainPipeline(
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
  const templateSRC = "templates/ufrgs.csl";
  const ptBRlocale = "locales/pt-br.xml";

  // Initializes abbreviation table data
  const _ltwa = fs.readFileSync(__dirname + `/${ltwa}`, "utf8");

  //Short words file data
  const _shortWords = fs.readFileSync(__dirname + `/${shortWords}`, "utf8");

  //Bibliography file
  const _bib = fs.readFileSync(__dirname + `/${bib}`, "utf8");

  //Tex file
  const _tex: string = fs.readFileSync(__dirname + `/${tex}`, "utf8");

  //Template UFRGS
  const templateUfrgs = fs.readFileSync(__dirname + `/${templateSRC}`, "utf8");

  const ptBRLocale = fs.readFileSync(__dirname + `/${ptBRlocale}`, "utf8");

  //Output bib file
  const _newBib = "outbib.bib";

  //Bibtex object initialization
  const bibTexBib = new cite(_bib);

  //Template initializations

  //Main pipeline object, resulting from a json parsing on the bibTex object.
  //Form Now on, every single step in the pipeline has a (JsonBib, ...) => (JsonBib) signature, except for the writing step
  // tslint:disable-next-line: no-any
  let jsonBib: any = bibTexBib.format("data", {
    format: "object",
    template: templateUfrgsString,
    lang: localeString
  });

  //Remove dependency graph
  jsonBib = removeGraphStep(jsonBib);

  //Remove uncited references from bib file
  jsonBib = removeUncitedStep(jsonBib, _tex);

  //Abreviates journal citations
  jsonBib = abbreviateStep(jsonBib, _ltwa, _shortWords);

  //filterCampsStep(jsonBib);

  writingStep(jsonBib, _newBib);
}
