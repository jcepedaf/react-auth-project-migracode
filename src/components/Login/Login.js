import React, { useState } from "react";
import "./Login.css";
import Singup from "../Singup/Singup";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [update, setUpdate] = useState(true);
  //const [jwt,setJwt] = useState("");
  //console.log(jwt)

  const singin = (event) => {
    event.preventDefault();
    var url = "http://localhost:4000/user/sign-in";
    var data = { email: email, password: password };
    //console.log(data)
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => setToken(response.jwtToken))
      .catch((error) => console.error("Error:", error));
  };
  if (update) {
    return (
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form>
          <label>
            <p>email</p>
            <input
              type="text"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <div>
            <button onClick={singin}>Submit</button>
            <button onClick={() => setUpdate(false)}>SingUp</button>
          </div>
        </form>
      </div>
    );
  } else {
    return <Singup />;
  }
}
