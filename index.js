
const dbConnect = require('./mongodb')
// dbConnect().then((res)=>{
//     res.find({}).toArray().then((data)=>{
//         console.warn(data)
//     })
// })

const main = async ()=>{
    // console.log("main function called")
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data)
}

main();

// console.warn(dbConnect)

// const {MongoClient} = require("mongodb");
// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);

// async function main(){
//     await client.connect();
//     console.log("Connected Successfully to Server")
// }

// main();











