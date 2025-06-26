

const tinderuser = new Object()
const tinderuser1 = {}
//both the above mentioned ways are same to declare an object

tinderuser.id = "122abc"
tinderuser.class = "Business"
tinderuser.age = 20

console.log(tinderuser); // this is not a function so we don't use ()

const User = {
     userName: {
       firstname: "Sanyam",
       LastName: "Hingar"
    }
}

// console.log(User.userName?.firstname); // ways to access 
// ? is used to check if the requested value does exist or not if not we will have to use if else
// We can create nested objects

// const Num1 = {1: 'a', 2: 'b'}
// const Num2 = {3: 'a', 4: 'b'}

// //console.log(Num1, Num2); // { '1': 'a', '2': 'b' } { '1': 'a', '2': 'b' }
// const num3 = Object.assign(Num1, Num2);
// console.log(num3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const num4= Object.assign({}, Num1, Num2)
// console.log(num4); // opt to write

// const num5 = {...Num1, ...Num2}
// console.log(num5); // using spread operator

const users = [
    {
      id : 12,
      name : "asam"
    },
    {
        id: 15,
        name: "Sanny"
    },

] 
users[1].id;
console.log(tinderuser);

console.log(Object.keys(tinderuser)); //[ 'id', 'Class', 'age' ]
console.log(Object.values(tinderuser)); //[ '122abc', 'Business', 20 ]
console.log(Object.entries(tinderuser));//[ [ 'id', '122abc' ], [ 'Class', 'Business' ], [ 'age', 20 ] ]

console.log(tinderuser.hasOwnproperty('class'));
