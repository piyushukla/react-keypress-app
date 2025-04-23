
import { createContext, useContext, useState } from 'react';
import { useKeypressListener } from '../hooks/useKeypressListener';
import '../App.css'

const KeypressContext = createContext([]);

export const useKeypressCombos = () => useContext(KeypressContext);

export const ReactKeypress = ({ children, combos }) => {
  useKeypressListener(combos);
  const [activeCombos] = useState(combos.map(c => c.keys));

  return (
    <KeypressContext.Provider value={activeCombos}>
      {children}
    </KeypressContext.Provider>
  );
};

export const ReactKeypressItem = ({ onClick, children }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(prev => !prev);
    if (onClick) onClick();
  };

  return (
    <div
      onClick={handleClick}
      className={`keypress-item ${active ? 'active' : 'inactive'}`}
    >
      {children}
    </div>
  );
};
