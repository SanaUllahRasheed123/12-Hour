const dbConnect = require('./mongodb');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', async(req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray()
    // console.log(data)
    res.send(data)
});

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send({name:'Sana Ullah'})
})

app.listen(5000)