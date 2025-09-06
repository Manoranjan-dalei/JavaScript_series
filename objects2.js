//const tinderUser = new Object()       //Singleton object
const tinderUser = {
    id : "24c204a01",
    name : "Happy",
    isLoggedIn : false
}
//console.log(tinderUser);

const regularUser = {
    email: "manoj8090@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Happy",
            lastname : "Dalei"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj4 = {5:"a" , 6:"b"}

//const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3);

// const obj3 = {...obj1 ,... obj2,...obj4}
// console.log(obj3);

const users = [
    {
    },
    {
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('name'));

const course ={
    coursename : "MEARN fullstack",
    price : "999",
    courseInstructer : "Happy"
}

//console.log(course.courseInstructer);

const {courseInstructer:instructer} = course

//console.log(courseInstructer);
console.log(instructer);


//Json (object)
// {
//     "name":"Happy",
//     "coursename" : "Js series",
//     "Price" : "Free"
// }

//Json array
[
    {},
    {},
    {}
]