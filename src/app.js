const express = require('express')
const { dirname } = require('path')
const path = require('path')
const hbs =require('hbs')
const geocode=require('./utils/geocode')
const forecast =require('./utils/forecast')

const app = express()
const publicdirpath = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../templates/views')
const partalpath = path.join(__dirname,'../templates/partals')
hbs.registerPartials(partalpath)
app.set('view engine','hbs')
app.set('views',viewspath)
app.use(express.static(publicdirpath))

app.get('',(req,res) => {
    res.render('index', {
        title: 'weather app',
        name: 'anderw'
    })
})
app.get('/about',(req,res) => {
    res.render('about', {
        title: 'About me',
        name: 'anderw'
    })
})
app.get('/weather',(req,res) => {

    if(!req.query.address)  {
        return res.send({
            error:'ýou must provide address'
        })
    }
    geocode(req.query.address,(error,{latitude,longitude,location}={}) => {
        if(error)
        {
            return res.send({error})
        }
        forecast(latitude,longitude,(error,forecastdata) => {
            if(error)
        {
            return res.send({error})
        }
        res.send({
            forecast:forecastdata,
            location,
            address:req.query.address
        })
        })
    })
})

app.listen(3000,() => {
    console.log()

})
 