// src/context/SelectedPostContext.js
import { createContext, useContext, useState } from 'react';

const SelectedPostContext = createContext();

export const useSelectedPost = () => {
  return useContext(SelectedPostContext);
};

export const SelectedPostProvider = ({ children }) => {
  const [selectedPostId, setSelectedPostId] = useState(null);

  return (
    <SelectedPostContext.Provider value={{ selectedPostId, setSelectedPostId }}>
      {children}
    </SelectedPostContext.Provider>
  );
};
