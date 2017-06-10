let personA = "Derp";
let personB = "Derpette";
let personC = "Derpingtion";
let personD = "Derpina";

console.log(`${personA} said to ${personB}, "We should learn Python!."`);
console.log(`However, ${personC} said "NO! WE NEED MOAR JAVASCRIPT!".`);

const teachPython = (first,second) =>{
    return `${first} is teaching ${second} how to Python all the things!`;
};

let resultText = teachPython(personD, personB);

console.log("Today " + resultText);

const nameSearch = (name,charToSearch) =>{
    return console.log(name.includes(charToSearch));
};

nameSearch(personA,"D");
nameSearch(personB,"i");
