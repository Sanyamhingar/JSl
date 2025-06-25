// Singleton- 'Constructors' se bnta h 
//syntax - Object.create
// multiple ways me bn skte h 'literals' se bnate h h toh 

const mysyl = Symbol("key1");

const Jsuser = {
    name: "Snayam",
    Age: 20,
    Email: "sanyam@gmail.com",
    isloggedIn: false,
    "fullname" : "Sanyam Hingar",// we cannot access this with .fullname. so we use [] method
    [mysyl]: "Mykey1"
}

//**** Ways to call objects ****

console.log(Jsuser.Email);
console.log(Jsuser["fullname"]); // another method to call;
console.log(Jsuser[mysyl]);
console.log(typeof Jsuser[mysyl]);



