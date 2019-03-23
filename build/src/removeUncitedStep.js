"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line: no-any
function removeUncitedStep(jsonBib, tex) {
    const arr = [];
    const returnObject = [];
    const matches = tex.match(/\\cite{([^\}]+)}/gm);
    matches
        ? matches.forEach((match) => {
            match = match.replace(/\\cite{/, "").replace(/}/, "");
            const splitMatch = match.split(",");
            splitMatch.forEach(split => {
                arr.push(split);
            });
        })
        : console.log("removeUncitedStep - null matches");
    const citedSet = new Set(arr);
    jsonBib.forEach((element) => {
        element["_graph"] = null;
        if (citedSet.has(element["id"])) {
            //console.log("in - ", element["id"]);
            returnObject.push(element);
        }
        else {
            //console.log("out - ", element["id"]);
        }
    });
    return returnObject;
}
exports.removeUncitedStep = removeUncitedStep;
//# sourceMappingURL=removeUncitedStep.js.map