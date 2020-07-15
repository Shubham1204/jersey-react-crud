import React, { useState, useEffect,Fragment } from "react";
// import ProjectSnippet from "./ProjectSnippet";
// import db from "../../firebase";
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const UserDetail = (props) => {
  
    const [users,setUser] = useState('');

//   const [projects, setProjects] = useState([]);
useEffect(()=>{
    axios.get('http://localhost:8080/rest/webapi/myresource/getadded')
    .then(response =>{
      console.log('resp :: ',response.data.email);
      if(JSON.parse(localStorage.getItem('user')).sid==response.data.sid){
      setUser(response.data);
      // console.log('users:: ',users);
      }
      else{
        console.log("unable !!")
      }
    })
    // console.log('asd');
  },[])

  return (
    <div>
      <h1>user</h1>
           {/* {users.map(post=>
      <Fragment>
      <h6>{post.sid}</h6>
        <h1>{post.name}</h1>
      <h6>{post.email}</h6>
      </Fragment>
      )} */}
      <p>{users.sid}
      </p>
      <p>
      {users.email}
      </p>
      <p>
      {users.name}
      </p>
           {/* {localStorage.getItem('user')} */}

    </div>
  );
};

export default UserDetail;