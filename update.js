const dbConnect = require('./db');

const updateData = async ()=>{
    let data = await dbConnect();
    let result = await data.updateMany(
        { brand:'vivo'},{
            $set: {brand:'vivo reno'}
        }
    );
    console.warn(result)
}

// module.exports = update
// module.exports= updateData;
updateData();