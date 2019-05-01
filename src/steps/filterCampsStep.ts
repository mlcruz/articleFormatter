// Allowed types
import {
  typeArticle,
  typeBook,
  typePhdthesis,
  typeConference,
  typeReport,
  typeInbook
} from "./allowedTypes";

// Filters unallowed filds from citations, depending on its type

export function filterCampsStep(jsonBib: any) {
  const returnObject: object[] = [];

  // To add new allowed types, edit the allowedTypes file and then add it to the object below.
  const allowedTypes: any = {
    "article-journal": typeArticle,
    book: typeBook,
    thesis: typePhdthesis,
    "paper-conference": typeConference,
    chapter: typeInbook,
    report: typeReport
  };
  const allowedTypesSet = new Set(Object.keys(allowedTypes));

  jsonBib.forEach((element: any) => {
    let newElement: any = new Object();
    if (allowedTypesSet.has(element["type"])) {
      allowedTypes[element["type"]].forEach((allowedType: string) => {
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
