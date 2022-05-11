const Reader = require("../utils/Reader");

class StudentsService{
    static getAllStudents(){
        const explorers = Reader.readJsonFile("explorers.json");
        return explorers
    }
}

module.exports = StudentsService;