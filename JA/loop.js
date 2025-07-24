// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
    
// }

// let myArray = ["flash", "batman","superman"];
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element =  myArray[index];
//     console.log(element);
    
    
// }
       


// ****map*****
// const map = new Map()
// map.set('in', 'india')
// map.set('fr', 'France')
// map.set('US', 'United States')

// //console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ":-", value)
    
// }

// const myObject = {
//    'game1' : 'NFS',
//    'game2' : 'SANYAM'
// }

// for (const [key, value] of myObject) {
//     console.log(key, "-", value);
    
// } //TypeError: myObject is not iterable]


// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// } // used for objects

// forEach

const myArray = [1,2,3,4,5,6,7,8,9,10]

// const myNewArray = myArray.filter ( (myArray) => {
//     return myArray > 4

    
// });

// console.log(myNewArray);

const myNewArray = []

myArray.forEach( (num) => { 
    if(num >4){
        myNewArray.push(num);
    }
    
});

console.log(myNewArray)


// let userBooks = books.filter((bk) => bk.genre === 'history');
// let userBooks = books.filter((bk) => { return bk.genre === 'history'}); // if we are opening curly braces than we need to return the value

