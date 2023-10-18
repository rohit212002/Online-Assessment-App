const express = require("express")
const router = express.Router()
router.post("/",async(req,res)=>{
    const {description,option1,option2 , option3 , option4 , correctAnswer} = req.body;
    console.log(req.body);
})
module.exports = router;
