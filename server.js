const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Item = require('./models/Item')
const items = require('./routes/api/Items')

require('dotenv/config')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
    process.env.DB_CONNECTION, 
    {useNewUrlParser: true},
    () => console.log('Connected to DB!'))

app.use('/api/items', items)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}...`))