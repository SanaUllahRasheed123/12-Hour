const dbConnect = require('./mongodb');

const insert = async () =>{
    const db = await dbConnect();
    const result = await db.insertMany(
        [
        {name:"yasri",brand:'natural',price:9,category:'male'},
        {name:"umar",brand:'natural',price:9,category:'male'},
        {name:"shehryar",brand:'natural',price:9,category:'male'}



        ]
    )
    console.log(result.acknowledged)
    {
        console.log("data inserted")
    }
}

insert();
