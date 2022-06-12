const express = require('express')
const bcrypt = require('bcrypt')
const session =require('express-session')





const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))




app.get('/',(req,res) => {
    res.render('home.ejs')
})







app.listen(3000)