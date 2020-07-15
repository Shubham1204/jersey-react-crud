import React, { useState, useEffect } from 'react';
// import db, { auth } from '../../firebase'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';

const Login = (props) => {

    const [posts,setPost] = useState([]);
//   const [nameval,setNameval]= useState('');
  const [email,setEmail]= useState('');
  const [id,setId]= useState('');

  const onidChange = (event) => setId(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.value);
//   const onnameChange = (event) => setNameval(event.target.value);

 
  const history = useHistory();

  const onSubmit = () => {
    // history.push("/projects");
    
    // const headers = new Headers();
  // headers.append('Content-Type','application/json');
//   const options = {
//     method: 'POST',
//     mode:'cors',
//     headers:{
//       'Accept':'application/json',
//       'Content-Type':'application/json'
//     },
//     // headers,
//     body: JSON.stringify({
//     sid: id,
//     name: nameval,
//     email: email
//   })
//   }

var formJson = {
    sid: id,
        // name: nameval,
        email: email
};
//   const request = new Request('http://localhost:8080/rest/webapi/myresource/addstudent',options)
  axios.post('http://localhost:8080/rest/webapi/myresource/addstudent',formJson)
//   const response = fetch(request)
  .then(response =>{
    console.log("my res-> ",response); 
   if(response.status==201){
    // localStorage.setItem("user",response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
     history.push('/user');
   }else{
    console.log("unable......")
   }

  });
  var json = JSON.stringify({
    sid: id,
    // name: nameval,
    email: email});
//   console.log(id,nameval,email,json,response.status);
}



  return (
    <div>

<input type="text" name="sid" placeholder="sid" value={id} onChange={onidChange}></input>
      {/* <input type="text" name="name" placeholder="name" value={nameval} onChange={onnameChange}></input> */}
      <input type="text" name="email" placeholder="email" value={email} onChange={onEmailChange}></input>
        <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default Login;