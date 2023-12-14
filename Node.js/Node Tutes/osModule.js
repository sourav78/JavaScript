const os = require("os")

// console.log(os.cpus());
console.log(os.cpus().length);  // cpu core size

console.log(os.hostname()); // System name

console.log(os.platform());

console.log(os.arch()); //Windows type - 32 bit/64 bit

console.log(os.homedir());

// console.log(os.networkInterfaces());

console.log(os.freemem());

console.log(os.availableParallelism());