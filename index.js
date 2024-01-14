const {MongoClient} = require('mongodb')
const url = 'mongodb://127.0.0.1:27017';
const database = 'e-comm';

const client = new MongoClient(url);
async function dbConnect()
{
    let result = await client.connect()
    let db = result.db(database);
    return db.collection('products');
    // let response = await collection.find({}).toArray();
    // console.log(response);
}

// dbConnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })
// console.log(dbConnect());

const main = async () =>{
    // console.log("main function called");
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data)
}

main();