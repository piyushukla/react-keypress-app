import { useEffect } from 'react';

export const useKeypressListener = (combos) => {
  useEffect(() => {
    const Keypress = window.Keypress;
    if (!Keypress) {
      console.error('Keypress.js is not loaded');
      return;
    }
    const listener = new Keypress.Listener();
    combos.forEach((combo) => {
      listener.simple_combo(combo.keys, combo.on_keydown);
      if (combo.on_keyup) {
        listener.register_combo({
          keys: combo.keys,
          on_keyup: combo.on_keyup,
        });
      }
    });
    return () => listener.reset();
  }, [combos]);
};