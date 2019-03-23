"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allowedTypes_1 = require("./allowedTypes");
// tslint:disable-next-line: no-any
function filterCampsStep(jsonBib) {
    const returnObject = [];
    // tslint:disable-next-line: no-any
    const allowedTypes = {
        "article-journal": allowedTypes_1.typeArticle,
        book: allowedTypes_1.typeBook,
        thesis: allowedTypes_1.typePhdthesis,
        "paper-conference": allowedTypes_1.typeConference
    };
    const allowedTypesSet = new Set(Object.keys(allowedTypes));
    // tslint:disable-next-line: no-any
    jsonBib.forEach((element) => {
        if (allowedTypesSet.has(element["type"])) {
            allowedTypes[element["type"]].forEach((allowedType) => {
                // tslint:disable-next-line: no-any
                const newElement = new Object();
                element[allowedType]
                    ? (newElement[allowedType] = element[allowedType])
                    : (newElement[allowedType] = "N/A");
            });
        }
        else {
            console.log("FilterCampsStep -> Missing type", element["id"]);
            element["type"] = "e_" + element["type"];
        }
        returnObject.push(element);
    });
    return returnObject;
}
exports.filterCampsStep = filterCampsStep;
//# sourceMappingURL=filterCampsStep.js.map