const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:"rubby",
    swift:"swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js" , "rb" , "py" , "java" , "cpp"]

for (const key in programming) {
   // console.log(programming[key]);
    
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"Unaited States Of America")
map.set('FR',"France")

for (const key in object) {
        console.log(key);
        
}