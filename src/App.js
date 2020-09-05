import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from './Style/Global'

import ContextProvider from './Context'

import Routes from './Routes';

import api from "./services";
import "./styles.css";

export default function App() {

  // useEffect(() => {
  //   api.get("/todos").then((r) => setTodos(r.data));
  // }, []);

  return (
    <Router>
      <ContextProvider>
        <Routes />
      </ContextProvider>

      <GlobalStyle />
    </Router>
  );
}
