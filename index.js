// const app = require("./lib")

// const arr = [2,4,7,1,3,8,3];

// // console.log(arr[6])
// let result = arr.filter((item)=>{
//     // console.log(item)
//     return item>=4;
// })

// console.log(result)

// // console.log(app.z)


// const fs = require('fs')

// fs.writeFileSync("new.txt","Hello Sana Ulllah Rasheed")
// console.log("-->",__dirname)
// console.log("-->",__filename)

const http = require("http")

http.createServer((req,res)=>{
    res.write("Hello this is Sana Ullah ");
    res.end();
}).listen(4500);