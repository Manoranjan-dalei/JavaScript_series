let a = 300     //Global scope
if(true){
  let a = 10
  const b = 20
//   console.log("INNER: ",a);      //Local scope

}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Happy"
    
    function two() {
        const website = "Youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
    
}
one()

if(true){
    const username = "Happy"
    if(username === "Happy"){
        const website = "Youtube"
        // console.log(username + website)
    }
    // console.log(website);
    
}
// console.log(username);


//+++++++++++++++++++++++INTRESTING++++++++++++++++++++

console.log(addone(5));

function addone(num) {
    return num + 1
}


addtwo(5)
const addtwo = function(num){
    return num + 2
}
