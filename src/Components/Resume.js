import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import "./Res.css";
import { Link } from "react-router-dom";



function Events() {


  const [movieReviewList,setMovieList] = useState([]);

  

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      setMovieList(response.data);
    });
  },[]);
  
  
  
  
  return (
    
  
    
    <div className="Res">
   
      
      

      <div className='form'>
     
        

        {movieReviewList.map((val)=>{
          return(
            <div className='cardo'>
              <div className='inso'>
              <h1 style={{color:"white"}}> {val.Singer} </h1> 
              <p style={{color:"white"}}> {val.Date}</p>
              <p style={{color:"white"}}> {val.Word}</p>
              <Link to="/AdminGallery" style={{ 
              color: 'white',
              }}>Reserve Now</Link>
            </div>
            </div>
        );
        })}
     
      </div>
      
    </div>
    
  
  );
}


export default Events;
