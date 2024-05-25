import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isForm, setIsForm] = useState(false);
  const [shortcuts, setShortcuts] = useState([]);
  const [name, setName] = useState(null);
  const [clockFormat, setClockFormat] = useState(12);

  useEffect(() => {
    let savedName = localStorage.getItem('name');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const contextValue = { isForm, setIsForm, shortcuts, setShortcuts, name, setName, clockFormat };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default function useApp() {
  return useContext(AppContext);
}
