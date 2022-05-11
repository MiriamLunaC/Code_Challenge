const Reader = require("../utils/Reader");

class StudentsService{
    static getAllStudents(){
        const students = Reader.readJsonFile("students.json");
        return students;
    }

    static getEmailsByHaveCertification(){
        const students = Reader.readJsonFile("students.json");
        const studentsHaveCertification = students.filter((student)=> student.haveCertification);
        return studentsHaveCertification.map((student)=> student.email);
    }
}

module.exports = StudentsService;