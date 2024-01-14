const dbConnect = require('./mongodb');

const insert = async () =>{
    const db = await dbConnect();
    console.log(db)
    // const result = db.insert(
    //     {name:'note 5',brand:'vivo',price:"320",category:'mobile'}
    // )
}

module.exports = { insert };


insert();



// insert.js

// const dbConnect = require('./mongodb');

// const insert = async () => {
//     const collection = await dbConnect();

//     // Use insertOne or insertMany depending on your use case
//     const result = await collection.insertOne({
//         name: 'note 5',
//         brand: 'vivo',
//         price: "320",
//         category: 'mobile'
//     });

//     console.log('Insert result:', result);
// }

// insert();
