const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json({"users": ["first", "second", "third", "fourth"]});
})

app.listen(5000);