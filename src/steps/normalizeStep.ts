import { normalize } from "./normalize";

// tslint:disable-next-line: no-any
export function normalizeStep(bib: string) {
  let returnObject = "";
  const bibSplit = bib.split("\n");
  // tslint:disable-next-line: no-any
  bibSplit.forEach((element: string) => {
    returnObject = returnObject + normalize(element) + "\n";
  });

  return returnObject;
}
