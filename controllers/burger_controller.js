// submit button + text box for submission
// generates burger defaults to devoured false
// Move Burger from left to right side when devour is clicked.

var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {

        db.burger.findAll({}).then(function (burgs) {
            // console.log("line 11",burgs);
            let handleObject = {
                burger: burgs
            }
            console.log(handleObject);
            res.render("index", handleObject)
        });


    });

    app.post("/api/burger", function (req, res) {
        console.log("POST", req.body);
        db.burger.create({
            burger_name: req.body.burger_name
        }).then(function (dbBurger) {
            res.json(dbBurger);
        });
    })

    app.put("/api/burger/:id", function (req, res) {
        console.log("PUT", req.body, "id", req.params.id);
        db.burger.update({ devoured: req.body.devoured }, {
            where: {
                id: req.params.id
            }
        }).then(function (burger) {
            res.json(burger);
        });
    });

    app.delete("/api/burger/:id", function (req, res) {
        console.log("DELETE", req.params.id);
        db.burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (burger) {
            res.json(burger);
        })
    });
};