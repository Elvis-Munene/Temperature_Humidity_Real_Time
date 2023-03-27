import React from "react";
import { BsThermometerSun} from 'react-icons/bs';
import { WiHumidity } from 'react-icons/wi';
import Gradient from 'rgt';
import CountUp from 'react-countup';
import Moment from 'moment';



function TempHumidDisp({ temperature, humidity, time }) {





  return (
    <div class="temphumid">
      
      <div className="container-fluid">
      <h2>
        <Gradient dir="left-to-right" from="#00DFD8" to="#007CF0">Current Temperature:</Gradient> 
        <BsThermometerSun/><div class="output">
          <div className="count"><CountUp decimals={1} end={temperature} />°C</div>
          <div className="count_date">{Moment().utc(time).format("MMMM do, yyyy H:mma")}</div>
        
          
        
          </div>
      </h2>

      </div>



      <div className="container-fluid">
      <h2>
      <Gradient dir="left-to-right" from="#00DFD8" to="#007CF0">Current Humidity:</Gradient>
       <WiHumidity/><div class="output">
       <div className="count"><CountUp decimals={1} end={humidity} />%</div>
       <div className="count_date">{Moment().utc(time).format("MMMM do, yyyy H:mma")}</div>
       
    
    
        
        </div>
      </h2>
      
    
        </div>
     
    </div>
  );
}

export default TempHumidDisp;
