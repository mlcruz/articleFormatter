import commander = require("commander");
import { mainPipeline } from "./mainPipeline";

const bib = "bib1/bib/referencias.bib";
const tex = "bib1/bib/template.tex";

mainPipeline(bib, tex);
