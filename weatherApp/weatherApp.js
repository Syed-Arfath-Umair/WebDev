const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = new express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.post('/', function(req, res){
  var cityName = req.body.cityName;
  var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=319958601f49d9734723e158717e7298&units=metric";
  https.get(url, function(response){
    response.on("data", function(data){
      var weatherData = JSON.parse(data);
      var temperature = weatherData.list[0].main.temp;
      var description = weatherData.list[0].weather[0].description;
      res.write("The temperature at "+cityName + " is " + temperature);
      res.write(description);
      res.end();
    })
  })
})
app.listen(3000, () => console.log("Server running at 3000"));