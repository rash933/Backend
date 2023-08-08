const express = require("express");
const router = express.Router();

const {
    getTeachers,
    getTeacher,
    getTeachersByParameters,
    RegisterTeacher,
    updateTeacher
} = require("../controllers/teacherController");


router.get("/teachers", getTeachers);
router.post("/teachersby", getTeachersByParameters);
router.post("/teachers/login", getTeachersByParameters);
router.get("/teacher/:id", getTeacher);
router.post("/teacher/register", RegisterTeacher);
router.put("/teacher/update/:id", updateTeacher);

module.exports = router;