const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
//const cors = require("cors")

const app = express();
const port = 8080
const addr_public = "192.168.0.18"
const addr_local = "127.0.0.1";

const MONGODB_URI = 'mongodb+srv://gravydome:JEX6D2vLT3sXubAG@bingoboarddb.9qygl.mongodb.net/BingoBoardDB?retryWrites=true&w=majority';
const activities = []

//connect DB
mongoose.connect(MONGODB_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

//verify successful connection
mongoose.connection.on('connected', ()=> {
  console.log('Mongoose is connected mufuackah!!!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//schema
const Schema = mongoose.Schema;
const ActivitySchema = new Schema({
  activity: String
});

//model
const Activity = mongoose.model('Activity', ActivitySchema);

//saving test data to DB
//const testData = {
  // activity: 'Bashing drama llama with a bat'
//}

//const newActivity = new Activity(testData);
//newActivity.save((error) => {
  //  if (error){
    //  console.log('Fuck, something went wrong u cheeky bean');
    //}else{
      //console.log('Data has been saved muthuafucka')
    //}
//});

//app.use(cors());
// return string on adding to array
app.get("/newActivity/:desc", (req, res) => {
    //activities.push(req.params.desc)
    const data = req.params.desc;
    const newActivity = new Activity({activity: data});
    newActivity.save((error) => {
      if(error){
        res.status(500).json({msg: 'Sorry, internal server errors dude'});
      }else {
        res.send("successfully created activity " + data)
        console.log("added new activity", data)
      }
    })

})

Activity.countDocuments({}, function (err, count) {
console.log('activities:', count);
if(count == 7){
  Activity.find({}).lean().exec(function (err, docs) {
    // docs are plain javascript objects instead of model instances
});
}
});

// returns array that would be board
app.get("/generateBoard", (req, res) => {

  //check for 16 and returns docs
  Activity.countDocuments({}, function (err, count) {
  console.log('activities:', count);
  if(count == 16){
    Activity.find({}).lean().exec(function (err, docs) {
      res.send(docs);
      console.log("generating board")
  });

  }
});

app.get("/listActivities, (req, res) => {

  //check for 16 and returns docs
  Activity.countDocuments({}, function (err, count) {
  console.log('activities:', count);
    Activity.find({}).lean().exec(function (err, docs) {
      res.send(docs);
      console.log("generating board")
  });
});
  //return 16 in array
  //  console.log("generating board")
    //res.send(activities)
})

app.use("/", express.static(path.join(__dirname, "./public/")))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})


const addr = addr_local;
app.listen(port, () => {
    console.log("app listening on ", addr, ":", port)
})
