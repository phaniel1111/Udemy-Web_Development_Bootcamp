const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {

    const query = req.body.cityName;
    const apiKey = "45b8d6b7482aaa58d86eaa0d2ab3f2ec";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=metric&lang=vi";
    https.get(url, function (response) {
        response.on("data", function (data) {
            const weatherData = JSON.parse(data);

            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

            res.write("<h1>The temperature in "+query+" is " + weatherData.main.temp + " degrees Celcius</h1>");
            res.write("<img src=" + imageURL + ">");
            res.send();
        })
    })
})

app.listen(3000, function () {
    console.log("Server is running at port 3000");
})