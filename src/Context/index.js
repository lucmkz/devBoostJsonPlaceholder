import React, {createContext, useState, useContext} from 'react'

export const ContextApp = createContext({});

export default function Context ({ children }) {
  const [test, setTest] = useState('INIT')

  

  return (
    <ContextApp.Provider value={{test, setTest}}>{ children }</ContextApp.Provider>
  )
}

export function useContextApp () {
  return { ...useContext(ContextApp) };
}
