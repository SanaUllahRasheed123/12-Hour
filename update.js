const dbConnect = require('./mongodb');


const updateData =async () =>{
    let data = await dbConnect();
    let result = await data.updateMany(
        { name:'iPhone 13',price:1099.99},{
            $set: {name:'iPhone 19',price:2000000}
        }
    )
    console.warn(result)
}

updateData();