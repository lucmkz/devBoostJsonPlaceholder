import React, { createContext, useState, useContext } from "react";

export const ContextApp = createContext({});

export default function Context({ children }) {
  const [usersList, setUsersList] = useState([]);
  const [usersTasks, setUsersTasks] = useState([]);

  return (
    <ContextApp.Provider
      value={{ usersList, setUsersList, usersTasks, setUsersTasks }}
    >
      {children}
    </ContextApp.Provider>
  );
}

export function useContextApp() {
  return { ...useContext(ContextApp) };
}
