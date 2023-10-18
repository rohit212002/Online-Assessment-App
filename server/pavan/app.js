const express = require("express");
const router = express.Router();
const stuCollection = require("./mongodb/student.js");
const tutorCollection = require("./mongodb/tutorSchema.js");

router.post("/", async (req, res) => {
    const { email, password, typeOfStu } = req.body;
    console.log(req.body);
    let table = typeOfStu === "student" ? stuCollection : tutorCollection;
    try {
        const check = await table.findOne({ Email: email });
        let response = "not exist"; // Default response
        if (check) {
            if (check.Email === email && check.Password === password) {
                response = "exist";
            } else if (check.Email === email && check.Password !== password) {
                response = "wrong password";
            }
        }
        console.log(response);
        res.json(response); // Send the response once
    } catch (e) {
        res.json("not exist"); // Handle any errors by sending the response
    }
});

// signup
router.post("/signup", async (req, res) => {
    const { name, email, password, typeofacc } = req.body;
//    console.log(req.body);
    let table = '';
    console.log(typeofacc);
    if (typeofacc == "student") {
        table = stuCollection;
    } else {
        table = tutorCollection;
    }
    
    try {
        // console.log(table);
                // const data = {
                //     Name: name,
                //     Email: email,
                //     Password: password,
                // };
        
        // await stuCollection.insertMany([data]);
        const check = await table.findOne({ Email: email });
       // console.log(check);
        if (check) {
            res.json("exist");
            console.log("Inside the if");
        } else {
            const data = {
                Name: name,
                Email: email,
                Password: password,
            };
            console.log("data is else");
            await table.insertMany([data]);
            res.json("not exist");
        }
    } catch (e) {
        console.log(e);
        res.json("not exist");
    }
});

module.exports = router;
