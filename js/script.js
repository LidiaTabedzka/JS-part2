var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";

var firstWord = text.split(' ', 1);

var newText = text.replace(firstWord, dinosaur.toUpperCase());
var finalText = newText.substr(0, newText.length / 2);

console.log(newText);
console.log(finalText);