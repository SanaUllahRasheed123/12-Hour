const dbConnect = require('./db');

const deleteData = async ()=>{
    // console.log("function called");
    let data = await dbConnect();
    let result = await data.deleteMany({name:'infinix hot 12'})

    console.warn(result)
    if(result.acknowledged)
    {
        console.log('record deleted')
    }

}

deleteData();