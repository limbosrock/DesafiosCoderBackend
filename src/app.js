
const express = required("express");
const app = express();
const PORT = 8080;

const ProductManager = require("..src/controllers/product-manager.js");
const prodructManager = new ProductManager(".src/models/products.json");

app.get("/", (req, res) => {
    res.send("funciona");
})

app.listen(PORT);