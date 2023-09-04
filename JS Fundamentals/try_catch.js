
try{
    const x = undefined
    console.log(x[1]);
}catch(e){
    console.log("Error occur: "+ e);
}finally{
    console.log("Connection endded");
}

console.log("code endded");