// DARKSKY_API_KEY is the key to access the weather API
const DARKSKY_API_KEY = 'a515ad5f77eb9341f17f663537a6d479'

const axios = require('axios')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req, res) => {
    const url = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${req.body.latitude},${req.body.longitude}?units=ca`
    axios({
        url: url, 
        responseType: 'json'
    }).then(data => res.json(data.data.currently))
})

app.listen(3000, () => {
    console.log('Server Started')
})