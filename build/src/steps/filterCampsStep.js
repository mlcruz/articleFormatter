"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allowed types
const allowedTypes_1 = require("./allowedTypes");
// Filters unallowed filds from citations, depending on its type
function filterCampsStep(jsonBib) {
    const returnObject = [];
    // To add new allowed types, edit the allowedTypes file and then add it to the object below.
    const allowedTypes = {
        "article-journal": allowedTypes_1.typeArticle,
        book: allowedTypes_1.typeBook,
        thesis: allowedTypes_1.typePhdthesis,
        "paper-conference": allowedTypes_1.typeConference,
        chapter: allowedTypes_1.typeInbook,
        report: allowedTypes_1.typeReport
    };
    const allowedTypesSet = new Set(Object.keys(allowedTypes));
    jsonBib.forEach((element) => {
        let newElement = new Object();
        if (allowedTypesSet.has(element["type"])) {
            allowedTypes[element["type"]].forEach((allowedType) => {
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