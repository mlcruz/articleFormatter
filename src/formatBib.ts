import commander = require("commander");
import { mainPipeline } from "./mainPipeline";
const program = require("commander");

program
  .version("0.1.0")
  .option("-t, --tex [Tex Input File]", "tex file location")
  .option("-b, --bib [Bib Input File]", "bib file location")
  .option(
    "-l, --ltwa [Ltwa Input File]",
    "Ltwa file location  - Defaults to outfile.bib "
  )
  .option(
    "-o, --out [Ltwa Input File]",
    "output file location - Defaults to tableData.csv"
  )
  .option(
    "-s, --short [Short words Input File]",
    "Short words file location location - Defaults to shortwords.txt "
  )
  .parse(process.argv);

if (program.bib && program.tex) {
  mainPipeline(
    program.bib,
    program.tex,
    program.ltwa,
    program.short,
    program.out
  );
} else {
  console.log("No input file location");
}
