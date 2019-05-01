export function removeUncitedStep(jsonBib: any, tex: string) {
  const arr: string[] = [];
  const returnObject: object[] = [];
  const matches = tex.match(/\\cite{([^\}]+)}/gm);
  matches
    ? matches.forEach((match: string) => {
      match = match.replace(/\\cite{/, "").replace(/}/, "");
      const splitMatch = match.split(",");
      splitMatch.forEach(split => {
        arr.push(split);
      });
    })
    : console.log("removeUncitedStep - null matches");
  const citedSet = new Set(arr);
  jsonBib.forEach((element: any) => {
    element["_graph"] = null;
    if (citedSet.has(element["id"])) {
      //console.log("in - ", element["id"]);
      returnObject.push(element);
    } else {
      //console.log("out - ", element["id"]);
    }
  });
  return returnObject;
}
