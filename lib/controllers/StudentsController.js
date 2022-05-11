const StudentsService = require("../services/StudentsService");

class StudentsController{
    static getAllStudents(){
        return StudentsService.getAllStudents();
    }

    static getEmailByHaveCertification(){
        return StudentsService.getEmailsByHaveCertification();
    }

    static getStudentsByCredits(credits){
        return StudentsService.getStudentsByCredits(credits);
    }
}

module.exports = StudentsController;