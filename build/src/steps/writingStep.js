"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const cite = require("citation-js");
// tslint:disable-next-line: no-any
function writingStep(jsonBib, newBib) {
    //Pipeline writing step
    const outJson = new cite(jsonBib);
    const outFile = outJson.format("bibtex", { template: "apa" });
    fs.writeFile(newBib, outFile, err => {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}
exports.writingStep = writingStep;
//# sourceMappingURL=writingStep.js.map