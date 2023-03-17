import React from "react";
import {  useNavigate } from "react-router-dom"
 import { useAuthContext } from "../hooks/useAuthContext";
function COMPOSE() {
    const {user}=useAuthContext();
    const navigate = useNavigate();
    const [title, settitle] = React.useState("");
    const [content,setcontent]=React.useState("");
    
    const BASE_URl=process.env.REACT_APP_BASE_URL;

    const Postdata =  async (e) => {
      
           e.preventDefault();
   
          console.log( title, content )
           let result =   await fetch(`${BASE_URl}/compose`, {
            method: "post",

            body: JSON.stringify({ title, content }),
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${user.token}` ,
                 
            },

        }).then((response) => {
            console.log(response)
            console.log("valid")
            navigate('/')
        }).catch((err)=>console.log(err));
        
     
        
    }
   

    return (
        <div className="form">
            <h1 className="h11">COMPOSE</h1>

            <form action="/compose" method="post">
                <div className="form-group">
                    <label >Title</label>
                    <input type="text" className="form-control" onChange={(e)=>settitle(e.target.value)
                    } id="exampleInputEmail1" name="title" autoComplete="off" value={title} required/>

                </div>
                <div className="form-group">
                    <label >Post</label>
                    <textarea id="exampleInputPassword1" onChange={(e)=>setcontent(e.target.value)
                    } name="content" className="form-control"   rows="4%" cols="70%"  value={content} required >
                    </textarea>
                </div>

                <button type="submit" onClick={Postdata} className="btn btn-primary">Publish</button>
            </form>
        </div>
    )
}
export default COMPOSE;