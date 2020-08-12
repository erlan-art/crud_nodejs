const express = require("express");
const app = express;

const db = require("./config/db");

app.get("/", (req, res) => res.send("respon nodejs berhasil"));

app.use(express.urlencoded({
    extended: true
}));

db.authenticate().then(() =>
    console.log("berhasil terkoneksi ke database"));

const User = require("./models/User");

app.post("/crud", async (req, res) => {
    try {
        const {
            username,
            email,
            password
        } = req.body;
        const newUser = new User({
            username,
            email,
            password
        });
        await newUser.save();
        res.json(newUser);
    } catch (error) {
        console.error(err.message);
        res.status(500).send("server error")
    }
});

app.listen(4500, () => console.log("port berjalan di 4500"));