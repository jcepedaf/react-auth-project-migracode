import React from 'react';

export default function Singup() {
  return(
    <h2>Singup</h2>

    <div className="login-wrapper">
      <h1>please fill in your data</h1>
      <form>
        <label>
          <p>Name</p>
          <input type="text" />
        </label>
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
  );
}