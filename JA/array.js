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

const newArray = Marvel_heros.concat(DC_heros)

// console.log(newArray);

// console.log(newArray[4]);

