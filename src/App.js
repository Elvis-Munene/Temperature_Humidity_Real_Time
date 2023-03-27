import "./App.css";
import React, { useEffect, useState } from "react";
import TempHumidDisp from "./components/TempHumidDisp";
import { BsFillCloudSunFill } from 'react-icons/bs';
import PrimeChart from "./components/PrimeChart";




function App() {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [thdata, setThdata] = useState();
  const [unlimitedDataset, setUnlimitedDataset] = useState();
  const [intervalCount, setintervalCount] = useState(10);
  // const [lastCount, setlastCount] = useState(0);
  
  
// console.log(unlimitedDataset);  
  const handleClick = () => {
    // setInterval(() => { 
    setintervalCount(intervalCount + 5);
    // setlastCount(intervalCount + 5);
  // }, "100");
  };




  useEffect(() => {
    setInterval(() => { 
      // fetch("http://localhost:3000/")  
      fetch("https://temp-humid-api.onrender.com/")  
      .then((response) => response.json())
      .then((data) => {
   
        const limitedData = data.slice(data.length -1,data.length)
        // const plotData = data.slice(data.length -6,data.length)
        setThdata(limitedData)
   
        // setUnlimitedData(plotData)
      }
        ) 
      }, "1000");
     
  },[])



  useEffect(() => {
    // setInterval(() => { 
      // fetch("http://localhost:3000/")  
      fetch("https://temp-humid-api.onrender.com/")  
      .then((response) => response.json())
      .then((data) => {
        
        let start = data.length-intervalCount;
        let end = data.length;
        let limitedData = data.slice(start, end);
        // const limitedData = data.slice(data.length -6,data.length)

        setUnlimitedDataset(limitedData)

        // const limitedDataset = data.slice(data.length -intervalCount,data.length - lastCount)
  
        // const plotData = data.slice(data.length -6,data.length)
        // function limitedData (){
        //   return data.slice(data.length -intervalCount,data.length - lastCount)
        // }
   
        // setUnlimitedDataset(limitedData)
        // setUnlimitedData(plotData)
      }
        ) 
      // }, "1000");
     
  },[intervalCount])


  // useEffect(() => {
  //   const socket = new WebSocket('ws://localhost:3000');
  //   socket.onmessage = (event) => {
  //     const newData = JSON.parse(event.data);
  //     setData([...data, newData]);
  //   };
  // }, []);



  return (
    <>
    <div>
      <div class='title'>
      <h1> <BsFillCloudSunFill/> Temperature and Humidity Dashboard</h1>
      </div>
      <div className="report_readings">
      {thdata && thdata.map((ln,index) =>{
        return (
      <TempHumidDisp  key={index} temperature={ln.temperature} humidity={ln.humidity} time={ln.record_date} />
      )
      })
      }
      </div>
      </div>
      <div class='title'>
      <h1>Temperature vs Humidity</h1>
      <div>
      {/* {unlimitedData && unlimitedData.map((ln,index) =>{
        return (
      <PrimeChart   key={index} graphData={unlimitedData} />
      )
      })
      } */}
      <PrimeChart myData={unlimitedDataset}/>
      </div>
      </div>
      <div className="buttons_twice">
      <div class="button_int_1">
        <div><button type="button" class="btn btn-primary" onClick={handleClick}>View the last 5 minute interval</button></div>
      </div> 
     <div class="button_int_2">
       
        <div> <button type="button" class="btn btn-primary" onClick={handleClick}>Export to CSV</button></div>    
     </div>
     </div>
    
   
      </>
      
  );
}

export default App;
