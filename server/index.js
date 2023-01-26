const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser =require('body-parser');
const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
    database:'crud'
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/api/get',(req,res)=>{
    const sqlSelect =
    "SELECT * FROM events";
    db.query(sqlSelect, (err,result)=>{
        res.send(result);
    })
});
app.get('/api/getUser',(req,res)=>{
    const sqlSelect =
    "SELECT * FROM users";
    db.query(sqlSelect, (err,result)=>{
        res.send(result);
    })
});
app.get('/api/getEvent',(req,res)=>{
    const sqlSelect =
    "SELECT * FROM events";
    db.query(sqlSelect, (err,result)=>{
        res.send(result);
    })
});
app.post('/api/insertUser',(req,res)=>{

    const movieName =req.body.movieName;
    const movieReview =req.body.movieReview;
    const email =req.body.email;
    const pass =req.body.pass;

    const sqlInsert= "INSERT INTO  users (first,last,email,pass) VALUES(?,?,?,?)";
    db.query(sqlInsert,[movieName,movieReview,email,pass],(err,result)=>{
        
        console.log(err)
    })
    
}); 
app.post('/api/insert-singer',(req,res)=>{

    const movieName =req.body.movieName;
    const movieReview =req.body.movieReview;
    const price =req.body.price;
    const date =req.body.date;
    const seat =req.body.seat;
    const sqlInsert= "INSERT INTO events (Singer,Price,Date,Seat,Word) VALUES(?,?,?,?,?)";
    db.query(sqlInsert,[movieName,price,date,seat,movieReview],(err,result)=>{
        console.log(err);
    })
   
}); 
app.delete("/api/delete/:movieName",(req,res)=>{

    const name =req.params.movieName;
    const sqlDelete= 
    "DELETE FROM events WHERE Singer = ?";
    db.query(sqlDelete,name , (err,result)=>{
        if (err) console.log(err);
    });
}); 
app.delete("/api/deleteUser/:Email",(req,res)=>{

    const name =req.params.Email;
    const sqlDelete= 
    "DELETE FROM users WHERE Email = ?";
    db.query(sqlDelete,name , (err,result)=>{
        if (err) console.log(err);
    });
}); 
app.put("/api/update",(req,res)=>{

    const name =req.body.movieName;
    const review =req.body.movieReview;
    const sqlUpdate= 
    "UPDATE movie_reviews SET movieReview = ? WHERE movieName = ?";
    db.query(sqlUpdate, [review,name], (err,result)=>{
        if (err) console.log(err);
    });
});

app.listen(3001,()=>{
    console.log("running on port 3001");
});