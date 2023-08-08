const Mark = require("../models/marksModel");

const getMarks = async (req, res) => {
    await Mark.find()
        .then((mark) => {
            res.status(200).json(mark);
        })
        .catch((err) => {
            res.json(err).status(400);
        });
};


const getMark = async (req, res) => {
    await Mark.findById(req.params.id)
        .then((mark) => {
            res.status(200).json(mark);
        })
        .catch((err) => {
            res.json(err).status(400);
        });
};


const getMarksByParameters = async (req, res) => {
    await Mark.find(req.body)
        .then((marks) => {
            res.status(200).json(marks);
        })
        .catch((err) => {
            res.json(err).status(400);
        });
};

const AddMark = (req, res) => {
    const mark = new Mark({

        PerformanceM: req.body.performancem,
        TestM: req.body.testm,
        AssignmentM: req.body.assignmentm,
        AttandenceM: req.body.attandencem,
        FeedBack: req.body.feedback,     
        TeacherId: req.body.teacherid,
        StudentID: req.body.studentid,
        Prediction: req.body.prediction,
    });

    mark
        .save()
        .then((savedDoc) => {
            res.status(200).json({ massege: "added successful", success: true, id: savedDoc.id });
        })
        .catch((err) => {
            res.json(err).status(400);
        });
};

const updateMarks = async (req, res) => {
    try {
        const mark = await Mark.findById(req.params.id);

        if (!mark) {
            return res.status(404).json({ message: "Marks not found", success: false });
        }

        // Update only the fields present in the request body
        if (req.body.performancem) {
            mark.PerformanceM = req.body.performancem;
        }

        if (req.body.testm) {
            mark.TestM = req.body.testm;
        }

        if (req.body.assignmentm) {
            mark.AssignmentM = req.body.assignmentm;
        }

        if (req.body.attandencem) {
            mark.AttandenceM = req.body.attandencem;
        }

        if (req.body.feedback) {
            mark.FeedBack = req.body.feedback;
        }

        if (req.body.teacherid) {
            mark.TeacherId = req.body.teacherid;
        }

        if (req.body.studentid) {
            mark.StudentID = req.body.studentid;
        }

        if (req.body.prediction) {
            mark.Prediction = req.body.prediction;
        }

        await mark.save();

        res.status(200).json({ message: "Updated successfully", success: true });
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.updateMarks = updateMarks;
exports.getMarks = getMarks;
exports.getMark = getMark;
exports.getMarksByParameters = getMarksByParameters;
exports.AddMark = AddMark;
