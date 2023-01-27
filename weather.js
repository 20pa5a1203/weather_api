const express = require('express')
const axios = require('axios')

const app = express()

app.get('/weather', (req, res) => {
    const city = req.query.city
    if (!city) {
        return res.status(400).send('Please provide a city name in the "city" query parameter')
    }
    const apiKey = '081c7cbb1eb464e8c5bf244e8134ecfd' // replace with your API key
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    axios.get(url)
        .then(response => {
            res.send(response.data)
        })
        .catch(error => {
            res.status(error.response.status).send(error.response.data)
        })
})

app.listen(5000, () => {
    console.log('Server listening on port 5000')
})
