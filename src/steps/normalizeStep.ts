import { normalize } from "./normalize";

// Normalizes the raw input file before json-ing the object
export function normalizeStep(bib: string) {
  let returnObject = "";
  const bibSplit = bib.split("\n");
  bibSplit.forEach((element: string) => {
    returnObject = returnObject + normalize(element) + "\n";
  });

  return returnObject;
}
