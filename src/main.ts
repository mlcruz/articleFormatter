import commander = require("commander");
import { mainPipeline } from "./mainPipeline";

const bib = "bib1/bib/library.bib";
const tex = "bib1/bib/main.tex";

mainPipeline(bib, tex);
