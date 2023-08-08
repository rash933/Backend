const express = require("express");
const router = express.Router();

const {
    getStudents,
    getStudentsByParameters,
    getStudent,
    RegisterStudent,
    updateStudent

} = require("../controllers/studentController");


router.get("/students", getStudents);
router.post("/studentby", getStudentsByParameters);
router.post("/students/login", getStudentsByParameters);
router.get("/student/:id", getStudent);
router.post("/student/register", RegisterStudent);
router.put("/student/update/:id", updateStudent);

module.exports = router;