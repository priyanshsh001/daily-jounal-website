import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom'

function SinglePost(props) {
 
 
    function handleClick() {
        props.onDelete(props._id)
    }
    let urll= props._id
   
    
    return(
 
        <div className="itemdivfront">
          
        <h2 className="itemhead">{props.title}</h2>
        <p className="itempara">{props.content.substring(0,100)+"..." } <Link to={`/${urll}`} >Read More</Link> <button className="icon-buttons" onClick={handleClick}><DeleteIcon   /></button></p>
      
        </div>
    )
}
 
export default SinglePost;
