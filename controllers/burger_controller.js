// submit button + text box for submission
// generates burger defaults to devoured false
// Move Burger from left to right side when devour is clicked.

var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res){

        var burgs = db.Burger.findAll({});
        console.log(burgs);
        res.render("index", burgs);
    })
}