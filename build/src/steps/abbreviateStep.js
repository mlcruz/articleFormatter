"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abbrevIso = require("../nodeBundle.js");
// tslint:disable-next-line: no-any
function abbreviateStep(jsonBib, ltwa, shortWords) {
    // tslint:disable-next-line: no-any
    const returnObject = [];
    const _abbrevIso = new abbrevIso.AbbrevIso(ltwa, shortWords);
    // tslint:disable-next-line: no-any
    jsonBib.forEach((element) => {
        switch (element["type"]) {
            case "article-journal":
                element["container-title"] != null
                    ? (element["container-title"] = _abbrevIso.makeAbbreviation(element["container-title"]))
                    : console.log("abbreviateStep -> null journal title on abbreviatable" +
                        element["id"]);
                break;
            default:
                break;
        }
        returnObject.push(element);
    });
    console.log(returnObject);
    return returnObject;
}
exports.abbreviateStep = abbreviateStep;
//# sourceMappingURL=abbreviateStep.js.map