var arrayOfTastyAlcohol = ["Tequila Sunrise","Gin and Tonic", "Old Fashioned", "Moscow Mule", "Cuba Libre"];

arrayOfTastyAlcohol.forEach(function(item){
    console.log(`${item} Is my drink of choice at the moment. It's how I manage to type code at 11:30pm on a saturday.`);
});

var arrayOfNotEntirelyEdible = [{name:"Burger",edible:true},{name:"Salad",edible:true},{name:"Raw Fish(sushi)",edible:true},{name:"Raw Beef(extra EXTRA rare steak)",edible:false},{name:"Macbook Pro",edible:false}];

let arrayOfTotallyEdible = arrayOfNotEntirelyEdible.filter((i)=>edible);
console.log(arrayOfTotallyEdible);

var arrayOfCollegeStudents = [{name:"Suzanne",age:21},{name:"Leanna",age:22},{name:"Aaron",age:20},{name:"Brett",age:22}];


function groupBouncer(students){
    let accessGranted = arrayOfCollegeStudents.every((stu)=>stu.age>=21);
    console.log(accessGranted);
};

groupBouncer(arrayOfCollegeStudents);

function individualBouncer(students){
    let arrayOfLegal = students.filter((stu)=>stu.age>20);
    console.log(arrayOfLegal);
};

individualBouncer(arrayOfCollegeStudents);
