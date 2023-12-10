//54. The left shift operation is similar to multiplication by powers of two.
// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128

// shiftToLeft(5, 2) ➞ 20
// shiftToLeft(10, 3) ➞ 80
// shiftToLeft(-32, 2) ➞ -128

const shiftToLeft = (base, pow) => {
    return base * (2 ** pow)
}

console.log(shiftToLeft(5, 2));
console.log(shiftToLeft(10, 3));
console.log(shiftToLeft(-32, 2));