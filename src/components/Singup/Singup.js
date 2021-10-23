import React, {useState} from 'react';

export default function Singup() {
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

  const singUp2 = ()=>{ 
  var url = 'http://localhost:4000/user/sign-up';
  var data = {"name":name,"email":email,"password":password };
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
     <h1>please fill in your data</h1>
      <form >
        <label>
          <p>Name</p>
          <input type="text" onChange={(event)=>setName(event.target.value)}/>
        </label>
        <label>
          <p>email</p>
          <input type="text" onChange={(event)=>setEmail(event.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={(event)=>setPassword(event.target.value)}/>
        </label>
        <div>
          <button onClick={singUp2}>Submit</button>
        </div>
      </form>
    </div>
  );
}