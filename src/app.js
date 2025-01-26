const express = require('express')

const app = express()

app.use("/hello",(req,res) => {
    res.send('Just it biggin')
})

app.use("/test",(req,res) => {
    res.send('Just it biggin test test test')
})

app.listen(7777, () => {
    console.log('App is listen in host 7777');
    
})