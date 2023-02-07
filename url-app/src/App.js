import React,{useState} from "react"
import axios from "axios"
import "./App.css"

function App() {
  const [long , Setlong] = useState("")
  const [short,Setshort] = useState("")
  function hello(){
      console.log("hello i am from hello function")
      // Setshort("hello function")
      axios.post("http://localhost:3002/url/shorten",{longUrl:long})
      .then((res)=>(Setshort(res.data.data.shortUrl)))
      .catch((err)=>console.log(err))
  }
  return (<>
    <div className="App">
      {/* hello this is jay */}
     <p>enter the long link</p>
     <textarea rows="10" value={long} style={{width:"600px",height:"200px"}} onChange={(e)=>Setlong(e.target.value)}></textarea>
     {/* <p>{long}</p> */}
     <br/><br/>
     <button onClick={hello}>click here</button>
     <p > {short}</p> 
    </div>
    </>
  );
}

export default App;
