import {
  typeArticle,
  typeBook,
  typePhdthesis,
  typeConference
} from "./allowedTypes";
import { stringify } from "querystring";

// tslint:disable-next-line: no-any
export function filterCampsStep(jsonBib: any) {
  const returnObject: object[] = [];

  // tslint:disable-next-line: no-any
  const allowedTypes: any = {
    "article-journal": typeArticle,
    book: typeBook,
    thesis: typePhdthesis,
    "paper-conference": typeConference
  };
  const allowedTypesSet = new Set(Object.keys(allowedTypes));

  // tslint:disable-next-line: no-any
  jsonBib.forEach((element: any) => {
    if (allowedTypesSet.has(element["type"])) {
      allowedTypes[element["type"]].forEach((allowedType: string) => {
        // tslint:disable-next-line: no-any
        const newElement: any = new Object();
        element[allowedType]
          ? (newElement[allowedType] = element[allowedType])
          : (newElement[allowedType] = "N/A");
      });
    } else {
      console.log("FilterCampsStep -> Missing type", element["id"]);
      element["type"] = "e_" + element["type"];
    }

    returnObject.push(element);
  });
  return returnObject;
}
