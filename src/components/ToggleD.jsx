import '../App.css';

export const ToggleD = ({ isMounted, toggleMount }) => (
    <button  className="toggle-button" onClick={toggleMount}>
      {isMounted ? 'Unmount D' : 'Mount D'}
    </button>
  );