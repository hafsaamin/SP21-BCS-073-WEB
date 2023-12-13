const express = require('express')
const app = express()
const port = 3000
const products = ["Laptop", "LCD", "Mobile"];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/products', (req, res) => {
    res.send(products);
});

app.get('/api/products/:index', (req, res) => {
    if (!products[req.params.index])
        return res.status(400).send("Products not found");
    else
        res.send(products[req.params.index]);
});
app.listen(3000);
