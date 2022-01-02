const express = require('express');
const { Cryptopunks } = require('./models');
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());
app.get("/cryptopunks", async (req, res) => {
    try {
        const cryptopunksArray = await Cryptopunks.find({});
        res.json({ cryptopunksArray });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(3001, () => {
    console.log("Server is running at port 3001");
});