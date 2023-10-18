const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/my-app")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((e) => {
    console.log("failed", e);
  });

  const tutor = new mongoose.Schema({
    Name : {
        type : String,
        required:true
    },
    Email :{
        type:String,
        required:true
    },
    Password : {
        type : String,
        required:true
    },
    Quiz : {
        type : Array,
    }
})

const tutorCollection = mongoose.model("tutorCollection",tutor);
module.exports = tutorCollection

