"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const normalize_1 = require("./normalize");
// tslint:disable-next-line: no-any
function normalizeStep(bib) {
    let returnObject = "";
    const bibSplit = bib.split("\n");
    // tslint:disable-next-line: no-any
    bibSplit.forEach((element) => {
        returnObject = returnObject + normalize_1.normalize(element) + "\n";
    });
    return returnObject;
}
exports.normalizeStep = normalizeStep;
//# sourceMappingURL=normalizeStep.js.map