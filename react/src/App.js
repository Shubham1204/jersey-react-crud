import React, { useState, Component, useEffect, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Post from './Post';
import UserDetail from './UserDetail';
import axio from './Myjson';
import Myjson from './Myjson';

// ComponentDidMount(){
//   axios.get('').
// }

function App() {

  // const [posts,setPost] = useState([]);
  // const [nameval,setNameval]= useState('');
  // const [email,setEmail]= useState('');
  // const [id,setId]= useState('');

  // const onidChange = (event) => setId(event.target.value);
  // const onEmailChange = (event) => setEmail(event.target.value);
  // const onnameChange = (event) => setNameval(event.target.value);

  


  return (
    <div>
      <Router>
      {/* <Route default exact path="/" ><Login /></Route> */}
      <Route default exact path="/" ><Myjson /></Route>
        <Route path="/post" ><Post /></Route>
        <Route path="/user" ><UserDetail /></Route>
      </Router>

     
    </div>
  );

  }
export default App;
