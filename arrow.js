const user = {
    username : "Happu",
    price : 413,

    welcomeMessage : function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
           
    }
}

// user.welcomeMessage()
// user.username = "chandu"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Happy"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username = "Happy"
//      console.log(this.username);
// }

// chai()

// const chai = () =>{
//     let username = "Happy"
//      console.log(this);
// }

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3 , 4))

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({usernames : "Happy"})


console.log(addTwo(3 , 4))

// const myArray = [2,3,5,8,7]

// myArray.forEach()