//
// const iuserLoggedIn =  true
// const temprature = 41

// if(temprature === 40){
//     console.log("less than 50");
    
// }   
// else{
//     console.log("Temprature is grater than 50");
    
// }
// console.log("Executed");


// < , > ,<= , >= , == , === ,!=

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power:${power}`);
    
// }

// console.log(`user power:${poewer}`);

const balance = 1000
// if(balance > 500) console.log("test") , console.log("test2");

// if (balance < 500) {
    
//     console.log("less than 500");
    
// }else if(balance < 750){
//     console.log("less than 500");
// }else if(balance < 900){
//     console.log("less than 500");
// }else{
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard){
    console.log("Allow to buy course");
    
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}