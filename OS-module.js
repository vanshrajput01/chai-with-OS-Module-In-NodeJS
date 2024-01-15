// Operating System Module

const { log } = require("console");
const os = require("os")
// console.log(os);

console.log("CPU Architecture : ",os.arch()); // x64

// this methrod give result in Bytes

console.log("Free Memory : ",os.freemem()); 

console.log("Total Memory : ",os.totalmem()); 

console.log("Network interfaces : ",JSON.stringify(os.networkInterfaces()));

console.log("Operating system default dir for temps files : ",os.tmpdir()); 

console.log("Host Name : ",os.hostname());

console.log("Endianness of CPU : ",os.endianness());

console.log("Operting system Type :",os.type());

console.log("Operting system Plateform : ",os.platform());


console.log("Operting system Release : ",os.release());
