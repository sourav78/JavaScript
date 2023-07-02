// Remove the spaces found in a string

const removeSpace = (str) => {
    let newStr  = "";
    for(let  i = 0; i<str.length; i++){
        if(str[i] === " "){
        }else{
            newStr = newStr + str[i]
        }
    }
    console.log(newStr);
}

let exm = "Remove the spaces found in a string"
removeSpace(exm)