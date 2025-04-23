import { useState } from 'react';
import { ReactKeypress } from './components/ReactKeypress';
import { A } from './components/A';
import { B } from './components/B';
import { C } from './components/C';
import { D } from './components/D';
import { ToggleD } from './components/ToggleD';
import { HelpContainer } from './components/HelpContainer';
import './App.css';

export default function App() {
  const [visible, setVisible] = useState({ A: true, B: true, C: true, D: true });

  const toggle = (key) => {
    setVisible((prev) => ({ ...prev, [key]: prev[key] }));
  };

  const toggleDVisibility = () => {
    setVisible(prev => ({ ...prev, D: !prev.D }));
  };

  const combos = [
    { keys: 'shift a', on_keydown: () => toggle('A') },
    { keys: 'shift b', on_keydown: () => toggle('B') },
    { keys: 'shift c', on_keydown: () => toggle('C') },
    { keys: 'shift d', on_keydown: () => toggle('D') },
  ];

  return (
    <ReactKeypress combos={combos}>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '100vw', height: '80vh' }}>
        <A onClick={() => toggle('A')} />
        <B onClick={() => toggle('B')} />
        <C onClick={() => toggle('C')} />
        {visible.D ? <D onClick={() => toggle('D')} /> : <div className="placeholder-box"></div>}
      </div>
      <ToggleD isMounted={visible.D} toggleMount={toggleDVisibility} />
      <HelpContainer />
    </ReactKeypress>
  );
}