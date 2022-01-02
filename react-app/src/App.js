import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'



import BoardDisplay from './Components/BoardDisplay.jsx'
import ActivityList from './Components/ActivityList.jsx'

let activities = []

function App() {

  const [activityName, setActivityName] = useState("")
  const [renderedActivities, setRenderedActivities] = useState([])
  const [listedActivities, setListedActivities] = useState([])

  const addActivityHandler = function () {

    fetch("http://127.0.0.1:8080/newActivity/" + activityName, {
      method: "GET",
    })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const updateActivityName = function (e) {
    setActivityName(e.target.value)
  }

  const fetchActivities = function (e) {
    fetch("http://127.0.0.1:8080/generateBoard", {
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((data) => {
        console.log(data)
        activities = []
        for(let i = 0; i++; i < data.length) {
          activities.push(data)
        }
        console.log(activities)
        setRenderedActivities(activities)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const listActivities = function (e) {
    fetch("http://127.0.0.1:8080/listActivities", {
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((data) => {
        console.log('listed activities: ' + data)
        setListedActivities(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const deleteActivity = function(id) {
    fetch("http://127.0.0.1:8080/deleteActivity/" + id, {

    }).then((response) => {
      console.log(response)
      listActivities()
    })
  }

  useEffect(() => {
    listActivities();
  }, []);

  return (
    <div className="App">
      <TextField id="outlined-basic" label="Activity" variant="outlined" onChange={(e) => { updateActivityName(e) }} placeholder={"describe activity here"} onKeyDown={(e) => { e.keyCode===13? addActivityHandler()&listActivities()&(e.target.value=''): null }} />
      <Button sx={{height:"100%"}} size="large" variant="contained" onClick={() => { addActivityHandler(); listActivities() }}>save</Button>
      <Button sx={{height:"100%"}} size="large" variant="contained" onClick={() => { fetchActivities() }}>generateBoard</Button>
      <Button sx={{height:"100%"}} size="large" variant="contained" onClick={() => { fetchActivities() }}>clear</Button>
      <ActivityList activities={listedActivities} deleteEntry={deleteActivity}></ActivityList>
      <BoardDisplay activities={renderedActivities}></BoardDisplay>
    </div>
  );
}


export default App;
