const Student = require("../models/studentModel");

const getStudents = async (req, res) => {
    await Student.find()
        .then((student) => {
            res.status(200).json(student);
        })
        .catch((err) => {
            res.json(err).status(400);
        });
};


const getStudent = async (req, res) => {
    await Student.findById(req.params.id)
        .then((student) => {
            res.status(200).json(student);
        })
        .catch((err) => {
            res.json(err).status(400);
        });
};


const getStudentsByParameters = async (req, res) => {
    await Student.find(req.body)
        .then((students) => {
            res.status(200).json(students);
        })
        .catch((err) => {
            res.json(err).status(400);
        });
};

const RegisterStudent = (req, res) => {
    const student = new Student({
       
        Name: req.body.name,
        Email: req.body.email,
        Password: req.body.password,
        TeacherID:req.body.teacherid,
        Dob: req.body.dob,
        Role: req.body.role,
        StageStatus: req.body.stagestatus,
        LevelStatus: req.body.levelstatus,
        Gender: req.body.gender,
        ParentQ: req.body.parentq,
        Quiz: req.body.quiz,
        Iq: req.body.iq,
    });

    student
        .save()
        .then((savedDoc) => {
            res.status(200).json({ massege: "added successful", success: true, id: savedDoc.id });
        })
        .catch((err) => {
            res.json(err).status(400);
        });
};

const updateStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({ message: "Student not found", success: false });
        }

        // Update only the fields present in the request body
        if (req.body.name) {
            student.Name = req.body.name;
        }

        if (req.body.email) {
            student.Email = req.body.email;
        }

        if (req.body.password) {
            student.Password = req.body.password;
        }

        if (req.body.teacherid) {
            student.TeacherID = req.body.teacherid;
        }

        if (req.body.dob) {
            student.Dob = req.body.dob;
        }

        if (req.body.role) {
            student.Role = req.body.role;
        }

        if (req.body.stagestatus) {
            student.StageStatus = req.body.stagestatus;
        }

        if (req.body.levelstatus) {
            student.LevelStatus = req.body.levelstatus;
        }

        if (req.body.gender) {
            student.Gender = req.body.gender;
        }

        if (req.body.parentq) {
            student.ParentQ = req.body.parentq;
        }

        if (req.body.quiz) {
            student.Quiz = req.body.quiz;
        }

        if (req.body.iq) {
            student.Iq = req.body.iq;
        }

        await student.save();

        res.status(200).json({ message: "Updated successfully", success: true });
    } catch (err) {
        res.status(400).json(err);
    }
};


exports.getStudents = getStudents;
exports.getStudent = getStudent;
exports.getStudentsByParameters = getStudentsByParameters;
exports.RegisterStudent = RegisterStudent;
exports.updateStudent = updateStudent;