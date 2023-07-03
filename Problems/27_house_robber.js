//House Robber

const missionRobbery = (houses) => {
    let totalMoney = 0
    for(let i = 0; i < houses.length; i++){
        if(i % 2 == 0) totalMoney += houses[i]
    }

    return totalMoney
}

console.log(missionRobbery([2,7,9,3,1]));
console.log(missionRobbery([1,2,3,1]));
console.log(missionRobbery([1,2]));
