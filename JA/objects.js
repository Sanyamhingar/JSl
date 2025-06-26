// Singleton- 'Constructors' se bnta h
//syntax - Object.create
// multiple ways me bn skte h 'literals' se bnate h h toh

const mysyl = Symbol('Key')

const Jsuser = {
    name: "Snayam",
    Age: 20,
    Email: "sanyam@gmail.com",
    isloggedIn: false,
    "fullname" : "Sanyam Hingar",// we cannot access this with .fullname. so we use [] method
    [mysyl]: "Mykey1"
}

//**** Ways to call objects ****

// console.log(Jsuser.Email);
// console.log(Jsuser["fullname"]); // another method to call;
// const keys = Object.getOwnPropertySymbols(Jsuser);
// console.log(keys[0]);            // 👉 Symbol(Key)
// console.log(typeof keys[0]);  
//  console.log(Jsuser[mysyl]);
//  console.log(typeof Jsuser[mysyl]);

///***** change values in objects*********

// Jsuser.Email = "Sanyamhingar@gmail.com"
// Object.freeze(Jsuser)// after freezing we cannot implement any changes in the object
// Jsuser.Email = "Sanyamjain@gmail.com"

// console.log(Jsuser.Email);

// Jsuser.greetings = function(){
//     console.log("Hello JS user");
// } 

// console.log(Jsuser.greetings); //Output: [function(anonymus)] function execute nhi hua h bs function ka reference back aaya h
// Jsuser.greetings(); // output: Hello JS user
// console.log(Jsuser.greetings); // O/p : Undefined and hello...
// *** Adding Multiple values
Jsuser.greetings = function(){
    console.log(`Hello, ${this.Age}`);

}
 Jsuser.greetings();

















