//declaring an array
let number = ["one","two","three","four"];
console.log(number[0]);//output:"one"
number.push("five");//adds"five"to the end
console.log(number);//removes the last element
number.splice(1,1)
console.log(number)

let person = {
    firstName:"Sena",
    lastName:"Aykız",
    age:24,
    hobbies:["reading", "travelling"],
    adress:{
        street:"Sinanpaşa",
        city:"İstanbul",
        country:"Türkiye"
    }
};
//accessing properties
console.log(person.firstName); //output:"Sena"

//modifiyng an object
person.age=25;
person.hobbies.push("Cooking");

for(let i=0;i<5;i++) {
    console.log(i);
}

//Iterating through an array
for(let i=0; i<number.length; i++) {
    console.log(number[i]);
}

//Itearting through object properties
for (let key in person) {
    console.log(key + ":" + person[key]);
}
let x=10;
if(x>5) {
    console.log("grapes")
}
else{ 
    console.log("apple")
}

let temperature=23;
if (temperature>20) {
    console.log("It's a warm day!");
}
let hour = 18;
if(hour<12) {
    console.log("Good Morning!");
}
else{ console.log("Good Afternoon!");
}
let age =25;
if (age>=18) {
    if(age<21) {
        console.log("You are an adult but not yet allowed to drink.");
    }
    else{
        console.log("You are an adult and allowed to drink.");
    }
}
else{
    console.log("You are a minor!");
}
let movie = 200;
if(movie>=200) {
    console.log("Tebrikler, sinefilsin!!");
}
else{
    console.log("Sinefil değilsin, daha fazla film izle!!");
}
