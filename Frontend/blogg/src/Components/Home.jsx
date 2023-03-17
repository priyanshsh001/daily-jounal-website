import React, {useState, useEffect} from "react";
import axios from "axios";
import SinglePost from "./Singlepost";
import Empty from "../pages/empty"
import {useAuthContext} from "../hooks/useAuthContext"
const BASE_URl=process.env.REACT_APP_BASE_URL;
function Home()
{
    const [allPosts, setAllPosts] = useState([]);
    const { user } = useAuthContext()
    
    useEffect(() => {
        if(user){
                axios.get(`${BASE_URl}/compose`, {
                    headers: { 'Authorization': `Bearer ${user.token}` },
                  })
                .then (res => {
                    setAllPosts(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
            }
            },[user]);
            function deletePost(id)
            { console.log(id)
                
                axios.delete(`${BASE_URl}/${id}`, {
                    headers: { 'Authorization': `Bearer ${user.token}` },
                  })
                     .then(res => console.log(res.data))
                    .catch(err =>console.log(err));
                    setAllPosts(allThePosts => {
                        return allThePosts.filter(post => post._id !== id)
                    });
            }
         
    return (
        <div>
           { allPosts.length===0?<Empty/>:allPosts.map(currpost =>{
                return <SinglePost key={currpost._id}
                     _id={currpost._id} title={currpost.title} content={currpost.content}  onDelete={deletePost}   />
            })
        }
        </div>
    );
}
export default Home;