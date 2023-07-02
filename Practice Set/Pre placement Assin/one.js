let nums = [2,7,11,15]
let target = 18

// console.log(nums.length);

function findIndex(nums, target){
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = 1; j < nums.length; j++){
            if(nums[i]+nums[j] == target){
                console.log(`${i} ${j}`);
            }
        }
    }
}

findIndex(nums, target)