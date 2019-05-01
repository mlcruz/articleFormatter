"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const normalize_1 = require("./normalize");
// Normalizes the raw input file before json-ing the object
function normalizeStep(bib) {
    let returnObject = "";
    const bibSplit = bib.split("\n");
    bibSplit.forEach((element) => {
        returnObject = returnObject + normalize_1.normalize(element) + "\n";
    });
    return returnObject;
}
exports.normalizeStep = normalizeStep;
//# sourceMappingURL=normalizeStep.js.map