const JokeController= require("../controllers/jokes.controller");

module.exports= app =>{
    app.get("/api/test", JokeController.testResponse);
    app.get("/api/Joke/findAll", JokeController.findAll);
    app.post("/api/Joke/create", JokeController.createJoke);
    app.get("/api/Joke/:_id", JokeController.findOne);
    app.delete("/api/Joke/:_id", JokeController.deleteOne);
    app.patch("/api/Joke/:_id", JokeController.updateOne);
}