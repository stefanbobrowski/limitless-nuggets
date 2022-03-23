import React, { createContext, useReducer } from 'react';

const initialState = {
  text: 'Default text...',
  workers: [1, 2, 3, 4],
  minerals: 0,
};

export const Context = createContext(initialState);

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'UPDATE_TEXT':
        return { ...state, text: action.payload };
      case 'COLLECT_MINERALS':
        return { ...state, minerals: state.minerals + 50 };
      case 'BUILD_WORKER':
        return {
          ...state,
          minerals: state.minerals - 50,
          workers: [...state.workers, state.workers.length + 1],
        };
      default:
        return { ...state };
    }
  }, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
