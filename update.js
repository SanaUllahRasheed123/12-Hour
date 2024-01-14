const dbConnect = require('./db');

const updateData = async ()=>{
    let data = await dbConnect();
    let result = await data.updateMany(
        { name:'infinix hot 9'},{
            $set: {name:'infinix hot 12'}
        }
    );
    console.warn(result)
}

// module.exports = update
// module.exports= updateData;
updateData();