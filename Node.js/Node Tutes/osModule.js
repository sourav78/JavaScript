const os = require("os")

// console.log(os.cpus());
console.log(os.cpus().length);  // cpu core size

console.log(os.hostname()); // System name

console.log(os.platform());

console.log(os.arch()); //CPU architechture - 32 bit/64 bit

console.log(os.homedir());

// console.log(os.networkInterfaces());

console.log(os.freemem()); // free memory -> 1330741248

console.log(os.totalmem()); // total memory -> 8299257856

console.log(os.availableParallelism());

// console.log(os.networkInterfaces());

