const express = require("express")
const router = express.Router()

const questions = require("./mongodb/questions");
const quiz = require("./mongodb/quiz");

router.post("/", async (req, res) => {
    const { description, option1, option2, option3, option4, correctOption } = req.body;
    const data = {
        Description: description,
        Option1: option1,
        Option2: option2,
        Option3: option3,
        Option4: option4,
        correctOption: correctOption,
    }
    const insertedData = await questions.insertMany([data]);
    const insertedDocument = insertedData[0];

    const objectId = insertedDocument._id;

    console.log(objectId);
    console.log(req.body);
    console.log(correctOption);
})
module.exports = router;
