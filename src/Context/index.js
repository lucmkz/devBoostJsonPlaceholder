import React, { createContext, useState, useContext } from "react";

export const ContextApp = createContext({});

export default function Context({ children }) {
  const [usersList, setUsersList] = useState([]);

  return (
    <ContextApp.Provider value={{ usersList, setUsersList }}>
      {children}
    </ContextApp.Provider>
  );
}

export function useContextApp() {
  return { ...useContext(ContextApp) };
}
