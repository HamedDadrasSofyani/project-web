import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import "./Res.css";
import ParticlesBg from "particles-bg";


function Log() {

  const [movieName,setMovieName] = useState('');
  const [review,setReview] = useState('');
  const [movieReviewList,setMovieList] = useState([]);
 

  
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      setMovieList(response.data);
    });
  },[]);
  const submitReview = ()=>{
    Axios.post('http://localhost:3001/api/insert',{movieName:movieName,movieReview:review});
        setMovieList([...movieReviewList,{movieName:movieName,movieReview:review},
        ]);
  };
  
    
  
  
  return (
    
   <div>
    <ParticlesBg type="circle" bg={true} />
    <div className="Reg">
   
      <h1> Hi </h1>
      

      <div className='form'>
     
        <label style={{color:'white'}}>Email</label>
        <input type ="text" name = "movieName" onChange={(e)=>{
            setMovieName(e.target.value);
        }}  />
        
        
        <label style={{color:'white'}}>Password</label>
        <input type ="text" name = "review" onChange={(e)=>{
          setReview(e.target.value);
        }}/>
        
        
        <button onClick={submitReview} style={{marginTop:"2%"}}>Submit</button>
        
      </div>
      
    </div>
    
    </div>
  );
}


export default Log;