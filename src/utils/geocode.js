const request = require('request')

const geocode = (address,callback) => {

    const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2hhc3dhdGtyIiwiYSI6ImNrczFsdXc2bzFjZ20ycW1zYjI3Nzc4b3IifQ.JoubkX-ZIuYtnQJJmfC9ZQ'
    request({url: url,json:true},(error,response) => {
        
        if(error)  {
             callback('unable to coonect to locn',undefined)
         } else if(response.body.features.length ===0) {
             callback('unable to find',undefined)}
           else { 
               callback(undefined,{
                   latitude: response.body.features[0].center[0] ,
                   longitude: response.body.features[0].center[1],
                   location: response.body.features[0].place_name
               })
 
         }
         }
    )
 }
 module.exports = geocode 