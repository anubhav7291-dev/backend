require('dotenv').config()

const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('anubhav')
})

app.get('/login',(req,res)=>{
    res.send('<h1>i can do it</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h5>i can do it</h5>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
