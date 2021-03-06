const StudentsController = require("./controllers/StudentsController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/v1/students", (request, response)=>{
    const students = StudentsController.getAllStudents();
    response.status(200).json(students);
});

app.get("/v1/students/emailByHaveCertification", (request, response)=>{
    const studentsEmail = StudentsController.getEmailByHaveCertification();
    response.status(200).json(studentsEmail);
});

app.get("/v1/students/credits/:credits", (request, response)=>{
    const credits = request.params.credits;
    const students = StudentsController.getStudentsByCredits(credits);
    response.status(200).json(students);
});

app.listen(port, () => {
    console.log(`Code_Challenge API in localhost:${port}`);
});