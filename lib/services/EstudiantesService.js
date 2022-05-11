const Reader = require("./../utils/Reader");

class EstudiantesService{
    static getAllStudents(){
        const explorers = Reader.readJsonFile("explorers.json");
        return explorers
    }
}

module.exports = EstudiantesService;