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

// const http = require("http")

// http.createServer((req,res)=>{
//     res.write("Hello this is Sana Ullah ");
//     res.end();
// }).listen(4500);


// const http = require("http")

// function dataControl(req,res){
//     res.write("<h1 style='color:blue;border:2px dotted green; text-align:center;'>Hello, This is Sana Ullah</h1>");
//     res.end();
// }

// http.createServer(dataControl).listen(4500)

// http.createServer((req,res)=>{
//     res.write("<h1 style='color: blue; text-align: center;'>Hello my name is Sana Ullah</h1>");
//     res.end();
// }).listen(4500);


// var colors = require('colors');
 
// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass
// console.log("Sana Ullah" .rainbow)

// console.log(5+5)
// console.log("i'm happy ")
// console.log("i'm happy thank your ")


// console.log('hello'.green); // outputs green text

// const http = require("http")
// const data = require('./data')

// http.createServer((req,res)=>{
//     res.writeHead(201,{"Content-Type":'application\json'});
//     res.write(JSON.stringify(data))
//     res.end();
// }).listen(5000)


// console.log(process.argv[1])
//argv means argument value

// const fs = require('fs')

// const input = process.argv;

// if(input[2]=='add'){
//     fs.writeFileSync(input[3], input[4])
// }else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }else{
//     console.log("invalid input")
// }
//use this command in terminal to add/remove.

//node index.js add orange.txt "This is a orange file" 
//it is important to note that while writing 
//node index.js remove orange



//2nd parameter is for file name and 3rd is for text of file
//1st parameter is for add/remove for file 



//node index.js apple.txt "Hey this is Sana Ullah"   run this command in terminal



const fs = require('fs')

fs.writeFileSync('hello.txt',"this is a hello file")



