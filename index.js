const express = require("express")
const path = require("path")
const cors = require("cors")

const app = express();
const port = 8080
const addr_public = "10.74.234.229"
const addr_local = "127.0.0.1";

const activities = []

app.use(cors());
// return string on adding to array
app.get("/newActivity/:desc", (req, res) => {
    activities.push(req.params.desc)
    console.log("added new activity", req.params.desc)
    res.send("successfully created activity " + req.params.desc)
})

// returns array that would be board
app.get("/generateBoard", (req, res) => {
    console.log("generating board")
    res.send(activities)
})

app.use("/", express.static(path.join(__dirname, "./public/")))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})


const addr = addr_local;
app.listen(port, () => {
    console.log("app listening on ", addr, ":", port)
})
