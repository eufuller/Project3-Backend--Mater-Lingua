//Get .env variables //must go above PORT and any code referring to it.
require("dotenv").config();  

//Dependencies
const express = require("express");
const app = express(); 
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");  //responsible for setting this html header (inspect tools).
<<<<<<< HEAD
=======

>>>>>>> 08e7eaa2fb9860dc052967dc367e2b31298da0fb
//require frenchControllers
frenchController = require("./controllers/frenchRouteLinks")
spanishController = require("./controllers/spanishRouteLinks")
italianController = require("./controllers/italianRouteLinks")

<<<<<<< HEAD
=======

>>>>>>> 08e7eaa2fb9860dc052967dc367e2b31298da0fb
const {PORT = 4000, MONGODB_URL} = process.env


//Connect to Mongoose
mongoose.connect(MONGODB_URL);
//Mongo Status Listeners
mongoose.connection
.on("connected", () => console.log("Connected to MongoDB"))
.on("error", (err) => console.log("error with MongoDB: " + err.message));

//Mount Middleware
app.use(cors()); //Access-Control-Allow: "*"  any origin can access
app.use(morgan("dev"));
app.use(express.json()); //this creates req.body from incoming JSON request bodies  


//Mount Routes
//Testing Home
app.get("/", (req, res) => {
    res.send("Ello Mate")
})

<<<<<<< HEAD
=======

>>>>>>> 08e7eaa2fb9860dc052967dc367e2b31298da0fb
//Controllers
app.use("/french", frenchController)
app.use("/spanish", spanishController)
app.use("/italian", italianController)



<<<<<<< HEAD
=======

>>>>>>> 08e7eaa2fb9860dc052967dc367e2b31298da0fb
//event listeners
app.listen(PORT, () => {
    console.log(`All sailors to port ${PORT}`)
})