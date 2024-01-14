// const {MongoClient} = require('mongodb')
const dbConnect = require('./db');

const insert = async () =>{
    const db = await dbConnect();
    const result = await db.insertMany(
        [
        {name:'infinix hot 9', brand:'vivo',price:3320,category:'mobile'},
        {name:'galaxy v8', brand:'vivo',price:3320,category:'mobile'},
        {name:'note 11', brand:'vivo',price:3320,category:'mobile'}
        
        ]


        
    );
    if(result.acknowledged)
    {
    console.log("data inserted")

    }
}

// insert();


module.exports = insert



