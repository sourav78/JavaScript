// for in loops in js

let ax = {
    souarv : 89,
    dhiren : 78,
    smait : 76,
    tushar : 85
  }
  
  for(let a in ax){
    console.log(a);
    console.log("Marks of "+a+" is "+ ax[a]);
  }
  
  let sum = 0;
  for(let b in ax){
    sum +=ax[b];
  }
  console.log(sum);
  