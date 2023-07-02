//de-structuring an object

const user = {
    username : "sourav78",
    name : "sourav",
    isLogedin : true,
    matches : 37
}

const {username, name, matches} = user

// console.log(username);
// console.log(name);
// console.log(matches);

//give name to the elements or rename the elements

const {username:ID, name:gameName, matches:matchPlayed} = user

console.log(ID);
console.log(gameName);
console.log(matchPlayed);

//rest

const {username:userID, ...gameData} = user
console.log(userID);
console.log(gameData);
