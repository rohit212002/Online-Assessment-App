const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/my-app")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((e) => {
    console.log("failed", e);
  });
const student = new mongoose.Schema({
    Name : {
        type:String,
        required:true
    },
    Email :{
        type:String,
        required:true
         
    },
    Password:{
        type:String,
        required:true
         
    },
    Quizes:{
        UpcomingQuizes :{
            type : Array
        },
        AttendedQuizes :{
            type : Array
        }
    }
    
})



const stuCollection = mongoose.model("stuCollection",student)
module.exports = stuCollection
