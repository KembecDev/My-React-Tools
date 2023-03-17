import React from 'react';
import ReactDOM from 'react-dom/client';
import DebouncedInput from './Tools/DebouncedInput';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <h2>Debouce</h2>
    <DebouncedInput />
  </React.StrictMode>
);