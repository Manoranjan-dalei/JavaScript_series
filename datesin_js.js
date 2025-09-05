//Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCratedDate = new Date(2025,8,5)
// let myCratedDate = new Date(2025,8,5,11,2)
//let myCratedDate = new Date("2025-9-5")
let myCratedDate =new Date("05-09-2025")
//console.log(myCratedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCratedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

//`${newDate.getDay()} and the time`

newDate.toLocaleDateString('default',{
    weekday: "long",
})