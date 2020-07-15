import React, { useState, useEffect,Fragment } from "react";
// import ProjectSnippet from "./ProjectSnippet";
// import db from "../../firebase";
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Myjson = (props) => {
  
    // const [posts,setPost] = useState([]);
//   const [projects, setProjects] = useState([]);
useEffect(()=>{
    axios.get('https://12shubhamgupta1999.github.io/company-json/employees.json')
    .then(response =>{
      console.log(response.data);
      // setPost(response.data);
    })
    // console.log('asd');
  },[])

  return (
    <div>
     <h1>gyhg</h1>

    </div>
  );
};

export default Myjson;