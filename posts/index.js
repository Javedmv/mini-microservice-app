const express = require("express");
const {randomBytes} = require("crypto");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json())

const PORT = (process.env.PORT || 3000)

const posts = {}

app.get("/posts",(req,res) => {
    res.send(posts)
})

app.post("/posts", (req,res) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body; 

    posts[id] = {id, title};
    
    res.status(201).json(posts[id])
})

app.listen(PORT, () => {
    console.log("listening on port",PORT);
})