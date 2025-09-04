const name = "HAPPY"
const repocount = 50

//console.log(name + repocount + "value");

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('Happy-dalei')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-8,2)
console.log(anotherString);

const newStringone = "   Happy   "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://Happy.com/hitesh%20dalei"
console.log(url.replace('%20' , '-'))

console.log(url.includes('sundar'));

console.log(gameName.split('-'));
