//singleton

//object literals
const mySym = Symbol("Key1")
const JsUser = {
    name : "Happy",
    "Fullname":"Manoranjan dalei",
    [mySym] : "myKey1",
    age:21,
    location : "Bhubneswar",
    email : "manoj9080@gmail.com",
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["location"]);
// console.log(JsUser["Fullname"]);
// console.log(JsUser[mySym]);

JsUser.email = "manoj@chatgpt.com"
//console.log(JsUser["email"]);
 Object.freeze(JsUser)
 JsUser.email="manoj@microsoft.com"
//  console.log(JsUser);
 
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

