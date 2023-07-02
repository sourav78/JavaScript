// Create a function that will convert a string in an array containing the ASCII codes of each character

// console.log("asd".charCodeAt(2));

function convertToAscii(str){
    let arr = [];

    for(let i = 0; i<str.length; i++){
        arr[i] = str.charCodeAt(i);
    }

    console.log(arr);
}

let str = "sourav ranjan sahoo"
convertToAscii(str)