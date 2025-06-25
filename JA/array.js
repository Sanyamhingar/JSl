// unshift is used to add element at the starting of the arrays
// shift is used to remove the value from 0th index of the array

// let myArr = [0,1,2,3,4,5]
// const newArray = myArr.join()

// console.log(myArr);
// console.log(newArray);//converts array into string

// splice, slice

// console.log("A", myArr);
// console.log(myArr.splice(1,3)) // changes the whole array

// console.log("B", myArr);

// console.log(myArr.slice(1,3))
// console.log("c", myArr);

const Marvel_heros = ["Thor", "Loki", "Dr"];
const DC_heros = ["Super", "Bat"];

// Marvel_heros.push(DC_heros);
// console.log(Marvel_heros); // it will create dc_heros as a sub array

//console.log(Marvel_heros[3][1]); //to call the sub array 


// console.log(Marvel_heros.push(DC_heros)); //this print new lenght of the array

// const newArray = Marvel_heros.concat(DC_heros)

// console.log(newArray);

// console.log(newArray[4]);

//const MynewArr = [...Marvel_heros, ...DC_heros] // This is called as spread operator, for example breaking glass and it gets spread 

// console.log(MynewArr);

//const another_array = [1,2,,3,[4,5,6],7,[8,[9]]]; // if we ever get a situatiion where we have multiple sub arrays than we use flat to get sub arrays into 1 single array we just have to pass number of argument we can alsu use infinity.

//const real_another_array = another_array.flat(1);

//console.log(real_another_array);

console.log(Array.isArray("Sanyam")); // it will check if the given value is array or not.
console.log(Array.from("Sanyam")); // It will convert the given value into the array

console.log(Array.from({name: "hitesh"})); // intresting array if you pass an object in array it will give you an empty array as it can nt recognise the array.


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); //The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments






