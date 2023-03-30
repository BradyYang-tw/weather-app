const path = require('path')
const express = require('express')

const app = express()
app.use(express.static(path.join(__dirname, '../public')))

// api
app.get('/', (req, res)=>{
    console.log('Hello World')
    res.send('<h1>Hello Express</h1>')
})

app.get('/help', (req, res)=>{
    res.send({name: 'Brady', age: 30})
})

app.get('/about', (req, res)=>{
    console.log('Hello World')
    res.send('About Express Information')
})

app.listen(3000, ()=>{
    console.log('port 3000 is running')
})