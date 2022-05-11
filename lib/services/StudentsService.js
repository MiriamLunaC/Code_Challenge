const Reader = require("../utils/Reader");

class StudentsService{
    static getAllStudents(){
        const explorers = Reader.readJsonFile("students.json");
        return explorers
    }
}

module.exports = StudentsService;