const StudentsController = require("./../../lib/controllers/StudentsController");

describe("Tests for StudentsController", ()=>{
    test("Get all students", ()=>{
        const students = StudentsController.getAllStudents();
        expect(students.length).not.toBe(undefined);
        expect(students.length).not.toBe(null);
        expect(students.length).toBeGreaterThan(0);
    });

    test("Get student's email if have certificatioin",()=>{
        const emails = StudentsController.getEmailByHaveCertification();
        expect(emails.length).not.toBe(undefined);
        expect(emails.length).not.toBe(null);
        expect(emails.length).toBeGreaterThan(0);
    });

    test("Get student's data if credits > 500", ()=>{
        const students = StudentsController.getStudentsByCredits(500);
        expect(students.length).not.toBe(undefined);
        expect(students.length).not.toBe(null);
        expect(students.length).toBeGreaterThan(0);
        expect(students[0].credits).toBeGreaterThan(500);
    })
});