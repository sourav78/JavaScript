
const matchHouse = (numberOfHouses) => {
    if(numberOfHouses == 1){
        return 6
    }else if(numberOfHouses <= 0){
        return 0
    }else{
        return (numberOfHouses*6)-(numberOfHouses-1)
    }
}

console.log(matchHouse(-2));
console.log(matchHouse(4));
console.log(matchHouse(87));