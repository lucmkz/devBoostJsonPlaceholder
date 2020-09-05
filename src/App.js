import React, {useEffect} from "react";
import api from './services'
import "./styles.css";

export default function App() {

  useEffect(() => {
    api.get('/todos').then(r => console.log(r.data))
  }, [])

  return (
    <div className="App">
      <h1>Hi (:</h1>
    </div>
  );
}
