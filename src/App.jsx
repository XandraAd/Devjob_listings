/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import JobCard from "./components/JobCard";
import jsonData from "./data/data.json"
import Button from "./components/Button";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);




  return (
    <>

<Nav />
<div className="job">
{data && data.length > 0 ? (
        <div  className="job-card">
          {data.map((item) => (
          
            <JobCard
              key={item.id}
              logo={item.logo}
              color={item.logoBackground}
              time={item.postedAt} 
              contract={item.contract}
              title={item.position}
              company={item.company}
              country={item.location}
            
             

            />
          ))}
        </div>

      ):(
        <p>Loading data not found......</p>
      )}
</div>



     

<Button/>
     

    </>
  );
}




export default App;





