import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

import { useAuthContext } from "../hooks/useAuthContext";
const BASE_URl = process.env.REACT_APP_BASE_URL;

function NewItem(props) {
  return (
    <div className="itemdiv">
      <h2 >{props.title}</h2>
      <p >{props.content} </p>

    </div>
  )
}

function Item() {

 
  const [currstate, setstate] = React.useState([]);

  const { user } = useAuthContext()

  const id = useParams();
 
  useEffect(()=>{
  
    if (user) {
      axios.get(`${BASE_URl}/${id.postId}`, {
        headers: { 'Authorization': `Bearer ${user.token}` },
      })
        .then(res =>
          setstate(prev => {
            return [res.data];
          })
  
        )
  
        .catch(err => {
          console.log(err);
        })
    }
  },[user])
 
  return (
    <div>
      {currstate.map(curr => {
        return <NewItem key ={curr._id} title={curr.title} content={curr.content} />
      })


      }
    </div>
  )


}

export default Item;
