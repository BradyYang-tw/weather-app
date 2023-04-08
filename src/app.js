const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define path for express config
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicPath))

// api
app.get('', (req, res)=>{
    res.render('index', {title: 'Brady Weather', name: 'Brady'})
})

app.get('/', (req, res)=>{
    console.log('Hello World')
    res.send('<h1>Hello Express</h1>')
})

app.get('/help', (req, res)=>{
    res.render('help', {title: 'Help By Brady', name: 'Brady'})
})

app.get('/about', (req, res)=>{
    res.render('about', {title: 'About Brady', name: 'Brady'})
})

app.get('/help/*', (req, res)=>{
    res.render('404', {title: 'Error 404', errorMessage: 'WTF'})
})

app.get('*', (req, res)=>{
    res.send('My 404 Page')
})

app.listen(3000, ()=>{
    console.log('port 3000 is running')
})