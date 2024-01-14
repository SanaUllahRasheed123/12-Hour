
const insert = require('./insert');
const dbConnect = require('./db')

// dbConnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })

const main = async () =>{
    // console.log("main function called");
    let db = await dbConnect();
    db = await db.find().toArray();
    console.warn(db)
}
   
main();
insert();