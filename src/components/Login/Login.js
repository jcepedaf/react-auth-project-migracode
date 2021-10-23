import React from 'react';
import './Login.css';

export default function Login() {

  var url = 'http://localhost:4000/user/sign-in';
  var data = {"email":"pedro4@gmail.com","password":"123456" };
  
  fetch(url, {
    method: 'POST', 
    body: JSON.stringify(data), 
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form action="http://localhost:4000/user/sign-in" method="POST">
        <label>
          <p>email</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}