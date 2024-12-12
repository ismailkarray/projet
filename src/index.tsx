import React from 'react'; 
import ReactDOM from 'react-dom/client';  // React 18+ utilise `react-dom/client`
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Le type 'HTMLElement' est ajouté à l'élément récupéré via `document.getElementById('root')`
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // Type explicite
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Si vous souhaitez mesurer les performances, passez une fonction
reportWebVitals();
