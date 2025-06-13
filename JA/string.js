//String interpolation

name = "Sanyam";
age = 20;

//old ways 
//console.log(name + age);

//modern ways 
console.log(`hello my name is ${name} and my age is ${age}`); // we use "backtick" key below esc to use variables  

const gamename = new String('sanyammm') //also a way

console.log(gamename[0]);
console.log(gamename.__proto__); // from this we can use various string feature

//substring does not allows negative value 
//slice allow using negative value and start iteration from backwards

console.log(newString.trim()); // removes extra spaces from name or email which is not required


const url = "https://sanyam.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) //false