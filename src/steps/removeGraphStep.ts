//Removes citation graph info generated from JSON to bib transformation for performance

export function removeGraphStep(jsonBib: any) {
  const returnObject: object[] = [];
  jsonBib.forEach((element: any) => {
    element["_graph"] = null;
    returnObject.push(element);
  });
  return returnObject;
}
