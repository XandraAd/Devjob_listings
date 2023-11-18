/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const JobCard = ({logo, time, title,contract, company, country,color}) => {
    const cardStyle = {
        backgroundColor: color,
      };
  
  return (
    <>
    
    <div  className="jobCardStyle">
    <div className='cardLogo'>
        <img src={logo} alt="company logo" style={cardStyle}/>
    </ div>
    <div className='timeContract'>  
        <small className='text-muted'>{time}</small>
        <span>.</span>
    <small className='text-muted'> {contract}</small>
    </div>
    <div>
        <h2>{title}</h2>
        <h4 className='text-muted'>{company}</h4>
        <p >{country}</p>
    </div>


    
    </div>
  
   
  
   
  
    </>
  )
}

export default JobCard