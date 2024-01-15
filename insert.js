// const {MongoClient} = require('mongodb')
const dbConnect = require('./db');

const insert = async () =>{
    const db = await dbConnect();
    const result = await db.insertMany(
        [
        {name:'infinix hot 9', brand:'vivo',price:3320,category:'mobile'},
        {name:'galaxy v8', brand:'vivo',price:3320,category:'mobile'},
        {name:'note 11', brand:'vivo',price:3320,category:'mobile'},
        {
            name: 'iPhone 13',
            brand: 'Apple',
            price: 1099.99,
            category: 'Smartphone'
        },
        {
            name: 'Galaxy S21',
            brand: 'Samsung',
            price: 999.99,
            category: 'Smartphone'
        },
        {
            name: 'Pixel 6',
            brand: 'Google',
            price: 799.99,
            category: 'Smartphone'
        },
        {
            name: 'OnePlus 9',
            brand: 'OnePlus',
            price: 899.99,
            category: 'Smartphone'
        }
        
        ]


        
    );
    if(result.acknowledged)
    {
    console.log("data inserted")

    }
}

// insert();


module.exports = insert



