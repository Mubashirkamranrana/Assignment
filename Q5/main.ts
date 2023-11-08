//Stripping Names
//Store the person's name including whitespace characters at the beginning and end of the name. Use each character combination, `"\t"` (tab) and `"\n"` (new line), atleast once.
const nameWithWhitespace = "\t Robert Frost \n";
console.log(nameWithWhitespace);
const strippedName = nameWithWhitespace.trim();
console.log(strippedName);