//63. Finding the Longest Substring Without Repeating Characters
// Example:
// Input: string = "abcabcbb"
// Output: "abc"
// Explanation: The longest substring without repeating characters is "abc".

const GetLongestSubString = (str) => {
  let longestSubStr = ''

  for(let i = 0; i < str.length; i++){
    let tempSubStr = ''
    for(let j = i; j < str.length; j++){
      if(!tempSubStr.includes(str[j])){
        tempSubStr += str[j]
      }else{
        break
      }
    }

    if(tempSubStr.length > longestSubStr.length) longestSubStr = tempSubStr
  }

  console.log(longestSubStr);
}

GetLongestSubString('abcabcbb')
GetLongestSubString('abcaduibcbb')
GetLongestSubString('abcaduiblscbb')