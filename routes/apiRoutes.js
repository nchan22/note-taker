const router = require("express").Router();
const res = require("express/lib/response");
const fs = require("fs");

// following the CRUD methods; create, read, update, delete notes

// create a function that GETS all notes by reading the db.json file
// and returns the data
router.get("/notes", function (req, res) {
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        notes = JSON.parse(data);
        return res.json(notes);
    });
});
