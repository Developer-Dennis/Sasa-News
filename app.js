const express = require('express')
const bcrypt = require('bcrypt')
const session =require('express-session')






const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))



app.get('/',(req,res) => {
    res.render('home.ejs')
})

//politics  route
app.get('/politics',(req,res) => {
    res.render('politics.ejs')
})

//kenya route
app.get('/kenya',(req,res) => {
    res.render('kenya.ejs')
})

//world route
app.get('/world',(req,res) => {
    res.render('world.ejs')
})

// entertainment route
app.get('/entertainment',(req,res) => {
    res.render('entertainment.ejs')
})

//business route
app.get('/business',(req,res) => {
    res.render('business.ejs')
})

// technology route
app.get('/technology',(req,res) => {
    res.render('technology.ejs')
})

// sports route
app.get('/sports',(req,res) => {
    res.render('sports.ejs')
})







app.listen(3000)