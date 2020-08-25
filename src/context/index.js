import React, { createContext, useReducer } from "react";

import AppReducer from "../AppReducer";

const initialState = {
  token: "",
  comments: []
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function updateToken(token) {
    dispatch({
      type: "UPDATE_TOKEN",
      payload: token
    });
  }
  function addComment(comment) {
    dispatch({
      type: "ADD_COMMENT",
      payload: comment
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        token: state.token,
        comments: state.comments,
        updateToken,
        addComment
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};