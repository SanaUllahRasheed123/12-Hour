// const {MongoClient} = require('mongodb')
const dbConnect = require('./db');

const insert = async () =>{
    const db = await dbConnect();
    const result = db.insertOne(
        {name:'note 11', brand:'vivo',price:3320,category:'mobile'}
    )
    console.log(result)
}

// insert();


module.exports = insert



