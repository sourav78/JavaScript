//String methods in javascript

let s = "This is String Methods in javascript"
let t = " We Use in javascript   "
//Returns the length of a string.
console.log(s.length)

//Converts a string to uppercase.
console.log(s.toUpperCase())
console.log(s.toLocaleUpperCase())

//Converts a string to lowercase.
console.log(s.toLowerCase())
console.log(s.toLocaleLowerCase())

//slice : Extracts a portion of a string between the specified indexes.
console.log(s.slice(4, 25))
console.log(s.slice(8))  // Extracts a portion of a string from specified index to last

//Replaces occurrences of a substring with another substring
console.log(s.replace("javascript", "python"))
// console.log(s.replace("Javascript", "Java")) // This is not work because this is sensetive

//Concatenates two or more strings.
console.log(s.concat(t))

//trim - Removes whitespace from the beginning and end of a string
console.log("trim")
console.log(t.length)
console.log(t.trim().length)

//charAt(index): Returns the character at the specified index
console.log("charAt")
console.log(s.charAt(26))
console.log(s.charAt(5))
console.log(s.charAt(33))
console.log(s.charAt(18))

//indexOf(substring): Returns the index of the first occurrence of a substring.
console.log("indexOf")
console.log(s.indexOf("s")) // print frist occurance of substring
console.log(s.indexOf("j")) 
console.log(s.indexOf("String"))

//substring(start, end): Extracts a portion of a string between the specified indices
console.log("substring")
console.log(s.substring(0, 11))
let s1 = s.substring(11, 32)
console.log(s1)

//split(separator): Splits a string into an array of substrings based on a specified separator
console.log("split")
console.log(s.split())
console.log(s.split(" "))
let arr = s.split("") // empty string
console.log(arr)

//startsWith(searchString): Checks if a string starts with a specified substring and it return bolean value.
console.log("startsWith")
console.log(s.startsWith("This"))
console.log(s.startsWith("That"))
console.log(s.startsWith("T"))

//endsWith(searchString): Checks if a string ends with a specified substring and it return bolean value.
console.log("endsWith")
console.log(s.endsWith("javascript"))
console.log(s.endsWith("python"))
console.log(s.endsWith("t"))

//includes(searchString): Checks if a string contains a specified substring and it return bolean value.
console.log("include")
console.log(s.includes("Methods"))
console.log(s.includes("function"))
console.log(s.includes("M"))
console.log(s.includes("j"))
console.log(s.includes("z"))
console.log(s.includes("is"))

//repeat(count): Returns a new string by repeating the original string a specified number of times.
console.log("repeat")
console.log(s.repeat(2))
console.log(s.repeat(0)) //This is retur empty string
console.log(s.repeat(1))
console.log(s.repeat(3.5)) //This is taken as 3 (Round)
// console.log(s.repeat(-1)) //This is produce error

//padStart(targetLength, padString): Pads the start of a string with a specified character until it reaches a desired length.
console.log("padStart")
console.log("julu".padStart(12))
console.log("julu".padStart(12, 'I am'))
console.log("julu".padStart(18))
console.log("julu".padStart(25, 'My Fav person is '))
console.log(s.padStart(17)) //It will return the original string

//padEnd(targetLength, padString): Pads the end of a string with a specified character until it reaches a desired length.
console.log("padEnd")
console.log("julu".padEnd(12))
console.log("julu".padEnd(12).length)
console.log("julu".padEnd(12, 'hero'))
console.log("julu".padEnd(52, 'is a great person in this world'))
console.log(s.padEnd(32)) //It will return the original string

//toString(): Returns a string representation of an object.
console.log("toString")
console.log(s.toString())
console.log(typeof s.toString())

//valueOf(): Returns the primitive value of a string object.
console.log("valueOf")
console.log(s.valueOf())
console.log(typeof s.valueOf())

//search(regexp): Searches a string for a match against a regular expression and returns the index of the first match.
console.log("search")
console.log(s.search('Met'))
console.log(s.search(/Met/))
console.log(s.search('is'))
