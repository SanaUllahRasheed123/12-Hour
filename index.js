// const { insert } = require('./insert');

const dbConnect = require('./mongodb')

dbConnect().then((res)=>{
    res.find({}).toArray().then((data)=>{
        console.warn(data)
    })
})

const main = async ()=>{
    // console.log("main function called")
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data)
}
main();



// index.js

// const { dbConnect } = require('./mongodb');

// const main = async () => {
//     try {
//         const collection = await dbConnect();

//         // Display all data in the 'products' collection
//         const data = await collection.find({}).toArray();
//         console.warn(data);
//     } catch (error) {
//         console.error('Error in main function:', error);
//     }
// }

// main();


    const collection = db.collection('products')
    const findResult = await collection.find().toArray();
    console.log(findResult)

    
    


main();
















