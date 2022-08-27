import React,{useState} from 'react'
import { db } from "../firbase"

import Navbar from './Navbar'

const Home = () => {
  const [input, setInput] = useState();
  
  const getvalue = (event) => {
    setInput(event.target.value);
  };
  const addvalue = async () => {
    db.collection("Todo")
      .doc()
      .set({
        value: input,
      })
      .then(function () {
        alert("Value successfully written!");
        setInput("");
      })
      .catch(function (error) {
        console.error("Error writing Value: ", error);
      });
  }
  return (
    <>   
    <Navbar/>

    <div  className='center container'>
     <h1> 📝 Todo</h1>
     <div className="input-field">
      <input placeholder=" ✏️ Add todo ?" value={input}    onChange={getvalue} type='email'/><br></br>
    </div>
 
    <button type='submit' className='btn blue' onClick={addvalue}>Add Todo</button>
    </div>
     </>

  )
}

export default Home;