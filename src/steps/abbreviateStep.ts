import abbrevIso = require("../nodeBundle.js");
// tslint:disable-next-line: no-any
export function abbreviateStep(jsonBib: any, ltwa: string, shortWords: string) {
  // tslint:disable-next-line: no-any

  const returnObject: object[] = [];
  const _abbrevIso = new abbrevIso.AbbrevIso(ltwa, shortWords);
  // tslint:disable-next-line: no-any
  jsonBib.forEach((element: any) => {
    switch (element["type"]) {
      case "article-journal":
        element["container-title"] != null
          ? (element["container-title"] = _abbrevIso.makeAbbreviation(
              element["container-title"]
            ))
          : console.log(
              "abbreviateStep -> null journal title on abbreviatable" +
                element["id"]
            );
        break;
      default:
        break;
    }
    returnObject.push(element);
  });
  console.log(returnObject);
  return returnObject;
}
