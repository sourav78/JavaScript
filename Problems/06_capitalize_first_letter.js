// Create a function that will capitalize the first letter of each word in a text


function capitalize(txt){
    let str = "";
    let c = 0;
    for(let i=0; i<txt.length; i++){
        if(i==0){
            str = str+txt[i].toUpperCase()
        }else if(txt[i] == " "){
            str = str+txt[i]
            c = c+i;
        }else{
            if(i == c+1 && i!=1){
                str = str+txt[i].toUpperCase();
                c=0;
            }else{
                str = str+txt[i]
            }  
        }
    }

    console.log(str);
}

let str = "create a function that will capitalize the first letter of each word in a text"

capitalize(str);