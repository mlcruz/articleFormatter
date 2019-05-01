"use strict";
//Removes citation graph info generated from JSON to bib transformation for performance
Object.defineProperty(exports, "__esModule", { value: true });
function removeGraphStep(jsonBib) {
    const returnObject = [];
    jsonBib.forEach((element) => {
        element["_graph"] = null;
        returnObject.push(element);
    });
    return returnObject;
}
exports.removeGraphStep = removeGraphStep;
//# sourceMappingURL=removeGraphStep.js.map