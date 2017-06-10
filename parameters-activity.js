const concatArgs = (...params) => {
    console.log(...params);
};

concatArgs("Hello", "darkness", "my", "old", "friend.");

const deliciousPizza = (meat = "Pepperroni",cheese="Mozarella",crust="Thin")=>{
    let = {meat, cheese, crust};
    const aWildPizza = {
        meat,
        cheese,
        crust
    };
    return aWildPizza;
};

//Please, for the love of everything holy and sacred, re-factor this awful block of code to accept ES6 function syntax, template strings, and object destructuring.
let lunchOrder = deliciousPizza("Ham and Bacon", "Cheddar");
console.log(`I'm having a ${lunchOrder.meat} pizza with ${lunchOrder.cheese} Cheese and a ${lunchOrder.crust} crust for lunch!`); 

const iCanHazArrays = (arr2, dee2) => {
    let finalArray = [...arr2, ...  dee2]
    return finalArray;
};

let muchConcat = iCanHazArrays(["R",2],["D",2]);
console.log(muchConcat);

