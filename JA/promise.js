const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //DV calls, cryptography, etc.
    setTimeout(function() {
        //console.log("async is completed");
        resolve(); // resolve the promise, to connect it with then 
    },1000)
})

// promiseOne.then(function(){
//     console.log("async task is complete")
// })// .then direct relation with resolve

// let name1 = function Names(name){
//     console.log("Hello " + name);
//     if(name === "Sanyam"){
//     setTimeout(function() {
//         console.log("Welcome to the world of promises");
//     }, 2000);
// }
// }
// name1("Sanyam");


// new Promise(function(resolve, reject){
//     setTimeout(function() {
//         console.log("async is completed");
//         resolve();  
//     },2000)
// }).then(function(){
//     console.log("async task is complete")
// }).catch(function(error){
//     console.log("Error occurred: " + error);
// }).finally(function(){
//     console.log("This will always run, regardless of success or failure");
// }); // finally will always run, regardless of success or failure

// const newPromise3 = new Promise(function(resolve,reject){
//    setTimeout(function(){
//      resolve({name:"Sanyam", email: "Sanyamhingar004@gmail.com"}) 
//    }, 2000); 
   
// });

// newPromise3.then(function(user){
//     console.log(user);
    
// })

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.