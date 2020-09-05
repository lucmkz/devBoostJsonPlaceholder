import React, {useEffect, useState} from "react";
import api from './services'
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    api.get('/todos').then(r => setTodos(r.data))
  }, [])

  return (
    <div className="App">
      {todos.map(i => (<><span>{i.title}</span><br></br></>))}
    </div>
  );
}
