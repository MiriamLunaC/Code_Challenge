const StudentsService = require("../services/StudentsService");

class StudentsController{
    static getAllStudents(){
        return StudentsService.getAllStudents();
    }
}

module.exports = StudentsController;