const path = require("path")

console.log(path.sep); // separators -> \

// console.log(process.env.PATH); // in window -> ';' & in mac or linux -> ':'

console.log(path.delimiter); // o/p -> ;

const filePath = "\\public\\home\\index.html"

//current file path
const currentFileName = __filename

console.log(currentFileName); // path -> d:\Documents\Web Developement\Journy\Javascript\Node.js\Node Tutes\pathModule.js

//Base name with extension
console.log(path.basename(currentFileName)); // op -> pathModule.js

//Base name without extension
console.log(path.basename(currentFileName, ".js")); // op -> pathModule

//Directory name
console.log(path.dirname(currentFileName)); // o/p -> d:\Documents\Web Developement\Journy\Javascript\Node.js\Node Tutes

// get extension name
console.log(path.extname(currentFileName)); // o/p -> .js
console.log(path.extname("index.md.js")); // o/p -> .js

// combine a path directory and a file name
let formatPath = path.format({
    dir: "\\public\\home",
    base: "main.py"
})

console.log(formatPath); // op -> \public\home\main.py

//check absolute or relative path

console.log(path.isAbsolute(currentFileName)); // op -> true
console.log(path.isAbsolute("./index.js")); // op -> false
console.log(path.isAbsolute("../index.js")); // op -> false

// join paths
let pathToDir = path.join("home", "data", "js", "index.js")
console.log(pathToDir); // op -> home\data\js\index.js

//Parse a file path
console.log(path.parse(currentFileName));  
//op -> {
//     root: 'd:\\',
//     dir: 'd:\\Documents\\Web Developement\\Journy\\Javascript\\Node.js\\Node Tutes',
//     base: 'pathModule.js',
//     ext: '.js',
//     name: 'pathModule'
//   }

// relative path 
console.log(path.relative("\\Documents\\Web Developement\\Journy\\Javascript\\", "\\Documents\\Web Developement\\Web\\Pytthon")); // op -> ..\..\Web\Pytthon


//Resolve path
console.log(path.resolve()); // o/p -> D:\Documents\Web Developement\Journy\Javascript\Node.js\Node Tutes
