//Hier wird der Context Provider von React verwendet, um prop drilling zu vermeiden
//Auch ist das eine sinvolle loesung, um Props von den Layout Componenten an die Child-COmponenten weiter zu geben
//https://www.techomoro.com/how-to-use-context-api-in-a-next-js-app/
//https://www.netlify.com/blog/2020/12/01/using-react-context-for-state-management-in-next.js/
import { createContext, useContext, useState } from 'react';
import contentObcejt from "../content/content";

const AppContext = createContext();

export function AppWrapper({ children }) {

  return (
    <AppContext.Provider value={{
      content: contentObcejt,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
