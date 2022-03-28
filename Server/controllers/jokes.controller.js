const Joke =require ("../models/jokes.model");

module.exports.testResponse=(req,res)=>{
    res.json({message:"test response here!"})
}

module.exports.findAll= (req,res)=>{
    Joke.find({})
        .then (results=>res.json(results))
        .catch (err=>res.status(400).json({message:"that didnt quite work",err}))
}

module.exports.createJoke= (req,res)=>{
    Joke.create(req.body)
        .then (newFaker=>res.json(newFaker))
        .catch (err=>res.status(400).json({message:"that didnt quite work",err}))
}

module.exports.findOne= (req,res)=>{
    Joke.findOne({_id: req.parama._id})
        .then (results=>res.json(results))
        .catch (err=>res.status(400).json({message:"that didnt quite work",err}))
}

module.exports.deleteOne= (req,res)=>{
    Joke.deleteOne({_id: req.parama._id})
        .then (results=>res.json(results))
        .catch (err=>res.status(400).json({message:"that didnt quite work",err}))
}

module.exports.updateOne= (req,res)=>{
    Joke.updateOne({_id: req.parama._id},req.body)
        .then (results=>res.json(results))
        .catch (err=>res.status(400).json({message:"that didnt quite work",err}))
}
