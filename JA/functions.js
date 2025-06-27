function SayMyName(){
    console.log("s");
    console.log("a");
    console.log("n");
    console.log("y");
    console.log("a");
    console.log("m");

}

//SayMyName(); //brackets are required

// function addTwoNumbers(num1, num2){
//     num1 = 22,
//     num2 = 32,
//     num3 = num1+num2;
//     console.log(num3);
// }
 //addTwoNumbers();

//  function addTwoNumbers(num1, num2){ // () this is called parameters
//     num1+num2;
//     console.log(num1 + num2);
// }
 //addTwoNumbers(3,4); // this is called as arguments

// function Return(num1, num2){
//     const result = num1 + num2
//     return result // after passing return statement if there is anything it will not execute.
//     console.log("Sanyam");
// }

// function Return(num1, num2){
//     console.log("Sanyam");
//     const result = num1 + num2
//     return result // after passing return statement if there is anything it will not execute.
    
// }

// Return(4,5);
// console.log("Result:", result )

// ***another way***

function Return(num1, num2){
     
    return num1 + num2 // 
    
}


// const result = Return(4,5);
// console.log("Result:", result ) 

function loginUserMessage(userName){
    return `${userName} Just LoggedIn`

}
//console.log(loginUserMessage("Sanyam"));
//console.log(loginUserMessage()); // O/P: Undefined

function loginUserMessage1(Username){
    if(Username === undefined){
        console.log("please enter username");
        return
    }
    return `${userName} Just LoggedIn`
}

//console.log(loginUserMessage1()) ;

function loginUserMessage1(Username) {
    if (Username === undefined) {
        console.log("please enter username");
        return;  // no value returned
    }
    return `${Username} Just LoggedIn`;  // use correct variable name
}

//console.log(loginUserMessage1());

function loginUserMessage1(Username){
    if(!Username){
        console.log("please enter username");
        return
    }
    return `${userName} Just LoggedIn`
}

console.log(loginUserMessage1());


//  function userInput(numb1, numb2){
//     prompt("Enter the value of numb1", numb1)
//     prompt("Enter the value of numb1", numb2)
//     numb3 = numb1+numb2;
//     console.log(numb3);
//  }

// userInput();

