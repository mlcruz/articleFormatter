"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abbrevIso = require("../nodeBundle.js");
// Abbreviates journal titles. 
function abbreviateStep(jsonBib, ltwa, shortWords) {
    const returnObject = [];
    const _abbrevIso = new abbrevIso.AbbrevIso(ltwa, shortWords);
    jsonBib.forEach((element) => {
        // Abbreviates only journal citations.
        switch (element["type"]) {
            case "article-journal":
                element["container-title"] != null
                    ? (element["container-title"] = _abbrevIso.makeAbbreviation(element["container-title"]))
                    : console.log("abbreviateStep -> null journal title on abbreviatable " +
                        element["id"]);
                break;
            default:
                break;
        }
        returnObject.push(element);
    });
    return returnObject;
}
exports.abbreviateStep = abbreviateStep;
//# sourceMappingURL=abbreviateStep.js.map