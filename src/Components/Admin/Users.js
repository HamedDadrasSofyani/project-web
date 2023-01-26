import './add.css';
import React, {useState,useEffect} from 'react';
import Axios from 'axios';


function Users() {

 
  const [movieReviewList,setMovieList] = useState([]);
 
 
  
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/getUser").then((response)=>{
      setMovieList(response.data);
    });
  },[]);
  const deleteUser =(Email)=> {
    Axios.delete(`http://localhost:3001/api/deleteUser/${Email}`);

  };
 
  
    
  return (
    
   
    <div className="zzz" >
      <table>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Delete</th>
        </tr>
        {movieReviewList.map((val, key) => {
          return (
            <tr key={val.idUser}>
              <td>{val.First}</td>
              <td>{val.Last}</td>
              <td>{val.Email}</td>
              <td>{val.Pass}</td>
              <div className='butt'>
              <button onClick={()=>{deleteUser(val.Email)}}>Delete</button>
              </div>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default Users;