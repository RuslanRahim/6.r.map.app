import React, { useState } from "react";
import "./App.css";
import data from "./data";

function App() {

  const [holidays,setHolidays]=useState(data)

  function deleteHoliday(id){
    const newArray=holidays.filter(holiday=>holiday.id !==id)
    setHolidays(newArray);  
  }


  return (
    <main>
      <section className="container">
        <h3>National Holidays Dates</h3>

        {holidays.map((holiday)=>{
          return (
            <div>
              <img key={holiday.id}
                src={holiday.img}
              />
              <div>
              <p>{holiday.title}</p>
              <p>{holiday.date}</p>
              <button 
                className="btn"
                onClick={()=>deleteHoliday(holiday.id)}
                >X</button>
              </div>
            </div>
           );
          })}
        <button onClick={()=>setHolidays([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
