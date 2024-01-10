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


//
// const http = require("http")
// const data = require('./data')

// http.createServer((req,res)=>{
//     res.writeHead(201,{"Content-Type":'application\json'});
//     res.write(JSON.stringify(data))
//     res.end();
// }).listen(5000)



//how nodejs works
// console.log("1st");

// setTimeout(()=>{
//     console.log("2nd");

// },2000)
// console.log("3rd");

// const express = require("express")

// const app = express();


// app.get('',(req,res)=>{
//     // console.log("data sent by --->>>",req.query.name)
//     res.send(`
//     <h1>Weolcome to home page</h1>
//     <input type="text" placeholder="enter name" />
//     `)
// })

// app.get("/home",(req,res)=>{
//     res.send(`
//     <a href="/">Go to home page<a/>
//     <input type="text" value="${req.query.name}" />

//     `)
// })

// app.get('/help',(req,res)=>{
//     res.send("Welcome to help page")
// })

// app.get("/about-us",(req,res)=>{
//     res.send("Welcome to about-us page")
// })

// app.listen(5000);


const express = require('express')
const path = require("path")


const app = express();

const publicPath = path.join(__dirname,'public');

app.set('view engine','ejs');
// app.use(express.static(publicPath));


app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/profile',(_,res)=>{

    const user = {
        name:"sanaullah",
        city:"lahore",
        email:"sanaullahrasheed3@gmail.com",
        skills:['html', 'css', 'java', 'php']

    }
    res.render('profile',{user})
})

app.get('/login',(_,res)=>{
    res.render('login');
})



app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})

app.get('/help',(_,res)=>{
    res.sendFile(`${publicPath}/help.html`)
})
app.listen(5000)


