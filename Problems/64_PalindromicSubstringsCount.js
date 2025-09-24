//64. Counting the Number of Palindromic Substrings in a String
// Example:
// Input: string = "aaa"
// Output: 6
// Explanation: Palindromic substrings are "a", "a", "a", "aa", "aa", "aaa".


const CountPalindromicSubstring = (str) => {
  let subStringCount = 0

  for(let i = 0; i < str.length; i++){
    for(let j = i; j < str.length; j++){
      // console.log(str.slice(i, j+1));
      // console.log(str.slice(i, j+1).split("").reverse().join(""));
      if(str.slice(i, j+1) === str.slice(i, j+1).split("").reverse().join("")){
        subStringCount += 1
      }
    }
  }

  console.log(subStringCount);
  
}

let s = "HelloIamJulu"

CountPalindromicSubstring(s)
CountPalindromicSubstring("jjhssudhhdussljd")
