const {dbConnnection} = require('/db')

async function main(){
    try{
        const db = await dbConnnection();
        const collection = db.collection('products')

        const findResult = await collection.find().toArray();
        console.log(findResult);
    }
    catch(error){
        console.error('Error performing the task', error)
    }
}

main();