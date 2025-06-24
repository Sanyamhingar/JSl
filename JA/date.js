//date is an object in  JS

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2025, 0, 19) // in this format month starts from 0
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2025, 0, 19, 5, 9)
// console.log(myCreatedDate.toString());

// let myCreatedDate = new Date("19-06-2025") // in this format month starts from 01
// console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime);
// console.log(Math.floor(Date.now/1000));

let newDate = new Date();
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{ // ctrl and space to see suggestions
    weekday: "long",
    timeZone: '' 
}
)  