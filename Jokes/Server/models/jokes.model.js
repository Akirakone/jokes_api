const mongoose =require ("mongoose");

const JokeSchema =new mongoose.Schema({
    setup:{
        type:string,
        required:[true, "setup is required"]
    },
    punchline:{
        type:string,
        required:[true, "punchline  is required"]
    },
}, {timestamps:true})

const Joke= mongoose.model("joke",JokeSchema)

module.exports =Joke;