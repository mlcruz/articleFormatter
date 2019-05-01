import abbrevIso = require("../nodeBundle.js");


// Abbreviates journal titles. 
export function abbreviateStep(jsonBib: any, ltwa: string, shortWords: string) {

  const returnObject: object[] = [];
  const _abbrevIso = new abbrevIso.AbbrevIso(ltwa, shortWords);
  jsonBib.forEach((element: any) => {
    // Abbreviates only journal citations.
    switch (element["type"]) {
      case "article-journal":
        element["container-title"] != null
          ? (element["container-title"] = _abbrevIso.makeAbbreviation(
            element["container-title"]
          ))
          : console.log(
            "abbreviateStep -> null journal title on abbreviatable " +
            element["id"]
          );
        break;
      default:
        break;
    }
    returnObject.push(element);
  });
  return returnObject;
}
