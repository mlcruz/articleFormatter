import {
  typeArticle,
  typeBook,
  typePhdthesis,
  typeConference,
  typeReport,
  typeInbook
} from "./allowedTypes";
import { stringify } from "querystring";

// tslint:disable-next-line: no-any
export function filterCampsStep(jsonBib: any) {
  const returnObject: object[] = [];
  // tslint:disable-next-line: no-any

  // To add new allowed types, just edit the object below
  // tslint:disable-next-line: no-any
  const allowedTypes: any = {
    "article-journal": typeArticle,
    book: typeBook,
    thesis: typePhdthesis,
    "paper-conference": typeConference,
    chapter: typeInbook,
    report: typeReport
  };
  const allowedTypesSet = new Set(Object.keys(allowedTypes));

  // tslint:disable-next-line: no-any
  jsonBib.forEach((element: any) => {
    // tslint:disable-next-line: no-any
    let newElement: any = new Object();
    if (allowedTypesSet.has(element["type"])) {
      allowedTypes[element["type"]].forEach((allowedType: string) => {
        // tslint:disable-next-line: no-any
        element[allowedType]
          ? (newElement[allowedType] = element[allowedType])
          : (newElement[allowedType] = "N/A");
      });
    } else {
      console.log("FilterCampsStep -> Missing type", element["id"]);
      newElement = element;
      newElement["type"] = "e_" + element["type"];
    }
    returnObject.push(newElement);
  });
  return returnObject;
}
