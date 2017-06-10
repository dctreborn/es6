const Programmer = (name, lang, skillLevel) =>{
    return {
        name,
        lang,
        skillLevel
    }
};

let mrDerp = Programmer("Derp","PHP",70);
let derpJr = Programmer("Junior","Ruby",35);
let leDerpThe2nd = Programmer("Herp Le Derpington","Haskel",58);

let programmerOffice = new Set();
programmerOffice.add(mrDerp);
programmerOffice.add(derpJr);
programmerOffice.add(leDerpThe2nd);
console.log(programmerOffice);

const projectManager = {
    name:"Le Bob Del Mareera the 11th",
    age:897,
    skills:["Centuries of tradition","Knowledge","Every martial art known to man"],
    weaknesses:["Sunlight","Human interaction"]
};

let {name, age} =  projectManager;
//feel free to use ES6 template literals and let/const in your refactor too!
console.log(`${name} will henceforth be managing this project. He has ${age} years of experience.`);
