import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

import BoardDisplay from './Components/BoardDisplay.jsx'

function App() {

  const [activityName, setActivityName] = useState("")
  const [renderedActivities, setRenderedActivities] = useState([])

  const addActivityHandler = function() {

    fetch("http://192.168.0.17:8080/newActivity/"+activityName,{
      method: "GET",
    })
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const updateActivityName = function(e) {
    setActivityName(e.target.value)
  }

  const fetchActivities = function(e) {
    fetch("http://192.168.0.17:8080/generateBoard", {
      mode: 'cors'
    })
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((data) => {
      console.log(data)
      setRenderedActivities(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <input types="text" onChange={(e) => { updateActivityName(e)}} placeholder={"describe activity here"}></input><button type="button" onClick={() => { addActivityHandler()}}>save</button>
      <button type="button" onClick={() => {fetchActivities()}}>generateBoard</button>
      <BoardDisplay activities={renderedActivities}></BoardDisplay>
    </div>
  );
}

export default App;
