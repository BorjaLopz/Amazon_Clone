import React, { createContext, useContext, useReducer } from "react";

//Preparamos dataLayer
export const StateContext = createContext();

//Bordeamos nuestra app y le suministramos el dataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Obtenemos informacion del dataLayer
export const useStateValue = () => useContext(StateContext);
