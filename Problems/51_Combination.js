//51. Create a function that takes a variable number of arguments, each argument representing the number of items in a group. The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.
// combinations(2, 3) ➞ 6
// combinations(3, 7, 4) ➞ 84
// combinations(2, 3, 4, 5) ➞ 120

function combinations(...numbers){

    if(numbers.includes(0)){
        let index = numbers.indexOf(0);

        if (index !== -1) {
            numbers.splice(index, 1);
        }
    }

    return numbers.reduce((acc, curr) => acc * curr)
}

console.log(combinations(1, 9, 7));
console.log(combinations(3, 7, 4));
console.log(combinations(2, 3, 4, 5));
console.log(combinations(6, 7, 0, 2));

function combinations1(...item){
    return item.filter(ele => ele != 0).reduce((acc, curr) => acc * curr)
}

console.log(combinations1(2, 3, 4, 5));