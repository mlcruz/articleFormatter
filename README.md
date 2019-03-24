# articleFormatter



CLI app to help formatting bibTex files. 

Funcionalities:

-Formats and indents file

-Normalizes non-standard characters

-Removes uncited citations from bib file

-Filters unwanted fields from citations (ex: notes and urls)

-Populates missing fields with a tag to make it explicit

-Abbreviates journal titles

-Usually works

Implementation:

  -simple pipeline running a list of transformations on a json file representing a bib file
  
  -funcionalities definied by steps, easily expandaded
  
  
  
  Uses [abbrevIso](https://github.com/marcinwrochna/abbrevIso) to abbreviate titles
  
