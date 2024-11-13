// import express from "express"

// const app =express()

// app.get("/",(req,res)=>
// res.send("server is ready"))

// const port = process.env.PORT || 3001

// app.listen(port,()=>{
//     console.log('serve at http://localhost: $(port)')
// })

// backend/server.js
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 3001;
const client = new MongoClient("your_mongo_db_connection_string");

app.use(express.json());
app.use(cors());

const collection = client.db("your_db").collection("users");

app.get("/", (req, res) => res.json({ status: "running" }));

app.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await collection.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)) {
            res.json("exist");
        } else {
            res.json("notexist");
        }
    } catch (e) {
        res.status(500).json("fail");
    }
});

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await collection.findOne({ email });
        if (user) {
            res.json("exist");
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            await collection.insertOne({ email, password: hashedPassword });
            res.status(201).json("notexist");
        }
    } catch (e) {
        res.status(500).json("fail");
    }
});

client.connect().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
