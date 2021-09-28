import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import CovidData from './components/CovidData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TableData from './components/TableData';

function App() {
  let [covidData, setCovidData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const API_URL = `https://api.covid19api.com/live/country/usa/status/confirmed/date/2020-03-21T13:13:30Z`
  
  useEffect(() => {
      setLoading(true)
      fetch(API_URL)
      .then(res => {
          // console.log('in res', res)
          return res.json()
      })
      .then(data => {
        // Filters data from taday's date
          setCovidData(data.filter(el => {
            const today = new Date().toISOString().slice(0, -14);
            return today ===  el.Date.slice(0,-10)
            }
          ))
      })
      .catch(error => {
          // console.log('in error', error)
          setError(error)
      })
  },[])

  console.log({covidData})

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <CovidData covidData={covidData} />
        </Route>
        <Route path='/table'>
          <TableData covidData={covidData} setCovidData={setCovidData} />
        </Route>
      </Switch>
     </Router>
  );
}

export default App;
