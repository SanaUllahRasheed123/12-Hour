module.exports= reqFilter = (req,res,next)=>{
    //    console.log(reqFilter)
       if(!req.query.age){
        res.send("Please provide your age")
       }
       else if(req.query.age<=17){
        res.send("You cannot access this site")
       }
       else{
        next();
    
       }
    
    }