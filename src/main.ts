import commander = require("commander");
import { mainPipeline } from "./mainPipeline";

const bib = "bib1/bib/biblio.bib";
const tex = "bib1/bib/art.tex";

mainPipeline(bib, tex);
