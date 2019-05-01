# articleFormatter

## CLI app to help formatting bibTex files. 

### Funcionalities:

* Formats and indents file

* Normalizes non-standard characters

* Removes uncited citations from bib file

* Filters unwanted fields from citations (ex: notes and urls)

* Populates missing fields with a tag to make it explicit

* Abbreviates journal titles

* Removes comments

* Deals with common formatation errors


## Instalation and usage
 
### Simple Instalation Guide:
  
  If you are using windows, [chocolatey](https://chocolatey.org/install) is needed for this tutorial.
  
  #### Prerequisites
  
  You can use either yarn or npm to manage your packages. For this tutorial, we are going to use yarn.
  
  This project used Visual Studio Code + extensions (Tslint, prettier) for its development, and has some style rules already    defined. I just opened the project folder with vscode and implemented stuff, so i don't know if the folder structure is going to make it annoying if you are using something else.
  
  ##### Windows:
  
   open the command prompy as admin and follow the steps:
 
  1. install nodejs
  * with chocolatey: `choco install nodejs`
  
  2. install npm or yarn
  * with chocolatey: `choco install yarn`
  
  3. typescript compiler (if you want to compile the project)
   `yarn global add typescript`
  
  
  ##### Unix (Debian/Ubuntu):
  
   1. install nodejs :
   
    curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
    sudo apt-get install -y nodejs
    
   2.  install npm or yarn:
   
     curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
     echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
     sudo apt update
     sudo apt install yarn
     
   3. typescript compiler (if you want to compile the project)
   `  yarn global add typescript`

#### Instalation
  
  
  1. git clone or download the repository
  2. Initialize and download packages for the project by running `yarn` in the root directory
  
#### Usage:
  
This program assumes that the bibliography is valid bibTeX file and has no syntax errors. 

Most errors are related to some bibTex error (ex: not ending a block with a }, or missing a comma somewhere ). Reading the error msg and using something like notepad++ to go to the error char offset should be able to fix most issues with badly formated input files
  
  Source files can be fount at /src
  Built files can be found /build/src. 
  
  Important files (can be found in root for src/build files):
  1.  tableData.csv (LTWA abreviations data)
  2.  shortwords.txt 
  
  
  Running the formatter (assuming you are at the /build/src folder containing the js files): `node formatBib -t [tex file location] -b [bib file location] `. 
  
   Options:
   *   set tex input file location (required) - `-t [input file location]` 
   *  set bib input file location (required) - `-b [input file location]` 
   *   set output file location (optional, default is outbib.bib) `-o [output file location]`
   *   set LTWA table data location (optional, current folder) `-l [input file location]`
   *   set shortwords data location (optional, current folder) `-l [input file location]`
   *   help: `--help`
    
 You can also install ts-node to run the source typescript files at /src

### Compiling
  run `tsc` at root. 
 
### FAQ:

Some commom errors:

1. Error : `Unexpected token at index $Offset$` => Something is badly formated. Use notepad++ or something similar and goto to the reported character offset and fix the error

2. Error: `Syntax Error: Unexpected token at index $Offset$ : Expected $Token$, got % ` => A comment is messing things up somewhere. Probably fixed by now

3. Error : `SyntaxError: Unexpected token at index 0: Expected "@", got "%"` => First line in the file is a comment.

### Implementation:

  * simple pipeline running a list of transformations on a json file representing a bib file
  
  * funcionalities definied by steps, easily expanded
  
  * filters definied @ steps/allowedTypes and steps/filterCamptsStep
  
  * normalization rules @ steps/normalize
  
  * very loosely/badly typed
  
  * Uses [abbrevIso](https://github.com/marcinwrochna/abbrevIso) to abbreviate titles
  
  * Uses [Citation.js](https://citation.js.org/) to convert bibTex to JSON


  
  
  
