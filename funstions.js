// console.log("H");
// console.log("A");
// console.log("P");
// console.log("P");
// console.log("Y");

function  sayMyname (){
    console.log("H");
    console.log("A");
    console.log("P");
    console.log("P");
    console.log("Y");
} 

// sayMyname()

function addTwonumber(number1 , number2){

    // console.log(number1 + number2);     
}

addTwonumber(3 , 7)


function addTwonumber(number1 , number2){

//   let result = number1 + number2
  return number1 + number2     
}

 const result  = addTwonumber(3 , 7)

//  console.log("result:",result);
 
function loginUserMessage(username) {
    if(!username){
        console.log("please enter username");
        return  
    }
      return `${username} just logged in`
}

// console.log(loginUserMessage("Happy"))
// console.log(loginUserMessage());

function calculateCartPrice(val1 , val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,500,700,5000));

const user ={
    username : "Jackey",
    price : 200
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price ${anyobject.price}`);
}

// handleobject(user)

handleobject({
    username : "Happy",
    price : "599"
})

const myNewArray = [200 , 100 , 400 , 800]

function returnSecondValue(getArray){
    return getArray[3]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,100,400,800]));
