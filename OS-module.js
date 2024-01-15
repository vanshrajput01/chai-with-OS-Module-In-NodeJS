// Operating System Module

const os = require("os")
// console.log(os);

console.log("CPU Architecture : ",os.arch()); // x64

// this methrod give result in Bytes

console.log("Free Memory : ",os.freemem()); 

console.log("Total Memory : ",os.totalmem()); 

console.log("Network interfaces : ",JSON.stringify(os.networkInterfaces()));

console.log("Operating system default dir for temps files : ",os.tmpdir()); 