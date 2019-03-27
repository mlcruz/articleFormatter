"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line: no-any
function removeGraphStep(jsonBib) {
    const returnObject = [];
    // tslint:disable-next-line: no-any
    jsonBib.forEach((element) => {
        element["_graph"] = null;
        returnObject.push(element);
    });
    return returnObject;
}
exports.removeGraphStep = removeGraphStep;
//# sourceMappingURL=removeGraphStep.js.map