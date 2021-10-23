import React  from 'react';

export default function Home() {

  

  fetch("http://localhost:4000/user/sign-up", {
  "method": "POST",
  "headers": {
    "x-rapidapi-host": "fairestdb.p.rapidapi.com",
    "x-rapidapi-key": "apikey",
    "content-type": "application/json",
    "accept": "application/json"
  },
  "body": JSON.stringify({
    name: "pedro2",
    email: "pedro2@hotmail.com",
    password: "2345"	
  })
})
.then(response => response.json())
.then(response => {
  console.log(response)
})
.catch(err => {
  console.log(err);
});


    
   
  return(<h2>Home</h2>);

};
