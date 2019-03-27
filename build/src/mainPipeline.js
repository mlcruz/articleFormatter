"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const cite = require("citation-js");
const removeUncitedStep_1 = require("./steps/removeUncitedStep");
const abbreviateStep_1 = require("./steps/abbreviateStep");
const removeGraphStep_1 = require("./steps/removeGraphStep");
const filterCampsStep_1 = require("./steps/filterCampsStep");
const writingStep_1 = require("./steps/writingStep");
const normalizeStep_1 = require("./steps/normalizeStep");
function mainPipeline(bib, tex, ltwa, shortWords, newBib, newTex) {
    ltwa = ltwa || "tableData.csv";
    shortWords = shortWords || "shortwords.txt";
    // Initializes abbreviation table data
    const _ltwa = fs.readFileSync(__dirname + `/${ltwa}`, "utf8");
    //Short words file data
    const _shortWords = fs.readFileSync(__dirname + `/${shortWords}`, "utf8");
    //Bibliography file
    let _bib = fs.readFileSync(__dirname + `/${bib}`, "utf8");
    //Tex file
    const _tex = fs.readFileSync(__dirname + `/${tex}`, "utf8");
    //Output bib file
    const _newBib = newBib
        ? __dirname + "/" + newBib
        : __dirname + "/outfile.bib";
    //Bibtex object initialization
    _bib = normalizeStep_1.normalizeStep(_bib);
    const bibTexBib = new cite(_bib);
    //Main pipeline object, resulting from a json parsing on the bibTex object.
    //From now on, every single step in the pipeline has a (JsonBib, ...) => (JsonBib) signature, except for the writing step
    // tslint:disable-next-line: no-any
    let jsonBib = bibTexBib.format("data", {
        format: "object"
    });
    //Remove dependency graph
    jsonBib = removeGraphStep_1.removeGraphStep(jsonBib);
    //Remove uncited references from bib file
    jsonBib = removeUncitedStep_1.removeUncitedStep(jsonBib, _tex);
    //Abreviates journal citations
    jsonBib = abbreviateStep_1.abbreviateStep(jsonBib, _ltwa, _shortWords);
    jsonBib = filterCampsStep_1.filterCampsStep(jsonBib);
    //console.log(jsonBib);
    writingStep_1.writingStep(jsonBib, _newBib);
}
exports.mainPipeline = mainPipeline;
//# sourceMappingURL=mainPipeline.js.map