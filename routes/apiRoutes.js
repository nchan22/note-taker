const router = require("express").Router();
const res = require("express/lib/response");
const fs = require("fs");

// following the CRUD methods; create, read, update, delete notes

// create a function that GETS all notes by reading the db.json file
// and returns the data
router.get("/notes", function (req, res) {
  fs.readFile("./data/db.json", (err, data) => {
    if (err) throw err;
    notes = JSON.parse(data);
    return res.json(notes);
  });
});
// create a GET function that gets notes by ID
router.get("/notes/:id", function (req, res) {
  var id = req.params.id;
  fs.readFileSync("./data/db.json", (err, data) => {
    if (err) throw err;
    notes = JSON.parse(data);
  });

  console.log("Looking for note ID: " + id + "=============");

  for (var i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
      console.log("Found:");
      console.log(notes[i]);
      return res.json(notes[i]);
    }
  }

  res.json(id);
});
