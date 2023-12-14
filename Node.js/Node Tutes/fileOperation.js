const fileModule = require("fs")

//create file with synchronously - Blocking operation
// fileModule.writeFileSync("./syncFile.txt", "This is synchronous file")

//create file with asynchronously - Non-Bloching Operation
// fileModule.writeFile("./asyncFile.txt", "This is asynchronous file", () => {})

//Read a file
// let fileContent = fileModule.readFileSync("./asyncFile.txt", "utf-8")
// console.log(fileContent);

// fileModule.readFile("./asyncFile.txt", "utf-8", (err, result) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(result);
//     }
// })

//Append file content
// fileModule.appendFileSync("./asyncFile.txt", " And this is the append line")

//copy a file
// fileModule.cpSync("./syncFile.txt", "./copy.txt")

//delete a file 
// fileModule.unlinkSync("./copy.txt")

