const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const Pavans = require("./pavan/app");
app.use("/", Pavans);
const Parmars = require("./parmar/app");
app.use("/createquiz", Parmars);

app.listen(5000, () => {
    console.log("app listening on port 5000");
})