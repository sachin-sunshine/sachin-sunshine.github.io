import { createContext, useContext, useState } from 'react';

const FeeContext = createContext();

export function FeeProvider({ children }) {
  const [unlocked, setUnlocked] = useState(() => localStorage.getItem('fees_unlocked') === 'true');

  const unlock = () => {
    localStorage.setItem('fees_unlocked', 'true');
    setUnlocked(true);
  };

  return <FeeContext.Provider value={{ unlocked, unlock }}>{children}</FeeContext.Provider>;
}

export const useFees = () => useContext(FeeContext);
