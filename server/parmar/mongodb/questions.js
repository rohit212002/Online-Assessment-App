const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/my-app")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch((e) => {
        console.log("failed", e);
    });
const questions = new mongoose.Schema({
    Description: {
        type: String,
        required: true
    },
    Option1: {
        type: String,
        required: true

    },
    Option2: {
        type: String,
        required: true

    },
    Option3: {
        type: String,
        required: true

    },
    Option4: {
        type: String,
        required: true
    },
    correctOption: {
        type: Number,
        required: true
    }
})


const Questions = mongoose.model("Questions", questions)
module.exports = Questions
