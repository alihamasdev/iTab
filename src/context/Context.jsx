import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isForm, setIsForm] = useState(false);
  const [shortcuts, setShortcuts] = useState([]);
  const [name, setName] = useState('Ali Hamas');
  const [clockFormat, setClockFormat] = useState(12);

  const contextValue = { isForm, setIsForm, shortcuts, setShortcuts, name, clockFormat };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default function useApp() {
  return useContext(AppContext);
}
