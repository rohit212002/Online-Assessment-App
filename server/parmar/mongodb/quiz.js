const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/my-app")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch((e) => {
        console.log("failed", e);
    });
const quiz = new mongoose.Schema({
    Subject: {
        type: String,
        required: true
    },
    Quizes: {
        type: Array,
        required: true
    }

})

const Quiz = mongoose.model("Quiz", quiz)
module.exports = Quiz
