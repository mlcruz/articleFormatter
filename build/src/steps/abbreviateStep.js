"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abbrevIso = require("../nodeBundle.js");
// tslint:disable-next-line: no-any
function abbreviateStep(jsonBib, ltwa, shortWords) {
    // tslint:disable-next-line: no-any
    const _abbrevIso = new abbrevIso.AbbrevIso(ltwa, shortWords);
    // tslint:disable-next-line: no-any
    jsonBib.forEach((element) => {
        element["_graph"] = null;
        console.log("in - ", element["id"]);
        switch (element["type"]) {
            case "article-journal":
                element["container-title"] != null
                    ? (element["container-title"] = _abbrevIso.makeAbbreviation(element["container-title"]))
                    : console.log("abbreviateStep -> null journal title on abbreviatable");
                break;
            default:
                break;
        }
    });
}
exports.abbreviateStep = abbreviateStep;
//# sourceMappingURL=abbreviateStep.js.map