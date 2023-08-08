const express = require("express");
const router = express.Router();

const {
    mailSend,
    
} = require("../controllers/veryfiController");


router.post("/mailsend", mailSend);


module.exports = router;