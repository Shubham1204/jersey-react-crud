import React, { useState, useEffect,Fragment } from "react";
// import ProjectSnippet from "./ProjectSnippet";
// import db from "../../firebase";
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Post = (props) => {
  
    const [posts,setPost] = useState([]);
//   const [projects, setProjects] = useState([]);
useEffect(()=>{
    axios.get('http://localhost:8080/rest/webapi/myresource/students')
    .then(response =>{
      console.log(response);
      setPost(response.data);
    })
    // console.log('asd');
  },[])

  return (
    <div>
           {posts.map(post=>
      <Fragment>
      <h6>{post.sid}</h6>
        <h1>{post.name}</h1>
      <h6>{post.email}</h6>
      </Fragment>
      )}

    </div>
  );
};

export default Post;