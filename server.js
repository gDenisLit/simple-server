const express = require('express')
const app = express()
const port = process.env.PORT || 3030

app.get('/', (req, res) => {
    console.log('GET request...')
    res.send('Hello simple server')
})

app.listen(port,()=>{
    console.log('Listening on port:', port)
})