import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import "./Reg.css";



function Events() {

  const [movieName,setMovieName] = useState('');
  const [review,setReview] = useState('');
  const [movieReviewList,setMovieList] = useState([]);
  const [price,setprice] = useState(0);
  const [date,setdate] = useState('');
  const [seat,setseat] = useState(0);
  

  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      setMovieList(response.data);
    });
  },[]);
  const submitReview = ()=>{
    Axios.post('http://localhost:3001/api/insert-singer',{movieName:movieName,price:price,date:date,seat:seat,movieReview:review});
        setMovieList([...movieReviewList,{movieName:movieName,price:price,date:date,seat:seat,movieReview:review},
        ]);
  };
  const deleteReview =(movie)=> {
    Axios.delete(`http://localhost:3001/api/delete/${movie}`);

  };
  
  
  
  return (
    
  
    
    <div className="Reg">
   
      
      

      <div className='form'>
     
        <label style={{color:'white'}}>Singer</label>
        <input type ="text" name = "movieName" onChange={(e)=>{
            setMovieName(e.target.value);
        }}  />
       
     
        <label style={{color:'white'}}>Price</label>
        <input type ="int" name = "price" onChange={(e)=>{
          setprice(e.target.value);
        }}/>

        <label style={{color:'white'}}>Date</label>
        <input type ="text" name = "date" onChange={(e)=>{
          setdate(e.target.value);
        }}/>
        <label style={{color:'white'}}>Seat</label>
        <input type ="int" name = "date" onChange={(e)=>{
          setseat(e.target.value);
        }}/>


        <label style={{color:'white'}}>Word</label>
        <input type ="text" name = "review" onChange={(e)=>{
          setReview(e.target.value);
        }}/>
        
     
    
        <button onClick={submitReview} style={{marginTop:"2%"}}>Submit</button>

        {movieReviewList.map((val)=>{
          return(
            <div className='card'>
              <h1 style={{color:"white"}}> {val.Singer} </h1> 
              <p style={{color:"white"}}> {val.Date}</p>

              <button onClick={()=>{deleteReview(val.Singer)}}>Delete</button>

            </div>
        );
        })}
     
      </div>
      
    </div>
    
  
  );
}


export default Events;