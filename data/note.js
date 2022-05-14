class Note {
  constructor(title, body) {
    this.title = title;
    this.body = body;

    Note.lastId++;
    this.id = Note.lastId;
  }
}
//Id is incremented automatically
Note.lastId = 0;

module.exports = Note;
