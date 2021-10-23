import React, {useState} from 'react';
import './Login.css';

export default function Login() {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

  const singin = ()=>{ 
  var url = 'http://localhost:4000/user/sign-up';
  var data = {"email":email,"password":password };
  console.log(data)
  fetch(url, {
    method: 'POST', 
    body: JSON.stringify(data), 
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
   .then(response => console.log('Success:', response))
   .catch(error => console.error('Error:', error));


 }


  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form >
        <label>
          <p>email</p>
          <input type="text" onChange={(event)=>setEmail(event.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={(event)=>setPassword(event.target.value)}/>
        </label>
        <div>
          <button onClick={singin}>Submit</button>
        </div>
      </form>
    </div>
  )
}