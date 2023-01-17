const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
let items = [];

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.listen("3000", function() {
    console.log("Server running on port 3000");
})

app.get("/", function(req, res) {
    let today = new Date();
    // var day = today.getDay();

    // var thatDay = "";
    let options = {
        weekday: 'long',

        month: 'long',
        day: 'numeric'

    };
    let day = today.toLocaleDateString("en-US", options);

    /* 
        switch (day) {
            case 0:
                {
                    thatDay = "Sunday";
                    break;
                }
            case 1:

                {
                    thatDay = "Monday";
                    break;
                }

            case 2:
                {
                    thatDay = "Tuesday";
                    break;
                }
            case 3:
                {
                    thatDay = "Wednesday";
                    break;
                }
            case 4:
                {
                    thatDay = "Thursday";
                    break;
                }
            case 5:
                {
                    thatDay = "Friday";
                    break;
                }
            case 6:
                {
                    thatDay = "Saturday";
                    break;
                }
        } */
    res.render("list", { kindOfDay: day, items: items });
})

app.post("/", function(req, res) {

    var item = (req.body.item);
    items.push(item);
    res.redirect("/");
})

/* 
const express = require("express");
const app = express();
app.set('view-engine', 'ejs');

app.listen("3000", function() {
    console.log("Server running on port 3000");
})
app.get("/", function(req, res) {

    var newDate = new Date();
    var options = [year = "numeric", day = "numeric", month = "long", weekday = "long"];

    var today = newDate.toLocaleDateString("en-US", options);

    res.render("list", { kindOfDay: today });

}) */