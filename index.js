// const arr = [
//   3, 54, 6, 4, 3, 5, 6, 7, 55, 54, 354, 3, 4, 5, 4, 35, 65, 7, 8, 7, 3,
// ];

// console.log(
//   arr.filter((item) => {
//     return item < 54;
//   })
// );

// const fs = require("fs").writeFileSync;

// fs("hello1.txt", "Node js ");

// const http = require("http");

// function controlG(req, res) {
//   res.write("<p></p>Hello This is Sana Ullah from port 4500.</p>");
//   res.end();
// }
// http.createServer(controlG).listen(4500);
// const app = require("./lib")

// const colors = require("colors");

// console.log("packge.json".bgBlue);
// console.log("fhkdsj");

// const data = require("./data"

// );
// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "applicationjson" });
//     res.write(JSON.stringify(data));
//     res.end();
//   })
//   .listen(4500);

// const exp = require("constants");
// const express = require("express");
// const path = require("path");
// const ejs = require("ejs");

// const app = express();

// const publicPath1 = path.join(__dirname, "public");

// app.use(express.static(publicPath1));
// app.set("view engine", "ejs");

// app.get("", (req, res) => {
//   res.sendFile(`${publicPath1}/index.html`);
// });

// app.get("/profile", (req, res) => {
//   const user = {
//     name: "Ahmad",
//     email: "esfkaj@test.com",
//     city: "Lahore",
//   };
//   res.render("profile", { user });
// });

// app.get("/about", (req, res) => {
//   res.sendFile(`${publicPath1}/about.html`);
// });

// app.get("/help", (req, res) => {
//   res.sendFile(`${publicPath1}/help.html`);
// });

// app.get("*", (req, res) => {
//   res.sendFile(`${publicPath1}/nopage.html`);
// });

// app.get("/", (req, res) => {
//   res.send(`<h1>Helllo</h1><a href="/about">Go to about us page</a>`);
// });

// app.get("/about", (req, res) => {
//   res.send(
//     `<input type="text" placholder="Enter your text" value="${req.query.name}"/>`
//   );
// });

// app.get("/help", (req, res) => {
//   res.send(`<button href="/">Click me</button>`);
// });

// app.get("/json", (req, res) => {
//   res.send([
//     { name: "Ahmad", email: "sanaullahrasheed3@gmail.com" },
//     { name: "user1", email: "sanaullahrasheed3@gmail.com" },
//   ]);
// });

// app.listen(4500);

const express = require("express");
const app = express();

const reqFilter1 = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age");
  } else if (req.query.age < 18) {
    res.send("You cannot access this page");
  }
  next();
};

// app.use(reqFilter1);

app.get("/", reqFilter1, (req, res) => {
  res.send("Welcome to home page");
});

app.get("/about", reqFilter1, (req, res) => {
  res.send("Welcome to about us page");
});

app.get("/help", (req, res) => {
  res.send("How May we hwlp you!");
});

app.listen(5000);

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

// const express = require('express')
// const path = require("path")

// const app = express();

// const publicPath = path.join(__dirname,'public');

// // app.use(express.static(publicPath));
// app.get('',(_,res)=>{
//     res.sendFile(`${publicPath}/index.html`)
// })

// app.get('/about',(_,res)=>{
//     res.sendFile(`${publicPath}/about.html`)
// })

// app.get('/help',(_,res)=>{
//     res.sendFile(`${publicPath}/help.html`)
// })
// app.listen(5000)

/************Middle ware*/
// const express = require('express')
// const reqFilter = require('./middleware')
// const app = express();
// const route = express.Router();

// app.use(reqFilter)
// route.use(reqFilter);

// app.get('/',(req,res)=>{
//     res.send('Welcome to Home Page')
// })

// app.get('/users',(req,res)=>{
//     res.send('Welcome to User page')
// })

// app.get('/about',(req,res)=>{
//     res.send('Welcome to About Us page')
// })

// app.get('/help',(req,res)=>{
//     res.send('Welcome to Help page')
// })

// route.get('/menu',(req,res)=>{
//     res.send('Welcome to menu page')
// })

// route.get('/contact',(req,res)=>{
//     res.send('Welcome to contact page')
// })

// app.use('/',route)
// app.listen(5000)

//monogDB started

//basic command of mongo db done

//crud operations working
//crud operations done

//i have done

// const {MongoClient} = require("mongodb")
// const url = 'mongodb://localhost:27017';

// const database = 'e-comm'
// const client = new MongoClient(url);

// async  function getData()
// {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('products');
//     console.log(collection.find({}).toArray())

// }

// getData();

// const { MongoClient } = require("mongodb");

// const url = 'mongodb://localhost:27017';
// const database = 'e-comm';
// const client = new MongoClient(url);

// async function getData() {
//     try {
//         await client.connect();
//         const db = client.db(database);
//         const collection = db.collection('products');
//         const result = await collection.find({}).toArray();
//         console.log(result);
//     } finally {
//         await client.close();
//     }
// }

// getData();

// const {MongoClient} = require('mongodb')
// const url = 'mongodb://127.0.0.1:27017';
// const database = 'e-comm'
// const client = new MongoClient(url);

//  async function dbConnect()
// {
//     let result =  await client.connect();
//    db= result.db(database);
//    return db.collection('products');
// //     let response = await collection.find({name:"Sana Ullah"}).toArray();
// //    console.log(response)
// }

// dbConnect().then((res)=>{
//     res.find({}).toArray().then((data)=>{
//         console.warn(data)
//     })
// })

// const main = ()=>{
//     console.log("main function called")
// }

//console.warn(dbConnect)

// const {MongoClient} = require("mongodb");
// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);

// async function main(){
//     await client.connect();
//     console.log("Connected Successfully to Server")
// }

// main();

//inserting data
// may be it worked
//inset data from mongodb
//make a new file
//import mongodb connection
//insert single and multiple records
//interview question
// worked with mongodb
//faced many problems and issue
//worked with insert , update and delete
//spen more than 5 hours , almost 6
//crud done
// مجھے اس بات کی یقین دہانی کروائی جائے کے مجھے اس بار فیل نہیں کیا جا ئے گا۔۔۔
//یہ فصل امیدوں کی ہم دم اس بار بھی غارت جائے گی

// const dbConnect = require('./mongodb')

// // console.log(main());
// dbConnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })

// const main = async () =>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data)
// }

// main();

// const mongoose = require("mongoose");
// const ProductSchema = new mongoose.Schema({
//     name: String,
//     brand: String,
//     price: Number,
//     category: String,
//   });

// const saveInDB = async () => {
//   await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

//   const Product = mongoose.model("products", ProductSchema);
//   let data = new Product({
//     name: "m8",
//     price: 2399,
//     brand: "vivo",
//     category: "mobile",
//   });
//   let result = await data.save();
//   console.log(result);
// };

// // main()

// const updateInDB = async () => {
//   const Product = mongoose.model("products", ProductSchema);
//   let data = await Product.updateOne(
//     { name: "Iphone 13" },
//     {
//       $set: { name: "Iphone 15" },
//     }
//   );
//   console.log(data);
// };

// updateInDB();

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

// // Define ProductSchema outside the function
// const ProductSchema = new mongoose.Schema({
//   name: String,
//   price: Number,

//   brand: String,
//   category: String,
// });

// const saveInDB = async () => {

//   const Product = mongoose.model("products", ProductSchema);

//   let data = new Product({
//     name: "m8",
//     price: 2399,
//     brand: "vivo",
//     category: "mobile",
//   });

//   let result = await data.save();
//   console.log(result);
// };

// // main()

// const updateInDB = async () => {
//   // Now ProductSchema is accessible here
//   const Product = mongoose.model("products", ProductSchema);

//   let data = await Product.updateOne(
//     { name: "Iphone 15" },
//     {
//       $set: { price: "3989" },
//     }
//   );

//   console.log(data);
// };

// // updateInDB();

// const deleteInDB = async () =>{
//     const Product = mongoose.model('products',ProductSchema);
//     let data = await Product.deleteOne({name:'max 8'});
//     console.log(data)
// }

// // deleteInDB();
// const findInDB = async () => {
//     const Product = mongoose.model('products',ProductSchema);
//     let data = await Product.find({price: 3320});
//     console.log(data)
// }

// findInDB();

//hehe
//uiu ok

// const express = require('express');
// require('./config');
// const Product = require('./product');

// const app = express();
// app.use(express.json());
// app.post('/create',async(req,res)=>{
//     let data = new Product(req.body);
//     let result = await data.save()
//     console.log(req.body)
//     res.send(result);

// });

// app.get("/list",async(req,res)=>{
//     let data = await Product.find();
//     res.send(data)
// })

// app.delete('/delete/:id',async (req,res)=>{
//     console.log(req.params)
//     let data = await Product.deleteOne(req.params);

//     res.send(data);
// })

// app.put('/update/:_id',async (req,res)=>{
//     console.log(req.params)
//     let data = await Product.updateOne(
//         res.params,
//         {
//             $set: req.body
//         }
//     );
//     res.send(data)
// })

// const express = require('express');
// require('./config');
// const Product = require('./product');

// const app = express();
// app.use(express.json());

// app.get('/search/:key', async(req,res)=>{
//     console.log(req.params.key)
//     let data = await Product.find(
//         {
//             "$or":[
//                 { "name":{$regex:req.params.key}},
//                 {"brand":{$regex:req.params.key}}
//             ]
//         }
//     )
//     res.send(data)
// })

// app.listen(5000);

//multer done

// const express = require('express')
// const multer = require('multer');
// const app = express();

// const upload = multer({
//     storage:multer.diskStorage({
//         destination:function(req,file,cb)
//         {
//             cb(null,'uploads')
//         },
//         filename:function(req,file,cb)
//         {
//             cb(null,file.fieldname+"-"+Date.now()+'.jpeg')
//         }
//     })

// }).single("user_file")
// app.post('/upload',upload,(req,res)=>{
//     res.send("file upload")
// });

// app.listen(5000)

//os module started

// const os = require('os')
// console.log(os.arch())
// console.log(os.freemem()/(1024*1024*1024))
// console.log(os.totalmem()/(1024*1024*1024))
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.userInfo())

//Events and Event Emitter in Node Js

// const express = require('express');

// const EventEmitter = require('events');
// const app = express()

// const event = new EventEmitter();

// let count =0;

// event.on('countAPI',()=>{
//     count++;
//     console.log('event called',count)
// })

// app.get('/',(req,res)=>{
//     res.send("api called")
//     event.emit('countAPI');
// })

// app.get('/search',(req,res)=>{
//     res.send("search api called")
//     event.emit('countAPI');

// })

// app.get('/update',(req,res)=>{
//     res.send("update api called")
//     event.emit('countAPI');

// })

// app.listen(5000)
