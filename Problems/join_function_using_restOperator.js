
const stringConcat = (separator, ...strings) =>{
    let newString = ""
    for(let i = 0; i<strings.length; i++){
        if(i == strings.length-1){
            newString = newString+strings[i]
        }else{
            newString = newString+strings[i]+separator
        }
    }
    console.log(newString);
}

stringConcat('+', "ssss", "ffff", "eeee", "rrr")