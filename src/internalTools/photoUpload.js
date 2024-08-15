import React, { useState } from 'react';
import app from '../firebaseConfig';
import { getDatabase, ref, set, push } from 'firebase/database';


// Define a functional component named raceNames
export default function Write() {
  let [input1, setInput1] = useState("");
  let [input2, setInput2] = useState("");
  let [input3, setInput3] = useState("");

  const saveData = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "archives/photos"));
    set(newDocRef, {
      date: input1,
      raceName: input2,
      links: [input3]
    }).then( () => { 
      alert("Data Save Successfully") 
    }).catch((error) => {
      alert("error:", error.message);
    })
  }


  return (
    <>
  
      <input placeholder='Date' className="mr-5" type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
      <input placeholder='Race Name' className="mr-5" type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
      <input placeholder='Album Link' className="mr-5" type="text" value={input3} onChange={(e) => setInput3(e.target.value)} />

      <br />
      <button onClick={saveData} className="bg-green-500 mt-10">SAVE DATA</button>

    </>

  );
}