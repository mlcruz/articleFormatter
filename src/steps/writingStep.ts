import fs = require("fs");
import cite = require("citation-js");
import { templateUfrgsString, localeString } from "./allowedTypes";
// tslint:disable-next-line: no-any
export function writingStep(jsonBib: any, newBib: string) {
  //Pipeline writing step
  const outJson = new cite(jsonBib);
  const outFile = outJson.format("bibtex", { template: "apa" });
  fs.writeFile(newBib, outFile, err => {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}
