import React, {useEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from './Style/Global'

import ContextProvider from './Context'

import Routes from './Routes';

import api from "./services";

export default function App() {

  useEffect(() => {

    // (async function myReq () {
    //   const resp = await api.get("/todos")
    //   console.log('resp', resp.data)
    // })()

  }, []);
  return (
    <Router>
      <ContextProvider>
        <Routes />
      </ContextProvider>

      <GlobalStyle />
    </Router>
  );
}
