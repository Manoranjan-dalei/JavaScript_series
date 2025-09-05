//Array

const myArray = [0,1,2,3,4,5]
const myHeros = ["Ironman","Spriderman"]

const myArray2 = new Array(1,2,3,4)
console.log(myArray[1]);

//Array methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()
// console.log(myArray);

// myArray.unshift(10)
// myArray.shift()

// console.log(myArray.includes(7));
// console.log(myArray.indexOf(1));

// const newArr = myArray.join()

// console.log(myArray);

// console.log(newArr);
// console.log(typeof newArr);     //Bineidng and convert to String


//slice ,splice

console.log("A" ,myArray);
const Arr1 = myArray.slice(1,4)

console.log(Arr1);

console.log("B",myArray);
const Arr2 = myArray.splice(1,4)
console.log("C",myArray);
console.log(Arr2);

