"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allowedTypes_1 = require("./allowedTypes");
// tslint:disable-next-line: no-any
function filterCampsStep(jsonBib) {
    const returnObject = [];
    // tslint:disable-next-line: no-any
    // To add new allowed types, just edit the object below
    // tslint:disable-next-line: no-any
    const allowedTypes = {
        "article-journal": allowedTypes_1.typeArticle,
        book: allowedTypes_1.typeBook,
        thesis: allowedTypes_1.typePhdthesis,
        "paper-conference": allowedTypes_1.typeConference,
        chapter: allowedTypes_1.typeInbook,
        report: allowedTypes_1.typeReport
    };
    const allowedTypesSet = new Set(Object.keys(allowedTypes));
    // tslint:disable-next-line: no-any
    jsonBib.forEach((element) => {
        // tslint:disable-next-line: no-any
        let newElement = new Object();
        if (allowedTypesSet.has(element["type"])) {
            allowedTypes[element["type"]].forEach((allowedType) => {
                // tslint:disable-next-line: no-any
                element[allowedType]
                    ? (newElement[allowedType] = element[allowedType])
                    : (newElement[allowedType] = "N/A");
            });
        }
        else {
            console.log("FilterCampsStep -> Missing type", element["id"]);
            newElement = element;
            newElement["type"] = "e_" + element["type"];
        }
        returnObject.push(newElement);
    });
    return returnObject;
}
exports.filterCampsStep = filterCampsStep;
//# sourceMappingURL=filterCampsStep.js.map