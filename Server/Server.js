const express= require("express");
const app= express();
const port = 8000;

require("./config/mongoose.config");


app.use(express.json(),express.urlencoded({extended:true}));


require("./routes/jokes.route")(app);

app.listen(port, ()=>console.log(`running on port ${port} !`))