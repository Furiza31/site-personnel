const express = require('express');
const app = express();
const PORT = 3000;
const path = require("path");

// static files
app.use(express.static('public'));

// roots
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Le server est lancé sur le port : ${PORT}\nhttp://127.0.0.1:${PORT}`);
});