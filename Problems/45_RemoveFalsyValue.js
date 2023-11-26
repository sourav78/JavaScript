// According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
// compact([0, 1, false, 2, "", 3]);   // => [1, 2, 3]

function compact(arr){
    let afterRemove = []
    arr.map((ele) => {
        if(ele){
            afterRemove.push(ele)
        }
    })
    console.log(afterRemove);
}

compact([0, 1, false, 2, "", 3])
compact([false, 1, 3, 0, 80, "", NaN, undefined])