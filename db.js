const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'e-comm';
const client = new MongoClient(url);

const dbConnnection = async () =>{
    try{
        await client.connect();
        console.log('Connected Successfully to Server');
        const db = client.db(dbName);
        return db;
    }
    catch(error){
        console.error('Failed to connect to the database', error);
        throw error;
    }
}

module.exports = {dbConnnection};

