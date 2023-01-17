const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello simple server')
})

app.listen(3030,()=>{
    console.log('Listening on port 3030')
})