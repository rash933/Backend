const express = require("express");
const router = express.Router();

const {
    getMarks,
    getMark,
    getMarksByParameters,
    AddMark,
    updateMarks


} = require("../controllers/marksController");

router.put("/mark/update/:id", updateMarks);
router.get("/marks", getMarks);
router.post("/markby", getMarksByParameters);
router.get("/mark/:id", getMark);
router.post("/mark/add", AddMark);


module.exports = router;