
//57. Counting Vowels and Consonants in a String
// Example:
// Input: string = "hello world"
// Output: Vowels: 3, Consonants: 7


const CountingMachine = (str) => {
  const dataObject = {
    vowel: 0,
    consonant: 0
  }

  str.split("").map((letter) => {
    if("AEIOUaeiou".includes(letter)){
      dataObject.vowel += 1
    }else if(letter == " "){}
    else{
      dataObject.consonant += 1
    }
  })

  console.log(dataObject);
}

CountingMachine("Hello I am julu")
