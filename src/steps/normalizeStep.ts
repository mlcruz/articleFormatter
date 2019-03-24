// tslint:disable-next-line: no-any
export function nomalizeStep(jsonBib: any) {
  const returnObject: object[] = [];
  // tslint:disable-next-line: no-any
  jsonBib.forEach((element: any) => {
    element["_graph"] = null;
    returnObject.push(element);
  });
  return returnObject;
}
