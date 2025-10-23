const fs = require('fs')

// Using callback
fs.readFile("hello.txt", 'utf-8', (err, data) => {
  if(err){
    console.log("Error: ", err);    
  }

  console.log(data);
  
})

// using promises

fs.promises.readFile("hello.txt", 'utf-8')
  .then(data => console.log(data))
  .catch(err => console.log("Error: ", err))

//Usinf async/await

const getBookData = async () => {
  const data = await fs.promises.readFile("hello.txt", 'utf-8')
  console.log(data);
}

getBookData()