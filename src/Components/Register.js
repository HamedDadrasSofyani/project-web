
import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import "./Res.css";



function Register() {

  const [movieName,setMovieName] = useState('');
  const [review,setReview] = useState('');
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const [movieReviewList,setMovieList] = useState([]);
  

  
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      setMovieList(response.data);
    });
  },[]);
  const submitReview = ()=>{
    Axios.post('http://localhost:3001/api/insertUser',{movieName:movieName,movieReview:review,email:email,pass:pass});
        setMovieList([...movieReviewList,{movieName:movieName,movieReview:review,email,pass},
        ]);
  };
  
  
  
  return (
    
   <div>
    
    <div className="Reg">
   
     
      

      <div className='form'>
      <h1>Register</h1>
        <label style={{color:'white'}}>First Name</label>
        <input type ="text" name = "movieName" onChange={(e)=>{
            setMovieName(e.target.value);
        }}  />
       
     
        <label style={{color:'white'}}>Last Name</label>
        <input type ="text" name = "review" onChange={(e)=>{
          setReview(e.target.value);
        }}/>
        <label style={{color:'white'}}>Email</label>
        <input type ="text" name = "review" onChange={(e)=>{
          setEmail(e.target.value);
        }}/>
        <label style={{color:'white'}}>Password</label>
        <input type ="text" name = "review" onChange={(e)=>{
          setPass(e.target.value);
        }}/>
        
     
    
        <button onClick={submitReview} style={{marginTop:"2%"}}>Submit</button>
     
      </div>
      
    </div>
    
    </div>
  );
}


export default Register;