const mongoose = require ("mongoose")

mongoose.connect ("mongodb://localhost/jokes_api",{
    useNewUrlParser:true,
    useUnifiedTropology:true
})
    .then(()=>console.log("You are connected to the database!"))
    .catch(err=>console.log("Database did not connect",err))