let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//**********Operations*******

let value = 3
let negValue = -value
console.log(negValue);
console.log("1"+ 2) //12
console.log(1 + "2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); // 32

console.log((3+4)*5/3); // correct method to use


console.log(+true); // 1
//console.log(true+); // error

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); // 101

let gameCounter = 100;
++gameCounter;
console.log(gameCounter); //101

//********comparisons of datatypes*********
console.log(null > 0); //false
console.log(null == 0); // false
console.log(null >= 0); // true


console.log(undefined == 0); // false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

// === (strict check)