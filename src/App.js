import "./App.css";
import React, { useEffect, useState } from "react";
import TempHumidDisp from "./components/TempHumidDisp";
import { BsFillCloudSunFill } from 'react-icons/bs';
import Charts from "./components/Charts";


function App() {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [thdata, setThdata] = useState();
  
  

  useEffect(() => {
    
      fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => {
      
        const limitedData = data.slice(data.length -1,data.length)
        setThdata(limitedData)}
        ) 
      
  },[])


  return (
    <>
    <div>
      <div class='title'>
      <h1> <BsFillCloudSunFill/> Temperature and Humidity Dashboard</h1>
      </div>
      {thdata && thdata.map((ln,index) =>{
        return (
      <TempHumidDisp  key={index} temperature={ln.temperature} humidity={ln.humidity} time={ln.lastUpdated} />
      )
      })
      }
      </div>
      <div><Charts/></div>
    
   
      </>
      
  );
}

export default App;
