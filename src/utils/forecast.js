const request = require('request')
const forecast = (longitude,latitude,callback) => {
   console.log(latitude,longitude)
    const url = 'http://api.weatherstack.com/current?access_key=4906ff516dc08caa85ad7bd0dcd8a7d6&query=' + latitude + ',' + longitude

    request({ url:url,json: true},(error, response) => {
        if(error) {
             callback('unable to get forecast',undefined)
        } else if(response.body.error) {
            callback('unable to find',undefined)

        } else {
            callback(undefined,response.body.current.temperature + ' ,' +response.body.current.weather_descriptions+ ' humidity percentage' + '=' + response.body.current.humidity)

        }
    })
}
module.exports = forecast