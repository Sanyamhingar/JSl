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
const map = new Map()
map.set('in', 'india')
map.set('fr', 'France')
map.set('US', 'United States')

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value)
    
}

const myObject = {
   'game1' : 'NFS',
   'game2' : 'SANYAM'
}

for (const [key, value] of myObject) {
    console.log(key, "-", value);
    
} //TypeError: myObject is not iterable