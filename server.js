const express = require('express');
const app = express();
const PORT = 3000;

// static files
app.use(express.static('public'));

// roots
app.get('/', (req, res) => {
    res.render("pages/index", { title: "Accueil" });
});

app.listen(PORT, () => {
    console.log(`Le server est lancé sur le port : ${PORT}\nhttp://127.0.0.1:${PORT}`);
});