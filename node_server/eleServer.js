const express = require('express')
let server = express()
const path = require('path')
server.listen(8088)

let shoppingRoute = express.Router()

server.use('/shopping',shoppingRoute)

shoppingRoute.get("/v3",(req,res) => {
    res.sendFile(path.resolve('./eleJson/shopping.json'));
})
shoppingRoute.get("/store",(req,res) => {
    res.sendFile(path.resolve('./eleJson/store.json'));
})
