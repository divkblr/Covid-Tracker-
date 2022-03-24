import React, { useEffect, useState } from 'react'
import './covid.css' 
const Covid = () => {
      const[data, setdata] = useState([]);
    const getcoviddata = async()=>{
       const res = await fetch("https://data.covid19india.org/data.json");
       const actualdata = await res.json();
       //console.log(actualdata.statewise[0]);
       setdata(actualdata.statewise[0]);
    }

     
    useEffect(() =>{
       getcoviddata();
    },[]);
    
    return (
<>
<section>
<h1>Covid Tracker</h1>
<div className="grid-container">
  <div className="grid-item">OUR COUNTRY
  <p>INDIA</p>
  </div>
  <div className="grid-item">TOTAL RECOVERED 
  <p>
      {data.deltarecovered}
  </p>
  </div>
  <div className="grid-item">TOTAL CONFIRMED
  <p>
  {data.deltaconfirmed}
  </p>
  </div>
  <div className="grid-item">TOTAL DEATH
  <p>
  {data.deltadeaths}
</p>
      </div>
  <div className="grid-item">TOTAL ACTIVE
  <p>
  {data.active}
      </p>
      </div>
  <div className="grid-item">LAST UPDATED
  <p>
  {data.lastupdatedtime}
       </p>
      </div>
</div>
   </section>
</>


    )
}

export default Covid