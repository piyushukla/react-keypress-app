import { useKeypressCombos } from './ReactKeypress';

export const HelpContainer = () => {
  const combos = useKeypressCombos();
  return (
    <div style={{ padding: 10, border: '1px solid #ccc', marginTop: 10 }}>
      {combos.map((combo, i) => (
        <div key={combo}>Click or Press {combo} to toggle {String.fromCharCode(65 + i)}</div>
      ))}
    </div>
  );
};