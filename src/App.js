import './App.css';
import React, { useState } from 'react';

function App() {

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [age, setage] = useState('');
  const [desc, setdesc] = useState('');
  const [classno, setclassno] = useState('');

  const postData = async (e)=>{
    console.log("clicked");
    e.preventDefault();
    const res = await fetch(
      "https://fir-database-hosting-416d0-default-rtdb.firebaseio.com/demoreactform.json", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          age,
          desc,
          classno,
        }),
      }
      );

      if(res) alert("Data Stored");
      else alert("Error");

      setname(''); setemail(''); setage(''); setdesc(''); setclassno('');
  }

  return (
    <div className="App">
      <form method='POST'>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e)=>{setname(e.target.value)}}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e)=>{setemail(e.target.value)}}
        />
      </label>
      <br />
      <label>
        Class:
        <input
          type="number"
          name="class"
          value={classno}
          onChange={(e)=>{setclassno(e.target.value)}}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e)=>{setage(e.target.value)}}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={desc}
          onChange={(e)=>{setdesc(e.target.value)}}
        ></textarea>
      </label>
      <br />
      <button type="submit" onClick={postData}>Submit</button>
    </form>
    </div>
  );
}

export default App;
