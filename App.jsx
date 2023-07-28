import { useState,useEffect } from 'react'
import Axios from 'axios'

function App() {
  const [name, setName] = useState("");
  const [predictedAge,setPredictedAge] = useState(null);

  const fetchData = () =>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setPredictedAge(res.data);
    }
  );
  }

  return (
    <div className="App">
     <input 
     placeholder="ex.. Peter"
     onChange={(event) => {
     setName(event.target.value);  
     }}
     />
     <button onClick={fetchData}>Predict AGE</button> 
     <h3>Predicted NAME:{predictedAge?.name} </h3>
     <h3>Predicted AGE:{predictedAge?.age} </h3>
     <h3>Predicted COUNT:{predictedAge?.count} </h3>

    </div>
  )
}

export default App
