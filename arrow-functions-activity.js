var fizzBuzz = () => {
    for(let i=1;i<101;i++){
        if(i%15===0){
            console.log("fizzBuzz!");
        }else if(i%5===0){
            console.log("buzz!");
        }else if (i%3===0){
            console.log("fizz!");
        }else{
            console.log(i);
        }
    }
};

fizzBuzz();

function createNewUser(name,attack){
    var name = name;
    var attack = attack;
    const newUserObj = {
        name:name,
        attack:attack,
        printStats:() =>{
            console.log(newUserObj.name + " has " + newUserObj.attack + " attack power!");
        },
        yell:() => {
            console.log("MY SECRET POWER IS PROGRAMMING AND CAFFEINE!");
        }
    }
    return newUserObj;
}

let bob = new createNewUser("bob",47);
console.log(bob);
bob.yell();
bob.printStats();


