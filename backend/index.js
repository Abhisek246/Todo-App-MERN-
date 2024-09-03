const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/todoRoute.js")
const cors = require("cors");

require("dotenv").config()

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log("connected"))
.catch((err)=>console.log(err));


app.use(routes);

app.listen(port, ()=>{
    console.log("app is listening to port");
})