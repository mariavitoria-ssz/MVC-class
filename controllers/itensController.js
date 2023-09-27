const app = require('../../startup')
const itensModel = require("../models/itensModel.js")
const path = require("path")

app.get("/getItens", (req, res) => {
    res.send("Itens")
})

app.get("/", (req, res) => {
    res.send("Home")
})

app.get("/getItem", (req, res) => {
    const item = itensModel

    item.name = "Car"
    item.description = "Blue Porche"
    

    res.json(item.toJSON())
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve("mvc/views/itemsView.html"))
})