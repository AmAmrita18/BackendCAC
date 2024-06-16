require('dotenv').config()
const express = require('express')
// import express from "express"--> same work as above line 
const app = express()
const port = 3000

//yaha get ek request lega, fir hm res.send ki help se response bhezenge 
//callback ke andar do parameter rahenge, ek request , dusra response
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',  (req, res) => {
    res.send('hiteshdotcom')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Please login at chai and code</h1>')
})

app.get('/youtube', (req, res)=> {
    res.send('<h1>Please subscribe chai aur code</h1>')
})
//agar successfully listen karega to is port par chal jayega
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})   