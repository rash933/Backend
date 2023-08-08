const Teacher =require("../models/teacherModel");

const getTeachers = async (req, res) => {
    await Teacher.find()
        .then((teacher) => {
            res.status(200).json(teacher);
        })
        .catch((err) => {
            res.json(err).status(400);
        });
};


const getTeacher = async (req, res) => {
    await Teacher.findById(req.params.id)
        .then((teacher) => {
            res.status(200).json(teacher);
        })
        .catch((err) => {
            res.json(err).status(400);
        });
};


const getTeachersByParameters = async (req, res) => {
    await Teacher.find(req.body)
        .then((teachers) => {
            res.status(200).json(teachers);
        })
        .catch((err) => {
            res.json(err).status(400);
        });
};

const RegisterTeacher = (req, res) => {
    const teacher = new Teacher({
       
        Name: req.body.name,
        Email: req.body.email,
        Password: req.body.password,
  
        DOB: req.body.dob,
        Role: req.body.role,
        StageStatus: req.body.stagestatus,
    });

    teacher
        .save()
        .then((savedDoc) => {
            res.status(200).json({ massege: "added successful", success: true, id: savedDoc.id });
        })
        .catch((err) => {
            res.json(err).status(400);
        });
};

// const updateTeacher = async (req, res) => {
//     await Teacher.findById(req.params.id)
//         .then((teacher) => {

//             teacher.Name = req.body.name;
//             teacher.Email = req.body.email;
//             teacher.Password = req.body.password;
        
//             teacher.DOB = req.body.dob;
//             teacher.Role = req.body.role;
//             teacher.StageStatus = req.body.stagestatus;
           
//             await
//             teacher
//                 .save()
//                 .then(
//                     res.status(200).json({ massege: "updated successful", success: true })
//                 )
//                 .catch((err) => {
//                     res.json(err).status(400);
//                 });
//         })
//         .catch((err) => {
//             res.json(err).status(400);
//         });
// };

const updateTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);

        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found", success: false });
        }

        // Update only the fields present in the request body
        if (req.body.name) {
            teacher.Name = req.body.name;
        }

        if (req.body.email) {
            teacher.Email = req.body.email;
        }

        if (req.body.password) {
            teacher.Password = req.body.password;
        }

        if (req.body.teacherid) {
            teacher.TeacherID = req.body.teacherid;
        }

        if (req.body.dob) {
            teacher.DOB = req.body.dob;
        }

        if (req.body.role) {
            teacher.Role = req.body.role;
        }
        if (req.body.stagestatus) {
            teacher.StageStatus = req.body.stagestatus;
        }


        await teacher.save();

        res.status(200).json({ message: "Updated successfully", success: true });
    } catch (err) {
        res.status(400).json(err);
    }
};


exports.getTeachers = getTeachers;
exports.getTeacher = getTeacher;
exports.getTeachersByParameters = getTeachersByParameters;
exports.RegisterTeacher = RegisterTeacher;
exports.updateTeacher = updateTeacher;