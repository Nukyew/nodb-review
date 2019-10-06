require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env
const grassCtrl = require('./controllers/grassCtrl')
const pokeCtrl = require('./controllers/pokeCtrl')
const prodCtrl = require('./controllers/prodCtrl')

// TOP LEVEL MIDDLEWARE
app.use(express.json())

app.use(express.static(`${__dirname}/../build`));

// ENDPOINTS
app.get('/api/wild-pokemon', grassCtrl.getWildPokemon)
app.post('/api/pokemon', pokeCtrl.catch)
app.put('/api/pokemon/:id', pokeCtrl.rename)
app.delete('/api/pokemon/:id', pokeCtrl.release)
app.get('/api/pokemon', pokeCtrl.getAllPokemon)

app.get('/api/products/yearly-drop', prodCtrl.getProducts)
app.get('/api/products/bacon', prodCtrl.getBacon)

const path = require('path')
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} happy little accidents`))