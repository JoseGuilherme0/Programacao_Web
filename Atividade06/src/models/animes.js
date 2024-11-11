const {v4: uuidv4} = require("uuid");

class Anime {
    constructor(name, genre, studio) {
        this.id = uuidv4();
        this.name = name;
        this.genre = genre;
        this.studio = studio;
    }
}

module.exports = Anime;