const {MongoClient} = require('mongodb')
const url = 'mongodb://127.0.0.1:27017';
const database = 'e-comm'
const client = new MongoClient(url);



 async function dbConnect()
{
    let result =  await client.connect();
   db= result.db(database);
   return db.collection('products');

}

module.exports= dbConnect;


// mongodb.js

// const { MongoClient } = require('mongodb');
// const url = 'mongodb://127.0.0.1:27017';
// const database = 'e-comm';
// const client = new MongoClient(url);

// async function dbConnect() {
//     try {
//         await client.connect();
//         const db = client.db(database);
//         return db.collection('products');
//     } catch (error) {
//         console.error('Error connecting to the database:', error);
//         throw error;
//     }
// }

// module.exports = dbConnect;
