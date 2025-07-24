//const myNumbers = [1,2,3,4,5,6,7,8,9]

//const MyNums = myNumbers.map((num) => num+10)
//console.log(MyNums);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const myNums = [];

myNumbers.forEach((num) => {
  if (num > 1) {
    myNums.push(num + 10);
  }
});

console.log(myNums);

